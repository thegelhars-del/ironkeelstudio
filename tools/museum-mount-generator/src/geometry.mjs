export const DEFAULTS = Object.freeze({style:'printed',diameter:136,width:25,root:14,tip:7,standOff:0,backHeight:95,tipAngle:35,padThickness:2,padRecess:1,allowance:.5});
export const LIMITS = {diameter:[60,240],width:[25,45],root:[12,24],tip:[6,12],standOff:[0,30],backHeight:[90,120],tipAngle:[20,50],padThickness:[1,4],padRecess:[.5,2],allowance:[.2,1.2]};
const rad=d=>d*Math.PI/180;
export function parameters(input={}) {
  const p={...DEFAULTS,...input};
  if(!['printed','sculpted'].includes(p.style))throw Error('Unknown cradle style.');
  for(const [k,[lo,hi]] of Object.entries(LIMITS)) if(!Number.isFinite(p[k])||p[k]<lo||p[k]>hi) throw Error(`${k} must be between ${lo} and ${hi} mm${k==='tipAngle'?' (angle in degrees)':''}.`);
  if(p.padRecess>=p.padThickness) throw Error('Padding must be thicker than its recess.');
  if(p.tip>p.root) throw Error('Tip thickness must not exceed root thickness.');
  const R=p.diameter/2+p.allowance+p.padThickness-p.padRecess, root=p.root+p.standOff;
  const shift=((R+root)**2-(R+p.tip)**2)/(2*(R+root+(R+p.tip)*Math.cos(rad(p.tipAngle))));
  const C=9.92+root+R, Ro=R+root-shift, Co=C-shift;
  const edgeRadius=p.style==='sculpted'?Math.min(3,p.tip*.45):2;
  const padWidth=Math.min(18,p.width-2*edgeRadius-2*p.padRecess-.4);
  return {...p,R,C,Ro,Co,rootSection:root,padWidth,edgeRadius};
}
const signedArea=poly=>poly.reduce((a,p,i)=>{const q=poly[(i+1)%poly.length];return a+p[0]*q[1]-q[0]*p[1]},0)/2;
function ccw(poly){return signedArea(poly)<0?[...poly].reverse():poly;}
function sampleLoop(poly,count){
  poly=ccw(poly);let anchor=0;
  // Keep the start at the rounded back/top corner across offset contours.
  for(let i=1;i<poly.length;i++) if(poly[i][1]-poly[i][0]*.08>poly[anchor][1]-poly[anchor][0]*.08) anchor=i;
  poly=[...poly.slice(anchor),...poly.slice(0,anchor)];
  const len=[0];for(let i=0;i<poly.length;i++)len.push(len.at(-1)+Math.hypot(poly[(i+1)%poly.length][0]-poly[i][0],poly[(i+1)%poly.length][1]-poly[i][1]));
  let k=0;return Array.from({length:count},(_,i)=>{const at=i*len.at(-1)/count;while(k<len.length-2&&len[k+1]<at)k++;const t=(at-len[k])/(len[k+1]-len[k]),a=poly[k],b=poly[(k+1)%poly.length];return [a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t]});
}
export function buildMount(module,input={}){
  const p=parameters(input),{Manifold,CrossSection,Mesh}=module,dispose=[];const keep=x=>(dispose.push(x),x);
  const cross=poly=>keep(new CrossSection([ccw(poly)]));
  function loft(layers){
    const n=layers[0].points.length,vertices=[],tri=[];
    for(const l of layers)for(const [x,y] of l.points)vertices.push(x,y,l.z);
    for(let j=0;j<layers.length-1;j++)for(let i=0;i<n;i++){const k=(i+1)%n,a=j*n+i,b=j*n+k,c=(j+1)*n+k,d=(j+1)*n+i;tri.push(a,b,c,a,c,d);}
    for(const [a,b,c] of module.triangulate([layers[0].points]))tri.push(c,b,a);
    const off=(layers.length-1)*n;for(const [a,b,c] of module.triangulate([layers.at(-1).points]))tri.push(a+off,b+off,c+off);
    return keep(new Manifold(new Mesh({numProp:3,vertProperties:new Float32Array(vertices),triVerts:new Uint32Array(tri)})));
  }
  function band(r1,r2,start=225,sweep=75,n=120){
    const a=[];for(let i=0;i<=n;i++){const t=rad(start+sweep*i/n);a.push([p.C+r1*Math.cos(t),r1*Math.sin(t)])}
    for(let i=n;i>=0;i--){const t=rad(start+sweep*i/n);a.push([p.C+r2*Math.cos(t),r2*Math.sin(t)])}return ccw(a);
  }
  function output(solid,name){
    if(p.style==='sculpted')solid=keep(solid.simplify(.001));
    if(solid.status()!=='NoError'||solid.volume()<=0)throw Error(`Could not create a closed ${name}. Try less extreme dimensions.`);
    const mesh=solid.getMesh(),positions=new Float32Array(mesh.numVert*3||mesh.vertProperties.length/mesh.numProp*3);
    for(let i=0;i<positions.length/3;i++)for(let j=0;j<3;j++)positions[i*3+j]=mesh.vertProperties[i*mesh.numProp+j];
    return {name,positions,indices:new Uint32Array(mesh.triVerts),volume:solid.volume(),bounds:solid.boundingBox()};
  }
  try{
    const end=2*Math.PI-rad(p.tipAngle),outerEnd=Math.atan2(-(p.R+p.tip)*Math.sin(rad(p.tipAngle)),p.C+(p.R+p.tip)*Math.cos(rad(p.tipAngle))-p.Co)+2*Math.PI;
    let poly=[[9.92,p.backHeight],[9.92+p.rootSection,p.backHeight]];
    for(let i=0;i<=240;i++){const t=Math.PI+(end-Math.PI)*i/240;poly.push([p.C+p.R*Math.cos(t),p.R*Math.sin(t)])}
    for(let i=240;i>=0;i--){const t=Math.PI+(outerEnd-Math.PI)*i/240;poly.push([p.Co+p.Ro*Math.cos(t),p.Ro*Math.sin(t)])}
    const corner=p.style==='sculpted'?Math.min(p.tip*.47,p.root*.35):2;
    const raw=cross(poly),inset=keep(raw.offset(-corner,'Round',2,64)),outline=keep(inset.offset(corner,'Round',2,64));
    const count=1000;
    const outlineAt=d=>sampleLoop((d?keep(outline.offset(-d,'Round',2,48)):outline).toPolygons()[0],count);
    const layers=[{z:0,points:outlineAt(.6)},{z:.6,points:outlineAt(0)},{z:p.width-p.edgeRadius,points:outlineAt(0)}];
    for(let i=1;i<=12;i++){const t=i*Math.PI/24;layers.push({z:p.width-p.edgeRadius+p.edgeRadius*Math.sin(t),points:outlineAt(p.edgeRadius*(1-Math.cos(t)))});}
    let body=loft(layers);
    // Standard interface, independent of hull size. Profile local Y becomes -Z after rotation.
    const tongue=cross([[4.04,-11.45],[9.92,-8.07],[10.52,-8.07],[10.52,8.07],[9.92,8.07],[4.04,11.45]]);
    const male=keep(keep(tongue.extrude(78)).rotate([-90,0,0]).translate([0,6,p.width/2]));
    body=keep(body.add(male));
    const lower=(p.width-p.padWidth)/2,upper=(p.width+p.padWidth)/2;
    const pocket=loft([{z:lower,points:band(p.R-p.padThickness,p.R+p.padRecess)},{z:upper,points:band(p.R-p.padThickness,p.R+p.padRecess)},{z:upper+p.padRecess,points:band(p.R-p.padThickness,p.R)}]);
    body=keep(body.subtract(pocket));
    const pad=keep(cross(band(p.R-p.padThickness+p.padRecess,p.R+p.padRecess)).extrude(p.padWidth-.3).translate([0,0,lower+.15]));
    const w=p.width/2,slope=(22.9-16.14)/(2*5.88),topRoot=-8.07-slope*.8-.2;
    const shoeProfile=cross([[4.04,w],[9.12,w],[9.12,-topRoot],[4.04,11.65]]);
    const shoe=keep(keep(shoeProfile.extrude(77.5)).rotate([-90,0,0]).translate([0,6.25,p.width/2]));
    // Shoe profile is expressed as -worldZ relative to the cradle center.
    const model={cradle:output(body,'cradle'),pad:output(pad,'pad'),shoe:output(shoe,'support shoe'),params:p};
    return model;
  }finally{for(let i=dispose.length-1;i>=0;i--)dispose[i].delete();}
}

