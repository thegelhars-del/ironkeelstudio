import test from 'node:test';
import assert from 'node:assert/strict';
import Module from 'manifold-3d';
import {buildMount,parameters,stl} from '../src/geometry.mjs';
const mod=await Module();mod.setup();
// Compare exact exported float32 coordinates; coarse rounding can merge distinct tiny vertices.
function checkClosed(mesh){
 const edges=new Map();const v=mesh.positions;const vertex=i=>[v[3*i],v[3*i+1],v[3*i+2]].join(',');
 for(let i=0;i<mesh.indices.length;i+=3){const ids=Array.from(mesh.indices.slice(i,i+3),vertex);for(let j=0;j<3;j++){const e=[ids[j],ids[(j+1)%3]].sort().join('|');edges.set(e,(edges.get(e)||0)+1);}}
 assert.ok([...edges.values()].every(n=>n===2),'all geometric edges shared by two triangles');
}
for(const diameter of [60,100,136,180,240])test(`Closed meshes at ${diameter} mm`,()=>{
 const m=buildMount(mod,{diameter});for(const key of ['cradle','pad','shoe']){assert.ok(m[key].volume>0);assert.ok(m[key].indices.length>0);checkClosed(m[key]);}
 assert.ok(Math.abs(m.cradle.bounds.min[2])<.001);assert.ok(Math.abs(m.shoe.bounds.min[2])<.001);assert.ok(Math.abs(m.cradle.bounds.max[2]-25)<.001);
});
test('Default volumes closely match Fusion V2',()=>{const m=buildMount(mod);assert.ok(Math.abs(m.cradle.volume/92090.3999-1)<.002);assert.ok(Math.abs(m.pad.volume/3220.5252-1)<.0001);assert.ok(Math.abs(m.shoe.volume/909.47378-1)<.00001);});
test('Advanced combinations remain closed',()=>{for(const params of [{diameter:60,root:12,tip:6,tipAngle:50},{diameter:240,width:45,root:24,tip:12,standOff:30,backHeight:120,padThickness:4,padRecess:2,tipAngle:20},{padThickness:3,padRecess:1.5,width:25}]){const m=buildMount(mod,params);checkClosed(m.cradle);assert.ok(Math.abs(m.shoe.bounds.min[0]-4.04)<1e-5);}});
test('Reject infeasible dimensions',()=>{for(const p of [{diameter:0},{diameter:NaN},{width:20},{padThickness:1,padRecess:1},{root:12,tip:20}])assert.throws(()=>parameters(p));});
test('Printable STL contains both aligned shells and millimeter coordinates',()=>{const m=buildMount(mod);const out=stl([m.cradle,m.shoe]);const dv=new DataView(out);assert.equal(dv.getUint32(80,true),(m.cradle.indices.length+m.shoe.indices.length)/3);assert.equal(out.byteLength,84+dv.getUint32(80,true)*50);let min=Infinity,max=-Infinity;for(let t=84;t<out.byteLength;t+=50)for(let j=0;j<3;j++){let z=dv.getFloat32(t+20+12*j,true);min=Math.min(min,z);max=Math.max(max,z);}assert.equal(min,0);assert.equal(max,25);});

test('Sculpted prototype meshes are closed at supported hull sizes',()=>{for(const diameter of [60,136,240]){const m=buildMount(mod,{style:'sculpted',diameter,width:36,root:18,tip:6});for(const key of ['cradle','pad','shoe']){checkClosed(m[key]);assert.ok(m[key].volume>0);}assert.ok(m.params.edgeRadius>2);assert.ok(Math.abs(m.cradle.bounds.max[2]-36)<.001);}});