export function stl(meshes){
  const list=Array.isArray(meshes)?meshes:[meshes],count=list.reduce((n,m)=>n+m.indices.length/3,0),out=new ArrayBuffer(84+count*50),dv=new DataView(out);
  new Uint8Array(out).set(new TextEncoder().encode('Museum Mount Studio | millimeters | side down'));dv.setUint32(80,count,true);let at=84;
  for(const mesh of list){const v=mesh.positions;for(let i=0;i<mesh.indices.length;i+=3){const a=mesh.indices[i]*3,b=mesh.indices[i+1]*3,c=mesh.indices[i+2]*3;const u=[v[b]-v[a],v[b+1]-v[a+1],v[b+2]-v[a+2]],w=[v[c]-v[a],v[c+1]-v[a+1],v[c+2]-v[a+2]],n=[u[1]*w[2]-u[2]*w[1],u[2]*w[0]-u[0]*w[2],u[0]*w[1]-u[1]*w[0]],len=Math.hypot(...n)||1;for(let j=0;j<3;j++)dv.setFloat32(at+4*j,n[j]/len,true);for(let k=0;k<3;k++)for(let j=0;j<3;j++)dv.setFloat32(at+12+12*k+4*j,v[mesh.indices[i+k]*3+j],true);at+=50;}}
  return out;
}
