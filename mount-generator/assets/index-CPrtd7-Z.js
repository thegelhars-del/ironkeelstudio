(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const ma="180",mi={ROTATE:0,DOLLY:1,PAN:2},fi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zl=0,Xa=1,Hl=2,tl=1,Vl=2,fn=3,Rn=0,we=1,Qe=2,Tn=0,_i=1,Ya=2,qa=3,ja=4,Gl=5,Hn=100,Wl=101,Xl=102,Yl=103,ql=104,jl=200,Zl=201,Kl=202,$l=203,Es=204,bs=205,Jl=206,Ql=207,tc=208,ec=209,nc=210,ic=211,rc=212,sc=213,ac=214,ws=0,Ts=1,As=2,vi=3,Rs=4,Cs=5,Ps=6,Ds=7,_a=0,oc=1,lc=2,An=0,cc=1,hc=2,uc=3,el=4,dc=5,fc=6,pc=7,nl=300,xi=301,yi=302,Ls=303,Is=304,Fr=306,Us=1e3,Gn=1001,Ns=1002,Fe=1003,mc=1004,er=1005,en=1006,Vr=1007,Wn=1008,sn=1009,il=1010,rl=1011,Wi=1012,ga=1013,Xn=1014,nn=1015,$i=1016,va=1017,xa=1018,Xi=1020,sl=35902,al=35899,ol=1021,ll=1022,qe=1023,Yi=1026,qi=1027,ya=1028,Sa=1029,cl=1030,Ma=1031,Ea=1033,Tr=33776,Ar=33777,Rr=33778,Cr=33779,Fs=35840,Os=35841,Bs=35842,ks=35843,zs=36196,Hs=37492,Vs=37496,Gs=37808,Ws=37809,Xs=37810,Ys=37811,qs=37812,js=37813,Zs=37814,Ks=37815,$s=37816,Js=37817,Qs=37818,ta=37819,ea=37820,na=37821,ia=36492,ra=36494,sa=36495,aa=36283,oa=36284,la=36285,ca=36286,_c=3200,gc=3201,ba=0,vc=1,bn="",Pe="srgb",Si="srgb-linear",Ir="linear",ee="srgb",$n=7680,Za=519,xc=512,yc=513,Sc=514,hl=515,Mc=516,Ec=517,bc=518,wc=519,Ka=35044,$a="300 es",rn=2e3,Ur=2001;class jn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pr=Math.PI/180,ha=180/Math.PI;function Ji(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ye[i&255]+ye[i>>8&255]+ye[i>>16&255]+ye[i>>24&255]+"-"+ye[t&255]+ye[t>>8&255]+"-"+ye[t>>16&15|64]+ye[t>>24&255]+"-"+ye[e&63|128]+ye[e>>8&255]+"-"+ye[e>>16&255]+ye[e>>24&255]+ye[n&255]+ye[n>>8&255]+ye[n>>16&255]+ye[n>>24&255]).toLowerCase()}function Yt(i,t,e){return Math.max(t,Math.min(e,i))}function Tc(i,t){return(i%t+t)%t}function Gr(i,t,e){return(1-e)*i+e*t}function Di(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Re(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ac={DEG2RAD:Pr};class Ht{constructor(t=0,e=0){Ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yn{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let c=n[r+0],l=n[r+1],d=n[r+2],f=n[r+3];const m=s[o+0],u=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=d,t[e+3]=f;return}if(a===1){t[e+0]=m,t[e+1]=u,t[e+2]=g,t[e+3]=_;return}if(f!==_||c!==m||l!==u||d!==g){let p=1-a;const h=c*m+l*u+d*g+f*_,y=h>=0?1:-1,b=1-h*h;if(b>Number.EPSILON){const A=Math.sqrt(b),C=Math.atan2(A,h*y);p=Math.sin(p*C)/A,a=Math.sin(a*C)/A}const S=a*y;if(c=c*p+m*S,l=l*p+u*S,d=d*p+g*S,f=f*p+_*S,p===1-a){const A=1/Math.sqrt(c*c+l*l+d*d+f*f);c*=A,l*=A,d*=A,f*=A}}t[e]=c,t[e+1]=l,t[e+2]=d,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],c=n[r+1],l=n[r+2],d=n[r+3],f=s[o],m=s[o+1],u=s[o+2],g=s[o+3];return t[e]=a*g+d*f+c*u-l*m,t[e+1]=c*g+d*m+l*f-a*u,t[e+2]=l*g+d*u+a*m-c*f,t[e+3]=d*g-a*f-c*m-l*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),d=a(r/2),f=a(s/2),m=c(n/2),u=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=m*d*f+l*u*g,this._y=l*u*f-m*d*g,this._z=l*d*g+m*u*f,this._w=l*d*f-m*u*g;break;case"YXZ":this._x=m*d*f+l*u*g,this._y=l*u*f-m*d*g,this._z=l*d*g-m*u*f,this._w=l*d*f+m*u*g;break;case"ZXY":this._x=m*d*f-l*u*g,this._y=l*u*f+m*d*g,this._z=l*d*g+m*u*f,this._w=l*d*f-m*u*g;break;case"ZYX":this._x=m*d*f-l*u*g,this._y=l*u*f+m*d*g,this._z=l*d*g-m*u*f,this._w=l*d*f+m*u*g;break;case"YZX":this._x=m*d*f+l*u*g,this._y=l*u*f+m*d*g,this._z=l*d*g-m*u*f,this._w=l*d*f-m*u*g;break;case"XZY":this._x=m*d*f-l*u*g,this._y=l*u*f-m*d*g,this._z=l*d*g+m*u*f,this._w=l*d*f+m*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],d=e[6],f=e[10],m=n+a+f;if(m>0){const u=.5/Math.sqrt(m+1);this._w=.25/u,this._x=(d-c)*u,this._y=(s-l)*u,this._z=(o-r)*u}else if(n>a&&n>f){const u=2*Math.sqrt(1+n-a-f);this._w=(d-c)/u,this._x=.25*u,this._y=(r+o)/u,this._z=(s+l)/u}else if(a>f){const u=2*Math.sqrt(1+a-n-f);this._w=(s-l)/u,this._x=(r+o)/u,this._y=.25*u,this._z=(c+d)/u}else{const u=2*Math.sqrt(1+f-n-a);this._w=(o-r)/u,this._x=(s+l)/u,this._y=(c+d)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,d=e._w;return this._x=n*d+o*a+r*l-s*c,this._y=r*d+o*c+s*a-n*l,this._z=s*d+o*l+n*c-r*a,this._w=o*d-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const u=1-e;return this._w=u*o+e*this._w,this._x=u*n+e*this._x,this._y=u*r+e*this._y,this._z=u*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,a),f=Math.sin((1-e)*d)/l,m=Math.sin(e*d)/l;return this._w=o*f+this._w*m,this._x=n*f+this._x*m,this._y=r*f+this._y*m,this._z=s*f+this._z*m,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(t=0,e=0,n=0){$.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ja.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ja.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*n),d=2*(a*e-s*r),f=2*(s*n-o*e);return this.x=e+c*l+o*f-a*d,this.y=n+c*d+a*l-s*f,this.z=r+c*f+s*d-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Wr.copy(this).projectOnVector(t),this.sub(Wr)}reflect(t){return this.sub(Wr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wr=new $,Ja=new Yn;class Wt{constructor(t,e,n,r,s,o,a,c,l){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l)}set(t,e,n,r,s,o,a,c,l){const d=this.elements;return d[0]=t,d[1]=r,d[2]=a,d[3]=e,d[4]=s,d[5]=c,d[6]=n,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],d=n[4],f=n[7],m=n[2],u=n[5],g=n[8],_=r[0],p=r[3],h=r[6],y=r[1],b=r[4],S=r[7],A=r[2],C=r[5],D=r[8];return s[0]=o*_+a*y+c*A,s[3]=o*p+a*b+c*C,s[6]=o*h+a*S+c*D,s[1]=l*_+d*y+f*A,s[4]=l*p+d*b+f*C,s[7]=l*h+d*S+f*D,s[2]=m*_+u*y+g*A,s[5]=m*p+u*b+g*C,s[8]=m*h+u*S+g*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],d=t[8];return e*o*d-e*a*l-n*s*d+n*a*c+r*s*l-r*o*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],d=t[8],f=d*o-a*l,m=a*c-d*s,u=l*s-o*c,g=e*f+n*m+r*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(r*l-d*n)*_,t[2]=(a*n-r*o)*_,t[3]=m*_,t[4]=(d*e-r*c)*_,t[5]=(r*s-a*e)*_,t[6]=u*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Xr.makeScale(t,e)),this}rotate(t){return this.premultiply(Xr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Xr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Xr=new Wt;function ul(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Nr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Rc(){const i=Nr("canvas");return i.style.display="block",i}const Qa={};function ji(i){i in Qa||(Qa[i]=!0,console.warn(i))}function Cc(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const to=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eo=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pc(){const i={enabled:!0,workingColorSpace:Si,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ee&&(r.r=pn(r.r),r.g=pn(r.g),r.b=pn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ee&&(r.r=gi(r.r),r.g=gi(r.g),r.b=gi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===bn?Ir:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ji("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ji("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Si]:{primaries:t,whitePoint:n,transfer:Ir,toXYZ:to,fromXYZ:eo,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:t,whitePoint:n,transfer:ee,toXYZ:to,fromXYZ:eo,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}}),i}const $t=Pc();function pn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Jn;class Dc{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Jn===void 0&&(Jn=Nr("canvas")),Jn.width=t.width,Jn.height=t.height;const r=Jn.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Jn}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Nr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=pn(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(pn(e[n]/255)*255):e[n]=pn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Lc=0;class wa{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lc++}),this.uuid=Ji(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Yr(r[o].image)):s.push(Yr(r[o]))}else s=Yr(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Yr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Dc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ic=0;const qr=new $;class Te extends jn{constructor(t=Te.DEFAULT_IMAGE,e=Te.DEFAULT_MAPPING,n=Gn,r=Gn,s=en,o=Wn,a=qe,c=sn,l=Te.DEFAULT_ANISOTROPY,d=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ic++}),this.uuid=Ji(),this.name="",this.source=new wa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(qr).x}get height(){return this.source.getSize(qr).y}get depth(){return this.source.getSize(qr).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Us:t.x=t.x-Math.floor(t.x);break;case Gn:t.x=t.x<0?0:1;break;case Ns:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Us:t.y=t.y-Math.floor(t.y);break;case Gn:t.y=t.y<0?0:1;break;case Ns:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Te.DEFAULT_IMAGE=null;Te.DEFAULT_MAPPING=nl;Te.DEFAULT_ANISOTROPY=1;class ie{constructor(t=0,e=0,n=0,r=1){ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,l=c[0],d=c[4],f=c[8],m=c[1],u=c[5],g=c[9],_=c[2],p=c[6],h=c[10];if(Math.abs(d-m)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(d+m)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+u+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(l+1)/2,S=(u+1)/2,A=(h+1)/2,C=(d+m)/4,D=(f+_)/4,U=(g+p)/4;return b>S&&b>A?b<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(b),r=C/n,s=D/n):S>A?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=C/r,s=U/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=D/s,r=U/s),this.set(n,r,s,e),this}let y=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(m-d)*(m-d));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(f-_)/y,this.z=(m-d)/y,this.w=Math.acos((l+u+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this.w=Yt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this.w=Yt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Uc extends jn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e);const r={width:t,height:e,depth:n.depth},s=new Te(r);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new wa(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qn extends Uc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class dl extends Te{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nc extends Te{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pn{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ve.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ve.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ve.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ve):Ve.fromBufferAttribute(s,o),Ve.applyMatrix4(t.matrixWorld),this.expandByPoint(Ve);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),nr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),nr.copy(n.boundingBox)),nr.applyMatrix4(t.matrixWorld),this.union(nr)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ve),Ve.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Li),ir.subVectors(this.max,Li),Qn.subVectors(t.a,Li),ti.subVectors(t.b,Li),ei.subVectors(t.c,Li),mn.subVectors(ti,Qn),_n.subVectors(ei,ti),In.subVectors(Qn,ei);let e=[0,-mn.z,mn.y,0,-_n.z,_n.y,0,-In.z,In.y,mn.z,0,-mn.x,_n.z,0,-_n.x,In.z,0,-In.x,-mn.y,mn.x,0,-_n.y,_n.x,0,-In.y,In.x,0];return!jr(e,Qn,ti,ei,ir)||(e=[1,0,0,0,1,0,0,0,1],!jr(e,Qn,ti,ei,ir))?!1:(rr.crossVectors(mn,_n),e=[rr.x,rr.y,rr.z],jr(e,Qn,ti,ei,ir))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ve).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ve).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(on[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),on[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),on[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),on[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),on[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),on[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),on[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),on[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(on),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const on=[new $,new $,new $,new $,new $,new $,new $,new $],Ve=new $,nr=new Pn,Qn=new $,ti=new $,ei=new $,mn=new $,_n=new $,In=new $,Li=new $,ir=new $,rr=new $,Un=new $;function jr(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Un.fromArray(i,s);const a=r.x*Math.abs(Un.x)+r.y*Math.abs(Un.y)+r.z*Math.abs(Un.z),c=t.dot(Un),l=e.dot(Un),d=n.dot(Un);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}const Fc=new Pn,Ii=new $,Zr=new $;class bi{constructor(t=new $,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Fc.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ii.subVectors(t,this.center);const e=Ii.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Ii,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Zr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ii.copy(t.center).add(Zr)),this.expandByPoint(Ii.copy(t.center).sub(Zr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ln=new $,Kr=new $,sr=new $,gn=new $,$r=new $,ar=new $,Jr=new $;class fl{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ln.copy(this.origin).addScaledVector(this.direction,e),ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Kr.copy(t).add(e).multiplyScalar(.5),sr.copy(e).sub(t).normalize(),gn.copy(this.origin).sub(Kr);const s=t.distanceTo(e)*.5,o=-this.direction.dot(sr),a=gn.dot(this.direction),c=-gn.dot(sr),l=gn.lengthSq(),d=Math.abs(1-o*o);let f,m,u,g;if(d>0)if(f=o*c-a,m=o*a-c,g=s*d,f>=0)if(m>=-g)if(m<=g){const _=1/d;f*=_,m*=_,u=f*(f+o*m+2*a)+m*(o*f+m+2*c)+l}else m=s,f=Math.max(0,-(o*m+a)),u=-f*f+m*(m+2*c)+l;else m=-s,f=Math.max(0,-(o*m+a)),u=-f*f+m*(m+2*c)+l;else m<=-g?(f=Math.max(0,-(-o*s+a)),m=f>0?-s:Math.min(Math.max(-s,-c),s),u=-f*f+m*(m+2*c)+l):m<=g?(f=0,m=Math.min(Math.max(-s,-c),s),u=m*(m+2*c)+l):(f=Math.max(0,-(o*s+a)),m=f>0?s:Math.min(Math.max(-s,-c),s),u=-f*f+m*(m+2*c)+l);else m=o>0?-s:s,f=Math.max(0,-(o*m+a)),u=-f*f+m*(m+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Kr).addScaledVector(sr,m),u}intersectSphere(t,e){ln.subVectors(t.center,this.origin);const n=ln.dot(this.direction),r=ln.dot(ln)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,c;const l=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,m=this.origin;return l>=0?(n=(t.min.x-m.x)*l,r=(t.max.x-m.x)*l):(n=(t.max.x-m.x)*l,r=(t.min.x-m.x)*l),d>=0?(s=(t.min.y-m.y)*d,o=(t.max.y-m.y)*d):(s=(t.max.y-m.y)*d,o=(t.min.y-m.y)*d),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-m.z)*f,c=(t.max.z-m.z)*f):(a=(t.max.z-m.z)*f,c=(t.min.z-m.z)*f),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,ln)!==null}intersectTriangle(t,e,n,r,s){$r.subVectors(e,t),ar.subVectors(n,t),Jr.crossVectors($r,ar);let o=this.direction.dot(Jr),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gn.subVectors(this.origin,t);const c=a*this.direction.dot(ar.crossVectors(gn,ar));if(c<0)return null;const l=a*this.direction.dot($r.cross(gn));if(l<0||c+l>o)return null;const d=-a*gn.dot(Jr);return d<0?null:this.at(d/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,n,r,s,o,a,c,l,d,f,m,u,g,_,p){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l,d,f,m,u,g,_,p)}set(t,e,n,r,s,o,a,c,l,d,f,m,u,g,_,p){const h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=c,h[2]=l,h[6]=d,h[10]=f,h[14]=m,h[3]=u,h[7]=g,h[11]=_,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/ni.setFromMatrixColumn(t,0).length(),s=1/ni.setFromMatrixColumn(t,1).length(),o=1/ni.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const m=o*d,u=o*f,g=a*d,_=a*f;e[0]=c*d,e[4]=-c*f,e[8]=l,e[1]=u+g*l,e[5]=m-_*l,e[9]=-a*c,e[2]=_-m*l,e[6]=g+u*l,e[10]=o*c}else if(t.order==="YXZ"){const m=c*d,u=c*f,g=l*d,_=l*f;e[0]=m+_*a,e[4]=g*a-u,e[8]=o*l,e[1]=o*f,e[5]=o*d,e[9]=-a,e[2]=u*a-g,e[6]=_+m*a,e[10]=o*c}else if(t.order==="ZXY"){const m=c*d,u=c*f,g=l*d,_=l*f;e[0]=m-_*a,e[4]=-o*f,e[8]=g+u*a,e[1]=u+g*a,e[5]=o*d,e[9]=_-m*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const m=o*d,u=o*f,g=a*d,_=a*f;e[0]=c*d,e[4]=g*l-u,e[8]=m*l+_,e[1]=c*f,e[5]=_*l+m,e[9]=u*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const m=o*c,u=o*l,g=a*c,_=a*l;e[0]=c*d,e[4]=_-m*f,e[8]=g*f+u,e[1]=f,e[5]=o*d,e[9]=-a*d,e[2]=-l*d,e[6]=u*f+g,e[10]=m-_*f}else if(t.order==="XZY"){const m=o*c,u=o*l,g=a*c,_=a*l;e[0]=c*d,e[4]=-f,e[8]=l*d,e[1]=m*f+_,e[5]=o*d,e[9]=u*f-g,e[2]=g*f-u,e[6]=a*d,e[10]=_*f+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Oc,t,Bc)}lookAt(t,e,n){const r=this.elements;return Ie.subVectors(t,e),Ie.lengthSq()===0&&(Ie.z=1),Ie.normalize(),vn.crossVectors(n,Ie),vn.lengthSq()===0&&(Math.abs(n.z)===1?Ie.x+=1e-4:Ie.z+=1e-4,Ie.normalize(),vn.crossVectors(n,Ie)),vn.normalize(),or.crossVectors(Ie,vn),r[0]=vn.x,r[4]=or.x,r[8]=Ie.x,r[1]=vn.y,r[5]=or.y,r[9]=Ie.y,r[2]=vn.z,r[6]=or.z,r[10]=Ie.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],d=n[1],f=n[5],m=n[9],u=n[13],g=n[2],_=n[6],p=n[10],h=n[14],y=n[3],b=n[7],S=n[11],A=n[15],C=r[0],D=r[4],U=r[8],E=r[12],w=r[1],N=r[5],T=r[9],F=r[13],v=r[2],z=r[6],Y=r[10],G=r[14],q=r[3],Q=r[7],ct=r[11],V=r[15];return s[0]=o*C+a*w+c*v+l*q,s[4]=o*D+a*N+c*z+l*Q,s[8]=o*U+a*T+c*Y+l*ct,s[12]=o*E+a*F+c*G+l*V,s[1]=d*C+f*w+m*v+u*q,s[5]=d*D+f*N+m*z+u*Q,s[9]=d*U+f*T+m*Y+u*ct,s[13]=d*E+f*F+m*G+u*V,s[2]=g*C+_*w+p*v+h*q,s[6]=g*D+_*N+p*z+h*Q,s[10]=g*U+_*T+p*Y+h*ct,s[14]=g*E+_*F+p*G+h*V,s[3]=y*C+b*w+S*v+A*q,s[7]=y*D+b*N+S*z+A*Q,s[11]=y*U+b*T+S*Y+A*ct,s[15]=y*E+b*F+S*G+A*V,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],d=t[2],f=t[6],m=t[10],u=t[14],g=t[3],_=t[7],p=t[11],h=t[15];return g*(+s*c*f-r*l*f-s*a*m+n*l*m+r*a*u-n*c*u)+_*(+e*c*u-e*l*m+s*o*m-r*o*u+r*l*d-s*c*d)+p*(+e*l*f-e*a*u-s*o*f+n*o*u+s*a*d-n*l*d)+h*(-r*a*d-e*c*f+e*a*m+r*o*f-n*o*m+n*c*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],d=t[8],f=t[9],m=t[10],u=t[11],g=t[12],_=t[13],p=t[14],h=t[15],y=f*p*l-_*m*l+_*c*u-a*p*u-f*c*h+a*m*h,b=g*m*l-d*p*l-g*c*u+o*p*u+d*c*h-o*m*h,S=d*_*l-g*f*l+g*a*u-o*_*u-d*a*h+o*f*h,A=g*f*c-d*_*c-g*a*m+o*_*m+d*a*p-o*f*p,C=e*y+n*b+r*S+s*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/C;return t[0]=y*D,t[1]=(_*m*s-f*p*s-_*r*u+n*p*u+f*r*h-n*m*h)*D,t[2]=(a*p*s-_*c*s+_*r*l-n*p*l-a*r*h+n*c*h)*D,t[3]=(f*c*s-a*m*s-f*r*l+n*m*l+a*r*u-n*c*u)*D,t[4]=b*D,t[5]=(d*p*s-g*m*s+g*r*u-e*p*u-d*r*h+e*m*h)*D,t[6]=(g*c*s-o*p*s-g*r*l+e*p*l+o*r*h-e*c*h)*D,t[7]=(o*m*s-d*c*s+d*r*l-e*m*l-o*r*u+e*c*u)*D,t[8]=S*D,t[9]=(g*f*s-d*_*s-g*n*u+e*_*u+d*n*h-e*f*h)*D,t[10]=(o*_*s-g*a*s+g*n*l-e*_*l-o*n*h+e*a*h)*D,t[11]=(d*a*s-o*f*s-d*n*l+e*f*l+o*n*u-e*a*u)*D,t[12]=A*D,t[13]=(d*_*r-g*f*r+g*n*m-e*_*m-d*n*p+e*f*p)*D,t[14]=(g*a*r-o*_*r-g*n*c+e*_*c+o*n*p-e*a*p)*D,t[15]=(o*f*r-d*a*r+d*n*c-e*f*c-o*n*m+e*a*m)*D,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,d=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,d*a+n,d*c-r*o,0,l*c-r*a,d*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,d=o+o,f=a+a,m=s*l,u=s*d,g=s*f,_=o*d,p=o*f,h=a*f,y=c*l,b=c*d,S=c*f,A=n.x,C=n.y,D=n.z;return r[0]=(1-(_+h))*A,r[1]=(u+S)*A,r[2]=(g-b)*A,r[3]=0,r[4]=(u-S)*C,r[5]=(1-(m+h))*C,r[6]=(p+y)*C,r[7]=0,r[8]=(g+b)*D,r[9]=(p-y)*D,r[10]=(1-(m+_))*D,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=ni.set(r[0],r[1],r[2]).length();const o=ni.set(r[4],r[5],r[6]).length(),a=ni.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Ge.copy(this);const l=1/s,d=1/o,f=1/a;return Ge.elements[0]*=l,Ge.elements[1]*=l,Ge.elements[2]*=l,Ge.elements[4]*=d,Ge.elements[5]*=d,Ge.elements[6]*=d,Ge.elements[8]*=f,Ge.elements[9]*=f,Ge.elements[10]*=f,e.setFromRotationMatrix(Ge),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=rn,c=!1){const l=this.elements,d=2*s/(e-t),f=2*s/(n-r),m=(e+t)/(e-t),u=(n+r)/(n-r);let g,_;if(c)g=s/(o-s),_=o*s/(o-s);else if(a===rn)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Ur)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=m,l[12]=0,l[1]=0,l[5]=f,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=rn,c=!1){const l=this.elements,d=2/(e-t),f=2/(n-r),m=-(e+t)/(e-t),u=-(n+r)/(n-r);let g,_;if(c)g=1/(o-s),_=o/(o-s);else if(a===rn)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===Ur)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=0,l[12]=m,l[1]=0,l[5]=f,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ni=new $,Ge=new oe,Oc=new $(0,0,0),Bc=new $(1,1,1),vn=new $,or=new $,Ie=new $,no=new oe,io=new Yn;class je{constructor(t=0,e=0,n=0,r=je.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],d=r[9],f=r[2],m=r[6],u=r[10];switch(e){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,u),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(m,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Yt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(m,u),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return no.makeRotationFromQuaternion(t),this.setFromRotationMatrix(no,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return io.setFromEuler(this),this.setFromQuaternion(io,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}je.DEFAULT_ORDER="XYZ";class pl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let kc=0;const ro=new $,ii=new Yn,cn=new oe,lr=new $,Ui=new $,zc=new $,Hc=new Yn,so=new $(1,0,0),ao=new $(0,1,0),oo=new $(0,0,1),lo={type:"added"},Vc={type:"removed"},ri={type:"childadded",child:null},Qr={type:"childremoved",child:null};class xe extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kc++}),this.uuid=Ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new $,e=new je,n=new Yn,r=new $(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new oe},normalMatrix:{value:new Wt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ii.setFromAxisAngle(t,e),this.quaternion.multiply(ii),this}rotateOnWorldAxis(t,e){return ii.setFromAxisAngle(t,e),this.quaternion.premultiply(ii),this}rotateX(t){return this.rotateOnAxis(so,t)}rotateY(t){return this.rotateOnAxis(ao,t)}rotateZ(t){return this.rotateOnAxis(oo,t)}translateOnAxis(t,e){return ro.copy(t).applyQuaternion(this.quaternion),this.position.add(ro.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(so,t)}translateY(t){return this.translateOnAxis(ao,t)}translateZ(t){return this.translateOnAxis(oo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?lr.copy(t):lr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ui.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(Ui,lr,this.up):cn.lookAt(lr,Ui,this.up),this.quaternion.setFromRotationMatrix(cn),r&&(cn.extractRotation(r.matrixWorld),ii.setFromRotationMatrix(cn),this.quaternion.premultiply(ii.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(lo),ri.child=t,this.dispatchEvent(ri),ri.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vc),Qr.child=t,this.dispatchEvent(Qr),Qr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(cn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(lo),ri.child=t,this.dispatchEvent(ri),ri.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ui,t,zc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ui,Hc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const f=c[l];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),d=o(t.images),f=o(t.shapes),m=o(t.skeletons),u=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),m.length>0&&(n.skeletons=m),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const c=[];for(const l in a){const d=a[l];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}xe.DEFAULT_UP=new $(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const We=new $,hn=new $,ts=new $,un=new $,si=new $,ai=new $,co=new $,es=new $,ns=new $,is=new $,rs=new ie,ss=new ie,as=new ie;class Ye{constructor(t=new $,e=new $,n=new $){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),We.subVectors(t,e),r.cross(We);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){We.subVectors(r,e),hn.subVectors(n,e),ts.subVectors(t,e);const o=We.dot(We),a=We.dot(hn),c=We.dot(ts),l=hn.dot(hn),d=hn.dot(ts),f=o*l-a*a;if(f===0)return s.set(0,0,0),null;const m=1/f,u=(l*c-a*d)*m,g=(o*d-a*c)*m;return s.set(1-u-g,g,u)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,un)===null?!1:un.x>=0&&un.y>=0&&un.x+un.y<=1}static getInterpolation(t,e,n,r,s,o,a,c){return this.getBarycoord(t,e,n,r,un)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,un.x),c.addScaledVector(o,un.y),c.addScaledVector(a,un.z),c)}static getInterpolatedAttribute(t,e,n,r,s,o){return rs.setScalar(0),ss.setScalar(0),as.setScalar(0),rs.fromBufferAttribute(t,e),ss.fromBufferAttribute(t,n),as.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(rs,s.x),o.addScaledVector(ss,s.y),o.addScaledVector(as,s.z),o}static isFrontFacing(t,e,n,r){return We.subVectors(n,e),hn.subVectors(t,e),We.cross(hn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return We.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),We.cross(hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ye.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ye.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Ye.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Ye.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ye.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;si.subVectors(r,n),ai.subVectors(s,n),es.subVectors(t,n);const c=si.dot(es),l=ai.dot(es);if(c<=0&&l<=0)return e.copy(n);ns.subVectors(t,r);const d=si.dot(ns),f=ai.dot(ns);if(d>=0&&f<=d)return e.copy(r);const m=c*f-d*l;if(m<=0&&c>=0&&d<=0)return o=c/(c-d),e.copy(n).addScaledVector(si,o);is.subVectors(t,s);const u=si.dot(is),g=ai.dot(is);if(g>=0&&u<=g)return e.copy(s);const _=u*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(ai,a);const p=d*g-u*f;if(p<=0&&f-d>=0&&u-g>=0)return co.subVectors(s,r),a=(f-d)/(f-d+(u-g)),e.copy(r).addScaledVector(co,a);const h=1/(p+_+m);return o=_*h,a=m*h,e.copy(n).addScaledVector(si,o).addScaledVector(ai,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ml={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xn={h:0,s:0,l:0},cr={h:0,s:0,l:0};function os(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=$t.workingColorSpace){if(t=Tc(t,1),e=Yt(e,0,1),n=Yt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=os(o,s,t+1/3),this.g=os(o,s,t),this.b=os(o,s,t-1/3)}return $t.colorSpaceToWorking(this,r),this}setStyle(t,e=Pe){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){const n=ml[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pn(t.r),this.g=pn(t.g),this.b=pn(t.b),this}copyLinearToSRGB(t){return this.r=gi(t.r),this.g=gi(t.g),this.b=gi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return $t.workingToColorSpace(Se.copy(this),t),Math.round(Yt(Se.r*255,0,255))*65536+Math.round(Yt(Se.g*255,0,255))*256+Math.round(Yt(Se.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.workingToColorSpace(Se.copy(this),e);const n=Se.r,r=Se.g,s=Se.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,l;const d=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=d<=.5?f/(o+a):f/(2-o-a),o){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=d,t}getRGB(t,e=$t.workingColorSpace){return $t.workingToColorSpace(Se.copy(this),e),t.r=Se.r,t.g=Se.g,t.b=Se.b,t}getStyle(t=Pe){$t.workingToColorSpace(Se.copy(this),t);const e=Se.r,n=Se.g,r=Se.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(xn),this.setHSL(xn.h+t,xn.s+e,xn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(xn),t.getHSL(cr);const n=Gr(xn.h,cr.h,e),r=Gr(xn.s,cr.s,e),s=Gr(xn.l,cr.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Se=new qt;qt.NAMES=ml;let Gc=0;class wi extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gc++}),this.uuid=Ji(),this.name="",this.type="Material",this.blending=_i,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Es,this.blendDst=bs,this.blendEquation=Hn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Za,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$n,this.stencilZFail=$n,this.stencilZPass=$n,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_i&&(n.blending=this.blending),this.side!==Rn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Es&&(n.blendSrc=this.blendSrc),this.blendDst!==bs&&(n.blendDst=this.blendDst),this.blendEquation!==Hn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Za&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$n&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$n&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$n&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class _l extends wi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new je,this.combine=_a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new $,hr=new Ht;let Wc=0;class Me{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wc++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ka,this.updateRanges=[],this.gpuType=nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)hr.fromBufferAttribute(this,e),hr.applyMatrix3(t),this.setXY(e,hr.x,hr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Di(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Di(e,this.array)),e}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Di(e,this.array)),e}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Di(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Di(e,this.array)),e}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),r=Re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),r=Re(r,this.array),s=Re(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ka&&(t.usage=this.usage),t}}class gl extends Me{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class vl extends Me{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class He extends Me{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Xc=0;const ke=new oe,ls=new xe,oi=new $,Ue=new Pn,Ni=new Pn,ve=new $;class Ze extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xc++}),this.uuid=Ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ul(t)?vl:gl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Wt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ke.makeRotationFromQuaternion(t),this.applyMatrix4(ke),this}rotateX(t){return ke.makeRotationX(t),this.applyMatrix4(ke),this}rotateY(t){return ke.makeRotationY(t),this.applyMatrix4(ke),this}rotateZ(t){return ke.makeRotationZ(t),this.applyMatrix4(ke),this}translate(t,e,n){return ke.makeTranslation(t,e,n),this.applyMatrix4(ke),this}scale(t,e,n){return ke.makeScale(t,e,n),this.applyMatrix4(ke),this}lookAt(t){return ls.lookAt(t),ls.updateMatrix(),this.applyMatrix4(ls.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oi).negate(),this.translate(oi.x,oi.y,oi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new He(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Ue.setFromBufferAttribute(s),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,Ue.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,Ue.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(Ue.min),this.boundingBox.expandByPoint(Ue.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const n=this.boundingSphere.center;if(Ue.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Ni.setFromBufferAttribute(a),this.morphTargetsRelative?(ve.addVectors(Ue.min,Ni.min),Ue.expandByPoint(ve),ve.addVectors(Ue.max,Ni.max),Ue.expandByPoint(ve)):(Ue.expandByPoint(Ni.min),Ue.expandByPoint(Ni.max))}Ue.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)ve.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(ve));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)ve.fromBufferAttribute(a,l),c&&(oi.fromBufferAttribute(t,l),ve.add(oi)),r=Math.max(r,n.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Me(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let U=0;U<n.count;U++)a[U]=new $,c[U]=new $;const l=new $,d=new $,f=new $,m=new Ht,u=new Ht,g=new Ht,_=new $,p=new $;function h(U,E,w){l.fromBufferAttribute(n,U),d.fromBufferAttribute(n,E),f.fromBufferAttribute(n,w),m.fromBufferAttribute(s,U),u.fromBufferAttribute(s,E),g.fromBufferAttribute(s,w),d.sub(l),f.sub(l),u.sub(m),g.sub(m);const N=1/(u.x*g.y-g.x*u.y);isFinite(N)&&(_.copy(d).multiplyScalar(g.y).addScaledVector(f,-u.y).multiplyScalar(N),p.copy(f).multiplyScalar(u.x).addScaledVector(d,-g.x).multiplyScalar(N),a[U].add(_),a[E].add(_),a[w].add(_),c[U].add(p),c[E].add(p),c[w].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let U=0,E=y.length;U<E;++U){const w=y[U],N=w.start,T=w.count;for(let F=N,v=N+T;F<v;F+=3)h(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const b=new $,S=new $,A=new $,C=new $;function D(U){A.fromBufferAttribute(r,U),C.copy(A);const E=a[U];b.copy(E),b.sub(A.multiplyScalar(A.dot(E))).normalize(),S.crossVectors(C,E);const N=S.dot(c[U])<0?-1:1;o.setXYZW(U,b.x,b.y,b.z,N)}for(let U=0,E=y.length;U<E;++U){const w=y[U],N=w.start,T=w.count;for(let F=N,v=N+T;F<v;F+=3)D(t.getX(F+0)),D(t.getX(F+1)),D(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Me(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let m=0,u=n.count;m<u;m++)n.setXYZ(m,0,0,0);const r=new $,s=new $,o=new $,a=new $,c=new $,l=new $,d=new $,f=new $;if(t)for(let m=0,u=t.count;m<u;m+=3){const g=t.getX(m+0),_=t.getX(m+1),p=t.getX(m+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),a.add(d),c.add(d),l.add(d),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let m=0,u=e.count;m<u;m+=3)r.fromBufferAttribute(e,m+0),s.fromBufferAttribute(e,m+1),o.fromBufferAttribute(e,m+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),n.setXYZ(m+0,d.x,d.y,d.z),n.setXYZ(m+1,d.x,d.y,d.z),n.setXYZ(m+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(a,c){const l=a.array,d=a.itemSize,f=a.normalized,m=new l.constructor(c.length*d);let u=0,g=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?u=c[_]*a.data.stride+a.offset:u=c[_]*d;for(let h=0;h<d;h++)m[g++]=l[u++]}return new Me(m,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ze,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=t(c,n);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let d=0,f=l.length;d<f;d++){const m=l[d],u=t(m,n);c.push(u)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let f=0,m=l.length;f<m;f++){const u=l[f];d.push(u.toJSON(t.data))}d.length>0&&(r[c]=d,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const l in r){const d=r[l];this.setAttribute(l,d.clone(e))}const s=t.morphAttributes;for(const l in s){const d=[],f=s[l];for(let m=0,u=f.length;m<u;m++)d.push(f[m].clone(e));this.morphAttributes[l]=d}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,d=o.length;l<d;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ho=new oe,Nn=new fl,ur=new bi,uo=new $,dr=new $,fr=new $,pr=new $,cs=new $,mr=new $,fo=new $,_r=new $;class de extends xe{constructor(t=new Ze,e=new _l){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){mr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const d=a[c],f=s[c];d!==0&&(cs.fromBufferAttribute(f,t),o?mr.addScaledVector(cs,d):mr.addScaledVector(cs.sub(e),d))}e.add(mr)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere),ur.applyMatrix4(s),Nn.copy(t.ray).recast(t.near),!(ur.containsPoint(Nn.origin)===!1&&(Nn.intersectSphere(ur,uo)===null||Nn.origin.distanceToSquared(uo)>(t.far-t.near)**2))&&(ho.copy(s).invert(),Nn.copy(t.ray).applyMatrix4(ho),!(n.boundingBox!==null&&Nn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Nn)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,m=s.groups,u=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=m.length;g<_;g++){const p=m[g],h=o[p.materialIndex],y=Math.max(p.start,u.start),b=Math.min(a.count,Math.min(p.start+p.count,u.start+u.count));for(let S=y,A=b;S<A;S+=3){const C=a.getX(S),D=a.getX(S+1),U=a.getX(S+2);r=gr(this,h,t,n,l,d,f,C,D,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const g=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let p=g,h=_;p<h;p+=3){const y=a.getX(p),b=a.getX(p+1),S=a.getX(p+2);r=gr(this,o,t,n,l,d,f,y,b,S),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=m.length;g<_;g++){const p=m[g],h=o[p.materialIndex],y=Math.max(p.start,u.start),b=Math.min(c.count,Math.min(p.start+p.count,u.start+u.count));for(let S=y,A=b;S<A;S+=3){const C=S,D=S+1,U=S+2;r=gr(this,h,t,n,l,d,f,C,D,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const g=Math.max(0,u.start),_=Math.min(c.count,u.start+u.count);for(let p=g,h=_;p<h;p+=3){const y=p,b=p+1,S=p+2;r=gr(this,o,t,n,l,d,f,y,b,S),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function Yc(i,t,e,n,r,s,o,a){let c;if(t.side===we?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,t.side===Rn,a),c===null)return null;_r.copy(a),_r.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(_r);return l<e.near||l>e.far?null:{distance:l,point:_r.clone(),object:i}}function gr(i,t,e,n,r,s,o,a,c,l){i.getVertexPosition(a,dr),i.getVertexPosition(c,fr),i.getVertexPosition(l,pr);const d=Yc(i,t,e,n,dr,fr,pr,fo);if(d){const f=new $;Ye.getBarycoord(fo,dr,fr,pr,f),r&&(d.uv=Ye.getInterpolatedAttribute(r,a,c,l,f,new Ht)),s&&(d.uv1=Ye.getInterpolatedAttribute(s,a,c,l,f,new Ht)),o&&(d.normal=Ye.getInterpolatedAttribute(o,a,c,l,f,new $),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const m={a,b:c,c:l,normal:new $,materialIndex:0};Ye.getNormal(dr,fr,pr,m.normal),d.face=m,d.barycoord=f}return d}class Ti extends Ze{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],d=[],f=[];let m=0,u=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,r,o,2),g("x","z","y",1,-1,t,n,-e,r,o,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new He(l,3)),this.setAttribute("normal",new He(d,3)),this.setAttribute("uv",new He(f,2));function g(_,p,h,y,b,S,A,C,D,U,E){const w=S/D,N=A/U,T=S/2,F=A/2,v=C/2,z=D+1,Y=U+1;let G=0,q=0;const Q=new $;for(let ct=0;ct<Y;ct++){const V=ct*N-F;for(let W=0;W<z;W++){const yt=W*w-T;Q[_]=yt*y,Q[p]=V*b,Q[h]=v,l.push(Q.x,Q.y,Q.z),Q[_]=0,Q[p]=0,Q[h]=C>0?1:-1,d.push(Q.x,Q.y,Q.z),f.push(W/D),f.push(1-ct/U),G+=1}}for(let ct=0;ct<U;ct++)for(let V=0;V<D;V++){const W=m+V+z*ct,yt=m+V+z*(ct+1),mt=m+(V+1)+z*(ct+1),ut=m+(V+1)+z*ct;c.push(W,yt,ut),c.push(yt,mt,ut),q+=6}a.addGroup(u,q,E),u+=q,m+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ti(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Mi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function be(i){const t={};for(let e=0;e<i.length;e++){const n=Mi(i[e]);for(const r in n)t[r]=n[r]}return t}function qc(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function xl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}const jc={clone:Mi,merge:be};var Zc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends wi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zc,this.fragmentShader=Kc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Mi(t.uniforms),this.uniformsGroups=qc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class yl extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yn=new $,po=new Ht,mo=new Ht;class Ne extends yl{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ha*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Pr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ha*2*Math.atan(Math.tan(Pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(yn.x,yn.y).multiplyScalar(-t/yn.z),yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yn.x,yn.y).multiplyScalar(-t/yn.z)}getViewSize(t,e){return this.getViewBounds(t,po,mo),e.subVectors(mo,po)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Pr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const li=-90,ci=1;class $c extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ne(li,ci,t,e);r.layers=this.layers,this.add(r);const s=new Ne(li,ci,t,e);s.layers=this.layers,this.add(s);const o=new Ne(li,ci,t,e);o.layers=this.layers,this.add(o);const a=new Ne(li,ci,t,e);a.layers=this.layers,this.add(a);const c=new Ne(li,ci,t,e);c.layers=this.layers,this.add(c);const l=new Ne(li,ci,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===rn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,d]=this.children,f=t.getRenderTarget(),m=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,d),t.setRenderTarget(f,m,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Sl extends Te{constructor(t=[],e=xi,n,r,s,o,a,c,l,d){super(t,e,n,r,s,o,a,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Jc extends qn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Sl(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ti(5,5,5),s=new Cn({name:"CubemapFromEquirect",uniforms:Mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:we,blending:Tn});s.uniforms.tEquirect.value=e;const o=new de(r,s),a=e.minFilter;return e.minFilter===Wn&&(e.minFilter=en),new $c(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}class zi extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qc={type:"move"};class hs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),h=this._getHandJoint(l,_);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const d=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],m=d.position.distanceTo(f.position),u=.02,g=.005;l.inputState.pinching&&m>u+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&m<=u-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qc)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new zi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Ml extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new je,this.environmentIntensity=1,this.environmentRotation=new je,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class th extends Te{constructor(t=null,e=1,n=1,r,s,o,a,c,l=Fe,d=Fe,f,m){super(null,o,a,c,l,d,r,s,f,m),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _o extends Me{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const hi=new oe,go=new oe,vr=[],vo=new Pn,eh=new oe,Fi=new de,Oi=new bi;class nh extends de{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new _o(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,eh)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Pn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hi),vo.copy(t.boundingBox).applyMatrix4(hi),this.boundingBox.union(vo)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new bi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hi),Oi.copy(t.boundingSphere).applyMatrix4(hi),this.boundingSphere.union(Oi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(t,e){const n=this.matrixWorld,r=this.count;if(Fi.geometry=this.geometry,Fi.material=this.material,Fi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oi.copy(this.boundingSphere),Oi.applyMatrix4(n),t.ray.intersectsSphere(Oi)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,hi),go.multiplyMatrices(n,hi),Fi.matrixWorld=go,Fi.raycast(t,vr);for(let o=0,a=vr.length;o<a;o++){const c=vr[o];c.instanceId=s,c.object=this,e.push(c)}vr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new _o(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new th(new Float32Array(r*this.count),r,this.count,ya,nn));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=r*t;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const us=new $,ih=new $,rh=new Wt;class Mn{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=us.subVectors(n,e).cross(ih.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(us),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||rh.getNormalMatrix(t),r=this.coplanarPoint(us).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fn=new bi,sh=new Ht(.5,.5),xr=new $;class Ta{constructor(t=new Mn,e=new Mn,n=new Mn,r=new Mn,s=new Mn,o=new Mn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=rn,n=!1){const r=this.planes,s=t.elements,o=s[0],a=s[1],c=s[2],l=s[3],d=s[4],f=s[5],m=s[6],u=s[7],g=s[8],_=s[9],p=s[10],h=s[11],y=s[12],b=s[13],S=s[14],A=s[15];if(r[0].setComponents(l-o,u-d,h-g,A-y).normalize(),r[1].setComponents(l+o,u+d,h+g,A+y).normalize(),r[2].setComponents(l+a,u+f,h+_,A+b).normalize(),r[3].setComponents(l-a,u-f,h-_,A-b).normalize(),n)r[4].setComponents(c,m,p,S).normalize(),r[5].setComponents(l-c,u-m,h-p,A-S).normalize();else if(r[4].setComponents(l-c,u-m,h-p,A-S).normalize(),e===rn)r[5].setComponents(l+c,u+m,h+p,A+S).normalize();else if(e===Ur)r[5].setComponents(c,m,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fn)}intersectsSprite(t){Fn.center.set(0,0,0);const e=sh.distanceTo(t.center);return Fn.radius=.7071067811865476+e,Fn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fn)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(xr.x=r.normal.x>0?t.max.x:t.min.x,xr.y=r.normal.y>0?t.max.y:t.min.y,xr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(xr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class El extends Te{constructor(t,e,n=Xn,r,s,o,a=Fe,c=Fe,l,d=Yi,f=1){if(d!==Yi&&d!==qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:t,height:e,depth:f};super(m,r,s,o,a,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new wa(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class bl extends Te{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Aa extends Ze{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const d=[],f=[],m=[],u=[];let g=0;const _=[],p=n/2;let h=0;y(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(d),this.setAttribute("position",new He(f,3)),this.setAttribute("normal",new He(m,3)),this.setAttribute("uv",new He(u,2));function y(){const S=new $,A=new $;let C=0;const D=(e-t)/n;for(let U=0;U<=s;U++){const E=[],w=U/s,N=w*(e-t)+t;for(let T=0;T<=r;T++){const F=T/r,v=F*c+a,z=Math.sin(v),Y=Math.cos(v);A.x=N*z,A.y=-w*n+p,A.z=N*Y,f.push(A.x,A.y,A.z),S.set(z,D,Y).normalize(),m.push(S.x,S.y,S.z),u.push(F,1-w),E.push(g++)}_.push(E)}for(let U=0;U<r;U++)for(let E=0;E<s;E++){const w=_[E][U],N=_[E+1][U],T=_[E+1][U+1],F=_[E][U+1];(t>0||E!==0)&&(d.push(w,N,F),C+=3),(e>0||E!==s-1)&&(d.push(N,T,F),C+=3)}l.addGroup(h,C,0),h+=C}function b(S){const A=g,C=new Ht,D=new $;let U=0;const E=S===!0?t:e,w=S===!0?1:-1;for(let T=1;T<=r;T++)f.push(0,p*w,0),m.push(0,w,0),u.push(.5,.5),g++;const N=g;for(let T=0;T<=r;T++){const v=T/r*c+a,z=Math.cos(v),Y=Math.sin(v);D.x=E*Y,D.y=p*w,D.z=E*z,f.push(D.x,D.y,D.z),m.push(0,w,0),C.x=z*.5+.5,C.y=Y*.5*w+.5,u.push(C.x,C.y),g++}for(let T=0;T<r;T++){const F=A+T,v=N+T;S===!0?d.push(v,v+1,F):d.push(v+1,v,F),U+=3}l.addGroup(h,U,S===!0?1:2),h+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Aa(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Or extends Ze{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(r),l=a+1,d=c+1,f=t/a,m=e/c,u=[],g=[],_=[],p=[];for(let h=0;h<d;h++){const y=h*m-o;for(let b=0;b<l;b++){const S=b*f-s;g.push(S,-y,0),_.push(0,0,1),p.push(b/a),p.push(1-h/c)}}for(let h=0;h<c;h++)for(let y=0;y<a;y++){const b=y+l*h,S=y+l*(h+1),A=y+1+l*(h+1),C=y+1+l*h;u.push(b,S,C),u.push(S,A,C)}this.setIndex(u),this.setAttribute("position",new He(g,3)),this.setAttribute("normal",new He(_,3)),this.setAttribute("uv",new He(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Or(t.width,t.height,t.widthSegments,t.heightSegments)}}class Zi extends wi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ba,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new je,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ah extends Zi{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ht(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new qt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class oh extends wi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ba,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new je,this.combine=_a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class lh extends wi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_c,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ch extends wi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const xo={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class hh{constructor(t,e,n){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(d){a++,s===!1&&r.onStart!==void 0&&r.onStart(d,o,a),s=!0},this.itemEnd=function(d){o++,r.onProgress!==void 0&&r.onProgress(d,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,f){return l.push(d,f),this},this.removeHandler=function(d){const f=l.indexOf(d);return f!==-1&&l.splice(f,2),this},this.getHandler=function(d){for(let f=0,m=l.length;f<m;f+=2){const u=l[f],g=l[f+1];if(u.global&&(u.lastIndex=0),u.test(d))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const uh=new hh;class Ra{constructor(t){this.manager=t!==void 0?t:uh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Ra.DEFAULT_MATERIAL_NAME="__DEFAULT";const dn={};class dh extends Error{constructor(t,e){super(t),this.response=e}}class fh extends Ra{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=xo.get(`file:${t}`);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(dn[t]!==void 0){dn[t].push({onLoad:e,onProgress:n,onError:r});return}dn[t]=[],dn[t].push({onLoad:e,onProgress:n,onError:r});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const d=dn[t],f=l.body.getReader(),m=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),u=m?parseInt(m):0,g=u!==0;let _=0;const p=new ReadableStream({start(h){y();function y(){f.read().then(({done:b,value:S})=>{if(b)h.close();else{_+=S.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:u});for(let C=0,D=d.length;C<D;C++){const U=d[C];U.onProgress&&U.onProgress(A)}h.enqueue(S),y()}},b=>{h.error(b)})}}});return new Response(p)}else throw new dh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(d=>new DOMParser().parseFromString(d,a));case"json":return l.json();default:if(a==="")return l.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),m=f&&f[1]?f[1].toLowerCase():void 0,u=new TextDecoder(m);return l.arrayBuffer().then(g=>u.decode(g))}}}).then(l=>{xo.add(`file:${t}`,l);const d=dn[t];delete dn[t];for(let f=0,m=d.length;f<m;f++){const u=d[f];u.onLoad&&u.onLoad(l)}}).catch(l=>{const d=dn[t];if(d===void 0)throw this.manager.itemError(t),l;delete dn[t];for(let f=0,m=d.length;f<m;f++){const u=d[f];u.onError&&u.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Ca extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class ph extends Ca{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ds=new oe,yo=new $,So=new $;class wl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ht(512,512),this.mapType=sn,this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ta,this._frameExtents=new Ht(1,1),this._viewportCount=1,this._viewports=[new ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;yo.setFromMatrixPosition(t.matrixWorld),e.position.copy(yo),So.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(So),e.updateMatrixWorld(),ds.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ds,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ds)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Mo=new oe,Bi=new $,fs=new $;class mh extends wl{constructor(){super(new Ne(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ht(4,2),this._viewportCount=6,this._viewports=[new ie(2,1,1,1),new ie(0,1,1,1),new ie(3,1,1,1),new ie(1,1,1,1),new ie(3,0,1,1),new ie(1,0,1,1)],this._cubeDirections=[new $(1,0,0),new $(-1,0,0),new $(0,0,1),new $(0,0,-1),new $(0,1,0),new $(0,-1,0)],this._cubeUps=[new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,0,1),new $(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Bi.setFromMatrixPosition(t.matrixWorld),n.position.copy(Bi),fs.copy(n.position),fs.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(fs),n.updateMatrixWorld(),r.makeTranslation(-Bi.x,-Bi.y,-Bi.z),Mo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mo,n.coordinateSystem,n.reversedDepth)}}class _h extends Ca{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new mh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Tl extends yl{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class gh extends wl{constructor(){super(new Tl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Eo extends Ca{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new gh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class vh extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class bo{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Yt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Yt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class xh extends jn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function wo(i,t,e,n){const r=yh(n);switch(e){case ol:return i*t;case ya:return i*t/r.components*r.byteLength;case Sa:return i*t/r.components*r.byteLength;case cl:return i*t*2/r.components*r.byteLength;case Ma:return i*t*2/r.components*r.byteLength;case ll:return i*t*3/r.components*r.byteLength;case qe:return i*t*4/r.components*r.byteLength;case Ea:return i*t*4/r.components*r.byteLength;case Tr:case Ar:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Rr:case Cr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Os:case ks:return Math.max(i,16)*Math.max(t,8)/4;case Fs:case Bs:return Math.max(i,8)*Math.max(t,8)/2;case zs:case Hs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Vs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Gs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ws:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Xs:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ys:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case qs:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case js:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Zs:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ks:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case $s:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Js:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Qs:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ta:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ea:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case na:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ia:case ra:case sa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case aa:case oa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case la:case ca:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function yh(i){switch(i){case sn:case il:return{byteLength:1,components:1};case Wi:case rl:case $i:return{byteLength:2,components:1};case va:case xa:return{byteLength:2,components:4};case Xn:case ga:case nn:return{byteLength:4,components:1};case sl:case al:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ma}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ma);function Al(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Sh(i){const t=new WeakMap;function e(a,c){const l=a.array,d=a.usage,f=l.byteLength,m=i.createBuffer();i.bindBuffer(c,m),i.bufferData(c,l,d),a.onUploadCallback();let u;if(l instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)u=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=i.SHORT;else if(l instanceof Uint32Array)u=i.UNSIGNED_INT;else if(l instanceof Int32Array)u=i.INT;else if(l instanceof Int8Array)u=i.BYTE;else if(l instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:m,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){const d=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,d);else{f.sort((u,g)=>u.start-g.start);let m=0;for(let u=1;u<f.length;u++){const g=f[m],_=f[u];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++m,f[m]=_)}f.length=m+1;for(let u=0,g=f.length;u<g;u++){const _=f[u];i.bufferSubData(l,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var Mh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Eh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Th=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ah=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ch=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ph=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Dh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ih=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Nh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Oh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Bh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Xh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Yh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$h=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,eu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,iu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ru=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,su=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,au=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ou=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,du=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_u=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Su=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Eu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Au=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ru=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Du=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Iu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ou=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Bu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ku=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ju=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ku=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$u=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ju=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,td=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ed=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,id=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,rd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ad=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,od=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ld=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ud=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,md=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_d=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Md=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ed=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Td=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ad=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Cd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Pd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Dd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ld=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Id=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ud=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Fd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Od=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Yd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Kd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$d=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xt={alphahash_fragment:Mh,alphahash_pars_fragment:Eh,alphamap_fragment:bh,alphamap_pars_fragment:wh,alphatest_fragment:Th,alphatest_pars_fragment:Ah,aomap_fragment:Rh,aomap_pars_fragment:Ch,batching_pars_vertex:Ph,batching_vertex:Dh,begin_vertex:Lh,beginnormal_vertex:Ih,bsdfs:Uh,iridescence_fragment:Nh,bumpmap_pars_fragment:Fh,clipping_planes_fragment:Oh,clipping_planes_pars_fragment:Bh,clipping_planes_pars_vertex:kh,clipping_planes_vertex:zh,color_fragment:Hh,color_pars_fragment:Vh,color_pars_vertex:Gh,color_vertex:Wh,common:Xh,cube_uv_reflection_fragment:Yh,defaultnormal_vertex:qh,displacementmap_pars_vertex:jh,displacementmap_vertex:Zh,emissivemap_fragment:Kh,emissivemap_pars_fragment:$h,colorspace_fragment:Jh,colorspace_pars_fragment:Qh,envmap_fragment:tu,envmap_common_pars_fragment:eu,envmap_pars_fragment:nu,envmap_pars_vertex:iu,envmap_physical_pars_fragment:pu,envmap_vertex:ru,fog_vertex:su,fog_pars_vertex:au,fog_fragment:ou,fog_pars_fragment:lu,gradientmap_pars_fragment:cu,lightmap_pars_fragment:hu,lights_lambert_fragment:uu,lights_lambert_pars_fragment:du,lights_pars_begin:fu,lights_toon_fragment:mu,lights_toon_pars_fragment:_u,lights_phong_fragment:gu,lights_phong_pars_fragment:vu,lights_physical_fragment:xu,lights_physical_pars_fragment:yu,lights_fragment_begin:Su,lights_fragment_maps:Mu,lights_fragment_end:Eu,logdepthbuf_fragment:bu,logdepthbuf_pars_fragment:wu,logdepthbuf_pars_vertex:Tu,logdepthbuf_vertex:Au,map_fragment:Ru,map_pars_fragment:Cu,map_particle_fragment:Pu,map_particle_pars_fragment:Du,metalnessmap_fragment:Lu,metalnessmap_pars_fragment:Iu,morphinstance_vertex:Uu,morphcolor_vertex:Nu,morphnormal_vertex:Fu,morphtarget_pars_vertex:Ou,morphtarget_vertex:Bu,normal_fragment_begin:ku,normal_fragment_maps:zu,normal_pars_fragment:Hu,normal_pars_vertex:Vu,normal_vertex:Gu,normalmap_pars_fragment:Wu,clearcoat_normal_fragment_begin:Xu,clearcoat_normal_fragment_maps:Yu,clearcoat_pars_fragment:qu,iridescence_pars_fragment:ju,opaque_fragment:Zu,packing:Ku,premultiplied_alpha_fragment:$u,project_vertex:Ju,dithering_fragment:Qu,dithering_pars_fragment:td,roughnessmap_fragment:ed,roughnessmap_pars_fragment:nd,shadowmap_pars_fragment:id,shadowmap_pars_vertex:rd,shadowmap_vertex:sd,shadowmask_pars_fragment:ad,skinbase_vertex:od,skinning_pars_vertex:ld,skinning_vertex:cd,skinnormal_vertex:hd,specularmap_fragment:ud,specularmap_pars_fragment:dd,tonemapping_fragment:fd,tonemapping_pars_fragment:pd,transmission_fragment:md,transmission_pars_fragment:_d,uv_pars_fragment:gd,uv_pars_vertex:vd,uv_vertex:xd,worldpos_vertex:yd,background_vert:Sd,background_frag:Md,backgroundCube_vert:Ed,backgroundCube_frag:bd,cube_vert:wd,cube_frag:Td,depth_vert:Ad,depth_frag:Rd,distanceRGBA_vert:Cd,distanceRGBA_frag:Pd,equirect_vert:Dd,equirect_frag:Ld,linedashed_vert:Id,linedashed_frag:Ud,meshbasic_vert:Nd,meshbasic_frag:Fd,meshlambert_vert:Od,meshlambert_frag:Bd,meshmatcap_vert:kd,meshmatcap_frag:zd,meshnormal_vert:Hd,meshnormal_frag:Vd,meshphong_vert:Gd,meshphong_frag:Wd,meshphysical_vert:Xd,meshphysical_frag:Yd,meshtoon_vert:qd,meshtoon_frag:jd,points_vert:Zd,points_frag:Kd,shadow_vert:$d,shadow_frag:Jd,sprite_vert:Qd,sprite_frag:tf},bt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Je={basic:{uniforms:be([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:be([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:be([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:be([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:be([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:be([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:be([bt.points,bt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:be([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:be([bt.common,bt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:be([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:be([bt.sprite,bt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:be([bt.common,bt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:be([bt.lights,bt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};Je.physical={uniforms:be([Je.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const yr={r:0,b:0,g:0},On=new je,ef=new oe;function nf(i,t,e,n,r,s,o){const a=new qt(0);let c=s===!0?0:1,l,d,f=null,m=0,u=null;function g(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?e:t).get(S)),S}function _(b){let S=!1;const A=g(b);A===null?h(a,c):A&&A.isColor&&(h(A,1),S=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(b,S){const A=g(S);A&&(A.isCubeTexture||A.mapping===Fr)?(d===void 0&&(d=new de(new Ti(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Mi(Je.backgroundCube.uniforms),vertexShader:Je.backgroundCube.vertexShader,fragmentShader:Je.backgroundCube.fragmentShader,side:we,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,D,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),On.copy(S.backgroundRotation),On.x*=-1,On.y*=-1,On.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(On.y*=-1,On.z*=-1),d.material.uniforms.envMap.value=A,d.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(ef.makeRotationFromEuler(On)),d.material.toneMapped=$t.getTransfer(A.colorSpace)!==ee,(f!==A||m!==A.version||u!==i.toneMapping)&&(d.material.needsUpdate=!0,f=A,m=A.version,u=i.toneMapping),d.layers.enableAll(),b.unshift(d,d.geometry,d.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new de(new Or(2,2),new Cn({name:"BackgroundMaterial",uniforms:Mi(Je.background.uniforms),vertexShader:Je.background.vertexShader,fragmentShader:Je.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=$t.getTransfer(A.colorSpace)!==ee,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||m!==A.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,f=A,m=A.version,u=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function h(b,S){b.getRGB(yr,xl(i)),n.buffers.color.setClear(yr.r,yr.g,yr.b,S,o)}function y(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,S=1){a.set(b),c=S,h(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,h(a,c)},render:_,addToRenderList:p,dispose:y}}function rf(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=m(null);let s=r,o=!1;function a(w,N,T,F,v){let z=!1;const Y=f(F,T,N);s!==Y&&(s=Y,l(s.object)),z=u(w,F,T,v),z&&g(w,F,T,v),v!==null&&t.update(v,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,S(w,N,T,F),v!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(v).buffer))}function c(){return i.createVertexArray()}function l(w){return i.bindVertexArray(w)}function d(w){return i.deleteVertexArray(w)}function f(w,N,T){const F=T.wireframe===!0;let v=n[w.id];v===void 0&&(v={},n[w.id]=v);let z=v[N.id];z===void 0&&(z={},v[N.id]=z);let Y=z[F];return Y===void 0&&(Y=m(c()),z[F]=Y),Y}function m(w){const N=[],T=[],F=[];for(let v=0;v<e;v++)N[v]=0,T[v]=0,F[v]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:T,attributeDivisors:F,object:w,attributes:{},index:null}}function u(w,N,T,F){const v=s.attributes,z=N.attributes;let Y=0;const G=T.getAttributes();for(const q in G)if(G[q].location>=0){const ct=v[q];let V=z[q];if(V===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(V=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(V=w.instanceColor)),ct===void 0||ct.attribute!==V||V&&ct.data!==V.data)return!0;Y++}return s.attributesNum!==Y||s.index!==F}function g(w,N,T,F){const v={},z=N.attributes;let Y=0;const G=T.getAttributes();for(const q in G)if(G[q].location>=0){let ct=z[q];ct===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(ct=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(ct=w.instanceColor));const V={};V.attribute=ct,ct&&ct.data&&(V.data=ct.data),v[q]=V,Y++}s.attributes=v,s.attributesNum=Y,s.index=F}function _(){const w=s.newAttributes;for(let N=0,T=w.length;N<T;N++)w[N]=0}function p(w){h(w,0)}function h(w,N){const T=s.newAttributes,F=s.enabledAttributes,v=s.attributeDivisors;T[w]=1,F[w]===0&&(i.enableVertexAttribArray(w),F[w]=1),v[w]!==N&&(i.vertexAttribDivisor(w,N),v[w]=N)}function y(){const w=s.newAttributes,N=s.enabledAttributes;for(let T=0,F=N.length;T<F;T++)N[T]!==w[T]&&(i.disableVertexAttribArray(T),N[T]=0)}function b(w,N,T,F,v,z,Y){Y===!0?i.vertexAttribIPointer(w,N,T,v,z):i.vertexAttribPointer(w,N,T,F,v,z)}function S(w,N,T,F){_();const v=F.attributes,z=T.getAttributes(),Y=N.defaultAttributeValues;for(const G in z){const q=z[G];if(q.location>=0){let Q=v[G];if(Q===void 0&&(G==="instanceMatrix"&&w.instanceMatrix&&(Q=w.instanceMatrix),G==="instanceColor"&&w.instanceColor&&(Q=w.instanceColor)),Q!==void 0){const ct=Q.normalized,V=Q.itemSize,W=t.get(Q);if(W===void 0)continue;const yt=W.buffer,mt=W.type,ut=W.bytesPerElement,st=mt===i.INT||mt===i.UNSIGNED_INT||Q.gpuType===ga;if(Q.isInterleavedBufferAttribute){const lt=Q.data,ft=lt.stride,St=Q.offset;if(lt.isInstancedInterleavedBuffer){for(let wt=0;wt<q.locationSize;wt++)h(q.location+wt,lt.meshPerAttribute);w.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let wt=0;wt<q.locationSize;wt++)p(q.location+wt);i.bindBuffer(i.ARRAY_BUFFER,yt);for(let wt=0;wt<q.locationSize;wt++)b(q.location+wt,V/q.locationSize,mt,ct,ft*ut,(St+V/q.locationSize*wt)*ut,st)}else{if(Q.isInstancedBufferAttribute){for(let lt=0;lt<q.locationSize;lt++)h(q.location+lt,Q.meshPerAttribute);w.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let lt=0;lt<q.locationSize;lt++)p(q.location+lt);i.bindBuffer(i.ARRAY_BUFFER,yt);for(let lt=0;lt<q.locationSize;lt++)b(q.location+lt,V/q.locationSize,mt,ct,V*ut,V/q.locationSize*lt*ut,st)}}else if(Y!==void 0){const ct=Y[G];if(ct!==void 0)switch(ct.length){case 2:i.vertexAttrib2fv(q.location,ct);break;case 3:i.vertexAttrib3fv(q.location,ct);break;case 4:i.vertexAttrib4fv(q.location,ct);break;default:i.vertexAttrib1fv(q.location,ct)}}}}y()}function A(){U();for(const w in n){const N=n[w];for(const T in N){const F=N[T];for(const v in F)d(F[v].object),delete F[v];delete N[T]}delete n[w]}}function C(w){if(n[w.id]===void 0)return;const N=n[w.id];for(const T in N){const F=N[T];for(const v in F)d(F[v].object),delete F[v];delete N[T]}delete n[w.id]}function D(w){for(const N in n){const T=n[N];if(T[w.id]===void 0)continue;const F=T[w.id];for(const v in F)d(F[v].object),delete F[v];delete T[w.id]}}function U(){E(),o=!0,s!==r&&(s=r,l(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:U,resetDefaultState:E,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:p,disableUnusedAttributes:y}}function sf(i,t,e){let n;function r(l){n=l}function s(l,d){i.drawArrays(n,l,d),e.update(d,n,1)}function o(l,d,f){f!==0&&(i.drawArraysInstanced(n,l,d,f),e.update(d,n,f))}function a(l,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,d,0,f);let u=0;for(let g=0;g<f;g++)u+=d[g];e.update(u,n,1)}function c(l,d,f,m){if(f===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<l.length;g++)o(l[g],d[g],m[g]);else{u.multiDrawArraysInstancedWEBGL(n,l,0,d,0,m,0,f);let g=0;for(let _=0;_<f;_++)g+=d[_]*m[_];e.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function af(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(D){return!(D!==qe&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const U=D===$i&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==sn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==nn&&!U)}function c(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const f=e.logarithmicDepthBuffer===!0,m=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:m,maxTextures:u,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:S,vertexTextures:A,maxSamples:C}}function of(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new Mn,a=new Wt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,m){const u=f.length!==0||m||n!==0||r;return r=m,n=f.length,u},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,m){e=d(f,m,0)},this.setState=function(f,m,u){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,h=i.get(f);if(!r||g===null||g.length===0||s&&!p)s?d(null):l();else{const y=s?0:n,b=y*4;let S=h.clippingState||null;c.value=S,S=d(g,m,b,u);for(let A=0;A!==b;++A)S[A]=e[A];h.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(f,m,u,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const h=u+_*4,y=m.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<h)&&(p=new Float32Array(h));for(let b=0,S=u;b!==_;++b,S+=4)o.copy(f[b]).applyMatrix4(y,a),o.normal.toArray(p,S),p[S+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function lf(i){let t=new WeakMap;function e(o,a){return a===Ls?o.mapping=xi:a===Is&&(o.mapping=yi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ls||a===Is)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Jc(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const pi=4,To=[.125,.215,.35,.446,.526,.582],Vn=20,ps=new Tl,Ao=new qt;let ms=null,_s=0,gs=0,vs=!1;const zn=(1+Math.sqrt(5))/2,ui=1/zn,Ro=[new $(-zn,ui,0),new $(zn,ui,0),new $(-ui,0,zn),new $(ui,0,zn),new $(0,zn,-ui),new $(0,zn,ui),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)],cf=new $;class ua{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100,s={}){const{size:o=256,position:a=cf}=s;ms=this._renderer.getRenderTarget(),_s=this._renderer.getActiveCubeFace(),gs=this._renderer.getActiveMipmapLevel(),vs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,r,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Do(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Po(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ms,_s,gs),this._renderer.xr.enabled=vs,t.scissorTest=!1,Sr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xi||t.mapping===yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ms=this._renderer.getRenderTarget(),_s=this._renderer.getActiveCubeFace(),gs=this._renderer.getActiveMipmapLevel(),vs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:$i,format:qe,colorSpace:Si,depthBuffer:!1},r=Co(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Co(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hf(s)),this._blurMaterial=uf(s,t,e)}return r}_compileMaterial(t){const e=new de(this._lodPlanes[0],t);this._renderer.compile(e,ps)}_sceneToCubeUV(t,e,n,r,s){const c=new Ne(90,1,e,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,m=f.autoClear,u=f.toneMapping;f.getClearColor(Ao),f.toneMapping=An,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const _=new _l({name:"PMREM.Background",side:we,depthWrite:!1,depthTest:!1}),p=new de(new Ti,_);let h=!1;const y=t.background;y?y.isColor&&(_.color.copy(y),t.background=null,h=!0):(_.color.copy(Ao),h=!0);for(let b=0;b<6;b++){const S=b%3;S===0?(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+d[b],s.y,s.z)):S===1?(c.up.set(0,0,l[b]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+d[b],s.z)):(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+d[b]));const A=this._cubeSize;Sr(r,S*A,b>2?A:0,A,A),f.setRenderTarget(r),h&&f.render(p,c),f.render(t,c)}p.geometry.dispose(),p.material.dispose(),f.toneMapping=u,f.autoClear=m,t.background=y}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===xi||t.mapping===yi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Do()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Po());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new de(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;Sr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,ps)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ro[(r-s-1)%Ro.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new de(this._lodPlanes[r],l),m=l.uniforms,u=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*u):2*Math.PI/(2*Vn-1),_=s/g,p=isFinite(s)?1+Math.floor(d*_):Vn;p>Vn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Vn}`);const h=[];let y=0;for(let D=0;D<Vn;++D){const U=D/_,E=Math.exp(-U*U/2);h.push(E),D===0?y+=E:D<p&&(y+=2*E)}for(let D=0;D<h.length;D++)h[D]=h[D]/y;m.envMap.value=t.texture,m.samples.value=p,m.weights.value=h,m.latitudinal.value=o==="latitudinal",a&&(m.poleAxis.value=a);const{_lodMax:b}=this;m.dTheta.value=g,m.mipInt.value=b-n;const S=this._sizeLods[r],A=3*S*(r>b-pi?r-b+pi:0),C=4*(this._cubeSize-S);Sr(e,A,C,3*S,2*S),c.setRenderTarget(e),c.render(f,ps)}}function hf(i){const t=[],e=[],n=[];let r=i;const s=i-pi+1+To.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>i-pi?c=To[o-i+pi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),d=-l,f=1+l,m=[d,d,f,d,f,f,d,d,f,f,d,f],u=6,g=6,_=3,p=2,h=1,y=new Float32Array(_*g*u),b=new Float32Array(p*g*u),S=new Float32Array(h*g*u);for(let C=0;C<u;C++){const D=C%3*2/3-1,U=C>2?0:-1,E=[D,U,0,D+2/3,U,0,D+2/3,U+1,0,D,U,0,D+2/3,U+1,0,D,U+1,0];y.set(E,_*g*C),b.set(m,p*g*C);const w=[C,C,C,C,C,C];S.set(w,h*g*C)}const A=new Ze;A.setAttribute("position",new Me(y,_)),A.setAttribute("uv",new Me(b,p)),A.setAttribute("faceIndex",new Me(S,h)),t.push(A),r>pi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Co(i,t,e){const n=new qn(i,t,e);return n.texture.mapping=Fr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Sr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function uf(i,t,e){const n=new Float32Array(Vn),r=new $(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:Vn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Po(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Do(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Pa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function df(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ls||c===Is,d=c===xi||c===yi;if(l||d){let f=t.get(a);const m=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==m)return e===null&&(e=new ua(i)),f=l?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const u=a.image;return l&&u&&u.height>0||d&&u&&r(u)?(e===null&&(e=new ua(i)),f=l?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let c=0;const l=6;for(let d=0;d<l;d++)a[d]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function ff(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&ji("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function pf(i,t,e,n){const r={},s=new WeakMap;function o(f){const m=f.target;m.index!==null&&t.remove(m.index);for(const g in m.attributes)t.remove(m.attributes[g]);m.removeEventListener("dispose",o),delete r[m.id];const u=s.get(m);u&&(t.remove(u),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function a(f,m){return r[m.id]===!0||(m.addEventListener("dispose",o),r[m.id]=!0,e.memory.geometries++),m}function c(f){const m=f.attributes;for(const u in m)t.update(m[u],i.ARRAY_BUFFER)}function l(f){const m=[],u=f.index,g=f.attributes.position;let _=0;if(u!==null){const y=u.array;_=u.version;for(let b=0,S=y.length;b<S;b+=3){const A=y[b+0],C=y[b+1],D=y[b+2];m.push(A,C,C,D,D,A)}}else if(g!==void 0){const y=g.array;_=g.version;for(let b=0,S=y.length/3-1;b<S;b+=3){const A=b+0,C=b+1,D=b+2;m.push(A,C,C,D,D,A)}}else return;const p=new(ul(m)?vl:gl)(m,1);p.version=_;const h=s.get(f);h&&t.remove(h),s.set(f,p)}function d(f){const m=s.get(f);if(m){const u=f.index;u!==null&&m.version<u.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:d}}function mf(i,t,e){let n;function r(m){n=m}let s,o;function a(m){s=m.type,o=m.bytesPerElement}function c(m,u){i.drawElements(n,u,s,m*o),e.update(u,n,1)}function l(m,u,g){g!==0&&(i.drawElementsInstanced(n,u,s,m*o,g),e.update(u,n,g))}function d(m,u,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,m,0,g);let p=0;for(let h=0;h<g;h++)p+=u[h];e.update(p,n,1)}function f(m,u,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<m.length;h++)l(m[h]/o,u[h],_[h]);else{p.multiDrawElementsInstancedWEBGL(n,u,0,s,m,0,_,0,g);let h=0;for(let y=0;y<g;y++)h+=u[y]*_[y];e.update(h,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function _f(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function gf(i,t,e){const n=new WeakMap,r=new ie;function s(o,a,c){const l=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let m=n.get(a);if(m===void 0||m.count!==f){let E=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",E)};m!==void 0&&m.texture.dispose();const u=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let b=0;u===!0&&(b=1),g===!0&&(b=2),_===!0&&(b=3);let S=a.attributes.position.count*b,A=1;S>t.maxTextureSize&&(A=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const C=new Float32Array(S*A*4*f),D=new dl(C,S,A,f);D.type=nn,D.needsUpdate=!0;const U=b*4;for(let w=0;w<f;w++){const N=p[w],T=h[w],F=y[w],v=S*A*4*w;for(let z=0;z<N.count;z++){const Y=z*U;u===!0&&(r.fromBufferAttribute(N,z),C[v+Y+0]=r.x,C[v+Y+1]=r.y,C[v+Y+2]=r.z,C[v+Y+3]=0),g===!0&&(r.fromBufferAttribute(T,z),C[v+Y+4]=r.x,C[v+Y+5]=r.y,C[v+Y+6]=r.z,C[v+Y+7]=0),_===!0&&(r.fromBufferAttribute(F,z),C[v+Y+8]=r.x,C[v+Y+9]=r.y,C[v+Y+10]=r.z,C[v+Y+11]=F.itemSize===4?r.w:1)}}m={count:f,texture:D,size:new Ht(S,A)},n.set(a,m),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let u=0;for(let _=0;_<l.length;_++)u+=l[_];const g=a.morphTargetsRelative?1:1-u;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:s}}function vf(i,t,e,n){let r=new WeakMap;function s(c){const l=n.render.frame,d=c.geometry,f=t.get(c,d);if(r.get(f)!==l&&(t.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const m=c.skeleton;r.get(m)!==l&&(m.update(),r.set(m,l))}return f}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}const Rl=new Te,Lo=new El(1,1),Cl=new dl,Pl=new Nc,Dl=new Sl,Io=[],Uo=[],No=new Float32Array(16),Fo=new Float32Array(9),Oo=new Float32Array(4);function Ai(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Io[r];if(s===void 0&&(s=new Float32Array(r),Io[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function _e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Br(i,t){let e=Uo[t];e===void 0&&(e=new Int32Array(t),Uo[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function xf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function yf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2fv(this.addr,t),ge(e,t)}}function Sf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;i.uniform3fv(this.addr,t),ge(e,t)}}function Mf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4fv(this.addr,t),ge(e,t)}}function Ef(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(_e(e,n))return;Oo.set(n),i.uniformMatrix2fv(this.addr,!1,Oo),ge(e,n)}}function bf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(_e(e,n))return;Fo.set(n),i.uniformMatrix3fv(this.addr,!1,Fo),ge(e,n)}}function wf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(_e(e,n))return;No.set(n),i.uniformMatrix4fv(this.addr,!1,No),ge(e,n)}}function Tf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Af(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2iv(this.addr,t),ge(e,t)}}function Rf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3iv(this.addr,t),ge(e,t)}}function Cf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4iv(this.addr,t),ge(e,t)}}function Pf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Df(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2uiv(this.addr,t),ge(e,t)}}function Lf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3uiv(this.addr,t),ge(e,t)}}function If(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4uiv(this.addr,t),ge(e,t)}}function Uf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Lo.compareFunction=hl,s=Lo):s=Rl,e.setTexture2D(t||s,r)}function Nf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Pl,r)}function Ff(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Dl,r)}function Of(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Cl,r)}function Bf(i){switch(i){case 5126:return xf;case 35664:return yf;case 35665:return Sf;case 35666:return Mf;case 35674:return Ef;case 35675:return bf;case 35676:return wf;case 5124:case 35670:return Tf;case 35667:case 35671:return Af;case 35668:case 35672:return Rf;case 35669:case 35673:return Cf;case 5125:return Pf;case 36294:return Df;case 36295:return Lf;case 36296:return If;case 35678:case 36198:case 36298:case 36306:case 35682:return Uf;case 35679:case 36299:case 36307:return Nf;case 35680:case 36300:case 36308:case 36293:return Ff;case 36289:case 36303:case 36311:case 36292:return Of}}function kf(i,t){i.uniform1fv(this.addr,t)}function zf(i,t){const e=Ai(t,this.size,2);i.uniform2fv(this.addr,e)}function Hf(i,t){const e=Ai(t,this.size,3);i.uniform3fv(this.addr,e)}function Vf(i,t){const e=Ai(t,this.size,4);i.uniform4fv(this.addr,e)}function Gf(i,t){const e=Ai(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Wf(i,t){const e=Ai(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Xf(i,t){const e=Ai(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Yf(i,t){i.uniform1iv(this.addr,t)}function qf(i,t){i.uniform2iv(this.addr,t)}function jf(i,t){i.uniform3iv(this.addr,t)}function Zf(i,t){i.uniform4iv(this.addr,t)}function Kf(i,t){i.uniform1uiv(this.addr,t)}function $f(i,t){i.uniform2uiv(this.addr,t)}function Jf(i,t){i.uniform3uiv(this.addr,t)}function Qf(i,t){i.uniform4uiv(this.addr,t)}function tp(i,t,e){const n=this.cache,r=t.length,s=Br(e,r);_e(n,s)||(i.uniform1iv(this.addr,s),ge(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Rl,s[o])}function ep(i,t,e){const n=this.cache,r=t.length,s=Br(e,r);_e(n,s)||(i.uniform1iv(this.addr,s),ge(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Pl,s[o])}function np(i,t,e){const n=this.cache,r=t.length,s=Br(e,r);_e(n,s)||(i.uniform1iv(this.addr,s),ge(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Dl,s[o])}function ip(i,t,e){const n=this.cache,r=t.length,s=Br(e,r);_e(n,s)||(i.uniform1iv(this.addr,s),ge(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Cl,s[o])}function rp(i){switch(i){case 5126:return kf;case 35664:return zf;case 35665:return Hf;case 35666:return Vf;case 35674:return Gf;case 35675:return Wf;case 35676:return Xf;case 5124:case 35670:return Yf;case 35667:case 35671:return qf;case 35668:case 35672:return jf;case 35669:case 35673:return Zf;case 5125:return Kf;case 36294:return $f;case 36295:return Jf;case 36296:return Qf;case 35678:case 36198:case 36298:case 36306:case 35682:return tp;case 35679:case 36299:case 36307:return ep;case 35680:case 36300:case 36308:case 36293:return np;case 36289:case 36303:case 36311:case 36292:return ip}}class sp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Bf(e.type)}}class ap{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=rp(e.type)}}class op{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const xs=/(\w+)(\])?(\[|\.)?/g;function Bo(i,t){i.seq.push(t),i.map[t.id]=t}function lp(i,t,e){const n=i.name,r=n.length;for(xs.lastIndex=0;;){const s=xs.exec(n),o=xs.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Bo(e,l===void 0?new sp(a,i,t):new ap(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new op(a),Bo(e,f)),e=f}}}class Dr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);lp(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function ko(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const cp=37297;let hp=0;function up(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const zo=new Wt;function dp(i){$t._getMatrix(zo,$t.workingColorSpace,i);const t=`mat3( ${zo.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(i)){case Ir:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ho(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+up(i.getShaderSource(t),a)}else return s}function fp(i,t){const e=dp(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function pp(i,t){let e;switch(t){case cc:e="Linear";break;case hc:e="Reinhard";break;case uc:e="Cineon";break;case el:e="ACESFilmic";break;case fc:e="AgX";break;case pc:e="Neutral";break;case dc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Mr=new $;function mp(){$t.getLuminanceCoefficients(Mr);const i=Mr.x.toFixed(4),t=Mr.y.toFixed(4),e=Mr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _p(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hi).join(`
`)}function gp(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function vp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Hi(i){return i!==""}function Vo(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Go(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const xp=/^[ \t]*#include +<([\w\d./]+)>/gm;function da(i){return i.replace(xp,Sp)}const yp=new Map;function Sp(i,t){let e=Xt[t];if(e===void 0){const n=yp.get(t);if(n!==void 0)e=Xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return da(e)}const Mp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wo(i){return i.replace(Mp,Ep)}function Ep(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Xo(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function bp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===tl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Vl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===fn&&(t="SHADOWMAP_TYPE_VSM"),t}function wp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case xi:case yi:t="ENVMAP_TYPE_CUBE";break;case Fr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Tp(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===yi&&(t="ENVMAP_MODE_REFRACTION"),t}function Ap(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case _a:t="ENVMAP_BLENDING_MULTIPLY";break;case oc:t="ENVMAP_BLENDING_MIX";break;case lc:t="ENVMAP_BLENDING_ADD";break}return t}function Rp(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Cp(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=bp(e),l=wp(e),d=Tp(e),f=Ap(e),m=Rp(e),u=_p(e),g=gp(s),_=r.createProgram();let p,h,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Hi).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Hi).join(`
`),h.length>0&&(h+=`
`)):(p=[Xo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hi).join(`
`),h=[Xo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+d:"",e.envMap?"#define "+f:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==An?"#define TONE_MAPPING":"",e.toneMapping!==An?Xt.tonemapping_pars_fragment:"",e.toneMapping!==An?pp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,fp("linearToOutputTexel",e.outputColorSpace),mp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hi).join(`
`)),o=da(o),o=Vo(o,e),o=Go(o,e),a=da(a),a=Vo(a,e),a=Go(a,e),o=Wo(o),a=Wo(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",e.glslVersion===$a?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$a?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const b=y+p+o,S=y+h+a,A=ko(r,r.VERTEX_SHADER,b),C=ko(r,r.FRAGMENT_SHADER,S);r.attachShader(_,A),r.attachShader(_,C),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function D(N){if(i.debug.checkShaderErrors){const T=r.getProgramInfoLog(_)||"",F=r.getShaderInfoLog(A)||"",v=r.getShaderInfoLog(C)||"",z=T.trim(),Y=F.trim(),G=v.trim();let q=!0,Q=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,A,C);else{const ct=Ho(r,A,"vertex"),V=Ho(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+z+`
`+ct+`
`+V)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(Y===""||G==="")&&(Q=!1);Q&&(N.diagnostics={runnable:q,programLog:z,vertexShader:{log:Y,prefix:p},fragmentShader:{log:G,prefix:h}})}r.deleteShader(A),r.deleteShader(C),U=new Dr(r,_),E=vp(r,_)}let U;this.getUniforms=function(){return U===void 0&&D(this),U};let E;this.getAttributes=function(){return E===void 0&&D(this),E};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(_,cp)),w},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=hp++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=C,this}let Pp=0;class Dp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Lp(t),e.set(t,n)),n}}class Lp{constructor(t){this.id=Pp++,this.code=t,this.usedTimes=0}}function Ip(i,t,e,n,r,s,o){const a=new pl,c=new Dp,l=new Set,d=[],f=r.logarithmicDepthBuffer,m=r.vertexTextures;let u=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function p(E,w,N,T,F){const v=T.fog,z=F.geometry,Y=E.isMeshStandardMaterial?T.environment:null,G=(E.isMeshStandardMaterial?e:t).get(E.envMap||Y),q=G&&G.mapping===Fr?G.image.height:null,Q=g[E.type];E.precision!==null&&(u=r.getMaxPrecision(E.precision),u!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",u,"instead."));const ct=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,V=ct!==void 0?ct.length:0;let W=0;z.morphAttributes.position!==void 0&&(W=1),z.morphAttributes.normal!==void 0&&(W=2),z.morphAttributes.color!==void 0&&(W=3);let yt,mt,ut,st;if(Q){const Qt=Je[Q];yt=Qt.vertexShader,mt=Qt.fragmentShader}else yt=E.vertexShader,mt=E.fragmentShader,c.update(E),ut=c.getVertexShaderID(E),st=c.getFragmentShaderID(E);const lt=i.getRenderTarget(),ft=i.state.buffers.depth.getReversed(),St=F.isInstancedMesh===!0,wt=F.isBatchedMesh===!0,Nt=!!E.map,re=!!E.matcap,k=!!G,x=!!E.aoMap,et=!!E.lightMap,X=!!E.bumpMap,L=!!E.normalMap,I=!!E.displacementMap,B=!!E.emissiveMap,nt=!!E.metalnessMap,ot=!!E.roughnessMap,j=E.anisotropy>0,R=E.clearcoat>0,M=E.dispersion>0,O=E.iridescence>0,K=E.sheen>0,at=E.transmission>0,tt=j&&!!E.anisotropyMap,At=R&&!!E.clearcoatMap,vt=R&&!!E.clearcoatNormalMap,Rt=R&&!!E.clearcoatRoughnessMap,Lt=O&&!!E.iridescenceMap,ht=O&&!!E.iridescenceThicknessMap,Mt=K&&!!E.sheenColorMap,Ot=K&&!!E.sheenRoughnessMap,Pt=!!E.specularMap,Et=!!E.specularColorMap,Vt=!!E.specularIntensityMap,H=at&&!!E.transmissionMap,_t=at&&!!E.thicknessMap,xt=!!E.gradientMap,Ct=!!E.alphaMap,pt=E.alphaTest>0,dt=!!E.alphaHash,Ut=!!E.extensions;let Gt=An;E.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(Gt=i.toneMapping);const ae={shaderID:Q,shaderType:E.type,shaderName:E.name,vertexShader:yt,fragmentShader:mt,defines:E.defines,customVertexShaderID:ut,customFragmentShaderID:st,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:u,batching:wt,batchingColor:wt&&F._colorsTexture!==null,instancing:St,instancingColor:St&&F.instanceColor!==null,instancingMorph:St&&F.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Si,alphaToCoverage:!!E.alphaToCoverage,map:Nt,matcap:re,envMap:k,envMapMode:k&&G.mapping,envMapCubeUVHeight:q,aoMap:x,lightMap:et,bumpMap:X,normalMap:L,displacementMap:m&&I,emissiveMap:B,normalMapObjectSpace:L&&E.normalMapType===vc,normalMapTangentSpace:L&&E.normalMapType===ba,metalnessMap:nt,roughnessMap:ot,anisotropy:j,anisotropyMap:tt,clearcoat:R,clearcoatMap:At,clearcoatNormalMap:vt,clearcoatRoughnessMap:Rt,dispersion:M,iridescence:O,iridescenceMap:Lt,iridescenceThicknessMap:ht,sheen:K,sheenColorMap:Mt,sheenRoughnessMap:Ot,specularMap:Pt,specularColorMap:Et,specularIntensityMap:Vt,transmission:at,transmissionMap:H,thicknessMap:_t,gradientMap:xt,opaque:E.transparent===!1&&E.blending===_i&&E.alphaToCoverage===!1,alphaMap:Ct,alphaTest:pt,alphaHash:dt,combine:E.combine,mapUv:Nt&&_(E.map.channel),aoMapUv:x&&_(E.aoMap.channel),lightMapUv:et&&_(E.lightMap.channel),bumpMapUv:X&&_(E.bumpMap.channel),normalMapUv:L&&_(E.normalMap.channel),displacementMapUv:I&&_(E.displacementMap.channel),emissiveMapUv:B&&_(E.emissiveMap.channel),metalnessMapUv:nt&&_(E.metalnessMap.channel),roughnessMapUv:ot&&_(E.roughnessMap.channel),anisotropyMapUv:tt&&_(E.anisotropyMap.channel),clearcoatMapUv:At&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:vt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Lt&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&_(E.sheenRoughnessMap.channel),specularMapUv:Pt&&_(E.specularMap.channel),specularColorMapUv:Et&&_(E.specularColorMap.channel),specularIntensityMapUv:Vt&&_(E.specularIntensityMap.channel),transmissionMapUv:H&&_(E.transmissionMap.channel),thicknessMapUv:_t&&_(E.thicknessMap.channel),alphaMapUv:Ct&&_(E.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(L||j),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!z.attributes.uv&&(Nt||Ct),fog:!!v,useFog:E.fog===!0,fogExp2:!!v&&v.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ft,skinning:F.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:W,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Gt,decodeVideoTexture:Nt&&E.map.isVideoTexture===!0&&$t.getTransfer(E.map.colorSpace)===ee,decodeVideoTextureEmissive:B&&E.emissiveMap.isVideoTexture===!0&&$t.getTransfer(E.emissiveMap.colorSpace)===ee,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Qe,flipSided:E.side===we,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ut&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&E.extensions.multiDraw===!0||wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ae.vertexUv1s=l.has(1),ae.vertexUv2s=l.has(2),ae.vertexUv3s=l.has(3),l.clear(),ae}function h(E){const w=[];if(E.shaderID?w.push(E.shaderID):(w.push(E.customVertexShaderID),w.push(E.customFragmentShaderID)),E.defines!==void 0)for(const N in E.defines)w.push(N),w.push(E.defines[N]);return E.isRawShaderMaterial===!1&&(y(w,E),b(w,E),w.push(i.outputColorSpace)),w.push(E.customProgramCacheKey),w.join()}function y(E,w){E.push(w.precision),E.push(w.outputColorSpace),E.push(w.envMapMode),E.push(w.envMapCubeUVHeight),E.push(w.mapUv),E.push(w.alphaMapUv),E.push(w.lightMapUv),E.push(w.aoMapUv),E.push(w.bumpMapUv),E.push(w.normalMapUv),E.push(w.displacementMapUv),E.push(w.emissiveMapUv),E.push(w.metalnessMapUv),E.push(w.roughnessMapUv),E.push(w.anisotropyMapUv),E.push(w.clearcoatMapUv),E.push(w.clearcoatNormalMapUv),E.push(w.clearcoatRoughnessMapUv),E.push(w.iridescenceMapUv),E.push(w.iridescenceThicknessMapUv),E.push(w.sheenColorMapUv),E.push(w.sheenRoughnessMapUv),E.push(w.specularMapUv),E.push(w.specularColorMapUv),E.push(w.specularIntensityMapUv),E.push(w.transmissionMapUv),E.push(w.thicknessMapUv),E.push(w.combine),E.push(w.fogExp2),E.push(w.sizeAttenuation),E.push(w.morphTargetsCount),E.push(w.morphAttributeCount),E.push(w.numDirLights),E.push(w.numPointLights),E.push(w.numSpotLights),E.push(w.numSpotLightMaps),E.push(w.numHemiLights),E.push(w.numRectAreaLights),E.push(w.numDirLightShadows),E.push(w.numPointLightShadows),E.push(w.numSpotLightShadows),E.push(w.numSpotLightShadowsWithMaps),E.push(w.numLightProbes),E.push(w.shadowMapType),E.push(w.toneMapping),E.push(w.numClippingPlanes),E.push(w.numClipIntersection),E.push(w.depthPacking)}function b(E,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),w.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),E.push(a.mask)}function S(E){const w=g[E.type];let N;if(w){const T=Je[w];N=jc.clone(T.uniforms)}else N=E.uniforms;return N}function A(E,w){let N;for(let T=0,F=d.length;T<F;T++){const v=d[T];if(v.cacheKey===w){N=v,++N.usedTimes;break}}return N===void 0&&(N=new Cp(i,w,E,s),d.push(N)),N}function C(E){if(--E.usedTimes===0){const w=d.indexOf(E);d[w]=d[d.length-1],d.pop(),E.destroy()}}function D(E){c.remove(E)}function U(){c.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:S,acquireProgram:A,releaseProgram:C,releaseShaderCache:D,programs:d,dispose:U}}function Up(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Np(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Yo(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function qo(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(f,m,u,g,_,p){let h=i[t];return h===void 0?(h={id:f.id,object:f,geometry:m,material:u,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},i[t]=h):(h.id=f.id,h.object=f,h.geometry=m,h.material=u,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=_,h.group=p),t++,h}function a(f,m,u,g,_,p){const h=o(f,m,u,g,_,p);u.transmission>0?n.push(h):u.transparent===!0?r.push(h):e.push(h)}function c(f,m,u,g,_,p){const h=o(f,m,u,g,_,p);u.transmission>0?n.unshift(h):u.transparent===!0?r.unshift(h):e.unshift(h)}function l(f,m){e.length>1&&e.sort(f||Np),n.length>1&&n.sort(m||Yo),r.length>1&&r.sort(m||Yo)}function d(){for(let f=t,m=i.length;f<m;f++){const u=i[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:d,sort:l}}function Fp(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new qo,i.set(n,[o])):r>=s.length?(o=new qo,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Op(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new $,color:new qt};break;case"SpotLight":e={position:new $,direction:new $,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new $,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new $,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new $,halfWidth:new $,halfHeight:new $};break}return i[t.id]=e,e}}}function Bp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let kp=0;function zp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Hp(i){const t=new Op,e=Bp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new $);const r=new $,s=new oe,o=new oe;function a(l){let d=0,f=0,m=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let u=0,g=0,_=0,p=0,h=0,y=0,b=0,S=0,A=0,C=0,D=0;l.sort(zp);for(let E=0,w=l.length;E<w;E++){const N=l[E],T=N.color,F=N.intensity,v=N.distance,z=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=T.r*F,f+=T.g*F,m+=T.b*F;else if(N.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(N.sh.coefficients[Y],F);D++}else if(N.isDirectionalLight){const Y=t.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const G=N.shadow,q=e.get(N);q.shadowIntensity=G.intensity,q.shadowBias=G.bias,q.shadowNormalBias=G.normalBias,q.shadowRadius=G.radius,q.shadowMapSize=G.mapSize,n.directionalShadow[u]=q,n.directionalShadowMap[u]=z,n.directionalShadowMatrix[u]=N.shadow.matrix,y++}n.directional[u]=Y,u++}else if(N.isSpotLight){const Y=t.get(N);Y.position.setFromMatrixPosition(N.matrixWorld),Y.color.copy(T).multiplyScalar(F),Y.distance=v,Y.coneCos=Math.cos(N.angle),Y.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Y.decay=N.decay,n.spot[_]=Y;const G=N.shadow;if(N.map&&(n.spotLightMap[A]=N.map,A++,G.updateMatrices(N),N.castShadow&&C++),n.spotLightMatrix[_]=G.matrix,N.castShadow){const q=e.get(N);q.shadowIntensity=G.intensity,q.shadowBias=G.bias,q.shadowNormalBias=G.normalBias,q.shadowRadius=G.radius,q.shadowMapSize=G.mapSize,n.spotShadow[_]=q,n.spotShadowMap[_]=z,S++}_++}else if(N.isRectAreaLight){const Y=t.get(N);Y.color.copy(T).multiplyScalar(F),Y.halfWidth.set(N.width*.5,0,0),Y.halfHeight.set(0,N.height*.5,0),n.rectArea[p]=Y,p++}else if(N.isPointLight){const Y=t.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),Y.distance=N.distance,Y.decay=N.decay,N.castShadow){const G=N.shadow,q=e.get(N);q.shadowIntensity=G.intensity,q.shadowBias=G.bias,q.shadowNormalBias=G.normalBias,q.shadowRadius=G.radius,q.shadowMapSize=G.mapSize,q.shadowCameraNear=G.camera.near,q.shadowCameraFar=G.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=N.shadow.matrix,b++}n.point[g]=Y,g++}else if(N.isHemisphereLight){const Y=t.get(N);Y.skyColor.copy(N.color).multiplyScalar(F),Y.groundColor.copy(N.groundColor).multiplyScalar(F),n.hemi[h]=Y,h++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=m;const U=n.hash;(U.directionalLength!==u||U.pointLength!==g||U.spotLength!==_||U.rectAreaLength!==p||U.hemiLength!==h||U.numDirectionalShadows!==y||U.numPointShadows!==b||U.numSpotShadows!==S||U.numSpotMaps!==A||U.numLightProbes!==D)&&(n.directional.length=u,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=h,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=S+A-C,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=D,U.directionalLength=u,U.pointLength=g,U.spotLength=_,U.rectAreaLength=p,U.hemiLength=h,U.numDirectionalShadows=y,U.numPointShadows=b,U.numSpotShadows=S,U.numSpotMaps=A,U.numLightProbes=D,n.version=kp++)}function c(l,d){let f=0,m=0,u=0,g=0,_=0;const p=d.matrixWorldInverse;for(let h=0,y=l.length;h<y;h++){const b=l[h];if(b.isDirectionalLight){const S=n.directional[f];S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),f++}else if(b.isSpotLight){const S=n.spot[u];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),u++}else if(b.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(p),o.identity(),s.copy(b.matrixWorld),s.premultiply(p),o.extractRotation(s),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const S=n.point[m];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(p),m++}else if(b.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(p),_++}}}return{setup:a,setupView:c,state:n}}function jo(i){const t=new Hp(i),e=[],n=[];function r(d){l.camera=d,e.length=0,n.length=0}function s(d){e.push(d)}function o(d){n.push(d)}function a(){t.setup(e)}function c(d){t.setupView(e,d)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function Vp(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new jo(i),t.set(r,[a])):s>=o.length?(a=new jo(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Gp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Xp(i,t,e){let n=new Ta;const r=new Ht,s=new Ht,o=new ie,a=new lh({depthPacking:gc}),c=new ch,l={},d=e.maxTextureSize,f={[Rn]:we,[we]:Rn,[Qe]:Qe},m=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:Gp,fragmentShader:Wp}),u=m.clone();u.defines.HORIZONTAL_PASS=1;const g=new Ze;g.setAttribute("position",new Me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new de(g,m),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tl;let h=this.type;this.render=function(C,D,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const E=i.getRenderTarget(),w=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),T=i.state;T.setBlending(Tn),T.buffers.depth.getReversed()===!0?T.buffers.color.setClear(0,0,0,0):T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);const F=h!==fn&&this.type===fn,v=h===fn&&this.type!==fn;for(let z=0,Y=C.length;z<Y;z++){const G=C[z],q=G.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const Q=q.getFrameExtents();if(r.multiply(Q),s.copy(q.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/Q.x),r.x=s.x*Q.x,q.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/Q.y),r.y=s.y*Q.y,q.mapSize.y=s.y)),q.map===null||F===!0||v===!0){const V=this.type!==fn?{minFilter:Fe,magFilter:Fe}:{};q.map!==null&&q.map.dispose(),q.map=new qn(r.x,r.y,V),q.map.texture.name=G.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const ct=q.getViewportCount();for(let V=0;V<ct;V++){const W=q.getViewport(V);o.set(s.x*W.x,s.y*W.y,s.x*W.z,s.y*W.w),T.viewport(o),q.updateMatrices(G,V),n=q.getFrustum(),S(D,U,q.camera,G,this.type)}q.isPointLightShadow!==!0&&this.type===fn&&y(q,U),q.needsUpdate=!1}h=this.type,p.needsUpdate=!1,i.setRenderTarget(E,w,N)};function y(C,D){const U=t.update(_);m.defines.VSM_SAMPLES!==C.blurSamples&&(m.defines.VSM_SAMPLES=C.blurSamples,u.defines.VSM_SAMPLES=C.blurSamples,m.needsUpdate=!0,u.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new qn(r.x,r.y)),m.uniforms.shadow_pass.value=C.map.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(D,null,U,m,_,null),u.uniforms.shadow_pass.value=C.mapPass.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(D,null,U,u,_,null)}function b(C,D,U,E){let w=null;const N=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(N!==void 0)w=N;else if(w=U.isPointLight===!0?c:a,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const T=w.uuid,F=D.uuid;let v=l[T];v===void 0&&(v={},l[T]=v);let z=v[F];z===void 0&&(z=w.clone(),v[F]=z,D.addEventListener("dispose",A)),w=z}if(w.visible=D.visible,w.wireframe=D.wireframe,E===fn?w.side=D.shadowSide!==null?D.shadowSide:D.side:w.side=D.shadowSide!==null?D.shadowSide:f[D.side],w.alphaMap=D.alphaMap,w.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,w.map=D.map,w.clipShadows=D.clipShadows,w.clippingPlanes=D.clippingPlanes,w.clipIntersection=D.clipIntersection,w.displacementMap=D.displacementMap,w.displacementScale=D.displacementScale,w.displacementBias=D.displacementBias,w.wireframeLinewidth=D.wireframeLinewidth,w.linewidth=D.linewidth,U.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const T=i.properties.get(w);T.light=U}return w}function S(C,D,U,E,w){if(C.visible===!1)return;if(C.layers.test(D.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&w===fn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);const F=t.update(C),v=C.material;if(Array.isArray(v)){const z=F.groups;for(let Y=0,G=z.length;Y<G;Y++){const q=z[Y],Q=v[q.materialIndex];if(Q&&Q.visible){const ct=b(C,Q,E,w);C.onBeforeShadow(i,C,D,U,F,ct,q),i.renderBufferDirect(U,null,F,ct,C,q),C.onAfterShadow(i,C,D,U,F,ct,q)}}}else if(v.visible){const z=b(C,v,E,w);C.onBeforeShadow(i,C,D,U,F,z,null),i.renderBufferDirect(U,null,F,z,C,null),C.onAfterShadow(i,C,D,U,F,z,null)}}const T=C.children;for(let F=0,v=T.length;F<v;F++)S(T[F],D,U,E,w)}function A(C){C.target.removeEventListener("dispose",A);for(const U in l){const E=l[U],w=C.target.uuid;w in E&&(E[w].dispose(),delete E[w])}}}const Yp={[ws]:Ts,[As]:Ps,[Rs]:Ds,[vi]:Cs,[Ts]:ws,[Ps]:As,[Ds]:Rs,[Cs]:vi};function qp(i,t){function e(){let H=!1;const _t=new ie;let xt=null;const Ct=new ie(0,0,0,0);return{setMask:function(pt){xt!==pt&&!H&&(i.colorMask(pt,pt,pt,pt),xt=pt)},setLocked:function(pt){H=pt},setClear:function(pt,dt,Ut,Gt,ae){ae===!0&&(pt*=Gt,dt*=Gt,Ut*=Gt),_t.set(pt,dt,Ut,Gt),Ct.equals(_t)===!1&&(i.clearColor(pt,dt,Ut,Gt),Ct.copy(_t))},reset:function(){H=!1,xt=null,Ct.set(-1,0,0,0)}}}function n(){let H=!1,_t=!1,xt=null,Ct=null,pt=null;return{setReversed:function(dt){if(_t!==dt){const Ut=t.get("EXT_clip_control");dt?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),_t=dt;const Gt=pt;pt=null,this.setClear(Gt)}},getReversed:function(){return _t},setTest:function(dt){dt?lt(i.DEPTH_TEST):ft(i.DEPTH_TEST)},setMask:function(dt){xt!==dt&&!H&&(i.depthMask(dt),xt=dt)},setFunc:function(dt){if(_t&&(dt=Yp[dt]),Ct!==dt){switch(dt){case ws:i.depthFunc(i.NEVER);break;case Ts:i.depthFunc(i.ALWAYS);break;case As:i.depthFunc(i.LESS);break;case vi:i.depthFunc(i.LEQUAL);break;case Rs:i.depthFunc(i.EQUAL);break;case Cs:i.depthFunc(i.GEQUAL);break;case Ps:i.depthFunc(i.GREATER);break;case Ds:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ct=dt}},setLocked:function(dt){H=dt},setClear:function(dt){pt!==dt&&(_t&&(dt=1-dt),i.clearDepth(dt),pt=dt)},reset:function(){H=!1,xt=null,Ct=null,pt=null,_t=!1}}}function r(){let H=!1,_t=null,xt=null,Ct=null,pt=null,dt=null,Ut=null,Gt=null,ae=null;return{setTest:function(Qt){H||(Qt?lt(i.STENCIL_TEST):ft(i.STENCIL_TEST))},setMask:function(Qt){_t!==Qt&&!H&&(i.stencilMask(Qt),_t=Qt)},setFunc:function(Qt,an,Ke){(xt!==Qt||Ct!==an||pt!==Ke)&&(i.stencilFunc(Qt,an,Ke),xt=Qt,Ct=an,pt=Ke)},setOp:function(Qt,an,Ke){(dt!==Qt||Ut!==an||Gt!==Ke)&&(i.stencilOp(Qt,an,Ke),dt=Qt,Ut=an,Gt=Ke)},setLocked:function(Qt){H=Qt},setClear:function(Qt){ae!==Qt&&(i.clearStencil(Qt),ae=Qt)},reset:function(){H=!1,_t=null,xt=null,Ct=null,pt=null,dt=null,Ut=null,Gt=null,ae=null}}}const s=new e,o=new n,a=new r,c=new WeakMap,l=new WeakMap;let d={},f={},m=new WeakMap,u=[],g=null,_=!1,p=null,h=null,y=null,b=null,S=null,A=null,C=null,D=new qt(0,0,0),U=0,E=!1,w=null,N=null,T=null,F=null,v=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,G=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(q)[1]),Y=G>=1):q.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Y=G>=2);let Q=null,ct={};const V=i.getParameter(i.SCISSOR_BOX),W=i.getParameter(i.VIEWPORT),yt=new ie().fromArray(V),mt=new ie().fromArray(W);function ut(H,_t,xt,Ct){const pt=new Uint8Array(4),dt=i.createTexture();i.bindTexture(H,dt),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ut=0;Ut<xt;Ut++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(_t,0,i.RGBA,1,1,Ct,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(_t+Ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return dt}const st={};st[i.TEXTURE_2D]=ut(i.TEXTURE_2D,i.TEXTURE_2D,1),st[i.TEXTURE_CUBE_MAP]=ut(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[i.TEXTURE_2D_ARRAY]=ut(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),st[i.TEXTURE_3D]=ut(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),lt(i.DEPTH_TEST),o.setFunc(vi),X(!1),L(Xa),lt(i.CULL_FACE),x(Tn);function lt(H){d[H]!==!0&&(i.enable(H),d[H]=!0)}function ft(H){d[H]!==!1&&(i.disable(H),d[H]=!1)}function St(H,_t){return f[H]!==_t?(i.bindFramebuffer(H,_t),f[H]=_t,H===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=_t),H===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=_t),!0):!1}function wt(H,_t){let xt=u,Ct=!1;if(H){xt=m.get(_t),xt===void 0&&(xt=[],m.set(_t,xt));const pt=H.textures;if(xt.length!==pt.length||xt[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,Ut=pt.length;dt<Ut;dt++)xt[dt]=i.COLOR_ATTACHMENT0+dt;xt.length=pt.length,Ct=!0}}else xt[0]!==i.BACK&&(xt[0]=i.BACK,Ct=!0);Ct&&i.drawBuffers(xt)}function Nt(H){return g!==H?(i.useProgram(H),g=H,!0):!1}const re={[Hn]:i.FUNC_ADD,[Wl]:i.FUNC_SUBTRACT,[Xl]:i.FUNC_REVERSE_SUBTRACT};re[Yl]=i.MIN,re[ql]=i.MAX;const k={[jl]:i.ZERO,[Zl]:i.ONE,[Kl]:i.SRC_COLOR,[Es]:i.SRC_ALPHA,[nc]:i.SRC_ALPHA_SATURATE,[tc]:i.DST_COLOR,[Jl]:i.DST_ALPHA,[$l]:i.ONE_MINUS_SRC_COLOR,[bs]:i.ONE_MINUS_SRC_ALPHA,[ec]:i.ONE_MINUS_DST_COLOR,[Ql]:i.ONE_MINUS_DST_ALPHA,[ic]:i.CONSTANT_COLOR,[rc]:i.ONE_MINUS_CONSTANT_COLOR,[sc]:i.CONSTANT_ALPHA,[ac]:i.ONE_MINUS_CONSTANT_ALPHA};function x(H,_t,xt,Ct,pt,dt,Ut,Gt,ae,Qt){if(H===Tn){_===!0&&(ft(i.BLEND),_=!1);return}if(_===!1&&(lt(i.BLEND),_=!0),H!==Gl){if(H!==p||Qt!==E){if((h!==Hn||S!==Hn)&&(i.blendEquation(i.FUNC_ADD),h=Hn,S=Hn),Qt)switch(H){case _i:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ya:i.blendFunc(i.ONE,i.ONE);break;case qa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ja:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case _i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ya:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case qa:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ja:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}y=null,b=null,A=null,C=null,D.set(0,0,0),U=0,p=H,E=Qt}return}pt=pt||_t,dt=dt||xt,Ut=Ut||Ct,(_t!==h||pt!==S)&&(i.blendEquationSeparate(re[_t],re[pt]),h=_t,S=pt),(xt!==y||Ct!==b||dt!==A||Ut!==C)&&(i.blendFuncSeparate(k[xt],k[Ct],k[dt],k[Ut]),y=xt,b=Ct,A=dt,C=Ut),(Gt.equals(D)===!1||ae!==U)&&(i.blendColor(Gt.r,Gt.g,Gt.b,ae),D.copy(Gt),U=ae),p=H,E=!1}function et(H,_t){H.side===Qe?ft(i.CULL_FACE):lt(i.CULL_FACE);let xt=H.side===we;_t&&(xt=!xt),X(xt),H.blending===_i&&H.transparent===!1?x(Tn):x(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),s.setMask(H.colorWrite);const Ct=H.stencilWrite;a.setTest(Ct),Ct&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),B(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function X(H){w!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),w=H)}function L(H){H!==zl?(lt(i.CULL_FACE),H!==N&&(H===Xa?i.cullFace(i.BACK):H===Hl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ft(i.CULL_FACE),N=H}function I(H){H!==T&&(Y&&i.lineWidth(H),T=H)}function B(H,_t,xt){H?(lt(i.POLYGON_OFFSET_FILL),(F!==_t||v!==xt)&&(i.polygonOffset(_t,xt),F=_t,v=xt)):ft(i.POLYGON_OFFSET_FILL)}function nt(H){H?lt(i.SCISSOR_TEST):ft(i.SCISSOR_TEST)}function ot(H){H===void 0&&(H=i.TEXTURE0+z-1),Q!==H&&(i.activeTexture(H),Q=H)}function j(H,_t,xt){xt===void 0&&(Q===null?xt=i.TEXTURE0+z-1:xt=Q);let Ct=ct[xt];Ct===void 0&&(Ct={type:void 0,texture:void 0},ct[xt]=Ct),(Ct.type!==H||Ct.texture!==_t)&&(Q!==xt&&(i.activeTexture(xt),Q=xt),i.bindTexture(H,_t||st[H]),Ct.type=H,Ct.texture=_t)}function R(){const H=ct[Q];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function M(){try{i.compressedTexImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function K(){try{i.texSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function at(){try{i.texSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function tt(){try{i.compressedTexSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function At(){try{i.compressedTexSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function vt(){try{i.texStorage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Rt(){try{i.texStorage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Lt(){try{i.texImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ht(){try{i.texImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Mt(H){yt.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),yt.copy(H))}function Ot(H){mt.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),mt.copy(H))}function Pt(H,_t){let xt=l.get(_t);xt===void 0&&(xt=new WeakMap,l.set(_t,xt));let Ct=xt.get(H);Ct===void 0&&(Ct=i.getUniformBlockIndex(_t,H.name),xt.set(H,Ct))}function Et(H,_t){const Ct=l.get(_t).get(H);c.get(_t)!==Ct&&(i.uniformBlockBinding(_t,Ct,H.__bindingPointIndex),c.set(_t,Ct))}function Vt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},Q=null,ct={},f={},m=new WeakMap,u=[],g=null,_=!1,p=null,h=null,y=null,b=null,S=null,A=null,C=null,D=new qt(0,0,0),U=0,E=!1,w=null,N=null,T=null,F=null,v=null,yt.set(0,0,i.canvas.width,i.canvas.height),mt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:lt,disable:ft,bindFramebuffer:St,drawBuffers:wt,useProgram:Nt,setBlending:x,setMaterial:et,setFlipSided:X,setCullFace:L,setLineWidth:I,setPolygonOffset:B,setScissorTest:nt,activeTexture:ot,bindTexture:j,unbindTexture:R,compressedTexImage2D:M,compressedTexImage3D:O,texImage2D:Lt,texImage3D:ht,updateUBOMapping:Pt,uniformBlockBinding:Et,texStorage2D:vt,texStorage3D:Rt,texSubImage2D:K,texSubImage3D:at,compressedTexSubImage2D:tt,compressedTexSubImage3D:At,scissor:Mt,viewport:Ot,reset:Vt}}function jp(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ht,d=new WeakMap;let f;const m=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return u?new OffscreenCanvas(R,M):Nr("canvas")}function _(R,M,O){let K=1;const at=j(R);if((at.width>O||at.height>O)&&(K=O/Math.max(at.width,at.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const tt=Math.floor(K*at.width),At=Math.floor(K*at.height);f===void 0&&(f=g(tt,At));const vt=M?g(tt,At):f;return vt.width=tt,vt.height=At,vt.getContext("2d").drawImage(R,0,0,tt,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+tt+"x"+At+")."),vt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),R;return R}function p(R){return R.generateMipmaps}function h(R){i.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(R,M,O,K,at=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let tt=M;if(M===i.RED&&(O===i.FLOAT&&(tt=i.R32F),O===i.HALF_FLOAT&&(tt=i.R16F),O===i.UNSIGNED_BYTE&&(tt=i.R8)),M===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(tt=i.R8UI),O===i.UNSIGNED_SHORT&&(tt=i.R16UI),O===i.UNSIGNED_INT&&(tt=i.R32UI),O===i.BYTE&&(tt=i.R8I),O===i.SHORT&&(tt=i.R16I),O===i.INT&&(tt=i.R32I)),M===i.RG&&(O===i.FLOAT&&(tt=i.RG32F),O===i.HALF_FLOAT&&(tt=i.RG16F),O===i.UNSIGNED_BYTE&&(tt=i.RG8)),M===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(tt=i.RG8UI),O===i.UNSIGNED_SHORT&&(tt=i.RG16UI),O===i.UNSIGNED_INT&&(tt=i.RG32UI),O===i.BYTE&&(tt=i.RG8I),O===i.SHORT&&(tt=i.RG16I),O===i.INT&&(tt=i.RG32I)),M===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),O===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),O===i.UNSIGNED_INT&&(tt=i.RGB32UI),O===i.BYTE&&(tt=i.RGB8I),O===i.SHORT&&(tt=i.RGB16I),O===i.INT&&(tt=i.RGB32I)),M===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),O===i.UNSIGNED_INT&&(tt=i.RGBA32UI),O===i.BYTE&&(tt=i.RGBA8I),O===i.SHORT&&(tt=i.RGBA16I),O===i.INT&&(tt=i.RGBA32I)),M===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(tt=i.R11F_G11F_B10F)),M===i.RGBA){const At=at?Ir:$t.getTransfer(K);O===i.FLOAT&&(tt=i.RGBA32F),O===i.HALF_FLOAT&&(tt=i.RGBA16F),O===i.UNSIGNED_BYTE&&(tt=At===ee?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function S(R,M){let O;return R?M===null||M===Xn||M===Xi?O=i.DEPTH24_STENCIL8:M===nn?O=i.DEPTH32F_STENCIL8:M===Wi&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Xn||M===Xi?O=i.DEPTH_COMPONENT24:M===nn?O=i.DEPTH_COMPONENT32F:M===Wi&&(O=i.DEPTH_COMPONENT16),O}function A(R,M){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Fe&&R.minFilter!==en?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function C(R){const M=R.target;M.removeEventListener("dispose",C),U(M),M.isVideoTexture&&d.delete(M)}function D(R){const M=R.target;M.removeEventListener("dispose",D),w(M)}function U(R){const M=n.get(R);if(M.__webglInit===void 0)return;const O=R.source,K=m.get(O);if(K){const at=K[M.__cacheKey];at.usedTimes--,at.usedTimes===0&&E(R),Object.keys(K).length===0&&m.delete(O)}n.remove(R)}function E(R){const M=n.get(R);i.deleteTexture(M.__webglTexture);const O=R.source,K=m.get(O);delete K[M.__cacheKey],o.memory.textures--}function w(R){const M=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let at=0;at<M.__webglFramebuffer[K].length;at++)i.deleteFramebuffer(M.__webglFramebuffer[K][at]);else i.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)i.deleteFramebuffer(M.__webglFramebuffer[K]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const O=R.textures;for(let K=0,at=O.length;K<at;K++){const tt=n.get(O[K]);tt.__webglTexture&&(i.deleteTexture(tt.__webglTexture),o.memory.textures--),n.remove(O[K])}n.remove(R)}let N=0;function T(){N=0}function F(){const R=N;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),N+=1,R}function v(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function z(R,M){const O=n.get(R);if(R.isVideoTexture&&nt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&O.__version!==R.version){const K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(O,R,M);return}}else R.isExternalTexture&&(O.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+M)}function Y(R,M){const O=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){st(O,R,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+M)}function G(R,M){const O=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){st(O,R,M);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+M)}function q(R,M){const O=n.get(R);if(R.version>0&&O.__version!==R.version){lt(O,R,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+M)}const Q={[Us]:i.REPEAT,[Gn]:i.CLAMP_TO_EDGE,[Ns]:i.MIRRORED_REPEAT},ct={[Fe]:i.NEAREST,[mc]:i.NEAREST_MIPMAP_NEAREST,[er]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[Vr]:i.LINEAR_MIPMAP_NEAREST,[Wn]:i.LINEAR_MIPMAP_LINEAR},V={[xc]:i.NEVER,[wc]:i.ALWAYS,[yc]:i.LESS,[hl]:i.LEQUAL,[Sc]:i.EQUAL,[bc]:i.GEQUAL,[Mc]:i.GREATER,[Ec]:i.NOTEQUAL};function W(R,M){if(M.type===nn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===en||M.magFilter===Vr||M.magFilter===er||M.magFilter===Wn||M.minFilter===en||M.minFilter===Vr||M.minFilter===er||M.minFilter===Wn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Q[M.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Q[M.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Q[M.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ct[M.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ct[M.minFilter]),M.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,V[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Fe||M.minFilter!==er&&M.minFilter!==Wn||M.type===nn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function yt(R,M){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",C));const K=M.source;let at=m.get(K);at===void 0&&(at={},m.set(K,at));const tt=v(M);if(tt!==R.__cacheKey){at[tt]===void 0&&(at[tt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),at[tt].usedTimes++;const At=at[R.__cacheKey];At!==void 0&&(at[R.__cacheKey].usedTimes--,At.usedTimes===0&&E(M)),R.__cacheKey=tt,R.__webglTexture=at[tt].texture}return O}function mt(R,M,O){return Math.floor(Math.floor(R/O)/M)}function ut(R,M,O,K){const tt=R.updateRanges;if(tt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,O,K,M.data);else{tt.sort((ht,Mt)=>ht.start-Mt.start);let At=0;for(let ht=1;ht<tt.length;ht++){const Mt=tt[At],Ot=tt[ht],Pt=Mt.start+Mt.count,Et=mt(Ot.start,M.width,4),Vt=mt(Mt.start,M.width,4);Ot.start<=Pt+1&&Et===Vt&&mt(Ot.start+Ot.count-1,M.width,4)===Et?Mt.count=Math.max(Mt.count,Ot.start+Ot.count-Mt.start):(++At,tt[At]=Ot)}tt.length=At+1;const vt=i.getParameter(i.UNPACK_ROW_LENGTH),Rt=i.getParameter(i.UNPACK_SKIP_PIXELS),Lt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let ht=0,Mt=tt.length;ht<Mt;ht++){const Ot=tt[ht],Pt=Math.floor(Ot.start/4),Et=Math.ceil(Ot.count/4),Vt=Pt%M.width,H=Math.floor(Pt/M.width),_t=Et,xt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Vt),i.pixelStorei(i.UNPACK_SKIP_ROWS,H),e.texSubImage2D(i.TEXTURE_2D,0,Vt,H,_t,xt,O,K,M.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,vt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Rt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Lt)}}function st(R,M,O){let K=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=i.TEXTURE_3D);const at=yt(R,M),tt=M.source;e.bindTexture(K,R.__webglTexture,i.TEXTURE0+O);const At=n.get(tt);if(tt.version!==At.__version||at===!0){e.activeTexture(i.TEXTURE0+O);const vt=$t.getPrimaries($t.workingColorSpace),Rt=M.colorSpace===bn?null:$t.getPrimaries(M.colorSpace),Lt=M.colorSpace===bn||vt===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let ht=_(M.image,!1,r.maxTextureSize);ht=ot(M,ht);const Mt=s.convert(M.format,M.colorSpace),Ot=s.convert(M.type);let Pt=b(M.internalFormat,Mt,Ot,M.colorSpace,M.isVideoTexture);W(K,M);let Et;const Vt=M.mipmaps,H=M.isVideoTexture!==!0,_t=At.__version===void 0||at===!0,xt=tt.dataReady,Ct=A(M,ht);if(M.isDepthTexture)Pt=S(M.format===qi,M.type),_t&&(H?e.texStorage2D(i.TEXTURE_2D,1,Pt,ht.width,ht.height):e.texImage2D(i.TEXTURE_2D,0,Pt,ht.width,ht.height,0,Mt,Ot,null));else if(M.isDataTexture)if(Vt.length>0){H&&_t&&e.texStorage2D(i.TEXTURE_2D,Ct,Pt,Vt[0].width,Vt[0].height);for(let pt=0,dt=Vt.length;pt<dt;pt++)Et=Vt[pt],H?xt&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,Et.width,Et.height,Mt,Ot,Et.data):e.texImage2D(i.TEXTURE_2D,pt,Pt,Et.width,Et.height,0,Mt,Ot,Et.data);M.generateMipmaps=!1}else H?(_t&&e.texStorage2D(i.TEXTURE_2D,Ct,Pt,ht.width,ht.height),xt&&ut(M,ht,Mt,Ot)):e.texImage2D(i.TEXTURE_2D,0,Pt,ht.width,ht.height,0,Mt,Ot,ht.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){H&&_t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,Pt,Vt[0].width,Vt[0].height,ht.depth);for(let pt=0,dt=Vt.length;pt<dt;pt++)if(Et=Vt[pt],M.format!==qe)if(Mt!==null)if(H){if(xt)if(M.layerUpdates.size>0){const Ut=wo(Et.width,Et.height,M.format,M.type);for(const Gt of M.layerUpdates){const ae=Et.data.subarray(Gt*Ut/Et.data.BYTES_PER_ELEMENT,(Gt+1)*Ut/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,Gt,Et.width,Et.height,1,Mt,ae)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,Et.width,Et.height,ht.depth,Mt,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pt,Pt,Et.width,Et.height,ht.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?xt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,Et.width,Et.height,ht.depth,Mt,Ot,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,pt,Pt,Et.width,Et.height,ht.depth,0,Mt,Ot,Et.data)}else{H&&_t&&e.texStorage2D(i.TEXTURE_2D,Ct,Pt,Vt[0].width,Vt[0].height);for(let pt=0,dt=Vt.length;pt<dt;pt++)Et=Vt[pt],M.format!==qe?Mt!==null?H?xt&&e.compressedTexSubImage2D(i.TEXTURE_2D,pt,0,0,Et.width,Et.height,Mt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,pt,Pt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?xt&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,Et.width,Et.height,Mt,Ot,Et.data):e.texImage2D(i.TEXTURE_2D,pt,Pt,Et.width,Et.height,0,Mt,Ot,Et.data)}else if(M.isDataArrayTexture)if(H){if(_t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,Pt,ht.width,ht.height,ht.depth),xt)if(M.layerUpdates.size>0){const pt=wo(ht.width,ht.height,M.format,M.type);for(const dt of M.layerUpdates){const Ut=ht.data.subarray(dt*pt/ht.data.BYTES_PER_ELEMENT,(dt+1)*pt/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,dt,ht.width,ht.height,1,Mt,Ot,Ut)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Mt,Ot,ht.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Pt,ht.width,ht.height,ht.depth,0,Mt,Ot,ht.data);else if(M.isData3DTexture)H?(_t&&e.texStorage3D(i.TEXTURE_3D,Ct,Pt,ht.width,ht.height,ht.depth),xt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Mt,Ot,ht.data)):e.texImage3D(i.TEXTURE_3D,0,Pt,ht.width,ht.height,ht.depth,0,Mt,Ot,ht.data);else if(M.isFramebufferTexture){if(_t)if(H)e.texStorage2D(i.TEXTURE_2D,Ct,Pt,ht.width,ht.height);else{let pt=ht.width,dt=ht.height;for(let Ut=0;Ut<Ct;Ut++)e.texImage2D(i.TEXTURE_2D,Ut,Pt,pt,dt,0,Mt,Ot,null),pt>>=1,dt>>=1}}else if(Vt.length>0){if(H&&_t){const pt=j(Vt[0]);e.texStorage2D(i.TEXTURE_2D,Ct,Pt,pt.width,pt.height)}for(let pt=0,dt=Vt.length;pt<dt;pt++)Et=Vt[pt],H?xt&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,Mt,Ot,Et):e.texImage2D(i.TEXTURE_2D,pt,Pt,Mt,Ot,Et);M.generateMipmaps=!1}else if(H){if(_t){const pt=j(ht);e.texStorage2D(i.TEXTURE_2D,Ct,Pt,pt.width,pt.height)}xt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,Ot,ht)}else e.texImage2D(i.TEXTURE_2D,0,Pt,Mt,Ot,ht);p(M)&&h(K),At.__version=tt.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function lt(R,M,O){if(M.image.length!==6)return;const K=yt(R,M),at=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+O);const tt=n.get(at);if(at.version!==tt.__version||K===!0){e.activeTexture(i.TEXTURE0+O);const At=$t.getPrimaries($t.workingColorSpace),vt=M.colorSpace===bn?null:$t.getPrimaries(M.colorSpace),Rt=M.colorSpace===bn||At===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const Lt=M.isCompressedTexture||M.image[0].isCompressedTexture,ht=M.image[0]&&M.image[0].isDataTexture,Mt=[];for(let dt=0;dt<6;dt++)!Lt&&!ht?Mt[dt]=_(M.image[dt],!0,r.maxCubemapSize):Mt[dt]=ht?M.image[dt].image:M.image[dt],Mt[dt]=ot(M,Mt[dt]);const Ot=Mt[0],Pt=s.convert(M.format,M.colorSpace),Et=s.convert(M.type),Vt=b(M.internalFormat,Pt,Et,M.colorSpace),H=M.isVideoTexture!==!0,_t=tt.__version===void 0||K===!0,xt=at.dataReady;let Ct=A(M,Ot);W(i.TEXTURE_CUBE_MAP,M);let pt;if(Lt){H&&_t&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,Vt,Ot.width,Ot.height);for(let dt=0;dt<6;dt++){pt=Mt[dt].mipmaps;for(let Ut=0;Ut<pt.length;Ut++){const Gt=pt[Ut];M.format!==qe?Pt!==null?H?xt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ut,0,0,Gt.width,Gt.height,Pt,Gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ut,Vt,Gt.width,Gt.height,0,Gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ut,0,0,Gt.width,Gt.height,Pt,Et,Gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ut,Vt,Gt.width,Gt.height,0,Pt,Et,Gt.data)}}}else{if(pt=M.mipmaps,H&&_t){pt.length>0&&Ct++;const dt=j(Mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,Vt,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(ht){H?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Mt[dt].width,Mt[dt].height,Pt,Et,Mt[dt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,Vt,Mt[dt].width,Mt[dt].height,0,Pt,Et,Mt[dt].data);for(let Ut=0;Ut<pt.length;Ut++){const ae=pt[Ut].image[dt].image;H?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ut+1,0,0,ae.width,ae.height,Pt,Et,ae.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ut+1,Vt,ae.width,ae.height,0,Pt,Et,ae.data)}}else{H?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Pt,Et,Mt[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,Vt,Pt,Et,Mt[dt]);for(let Ut=0;Ut<pt.length;Ut++){const Gt=pt[Ut];H?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ut+1,0,0,Pt,Et,Gt.image[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ut+1,Vt,Pt,Et,Gt.image[dt])}}}p(M)&&h(i.TEXTURE_CUBE_MAP),tt.__version=at.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ft(R,M,O,K,at,tt){const At=s.convert(O.format,O.colorSpace),vt=s.convert(O.type),Rt=b(O.internalFormat,At,vt,O.colorSpace),Lt=n.get(M),ht=n.get(O);if(ht.__renderTarget=M,!Lt.__hasExternalTextures){const Mt=Math.max(1,M.width>>tt),Ot=Math.max(1,M.height>>tt);at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?e.texImage3D(at,tt,Rt,Mt,Ot,M.depth,0,At,vt,null):e.texImage2D(at,tt,Rt,Mt,Ot,0,At,vt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),B(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,at,ht.__webglTexture,0,I(M)):(at===i.TEXTURE_2D||at>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,at,ht.__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function St(R,M,O){if(i.bindRenderbuffer(i.RENDERBUFFER,R),M.depthBuffer){const K=M.depthTexture,at=K&&K.isDepthTexture?K.type:null,tt=S(M.stencilBuffer,at),At=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=I(M);B(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt,tt,M.width,M.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,tt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,tt,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,R)}else{const K=M.textures;for(let at=0;at<K.length;at++){const tt=K[at],At=s.convert(tt.format,tt.colorSpace),vt=s.convert(tt.type),Rt=b(tt.internalFormat,At,vt,tt.colorSpace),Lt=I(M);O&&B(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,Rt,M.width,M.height):B(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Lt,Rt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Rt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function wt(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(M.depthTexture);K.__renderTarget=M,(!K.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),z(M.depthTexture,0);const at=K.__webglTexture,tt=I(M);if(M.depthTexture.format===Yi)B(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0);else if(M.depthTexture.format===qi)B(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function Nt(R){const M=n.get(R),O=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const K=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),K){const at=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,K.removeEventListener("dispose",at)};K.addEventListener("dispose",at),M.__depthDisposeCallback=at}M.__boundDepthTexture=K}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const K=R.texture.mipmaps;K&&K.length>0?wt(M.__webglFramebuffer[0],R):wt(M.__webglFramebuffer,R)}else if(O){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]===void 0)M.__webglDepthbuffer[K]=i.createRenderbuffer(),St(M.__webglDepthbuffer[K],R,!1);else{const at=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=M.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,tt)}}else{const K=R.texture.mipmaps;if(K&&K.length>0?e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),St(M.__webglDepthbuffer,R,!1);else{const at=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,tt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function re(R,M,O){const K=n.get(R);M!==void 0&&ft(K.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Nt(R)}function k(R){const M=R.texture,O=n.get(R),K=n.get(M);R.addEventListener("dispose",D);const at=R.textures,tt=R.isWebGLCubeRenderTarget===!0,At=at.length>1;if(At||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=M.version,o.memory.textures++),tt){O.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[vt]=[];for(let Rt=0;Rt<M.mipmaps.length;Rt++)O.__webglFramebuffer[vt][Rt]=i.createFramebuffer()}else O.__webglFramebuffer[vt]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let vt=0;vt<M.mipmaps.length;vt++)O.__webglFramebuffer[vt]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(At)for(let vt=0,Rt=at.length;vt<Rt;vt++){const Lt=n.get(at[vt]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&B(R)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let vt=0;vt<at.length;vt++){const Rt=at[vt];O.__webglColorRenderbuffer[vt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[vt]);const Lt=s.convert(Rt.format,Rt.colorSpace),ht=s.convert(Rt.type),Mt=b(Rt.internalFormat,Lt,ht,Rt.colorSpace,R.isXRRenderTarget===!0),Ot=I(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,Mt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,O.__webglColorRenderbuffer[vt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),St(O.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),W(i.TEXTURE_CUBE_MAP,M);for(let vt=0;vt<6;vt++)if(M.mipmaps&&M.mipmaps.length>0)for(let Rt=0;Rt<M.mipmaps.length;Rt++)ft(O.__webglFramebuffer[vt][Rt],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt);else ft(O.__webglFramebuffer[vt],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);p(M)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let vt=0,Rt=at.length;vt<Rt;vt++){const Lt=at[vt],ht=n.get(Lt);let Mt=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Mt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Mt,ht.__webglTexture),W(Mt,Lt),ft(O.__webglFramebuffer,R,Lt,i.COLOR_ATTACHMENT0+vt,Mt,0),p(Lt)&&h(Mt)}e.unbindTexture()}else{let vt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(vt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,K.__webglTexture),W(vt,M),M.mipmaps&&M.mipmaps.length>0)for(let Rt=0;Rt<M.mipmaps.length;Rt++)ft(O.__webglFramebuffer[Rt],R,M,i.COLOR_ATTACHMENT0,vt,Rt);else ft(O.__webglFramebuffer,R,M,i.COLOR_ATTACHMENT0,vt,0);p(M)&&h(vt),e.unbindTexture()}R.depthBuffer&&Nt(R)}function x(R){const M=R.textures;for(let O=0,K=M.length;O<K;O++){const at=M[O];if(p(at)){const tt=y(R),At=n.get(at).__webglTexture;e.bindTexture(tt,At),h(tt),e.unbindTexture()}}}const et=[],X=[];function L(R){if(R.samples>0){if(B(R)===!1){const M=R.textures,O=R.width,K=R.height;let at=i.COLOR_BUFFER_BIT;const tt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(R),vt=M.length>1;if(vt)for(let Lt=0;Lt<M.length;Lt++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer);const Rt=R.texture.mipmaps;Rt&&Rt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Lt=0;Lt<M.length;Lt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(at|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(at|=i.STENCIL_BUFFER_BIT)),vt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[Lt]);const ht=n.get(M[Lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ht,0)}i.blitFramebuffer(0,0,O,K,0,0,O,K,at,i.NEAREST),c===!0&&(et.length=0,X.length=0,et.push(i.COLOR_ATTACHMENT0+Lt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(et.push(tt),X.push(tt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,X)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),vt)for(let Lt=0;Lt<M.length;Lt++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,At.__webglColorRenderbuffer[Lt]);const ht=n.get(M[Lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,ht,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const M=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function I(R){return Math.min(r.maxSamples,R.samples)}function B(R){const M=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function nt(R){const M=o.render.frame;d.get(R)!==M&&(d.set(R,M),R.update())}function ot(R,M){const O=R.colorSpace,K=R.format,at=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==Si&&O!==bn&&($t.getTransfer(O)===ee?(K!==qe||at!==sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}function j(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=T,this.setTexture2D=z,this.setTexture2DArray=Y,this.setTexture3D=G,this.setTextureCube=q,this.rebindTextures=re,this.setupRenderTarget=k,this.updateRenderTargetMipmap=x,this.updateMultisampleRenderTarget=L,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=B}function Zp(i,t){function e(n,r=bn){let s;const o=$t.getTransfer(r);if(n===sn)return i.UNSIGNED_BYTE;if(n===va)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===sl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===al)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===il)return i.BYTE;if(n===rl)return i.SHORT;if(n===Wi)return i.UNSIGNED_SHORT;if(n===ga)return i.INT;if(n===Xn)return i.UNSIGNED_INT;if(n===nn)return i.FLOAT;if(n===$i)return i.HALF_FLOAT;if(n===ol)return i.ALPHA;if(n===ll)return i.RGB;if(n===qe)return i.RGBA;if(n===Yi)return i.DEPTH_COMPONENT;if(n===qi)return i.DEPTH_STENCIL;if(n===ya)return i.RED;if(n===Sa)return i.RED_INTEGER;if(n===cl)return i.RG;if(n===Ma)return i.RG_INTEGER;if(n===Ea)return i.RGBA_INTEGER;if(n===Tr||n===Ar||n===Rr||n===Cr)if(o===ee)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Tr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ar)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Rr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Cr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Tr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ar)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Rr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Cr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fs||n===Os||n===Bs||n===ks)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Fs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Os)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Bs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ks)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zs||n===Hs||n===Vs)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===zs||n===Hs)return o===ee?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Vs)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Gs||n===Ws||n===Xs||n===Ys||n===qs||n===js||n===Zs||n===Ks||n===$s||n===Js||n===Qs||n===ta||n===ea||n===na)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Gs)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ws)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xs)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ys)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qs)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===js)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zs)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ks)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$s)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Js)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qs)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ta)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ea)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===na)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ia||n===ra||n===sa)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===ia)return o===ee?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ra)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===aa||n===oa||n===la||n===ca)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===aa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===oa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===la)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ca)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Kp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$p=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Jp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new bl(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Cn({vertexShader:Kp,fragmentShader:$p,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new de(new Or(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Qp extends jn{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,d=null,f=null,m=null,u=null,g=null;const _=typeof XRWebGLBinding<"u",p=new Jp,h={},y=e.getContextAttributes();let b=null,S=null;const A=[],C=[],D=new Ht;let U=null;const E=new Ne;E.viewport=new ie;const w=new Ne;w.viewport=new ie;const N=[E,w],T=new vh;let F=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let lt=A[st];return lt===void 0&&(lt=new hs,A[st]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(st){let lt=A[st];return lt===void 0&&(lt=new hs,A[st]=lt),lt.getGripSpace()},this.getHand=function(st){let lt=A[st];return lt===void 0&&(lt=new hs,A[st]=lt),lt.getHandSpace()};function z(st){const lt=C.indexOf(st.inputSource);if(lt===-1)return;const ft=A[lt];ft!==void 0&&(ft.update(st.inputSource,st.frame,l||o),ft.dispatchEvent({type:st.type,data:st.inputSource}))}function Y(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",G);for(let st=0;st<A.length;st++){const lt=C[st];lt!==null&&(C[st]=null,A[st].disconnect(lt))}F=null,v=null,p.reset();for(const st in h)delete h[st];t.setRenderTarget(b),u=null,m=null,f=null,r=null,S=null,ut.stop(),n.isPresenting=!1,t.setPixelRatio(U),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){s=st,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){a=st,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(st){l=st},this.getBaseLayer=function(){return m!==null?m:u},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(r,e)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(st){if(r=st,r!==null){if(b=t.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",G),y.xrCompatible!==!0&&await e.makeXRCompatible(),U=t.getPixelRatio(),t.getSize(D),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ft=null,St=null,wt=null;y.depth&&(wt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=y.stencil?qi:Yi,St=y.stencil?Xi:Xn);const Nt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:s};f=this.getBinding(),m=f.createProjectionLayer(Nt),r.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),S=new qn(m.textureWidth,m.textureHeight,{format:qe,type:sn,depthTexture:new El(m.textureWidth,m.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const ft={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(r,e,ft),r.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),S=new qn(u.framebufferWidth,u.framebufferHeight,{format:qe,type:sn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),ut.setContext(r),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function G(st){for(let lt=0;lt<st.removed.length;lt++){const ft=st.removed[lt],St=C.indexOf(ft);St>=0&&(C[St]=null,A[St].disconnect(ft))}for(let lt=0;lt<st.added.length;lt++){const ft=st.added[lt];let St=C.indexOf(ft);if(St===-1){for(let Nt=0;Nt<A.length;Nt++)if(Nt>=C.length){C.push(ft),St=Nt;break}else if(C[Nt]===null){C[Nt]=ft,St=Nt;break}if(St===-1)break}const wt=A[St];wt&&wt.connect(ft)}}const q=new $,Q=new $;function ct(st,lt,ft){q.setFromMatrixPosition(lt.matrixWorld),Q.setFromMatrixPosition(ft.matrixWorld);const St=q.distanceTo(Q),wt=lt.projectionMatrix.elements,Nt=ft.projectionMatrix.elements,re=wt[14]/(wt[10]-1),k=wt[14]/(wt[10]+1),x=(wt[9]+1)/wt[5],et=(wt[9]-1)/wt[5],X=(wt[8]-1)/wt[0],L=(Nt[8]+1)/Nt[0],I=re*X,B=re*L,nt=St/(-X+L),ot=nt*-X;if(lt.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(ot),st.translateZ(nt),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),wt[10]===-1)st.projectionMatrix.copy(lt.projectionMatrix),st.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const j=re+nt,R=k+nt,M=I-ot,O=B+(St-ot),K=x*k/R*j,at=et*k/R*j;st.projectionMatrix.makePerspective(M,O,K,at,j,R),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function V(st,lt){lt===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(lt.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(r===null)return;let lt=st.near,ft=st.far;p.texture!==null&&(p.depthNear>0&&(lt=p.depthNear),p.depthFar>0&&(ft=p.depthFar)),T.near=w.near=E.near=lt,T.far=w.far=E.far=ft,(F!==T.near||v!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),F=T.near,v=T.far),T.layers.mask=st.layers.mask|6,E.layers.mask=T.layers.mask&3,w.layers.mask=T.layers.mask&5;const St=st.parent,wt=T.cameras;V(T,St);for(let Nt=0;Nt<wt.length;Nt++)V(wt[Nt],St);wt.length===2?ct(T,E,w):T.projectionMatrix.copy(E.projectionMatrix),W(st,T,St)};function W(st,lt,ft){ft===null?st.matrix.copy(lt.matrixWorld):(st.matrix.copy(ft.matrixWorld),st.matrix.invert(),st.matrix.multiply(lt.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(lt.projectionMatrix),st.projectionMatrixInverse.copy(lt.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=ha*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(m===null&&u===null))return c},this.setFoveation=function(st){c=st,m!==null&&(m.fixedFoveation=st),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=st)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(T)},this.getCameraTexture=function(st){return h[st]};let yt=null;function mt(st,lt){if(d=lt.getViewerPose(l||o),g=lt,d!==null){const ft=d.views;u!==null&&(t.setRenderTargetFramebuffer(S,u.framebuffer),t.setRenderTarget(S));let St=!1;ft.length!==T.cameras.length&&(T.cameras.length=0,St=!0);for(let k=0;k<ft.length;k++){const x=ft[k];let et=null;if(u!==null)et=u.getViewport(x);else{const L=f.getViewSubImage(m,x);et=L.viewport,k===0&&(t.setRenderTargetTextures(S,L.colorTexture,L.depthStencilTexture),t.setRenderTarget(S))}let X=N[k];X===void 0&&(X=new Ne,X.layers.enable(k),X.viewport=new ie,N[k]=X),X.matrix.fromArray(x.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(x.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(et.x,et.y,et.width,et.height),k===0&&(T.matrix.copy(X.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),St===!0&&T.cameras.push(X)}const wt=r.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){f=n.getBinding();const k=f.getDepthInformation(ft[0]);k&&k.isValid&&k.texture&&p.init(k,r.renderState)}if(wt&&wt.includes("camera-access")&&_){t.state.unbindTexture(),f=n.getBinding();for(let k=0;k<ft.length;k++){const x=ft[k].camera;if(x){let et=h[x];et||(et=new bl,h[x]=et);const X=f.getCameraImage(x);et.sourceTexture=X}}}}for(let ft=0;ft<A.length;ft++){const St=C[ft],wt=A[ft];St!==null&&wt!==void 0&&wt.update(St,lt,l||o)}yt&&yt(st,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),g=null}const ut=new Al;ut.setAnimationLoop(mt),this.setAnimationLoop=function(st){yt=st},this.dispose=function(){}}}const Bn=new je,tm=new oe;function em(i,t){function e(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function n(p,h){h.color.getRGB(p.fogColor.value,xl(i)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,y,b,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),f(p,h)):h.isMeshPhongMaterial?(s(p,h),d(p,h)):h.isMeshStandardMaterial?(s(p,h),m(p,h),h.isMeshPhysicalMaterial&&u(p,h,S)):h.isMeshMatcapMaterial?(s(p,h),g(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),_(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?c(p,h,y,b):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,e(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===we&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,e(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===we&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,e(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,e(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const y=t.get(h),b=y.envMap,S=y.envMapRotation;b&&(p.envMap.value=b,Bn.copy(S),Bn.x*=-1,Bn.y*=-1,Bn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Bn.y*=-1,Bn.z*=-1),p.envMapRotation.value.setFromMatrix4(tm.makeRotationFromEuler(Bn)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function c(p,h,y,b){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*y,p.scale.value=b*.5,h.map&&(p.map.value=h.map,e(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function d(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function m(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function u(p,h,y){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===we&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function _(p,h){const y=t.get(h).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function nm(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,b){const S=b.program;n.uniformBlockBinding(y,S)}function l(y,b){let S=r[y.id];S===void 0&&(g(y),S=d(y),r[y.id]=S,y.addEventListener("dispose",p));const A=b.program;n.updateUBOMapping(y,A);const C=t.render.frame;s[y.id]!==C&&(m(y),s[y.id]=C)}function d(y){const b=f();y.__bindingPointIndex=b;const S=i.createBuffer(),A=y.__size,C=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,A,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(y){const b=r[y.id],S=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let C=0,D=S.length;C<D;C++){const U=Array.isArray(S[C])?S[C]:[S[C]];for(let E=0,w=U.length;E<w;E++){const N=U[E];if(u(N,C,E,A)===!0){const T=N.__offset,F=Array.isArray(N.value)?N.value:[N.value];let v=0;for(let z=0;z<F.length;z++){const Y=F[z],G=_(Y);typeof Y=="number"||typeof Y=="boolean"?(N.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,T+v,N.__data)):Y.isMatrix3?(N.__data[0]=Y.elements[0],N.__data[1]=Y.elements[1],N.__data[2]=Y.elements[2],N.__data[3]=0,N.__data[4]=Y.elements[3],N.__data[5]=Y.elements[4],N.__data[6]=Y.elements[5],N.__data[7]=0,N.__data[8]=Y.elements[6],N.__data[9]=Y.elements[7],N.__data[10]=Y.elements[8],N.__data[11]=0):(Y.toArray(N.__data,v),v+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,T,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(y,b,S,A){const C=y.value,D=b+"_"+S;if(A[D]===void 0)return typeof C=="number"||typeof C=="boolean"?A[D]=C:A[D]=C.clone(),!0;{const U=A[D];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return A[D]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function g(y){const b=y.uniforms;let S=0;const A=16;for(let D=0,U=b.length;D<U;D++){const E=Array.isArray(b[D])?b[D]:[b[D]];for(let w=0,N=E.length;w<N;w++){const T=E[w],F=Array.isArray(T.value)?T.value:[T.value];for(let v=0,z=F.length;v<z;v++){const Y=F[v],G=_(Y),q=S%A,Q=q%G.boundary,ct=q+Q;S+=Q,ct!==0&&A-ct<G.storage&&(S+=A-ct),T.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=S,S+=G.storage}}}const C=S%A;return C>0&&(S+=A-C),y.__size=S,y.__cache={},this}function _(y){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),b}function p(y){const b=y.target;b.removeEventListener("dispose",p);const S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function h(){for(const y in r)i.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:c,update:l,dispose:h}}class im{constructor(t={}){const{canvas:e=Rc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:m=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,h=null;const y=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=An,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let A=!1;this._outputColorSpace=Pe;let C=0,D=0,U=null,E=-1,w=null;const N=new ie,T=new ie;let F=null;const v=new qt(0);let z=0,Y=e.width,G=e.height,q=1,Q=null,ct=null;const V=new ie(0,0,Y,G),W=new ie(0,0,Y,G);let yt=!1;const mt=new Ta;let ut=!1,st=!1;const lt=new oe,ft=new $,St=new ie,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Nt=!1;function re(){return U===null?q:1}let k=n;function x(P,Z){return e.getContext(P,Z)}try{const P={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ma}`),e.addEventListener("webglcontextlost",xt,!1),e.addEventListener("webglcontextrestored",Ct,!1),e.addEventListener("webglcontextcreationerror",pt,!1),k===null){const Z="webgl2";if(k=x(Z,P),k===null)throw x(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let et,X,L,I,B,nt,ot,j,R,M,O,K,at,tt,At,vt,Rt,Lt,ht,Mt,Ot,Pt,Et,Vt;function H(){et=new ff(k),et.init(),Pt=new Zp(k,et),X=new af(k,et,t,Pt),L=new qp(k,et),X.reversedDepthBuffer&&m&&L.buffers.depth.setReversed(!0),I=new _f(k),B=new Up,nt=new jp(k,et,L,B,X,Pt,I),ot=new lf(S),j=new df(S),R=new Sh(k),Et=new rf(k,R),M=new pf(k,R,I,Et),O=new vf(k,M,R,I),ht=new gf(k,X,nt),vt=new of(B),K=new Ip(S,ot,j,et,X,Et,vt),at=new em(S,B),tt=new Fp,At=new Vp(et),Lt=new nf(S,ot,j,L,O,u,c),Rt=new Xp(S,O,X),Vt=new nm(k,I,X,L),Mt=new sf(k,et,I),Ot=new mf(k,et,I),I.programs=K.programs,S.capabilities=X,S.extensions=et,S.properties=B,S.renderLists=tt,S.shadowMap=Rt,S.state=L,S.info=I}H();const _t=new Qp(S,k);this.xr=_t,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const P=et.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=et.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(P){P!==void 0&&(q=P,this.setSize(Y,G,!1))},this.getSize=function(P){return P.set(Y,G)},this.setSize=function(P,Z,it=!0){if(_t.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=P,G=Z,e.width=Math.floor(P*q),e.height=Math.floor(Z*q),it===!0&&(e.style.width=P+"px",e.style.height=Z+"px"),this.setViewport(0,0,P,Z)},this.getDrawingBufferSize=function(P){return P.set(Y*q,G*q).floor()},this.setDrawingBufferSize=function(P,Z,it){Y=P,G=Z,q=it,e.width=Math.floor(P*it),e.height=Math.floor(Z*it),this.setViewport(0,0,P,Z)},this.getCurrentViewport=function(P){return P.copy(N)},this.getViewport=function(P){return P.copy(V)},this.setViewport=function(P,Z,it,rt){P.isVector4?V.set(P.x,P.y,P.z,P.w):V.set(P,Z,it,rt),L.viewport(N.copy(V).multiplyScalar(q).round())},this.getScissor=function(P){return P.copy(W)},this.setScissor=function(P,Z,it,rt){P.isVector4?W.set(P.x,P.y,P.z,P.w):W.set(P,Z,it,rt),L.scissor(T.copy(W).multiplyScalar(q).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(P){L.setScissorTest(yt=P)},this.setOpaqueSort=function(P){Q=P},this.setTransparentSort=function(P){ct=P},this.getClearColor=function(P){return P.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(P=!0,Z=!0,it=!0){let rt=0;if(P){let J=!1;if(U!==null){const gt=U.texture.format;J=gt===Ea||gt===Ma||gt===Sa}if(J){const gt=U.texture.type,Tt=gt===sn||gt===Xn||gt===Wi||gt===Xi||gt===va||gt===xa,It=Lt.getClearColor(),Dt=Lt.getClearAlpha(),kt=It.r,zt=It.g,Ft=It.b;Tt?(g[0]=kt,g[1]=zt,g[2]=Ft,g[3]=Dt,k.clearBufferuiv(k.COLOR,0,g)):(_[0]=kt,_[1]=zt,_[2]=Ft,_[3]=Dt,k.clearBufferiv(k.COLOR,0,_))}else rt|=k.COLOR_BUFFER_BIT}Z&&(rt|=k.DEPTH_BUFFER_BIT),it&&(rt|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xt,!1),e.removeEventListener("webglcontextrestored",Ct,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),Lt.dispose(),tt.dispose(),At.dispose(),B.dispose(),ot.dispose(),j.dispose(),O.dispose(),Et.dispose(),Vt.dispose(),K.dispose(),_t.dispose(),_t.removeEventListener("sessionstart",Ke),_t.removeEventListener("sessionend",ka),Dn.stop()};function xt(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const P=I.autoReset,Z=Rt.enabled,it=Rt.autoUpdate,rt=Rt.needsUpdate,J=Rt.type;H(),I.autoReset=P,Rt.enabled=Z,Rt.autoUpdate=it,Rt.needsUpdate=rt,Rt.type=J}function pt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function dt(P){const Z=P.target;Z.removeEventListener("dispose",dt),Ut(Z)}function Ut(P){Gt(P),B.remove(P)}function Gt(P){const Z=B.get(P).programs;Z!==void 0&&(Z.forEach(function(it){K.releaseProgram(it)}),P.isShaderMaterial&&K.releaseShaderCache(P))}this.renderBufferDirect=function(P,Z,it,rt,J,gt){Z===null&&(Z=wt);const Tt=J.isMesh&&J.matrixWorld.determinant()<0,It=Ul(P,Z,it,rt,J);L.setMaterial(rt,Tt);let Dt=it.index,kt=1;if(rt.wireframe===!0){if(Dt=M.getWireframeAttribute(it),Dt===void 0)return;kt=2}const zt=it.drawRange,Ft=it.attributes.position;let Zt=zt.start*kt,te=(zt.start+zt.count)*kt;gt!==null&&(Zt=Math.max(Zt,gt.start*kt),te=Math.min(te,(gt.start+gt.count)*kt)),Dt!==null?(Zt=Math.max(Zt,0),te=Math.min(te,Dt.count)):Ft!=null&&(Zt=Math.max(Zt,0),te=Math.min(te,Ft.count));const ue=te-Zt;if(ue<0||ue===1/0)return;Et.setup(J,rt,It,it,Dt);let le,se=Mt;if(Dt!==null&&(le=R.get(Dt),se=Ot,se.setIndex(le)),J.isMesh)rt.wireframe===!0?(L.setLineWidth(rt.wireframeLinewidth*re()),se.setMode(k.LINES)):se.setMode(k.TRIANGLES);else if(J.isLine){let Bt=rt.linewidth;Bt===void 0&&(Bt=1),L.setLineWidth(Bt*re()),J.isLineSegments?se.setMode(k.LINES):J.isLineLoop?se.setMode(k.LINE_LOOP):se.setMode(k.LINE_STRIP)}else J.isPoints?se.setMode(k.POINTS):J.isSprite&&se.setMode(k.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)ji("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),se.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))se.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Bt=J._multiDrawStarts,ce=J._multiDrawCounts,Kt=J._multiDrawCount,De=Dt?R.get(Dt).bytesPerElement:1,Kn=B.get(rt).currentProgram.getUniforms();for(let Le=0;Le<Kt;Le++)Kn.setValue(k,"_gl_DrawID",Le),se.render(Bt[Le]/De,ce[Le])}else if(J.isInstancedMesh)se.renderInstances(Zt,ue,J.count);else if(it.isInstancedBufferGeometry){const Bt=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,ce=Math.min(it.instanceCount,Bt);se.renderInstances(Zt,ue,ce)}else se.render(Zt,ue)};function ae(P,Z,it){P.transparent===!0&&P.side===Qe&&P.forceSinglePass===!1?(P.side=we,P.needsUpdate=!0,tr(P,Z,it),P.side=Rn,P.needsUpdate=!0,tr(P,Z,it),P.side=Qe):tr(P,Z,it)}this.compile=function(P,Z,it=null){it===null&&(it=P),h=At.get(it),h.init(Z),b.push(h),it.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(h.pushLight(J),J.castShadow&&h.pushShadow(J))}),P!==it&&P.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(h.pushLight(J),J.castShadow&&h.pushShadow(J))}),h.setupLights();const rt=new Set;return P.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const gt=J.material;if(gt)if(Array.isArray(gt))for(let Tt=0;Tt<gt.length;Tt++){const It=gt[Tt];ae(It,it,J),rt.add(It)}else ae(gt,it,J),rt.add(gt)}),h=b.pop(),rt},this.compileAsync=function(P,Z,it=null){const rt=this.compile(P,Z,it);return new Promise(J=>{function gt(){if(rt.forEach(function(Tt){B.get(Tt).currentProgram.isReady()&&rt.delete(Tt)}),rt.size===0){J(P);return}setTimeout(gt,10)}et.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let Qt=null;function an(P){Qt&&Qt(P)}function Ke(){Dn.stop()}function ka(){Dn.start()}const Dn=new Al;Dn.setAnimationLoop(an),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(P){Qt=P,_t.setAnimationLoop(P),P===null?Dn.stop():Dn.start()},_t.addEventListener("sessionstart",Ke),_t.addEventListener("sessionend",ka),this.render=function(P,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),_t.enabled===!0&&_t.isPresenting===!0&&(_t.cameraAutoUpdate===!0&&_t.updateCamera(Z),Z=_t.getCamera()),P.isScene===!0&&P.onBeforeRender(S,P,Z,U),h=At.get(P,b.length),h.init(Z),b.push(h),lt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),mt.setFromProjectionMatrix(lt,rn,Z.reversedDepth),st=this.localClippingEnabled,ut=vt.init(this.clippingPlanes,st),p=tt.get(P,y.length),p.init(),y.push(p),_t.enabled===!0&&_t.isPresenting===!0){const gt=S.xr.getDepthSensingMesh();gt!==null&&zr(gt,Z,-1/0,S.sortObjects)}zr(P,Z,0,S.sortObjects),p.finish(),S.sortObjects===!0&&p.sort(Q,ct),Nt=_t.enabled===!1||_t.isPresenting===!1||_t.hasDepthSensing()===!1,Nt&&Lt.addToRenderList(p,P),this.info.render.frame++,ut===!0&&vt.beginShadows();const it=h.state.shadowsArray;Rt.render(it,P,Z),ut===!0&&vt.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=p.opaque,J=p.transmissive;if(h.setupLights(),Z.isArrayCamera){const gt=Z.cameras;if(J.length>0)for(let Tt=0,It=gt.length;Tt<It;Tt++){const Dt=gt[Tt];Ha(rt,J,P,Dt)}Nt&&Lt.render(P);for(let Tt=0,It=gt.length;Tt<It;Tt++){const Dt=gt[Tt];za(p,P,Dt,Dt.viewport)}}else J.length>0&&Ha(rt,J,P,Z),Nt&&Lt.render(P),za(p,P,Z);U!==null&&D===0&&(nt.updateMultisampleRenderTarget(U),nt.updateRenderTargetMipmap(U)),P.isScene===!0&&P.onAfterRender(S,P,Z),Et.resetDefaultState(),E=-1,w=null,b.pop(),b.length>0?(h=b[b.length-1],ut===!0&&vt.setGlobalState(S.clippingPlanes,h.state.camera)):h=null,y.pop(),y.length>0?p=y[y.length-1]:p=null};function zr(P,Z,it,rt){if(P.visible===!1)return;if(P.layers.test(Z.layers)){if(P.isGroup)it=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Z);else if(P.isLight)h.pushLight(P),P.castShadow&&h.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||mt.intersectsSprite(P)){rt&&St.setFromMatrixPosition(P.matrixWorld).applyMatrix4(lt);const Tt=O.update(P),It=P.material;It.visible&&p.push(P,Tt,It,it,St.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||mt.intersectsObject(P))){const Tt=O.update(P),It=P.material;if(rt&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),St.copy(P.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),St.copy(Tt.boundingSphere.center)),St.applyMatrix4(P.matrixWorld).applyMatrix4(lt)),Array.isArray(It)){const Dt=Tt.groups;for(let kt=0,zt=Dt.length;kt<zt;kt++){const Ft=Dt[kt],Zt=It[Ft.materialIndex];Zt&&Zt.visible&&p.push(P,Tt,Zt,it,St.z,Ft)}}else It.visible&&p.push(P,Tt,It,it,St.z,null)}}const gt=P.children;for(let Tt=0,It=gt.length;Tt<It;Tt++)zr(gt[Tt],Z,it,rt)}function za(P,Z,it,rt){const J=P.opaque,gt=P.transmissive,Tt=P.transparent;h.setupLightsView(it),ut===!0&&vt.setGlobalState(S.clippingPlanes,it),rt&&L.viewport(N.copy(rt)),J.length>0&&Qi(J,Z,it),gt.length>0&&Qi(gt,Z,it),Tt.length>0&&Qi(Tt,Z,it),L.buffers.depth.setTest(!0),L.buffers.depth.setMask(!0),L.buffers.color.setMask(!0),L.setPolygonOffset(!1)}function Ha(P,Z,it,rt){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[rt.id]===void 0&&(h.state.transmissionRenderTarget[rt.id]=new qn(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?$i:sn,minFilter:Wn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));const gt=h.state.transmissionRenderTarget[rt.id],Tt=rt.viewport||N;gt.setSize(Tt.z*S.transmissionResolutionScale,Tt.w*S.transmissionResolutionScale);const It=S.getRenderTarget(),Dt=S.getActiveCubeFace(),kt=S.getActiveMipmapLevel();S.setRenderTarget(gt),S.getClearColor(v),z=S.getClearAlpha(),z<1&&S.setClearColor(16777215,.5),S.clear(),Nt&&Lt.render(it);const zt=S.toneMapping;S.toneMapping=An;const Ft=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),h.setupLightsView(rt),ut===!0&&vt.setGlobalState(S.clippingPlanes,rt),Qi(P,it,rt),nt.updateMultisampleRenderTarget(gt),nt.updateRenderTargetMipmap(gt),et.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let te=0,ue=Z.length;te<ue;te++){const le=Z[te],se=le.object,Bt=le.geometry,ce=le.material,Kt=le.group;if(ce.side===Qe&&se.layers.test(rt.layers)){const De=ce.side;ce.side=we,ce.needsUpdate=!0,Va(se,it,rt,Bt,ce,Kt),ce.side=De,ce.needsUpdate=!0,Zt=!0}}Zt===!0&&(nt.updateMultisampleRenderTarget(gt),nt.updateRenderTargetMipmap(gt))}S.setRenderTarget(It,Dt,kt),S.setClearColor(v,z),Ft!==void 0&&(rt.viewport=Ft),S.toneMapping=zt}function Qi(P,Z,it){const rt=Z.isScene===!0?Z.overrideMaterial:null;for(let J=0,gt=P.length;J<gt;J++){const Tt=P[J],It=Tt.object,Dt=Tt.geometry,kt=Tt.group;let zt=Tt.material;zt.allowOverride===!0&&rt!==null&&(zt=rt),It.layers.test(it.layers)&&Va(It,Z,it,Dt,zt,kt)}}function Va(P,Z,it,rt,J,gt){P.onBeforeRender(S,Z,it,rt,J,gt),P.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),J.onBeforeRender(S,Z,it,rt,P,gt),J.transparent===!0&&J.side===Qe&&J.forceSinglePass===!1?(J.side=we,J.needsUpdate=!0,S.renderBufferDirect(it,Z,rt,J,P,gt),J.side=Rn,J.needsUpdate=!0,S.renderBufferDirect(it,Z,rt,J,P,gt),J.side=Qe):S.renderBufferDirect(it,Z,rt,J,P,gt),P.onAfterRender(S,Z,it,rt,J,gt)}function tr(P,Z,it){Z.isScene!==!0&&(Z=wt);const rt=B.get(P),J=h.state.lights,gt=h.state.shadowsArray,Tt=J.state.version,It=K.getParameters(P,J.state,gt,Z,it),Dt=K.getProgramCacheKey(It);let kt=rt.programs;rt.environment=P.isMeshStandardMaterial?Z.environment:null,rt.fog=Z.fog,rt.envMap=(P.isMeshStandardMaterial?j:ot).get(P.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&P.envMap===null?Z.environmentRotation:P.envMapRotation,kt===void 0&&(P.addEventListener("dispose",dt),kt=new Map,rt.programs=kt);let zt=kt.get(Dt);if(zt!==void 0){if(rt.currentProgram===zt&&rt.lightsStateVersion===Tt)return Wa(P,It),zt}else It.uniforms=K.getUniforms(P),P.onBeforeCompile(It,S),zt=K.acquireProgram(It,Dt),kt.set(Dt,zt),rt.uniforms=It.uniforms;const Ft=rt.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ft.clippingPlanes=vt.uniform),Wa(P,It),rt.needsLights=Fl(P),rt.lightsStateVersion=Tt,rt.needsLights&&(Ft.ambientLightColor.value=J.state.ambient,Ft.lightProbe.value=J.state.probe,Ft.directionalLights.value=J.state.directional,Ft.directionalLightShadows.value=J.state.directionalShadow,Ft.spotLights.value=J.state.spot,Ft.spotLightShadows.value=J.state.spotShadow,Ft.rectAreaLights.value=J.state.rectArea,Ft.ltc_1.value=J.state.rectAreaLTC1,Ft.ltc_2.value=J.state.rectAreaLTC2,Ft.pointLights.value=J.state.point,Ft.pointLightShadows.value=J.state.pointShadow,Ft.hemisphereLights.value=J.state.hemi,Ft.directionalShadowMap.value=J.state.directionalShadowMap,Ft.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ft.spotShadowMap.value=J.state.spotShadowMap,Ft.spotLightMatrix.value=J.state.spotLightMatrix,Ft.spotLightMap.value=J.state.spotLightMap,Ft.pointShadowMap.value=J.state.pointShadowMap,Ft.pointShadowMatrix.value=J.state.pointShadowMatrix),rt.currentProgram=zt,rt.uniformsList=null,zt}function Ga(P){if(P.uniformsList===null){const Z=P.currentProgram.getUniforms();P.uniformsList=Dr.seqWithValue(Z.seq,P.uniforms)}return P.uniformsList}function Wa(P,Z){const it=B.get(P);it.outputColorSpace=Z.outputColorSpace,it.batching=Z.batching,it.batchingColor=Z.batchingColor,it.instancing=Z.instancing,it.instancingColor=Z.instancingColor,it.instancingMorph=Z.instancingMorph,it.skinning=Z.skinning,it.morphTargets=Z.morphTargets,it.morphNormals=Z.morphNormals,it.morphColors=Z.morphColors,it.morphTargetsCount=Z.morphTargetsCount,it.numClippingPlanes=Z.numClippingPlanes,it.numIntersection=Z.numClipIntersection,it.vertexAlphas=Z.vertexAlphas,it.vertexTangents=Z.vertexTangents,it.toneMapping=Z.toneMapping}function Ul(P,Z,it,rt,J){Z.isScene!==!0&&(Z=wt),nt.resetTextureUnits();const gt=Z.fog,Tt=rt.isMeshStandardMaterial?Z.environment:null,It=U===null?S.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Si,Dt=(rt.isMeshStandardMaterial?j:ot).get(rt.envMap||Tt),kt=rt.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,zt=!!it.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Ft=!!it.morphAttributes.position,Zt=!!it.morphAttributes.normal,te=!!it.morphAttributes.color;let ue=An;rt.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ue=S.toneMapping);const le=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,se=le!==void 0?le.length:0,Bt=B.get(rt),ce=h.state.lights;if(ut===!0&&(st===!0||P!==w)){const Ee=P===w&&rt.id===E;vt.setState(rt,P,Ee)}let Kt=!1;rt.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==ce.state.version||Bt.outputColorSpace!==It||J.isBatchedMesh&&Bt.batching===!1||!J.isBatchedMesh&&Bt.batching===!0||J.isBatchedMesh&&Bt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Bt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Bt.instancing===!1||!J.isInstancedMesh&&Bt.instancing===!0||J.isSkinnedMesh&&Bt.skinning===!1||!J.isSkinnedMesh&&Bt.skinning===!0||J.isInstancedMesh&&Bt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Bt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Bt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Bt.instancingMorph===!1&&J.morphTexture!==null||Bt.envMap!==Dt||rt.fog===!0&&Bt.fog!==gt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==vt.numPlanes||Bt.numIntersection!==vt.numIntersection)||Bt.vertexAlphas!==kt||Bt.vertexTangents!==zt||Bt.morphTargets!==Ft||Bt.morphNormals!==Zt||Bt.morphColors!==te||Bt.toneMapping!==ue||Bt.morphTargetsCount!==se)&&(Kt=!0):(Kt=!0,Bt.__version=rt.version);let De=Bt.currentProgram;Kt===!0&&(De=tr(rt,Z,J));let Kn=!1,Le=!1,Pi=!1;const he=De.getUniforms(),Oe=Bt.uniforms;if(L.useProgram(De.program)&&(Kn=!0,Le=!0,Pi=!0),rt.id!==E&&(E=rt.id,Le=!0),Kn||w!==P){L.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),he.setValue(k,"projectionMatrix",P.projectionMatrix),he.setValue(k,"viewMatrix",P.matrixWorldInverse);const Ae=he.map.cameraPosition;Ae!==void 0&&Ae.setValue(k,ft.setFromMatrixPosition(P.matrixWorld)),X.logarithmicDepthBuffer&&he.setValue(k,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&he.setValue(k,"isOrthographic",P.isOrthographicCamera===!0),w!==P&&(w=P,Le=!0,Pi=!0)}if(J.isSkinnedMesh){he.setOptional(k,J,"bindMatrix"),he.setOptional(k,J,"bindMatrixInverse");const Ee=J.skeleton;Ee&&(Ee.boneTexture===null&&Ee.computeBoneTexture(),he.setValue(k,"boneTexture",Ee.boneTexture,nt))}J.isBatchedMesh&&(he.setOptional(k,J,"batchingTexture"),he.setValue(k,"batchingTexture",J._matricesTexture,nt),he.setOptional(k,J,"batchingIdTexture"),he.setValue(k,"batchingIdTexture",J._indirectTexture,nt),he.setOptional(k,J,"batchingColorTexture"),J._colorsTexture!==null&&he.setValue(k,"batchingColorTexture",J._colorsTexture,nt));const Be=it.morphAttributes;if((Be.position!==void 0||Be.normal!==void 0||Be.color!==void 0)&&ht.update(J,it,De),(Le||Bt.receiveShadow!==J.receiveShadow)&&(Bt.receiveShadow=J.receiveShadow,he.setValue(k,"receiveShadow",J.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(Oe.envMap.value=Dt,Oe.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&Z.environment!==null&&(Oe.envMapIntensity.value=Z.environmentIntensity),Le&&(he.setValue(k,"toneMappingExposure",S.toneMappingExposure),Bt.needsLights&&Nl(Oe,Pi),gt&&rt.fog===!0&&at.refreshFogUniforms(Oe,gt),at.refreshMaterialUniforms(Oe,rt,q,G,h.state.transmissionRenderTarget[P.id]),Dr.upload(k,Ga(Bt),Oe,nt)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Dr.upload(k,Ga(Bt),Oe,nt),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&he.setValue(k,"center",J.center),he.setValue(k,"modelViewMatrix",J.modelViewMatrix),he.setValue(k,"normalMatrix",J.normalMatrix),he.setValue(k,"modelMatrix",J.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const Ee=rt.uniformsGroups;for(let Ae=0,Hr=Ee.length;Ae<Hr;Ae++){const Ln=Ee[Ae];Vt.update(Ln,De),Vt.bind(Ln,De)}}return De}function Nl(P,Z){P.ambientLightColor.needsUpdate=Z,P.lightProbe.needsUpdate=Z,P.directionalLights.needsUpdate=Z,P.directionalLightShadows.needsUpdate=Z,P.pointLights.needsUpdate=Z,P.pointLightShadows.needsUpdate=Z,P.spotLights.needsUpdate=Z,P.spotLightShadows.needsUpdate=Z,P.rectAreaLights.needsUpdate=Z,P.hemisphereLights.needsUpdate=Z}function Fl(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(P,Z,it){const rt=B.get(P);rt.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),B.get(P.texture).__webglTexture=Z,B.get(P.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:it,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,Z){const it=B.get(P);it.__webglFramebuffer=Z,it.__useDefaultFramebuffer=Z===void 0};const Ol=k.createFramebuffer();this.setRenderTarget=function(P,Z=0,it=0){U=P,C=Z,D=it;let rt=!0,J=null,gt=!1,Tt=!1;if(P){const Dt=B.get(P);if(Dt.__useDefaultFramebuffer!==void 0)L.bindFramebuffer(k.FRAMEBUFFER,null),rt=!1;else if(Dt.__webglFramebuffer===void 0)nt.setupRenderTarget(P);else if(Dt.__hasExternalTextures)nt.rebindTextures(P,B.get(P.texture).__webglTexture,B.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Ft=P.depthTexture;if(Dt.__boundDepthTexture!==Ft){if(Ft!==null&&B.has(Ft)&&(P.width!==Ft.image.width||P.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");nt.setupDepthRenderbuffer(P)}}const kt=P.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Tt=!0);const zt=B.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(zt[Z])?J=zt[Z][it]:J=zt[Z],gt=!0):P.samples>0&&nt.useMultisampledRTT(P)===!1?J=B.get(P).__webglMultisampledFramebuffer:Array.isArray(zt)?J=zt[it]:J=zt,N.copy(P.viewport),T.copy(P.scissor),F=P.scissorTest}else N.copy(V).multiplyScalar(q).floor(),T.copy(W).multiplyScalar(q).floor(),F=yt;if(it!==0&&(J=Ol),L.bindFramebuffer(k.FRAMEBUFFER,J)&&rt&&L.drawBuffers(P,J),L.viewport(N),L.scissor(T),L.setScissorTest(F),gt){const Dt=B.get(P.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Dt.__webglTexture,it)}else if(Tt){const Dt=Z;for(let kt=0;kt<P.textures.length;kt++){const zt=B.get(P.textures[kt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+kt,zt.__webglTexture,it,Dt)}}else if(P!==null&&it!==0){const Dt=B.get(P.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Dt.__webglTexture,it)}E=-1},this.readRenderTargetPixels=function(P,Z,it,rt,J,gt,Tt,It=0){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=B.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Tt!==void 0&&(Dt=Dt[Tt]),Dt){L.bindFramebuffer(k.FRAMEBUFFER,Dt);try{const kt=P.textures[It],zt=kt.format,Ft=kt.type;if(!X.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!X.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=P.width-rt&&it>=0&&it<=P.height-J&&(P.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+It),k.readPixels(Z,it,rt,J,Pt.convert(zt),Pt.convert(Ft),gt))}finally{const kt=U!==null?B.get(U).__webglFramebuffer:null;L.bindFramebuffer(k.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(P,Z,it,rt,J,gt,Tt,It=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=B.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Tt!==void 0&&(Dt=Dt[Tt]),Dt)if(Z>=0&&Z<=P.width-rt&&it>=0&&it<=P.height-J){L.bindFramebuffer(k.FRAMEBUFFER,Dt);const kt=P.textures[It],zt=kt.format,Ft=kt.type;if(!X.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!X.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Zt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Zt),k.bufferData(k.PIXEL_PACK_BUFFER,gt.byteLength,k.STREAM_READ),P.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+It),k.readPixels(Z,it,rt,J,Pt.convert(zt),Pt.convert(Ft),0);const te=U!==null?B.get(U).__webglFramebuffer:null;L.bindFramebuffer(k.FRAMEBUFFER,te);const ue=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Cc(k,ue,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Zt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,gt),k.deleteBuffer(Zt),k.deleteSync(ue),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,Z=null,it=0){const rt=Math.pow(2,-it),J=Math.floor(P.image.width*rt),gt=Math.floor(P.image.height*rt),Tt=Z!==null?Z.x:0,It=Z!==null?Z.y:0;nt.setTexture2D(P,0),k.copyTexSubImage2D(k.TEXTURE_2D,it,0,0,Tt,It,J,gt),L.unbindTexture()};const Bl=k.createFramebuffer(),kl=k.createFramebuffer();this.copyTextureToTexture=function(P,Z,it=null,rt=null,J=0,gt=null){gt===null&&(J!==0?(ji("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),gt=J,J=0):gt=0);let Tt,It,Dt,kt,zt,Ft,Zt,te,ue;const le=P.isCompressedTexture?P.mipmaps[gt]:P.image;if(it!==null)Tt=it.max.x-it.min.x,It=it.max.y-it.min.y,Dt=it.isBox3?it.max.z-it.min.z:1,kt=it.min.x,zt=it.min.y,Ft=it.isBox3?it.min.z:0;else{const Be=Math.pow(2,-J);Tt=Math.floor(le.width*Be),It=Math.floor(le.height*Be),P.isDataArrayTexture?Dt=le.depth:P.isData3DTexture?Dt=Math.floor(le.depth*Be):Dt=1,kt=0,zt=0,Ft=0}rt!==null?(Zt=rt.x,te=rt.y,ue=rt.z):(Zt=0,te=0,ue=0);const se=Pt.convert(Z.format),Bt=Pt.convert(Z.type);let ce;Z.isData3DTexture?(nt.setTexture3D(Z,0),ce=k.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(nt.setTexture2DArray(Z,0),ce=k.TEXTURE_2D_ARRAY):(nt.setTexture2D(Z,0),ce=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Z.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Z.unpackAlignment);const Kt=k.getParameter(k.UNPACK_ROW_LENGTH),De=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Kn=k.getParameter(k.UNPACK_SKIP_PIXELS),Le=k.getParameter(k.UNPACK_SKIP_ROWS),Pi=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,le.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,le.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,kt),k.pixelStorei(k.UNPACK_SKIP_ROWS,zt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ft);const he=P.isDataArrayTexture||P.isData3DTexture,Oe=Z.isDataArrayTexture||Z.isData3DTexture;if(P.isDepthTexture){const Be=B.get(P),Ee=B.get(Z),Ae=B.get(Be.__renderTarget),Hr=B.get(Ee.__renderTarget);L.bindFramebuffer(k.READ_FRAMEBUFFER,Ae.__webglFramebuffer),L.bindFramebuffer(k.DRAW_FRAMEBUFFER,Hr.__webglFramebuffer);for(let Ln=0;Ln<Dt;Ln++)he&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,B.get(P).__webglTexture,J,Ft+Ln),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,B.get(Z).__webglTexture,gt,ue+Ln)),k.blitFramebuffer(kt,zt,Tt,It,Zt,te,Tt,It,k.DEPTH_BUFFER_BIT,k.NEAREST);L.bindFramebuffer(k.READ_FRAMEBUFFER,null),L.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(J!==0||P.isRenderTargetTexture||B.has(P)){const Be=B.get(P),Ee=B.get(Z);L.bindFramebuffer(k.READ_FRAMEBUFFER,Bl),L.bindFramebuffer(k.DRAW_FRAMEBUFFER,kl);for(let Ae=0;Ae<Dt;Ae++)he?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Be.__webglTexture,J,Ft+Ae):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Be.__webglTexture,J),Oe?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ee.__webglTexture,gt,ue+Ae):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ee.__webglTexture,gt),J!==0?k.blitFramebuffer(kt,zt,Tt,It,Zt,te,Tt,It,k.COLOR_BUFFER_BIT,k.NEAREST):Oe?k.copyTexSubImage3D(ce,gt,Zt,te,ue+Ae,kt,zt,Tt,It):k.copyTexSubImage2D(ce,gt,Zt,te,kt,zt,Tt,It);L.bindFramebuffer(k.READ_FRAMEBUFFER,null),L.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Oe?P.isDataTexture||P.isData3DTexture?k.texSubImage3D(ce,gt,Zt,te,ue,Tt,It,Dt,se,Bt,le.data):Z.isCompressedArrayTexture?k.compressedTexSubImage3D(ce,gt,Zt,te,ue,Tt,It,Dt,se,le.data):k.texSubImage3D(ce,gt,Zt,te,ue,Tt,It,Dt,se,Bt,le):P.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,gt,Zt,te,Tt,It,se,Bt,le.data):P.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,gt,Zt,te,le.width,le.height,se,le.data):k.texSubImage2D(k.TEXTURE_2D,gt,Zt,te,Tt,It,se,Bt,le);k.pixelStorei(k.UNPACK_ROW_LENGTH,Kt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,De),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Kn),k.pixelStorei(k.UNPACK_SKIP_ROWS,Le),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Pi),gt===0&&Z.generateMipmaps&&k.generateMipmap(ce),L.unbindTexture()},this.initRenderTarget=function(P){B.get(P).__webglFramebuffer===void 0&&nt.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?nt.setTextureCube(P,0):P.isData3DTexture?nt.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?nt.setTexture2DArray(P,0):nt.setTexture2D(P,0),L.unbindTexture()},this.resetState=function(){C=0,D=0,U=null,L.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}}const Zo={type:"change"},Da={type:"start"},Ll={type:"end"},Er=new fl,Ko=new Mn,rm=Math.cos(70*Ac.DEG2RAD),me=new $,Ce=2*Math.PI,ne={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ys=1e-6;class sm extends xh{constructor(t,e=null){super(t,e),this.state=ne.NONE,this.target=new $,this.cursor=new $,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:mi.ROTATE,MIDDLE:mi.DOLLY,RIGHT:mi.PAN},this.touches={ONE:fi.ROTATE,TWO:fi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new $,this._lastQuaternion=new Yn,this._lastTargetPosition=new $,this._quat=new Yn().setFromUnitVectors(t.up,new $(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new bo,this._sphericalDelta=new bo,this._scale=1,this._panOffset=new $,this._rotateStart=new Ht,this._rotateEnd=new Ht,this._rotateDelta=new Ht,this._panStart=new Ht,this._panEnd=new Ht,this._panDelta=new Ht,this._dollyStart=new Ht,this._dollyEnd=new Ht,this._dollyDelta=new Ht,this._dollyDirection=new $,this._mouse=new Ht,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=om.bind(this),this._onPointerDown=am.bind(this),this._onPointerUp=lm.bind(this),this._onContextMenu=mm.bind(this),this._onMouseWheel=um.bind(this),this._onKeyDown=dm.bind(this),this._onTouchStart=fm.bind(this),this._onTouchMove=pm.bind(this),this._onMouseDown=cm.bind(this),this._onMouseMove=hm.bind(this),this._interceptControlDown=_m.bind(this),this._interceptControlUp=gm.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Zo),this.update(),this.state=ne.NONE}update(t=null){const e=this.object.position;me.copy(e).sub(this.target),me.applyQuaternion(this._quat),this._spherical.setFromVector3(me),this.autoRotate&&this.state===ne.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Ce:n>Math.PI&&(n-=Ce),r<-Math.PI?r+=Ce:r>Math.PI&&(r-=Ce),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(me.setFromSpherical(this._spherical),me.applyQuaternion(this._quatInverse),e.copy(this.target).add(me),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=me.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const a=new $(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new $(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=me.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Er.origin.copy(this.object.position),Er.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Er.direction))<rm?this.object.lookAt(this.target):(Ko.setFromNormalAndCoplanarPoint(this.object.up,this.target),Er.intersectPlane(Ko,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>ys||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ys||this._lastTargetPosition.distanceToSquared(this.target)>ys?(this.dispatchEvent(Zo),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ce/60*this.autoRotateSpeed*t:Ce/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){me.setFromMatrixColumn(e,0),me.multiplyScalar(-t),this._panOffset.add(me)}_panUp(t,e){this.screenSpacePanning===!0?me.setFromMatrixColumn(e,1):(me.setFromMatrixColumn(e,0),me.crossVectors(this.object.up,me)),me.multiplyScalar(t),this._panOffset.add(me)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;me.copy(r).sub(this.target);let s=me.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,o=n.width,a=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ce*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ce*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ce*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ce*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ce*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ce*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ce*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ce*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ht,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function am(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function om(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function lm(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ll),this.state=ne.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function cm(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case mi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ne.DOLLY;break;case mi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ne.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ne.ROTATE}break;case mi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ne.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ne.PAN}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(Da)}function hm(i){switch(this.state){case ne.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ne.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ne.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function um(i){this.enabled===!1||this.enableZoom===!1||this.state!==ne.NONE||(i.preventDefault(),this.dispatchEvent(Da),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Ll))}function dm(i){this.enabled!==!1&&this._handleKeyDown(i)}function fm(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case fi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ne.TOUCH_ROTATE;break;case fi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ne.TOUCH_PAN;break;default:this.state=ne.NONE}break;case 2:switch(this.touches.TWO){case fi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ne.TOUCH_DOLLY_PAN;break;case fi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ne.TOUCH_DOLLY_ROTATE;break;default:this.state=ne.NONE}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(Da)}function pm(i){switch(this._trackPointer(i),this.state){case ne.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ne.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ne.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ne.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ne.NONE}}function mm(i){this.enabled!==!1&&i.preventDefault()}function _m(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function gm(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class vm extends Ml{constructor(){super();const t=new Ti;t.deleteAttribute("uv");const e=new Zi({side:we}),n=new Zi,r=new _h(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new de(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new nh(t,n,6),a=new xe;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const c=new de(t,di(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const l=new de(t,di(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const d=new de(t,di(17));d.position.set(14.904,12.198,-1.832),d.scale.set(.15,4.265,6.331),this.add(d);const f=new de(t,di(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);const m=new de(t,di(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const u=new de(t,di(100));u.position.set(0,20,0),u.scale.set(1,.1,1),this.add(u)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function di(i){return new oh({color:0,emissive:16777215,emissiveIntensity:i})}class xm extends Ra{constructor(t){super(t)}load(t,e,n,r){const s=this,o=new fh(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(s.parse(a))}catch(c){r?r(c):console.error(c),s.manager.itemError(t)}},n,r)}parse(t){function e(l){const d=new DataView(l),f=32/8*3+32/8*3*3+16/8,m=d.getUint32(80,!0);if(80+32/8+m*f===d.byteLength)return!0;const g=[115,111,108,105,100];for(let _=0;_<5;_++)if(n(g,d,_))return!1;return!0}function n(l,d,f){for(let m=0,u=l.length;m<u;m++)if(l[m]!==d.getUint8(f+m))return!1;return!0}function r(l){const d=new DataView(l),f=d.getUint32(80,!0);let m,u,g,_=!1,p,h,y,b,S;for(let N=0;N<70;N++)d.getUint32(N,!1)==1129270351&&d.getUint8(N+4)==82&&d.getUint8(N+5)==61&&(_=!0,p=new Float32Array(f*3*3),h=d.getUint8(N+6)/255,y=d.getUint8(N+7)/255,b=d.getUint8(N+8)/255,S=d.getUint8(N+9)/255);const A=84,C=50,D=new Ze,U=new Float32Array(f*3*3),E=new Float32Array(f*3*3),w=new qt;for(let N=0;N<f;N++){const T=A+N*C,F=d.getFloat32(T,!0),v=d.getFloat32(T+4,!0),z=d.getFloat32(T+8,!0);if(_){const Y=d.getUint16(T+48,!0);(Y&32768)===0?(m=(Y&31)/31,u=(Y>>5&31)/31,g=(Y>>10&31)/31):(m=h,u=y,g=b)}for(let Y=1;Y<=3;Y++){const G=T+Y*12,q=N*3*3+(Y-1)*3;U[q]=d.getFloat32(G,!0),U[q+1]=d.getFloat32(G+4,!0),U[q+2]=d.getFloat32(G+8,!0),E[q]=F,E[q+1]=v,E[q+2]=z,_&&(w.setRGB(m,u,g,Pe),p[q]=w.r,p[q+1]=w.g,p[q+2]=w.b)}}return D.setAttribute("position",new Me(U,3)),D.setAttribute("normal",new Me(E,3)),_&&(D.setAttribute("color",new Me(p,3)),D.hasColors=!0,D.alpha=S),D}function s(l){const d=new Ze,f=/solid([\s\S]*?)endsolid/g,m=/facet([\s\S]*?)endfacet/g,u=/solid\s(.+)/;let g=0;const _=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,p=new RegExp("vertex"+_+_+_,"g"),h=new RegExp("normal"+_+_+_,"g"),y=[],b=[],S=[],A=new $;let C,D=0,U=0,E=0;for(;(C=f.exec(l))!==null;){U=E;const w=C[0],N=(C=u.exec(w))!==null?C[1]:"";for(S.push(N);(C=m.exec(w))!==null;){let v=0,z=0;const Y=C[0];for(;(C=h.exec(Y))!==null;)A.x=parseFloat(C[1]),A.y=parseFloat(C[2]),A.z=parseFloat(C[3]),z++;for(;(C=p.exec(Y))!==null;)y.push(parseFloat(C[1]),parseFloat(C[2]),parseFloat(C[3])),b.push(A.x,A.y,A.z),v++,E++;z!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+g),v!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+g),g++}const T=U,F=E-U;d.userData.groupNames=S,d.addGroup(T,F,D),D++}return d.setAttribute("position",new He(y,3)),d.setAttribute("normal",new He(b,3)),d}function o(l){return typeof l!="string"?new TextDecoder().decode(l):l}function a(l){if(typeof l=="string"){const d=new Uint8Array(l.length);for(let f=0;f<l.length;f++)d[f]=l.charCodeAt(f)&255;return d.buffer||d}else return l}const c=a(t);return e(c)?r(c):s(o(t))}}var br=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ym(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function wr(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Ss={exports:{}};var $o;function Sm(){return $o||($o=1,(function(i,t){(function(e){i.exports=e()})(function(){return(function e(n,r,s){function o(l,d){if(!r[l]){if(!n[l]){var f=typeof wr=="function"&&wr;if(!d&&f)return f(l,!0);if(a)return a(l,!0);var m=new Error("Cannot find module '"+l+"'");throw m.code="MODULE_NOT_FOUND",m}var u=r[l]={exports:{}};n[l][0].call(u.exports,function(g){var _=n[l][1][g];return o(_||g)},u,u.exports,e,n,r,s)}return r[l].exports}for(var a=typeof wr=="function"&&wr,c=0;c<s.length;c++)o(s[c]);return o})({1:[function(e,n,r){var s=e("./utils"),o=e("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(c){for(var l,d,f,m,u,g,_,p=[],h=0,y=c.length,b=y,S=s.getTypeOf(c)!=="string";h<c.length;)b=y-h,f=S?(l=c[h++],d=h<y?c[h++]:0,h<y?c[h++]:0):(l=c.charCodeAt(h++),d=h<y?c.charCodeAt(h++):0,h<y?c.charCodeAt(h++):0),m=l>>2,u=(3&l)<<4|d>>4,g=1<b?(15&d)<<2|f>>6:64,_=2<b?63&f:64,p.push(a.charAt(m)+a.charAt(u)+a.charAt(g)+a.charAt(_));return p.join("")},r.decode=function(c){var l,d,f,m,u,g,_=0,p=0,h="data:";if(c.substr(0,h.length)===h)throw new Error("Invalid base64 input, it looks like a data url.");var y,b=3*(c=c.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(c.charAt(c.length-1)===a.charAt(64)&&b--,c.charAt(c.length-2)===a.charAt(64)&&b--,b%1!=0)throw new Error("Invalid base64 input, bad content length.");for(y=o.uint8array?new Uint8Array(0|b):new Array(0|b);_<c.length;)l=a.indexOf(c.charAt(_++))<<2|(m=a.indexOf(c.charAt(_++)))>>4,d=(15&m)<<4|(u=a.indexOf(c.charAt(_++)))>>2,f=(3&u)<<6|(g=a.indexOf(c.charAt(_++))),y[p++]=l,u!==64&&(y[p++]=d),g!==64&&(y[p++]=f);return y}},{"./support":30,"./utils":32}],2:[function(e,n,r){var s=e("./external"),o=e("./stream/DataWorker"),a=e("./stream/Crc32Probe"),c=e("./stream/DataLengthProbe");function l(d,f,m,u,g){this.compressedSize=d,this.uncompressedSize=f,this.crc32=m,this.compression=u,this.compressedContent=g}l.prototype={getContentWorker:function(){var d=new o(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new c("data_length")),f=this;return d.on("end",function(){if(this.streamInfo.data_length!==f.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),d},getCompressedWorker:function(){return new o(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},l.createWorkerFrom=function(d,f,m){return d.pipe(new a).pipe(new c("uncompressedSize")).pipe(f.compressWorker(m)).pipe(new c("compressedSize")).withStreamInfo("compression",f)},n.exports=l},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,n,r){var s=e("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},r.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,n,r){var s=e("./utils"),o=(function(){for(var a,c=[],l=0;l<256;l++){a=l;for(var d=0;d<8;d++)a=1&a?3988292384^a>>>1:a>>>1;c[l]=a}return c})();n.exports=function(a,c){return a!==void 0&&a.length?s.getTypeOf(a)!=="string"?(function(l,d,f,m){var u=o,g=m+f;l^=-1;for(var _=m;_<g;_++)l=l>>>8^u[255&(l^d[_])];return-1^l})(0|c,a,a.length,0):(function(l,d,f,m){var u=o,g=m+f;l^=-1;for(var _=m;_<g;_++)l=l>>>8^u[255&(l^d.charCodeAt(_))];return-1^l})(0|c,a,a.length,0):0}},{"./utils":32}],5:[function(e,n,r){r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(e,n,r){var s=null;s=typeof Promise<"u"?Promise:e("lie"),n.exports={Promise:s}},{lie:37}],7:[function(e,n,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",o=e("pako"),a=e("./utils"),c=e("./stream/GenericWorker"),l=s?"uint8array":"array";function d(f,m){c.call(this,"FlateWorker/"+f),this._pako=null,this._pakoAction=f,this._pakoOptions=m,this.meta={}}r.magic="\b\0",a.inherits(d,c),d.prototype.processChunk=function(f){this.meta=f.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(l,f.data),!1)},d.prototype.flush=function(){c.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},d.prototype.cleanUp=function(){c.prototype.cleanUp.call(this),this._pako=null},d.prototype._createPako=function(){this._pako=new o[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var f=this;this._pako.onData=function(m){f.push({data:m,meta:f.meta})}},r.compressWorker=function(f){return new d("Deflate",f)},r.uncompressWorker=function(){return new d("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,n,r){function s(u,g){var _,p="";for(_=0;_<g;_++)p+=String.fromCharCode(255&u),u>>>=8;return p}function o(u,g,_,p,h,y){var b,S,A=u.file,C=u.compression,D=y!==l.utf8encode,U=a.transformTo("string",y(A.name)),E=a.transformTo("string",l.utf8encode(A.name)),w=A.comment,N=a.transformTo("string",y(w)),T=a.transformTo("string",l.utf8encode(w)),F=E.length!==A.name.length,v=T.length!==w.length,z="",Y="",G="",q=A.dir,Q=A.date,ct={crc32:0,compressedSize:0,uncompressedSize:0};g&&!_||(ct.crc32=u.crc32,ct.compressedSize=u.compressedSize,ct.uncompressedSize=u.uncompressedSize);var V=0;g&&(V|=8),D||!F&&!v||(V|=2048);var W=0,yt=0;q&&(W|=16),h==="UNIX"?(yt=798,W|=(function(ut,st){var lt=ut;return ut||(lt=st?16893:33204),(65535&lt)<<16})(A.unixPermissions,q)):(yt=20,W|=(function(ut){return 63&(ut||0)})(A.dosPermissions)),b=Q.getUTCHours(),b<<=6,b|=Q.getUTCMinutes(),b<<=5,b|=Q.getUTCSeconds()/2,S=Q.getUTCFullYear()-1980,S<<=4,S|=Q.getUTCMonth()+1,S<<=5,S|=Q.getUTCDate(),F&&(Y=s(1,1)+s(d(U),4)+E,z+="up"+s(Y.length,2)+Y),v&&(G=s(1,1)+s(d(N),4)+T,z+="uc"+s(G.length,2)+G);var mt="";return mt+=`
\0`,mt+=s(V,2),mt+=C.magic,mt+=s(b,2),mt+=s(S,2),mt+=s(ct.crc32,4),mt+=s(ct.compressedSize,4),mt+=s(ct.uncompressedSize,4),mt+=s(U.length,2),mt+=s(z.length,2),{fileRecord:f.LOCAL_FILE_HEADER+mt+U+z,dirRecord:f.CENTRAL_FILE_HEADER+s(yt,2)+mt+s(N.length,2)+"\0\0\0\0"+s(W,4)+s(p,4)+U+z+N}}var a=e("../utils"),c=e("../stream/GenericWorker"),l=e("../utf8"),d=e("../crc32"),f=e("../signature");function m(u,g,_,p){c.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=g,this.zipPlatform=_,this.encodeFileName=p,this.streamFiles=u,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(m,c),m.prototype.push=function(u){var g=u.meta.percent||0,_=this.entriesCount,p=this._sources.length;this.accumulate?this.contentBuffer.push(u):(this.bytesWritten+=u.data.length,c.prototype.push.call(this,{data:u.data,meta:{currentFile:this.currentFile,percent:_?(g+100*(_-p-1))/_:100}}))},m.prototype.openedSource=function(u){this.currentSourceOffset=this.bytesWritten,this.currentFile=u.file.name;var g=this.streamFiles&&!u.file.dir;if(g){var _=o(u,g,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:_.fileRecord,meta:{percent:0}})}else this.accumulate=!0},m.prototype.closedSource=function(u){this.accumulate=!1;var g=this.streamFiles&&!u.file.dir,_=o(u,g,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(_.dirRecord),g)this.push({data:(function(p){return f.DATA_DESCRIPTOR+s(p.crc32,4)+s(p.compressedSize,4)+s(p.uncompressedSize,4)})(u),meta:{percent:100}});else for(this.push({data:_.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},m.prototype.flush=function(){for(var u=this.bytesWritten,g=0;g<this.dirRecords.length;g++)this.push({data:this.dirRecords[g],meta:{percent:100}});var _=this.bytesWritten-u,p=(function(h,y,b,S,A){var C=a.transformTo("string",A(S));return f.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(h,2)+s(h,2)+s(y,4)+s(b,4)+s(C.length,2)+C})(this.dirRecords.length,_,u,this.zipComment,this.encodeFileName);this.push({data:p,meta:{percent:100}})},m.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},m.prototype.registerPrevious=function(u){this._sources.push(u);var g=this;return u.on("data",function(_){g.processChunk(_)}),u.on("end",function(){g.closedSource(g.previous.streamInfo),g._sources.length?g.prepareNextSource():g.end()}),u.on("error",function(_){g.error(_)}),this},m.prototype.resume=function(){return!!c.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},m.prototype.error=function(u){var g=this._sources;if(!c.prototype.error.call(this,u))return!1;for(var _=0;_<g.length;_++)try{g[_].error(u)}catch{}return!0},m.prototype.lock=function(){c.prototype.lock.call(this);for(var u=this._sources,g=0;g<u.length;g++)u[g].lock()},n.exports=m},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,n,r){var s=e("../compressions"),o=e("./ZipFileWorker");r.generateWorker=function(a,c,l){var d=new o(c.streamFiles,l,c.platform,c.encodeFileName),f=0;try{a.forEach(function(m,u){f++;var g=(function(y,b){var S=y||b,A=s[S];if(!A)throw new Error(S+" is not a valid compression method !");return A})(u.options.compression,c.compression),_=u.options.compressionOptions||c.compressionOptions||{},p=u.dir,h=u.date;u._compressWorker(g,_).withStreamInfo("file",{name:m,dir:p,date:h,comment:u.comment||"",unixPermissions:u.unixPermissions,dosPermissions:u.dosPermissions}).pipe(d)}),d.entriesCount=f}catch(m){d.error(m)}return d}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,n,r){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var o=new s;for(var a in this)typeof this[a]!="function"&&(o[a]=this[a]);return o}}(s.prototype=e("./object")).loadAsync=e("./load"),s.support=e("./support"),s.defaults=e("./defaults"),s.version="3.10.2",s.loadAsync=function(o,a){return new s().loadAsync(o,a)},s.external=e("./external"),n.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,n,r){var s=e("./utils"),o=e("./external"),a=e("./utf8"),c=e("./zipEntries"),l=e("./stream/Crc32Probe"),d=e("./nodejsUtils");function f(m){return new o.Promise(function(u,g){var _=m.decompressed.getContentWorker().pipe(new l);_.on("error",function(p){g(p)}).on("end",function(){_.streamInfo.crc32!==m.decompressed.crc32?g(new Error("Corrupted zip : CRC32 mismatch")):u()}).resume()})}n.exports=function(m,u){var g=this;return u=s.extend(u||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),d.isNode&&d.isStream(m)?o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",m,!0,u.optimizedBinaryString,u.base64).then(function(_){var p=new c(u);return p.load(_),p}).then(function(_){var p=[o.Promise.resolve(_)],h=_.files;if(u.checkCRC32)for(var y=0;y<h.length;y++)p.push(f(h[y]));return o.Promise.all(p)}).then(function(_){for(var p=_.shift(),h=p.files,y=0;y<h.length;y++){var b=h[y],S=b.fileNameStr,A=s.resolve(b.fileNameStr);g.file(A,b.decompressed,{binary:!0,optimizedBinaryString:!0,date:b.date,dir:b.dir,comment:b.fileCommentStr.length?b.fileCommentStr:null,unixPermissions:b.unixPermissions,dosPermissions:b.dosPermissions,createFolders:u.createFolders}),b.dir||(g.file(A).unsafeOriginalName=S)}return p.zipComment.length&&(g.comment=p.zipComment),g})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,n,r){var s=e("../utils"),o=e("../stream/GenericWorker");function a(c,l){o.call(this,"Nodejs stream input adapter for "+c),this._upstreamEnded=!1,this._bindStream(l)}s.inherits(a,o),a.prototype._bindStream=function(c){var l=this;(this._stream=c).pause(),c.on("data",function(d){l.push({data:d,meta:{percent:0}})}).on("error",function(d){l.isPaused?this.generatedError=d:l.error(d)}).on("end",function(){l.isPaused?l._upstreamEnded=!0:l.end()})},a.prototype.pause=function(){return!!o.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},n.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,n,r){var s=e("readable-stream").Readable;function o(a,c,l){s.call(this,c),this._helper=a;var d=this;a.on("data",function(f,m){d.push(f)||d._helper.pause(),l&&l(m)}).on("error",function(f){d.emit("error",f)}).on("end",function(){d.push(null)})}e("../utils").inherits(o,s),o.prototype._read=function(){this._helper.resume()},n.exports=o},{"../utils":32,"readable-stream":16}],14:[function(e,n,r){n.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,o){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,o);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,o)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var o=new Buffer(s);return o.fill(0),o},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(e,n,r){function s(A,C,D){var U,E=a.getTypeOf(C),w=a.extend(D||{},d);w.date=w.date||new Date,w.compression!==null&&(w.compression=w.compression.toUpperCase()),typeof w.unixPermissions=="string"&&(w.unixPermissions=parseInt(w.unixPermissions,8)),w.unixPermissions&&16384&w.unixPermissions&&(w.dir=!0),w.dosPermissions&&16&w.dosPermissions&&(w.dir=!0),w.dir&&(A=h(A)),w.createFolders&&(U=p(A))&&y.call(this,U,!0);var N=E==="string"&&w.binary===!1&&w.base64===!1;D&&D.binary!==void 0||(w.binary=!N),(C instanceof f&&C.uncompressedSize===0||w.dir||!C||C.length===0)&&(w.base64=!1,w.binary=!0,C="",w.compression="STORE",E="string");var T=null;T=C instanceof f||C instanceof c?C:g.isNode&&g.isStream(C)?new _(A,C):a.prepareContent(A,C,w.binary,w.optimizedBinaryString,w.base64);var F=new m(A,T,w);this.files[A]=F}var o=e("./utf8"),a=e("./utils"),c=e("./stream/GenericWorker"),l=e("./stream/StreamHelper"),d=e("./defaults"),f=e("./compressedObject"),m=e("./zipObject"),u=e("./generate"),g=e("./nodejsUtils"),_=e("./nodejs/NodejsStreamInputAdapter"),p=function(A){A.slice(-1)==="/"&&(A=A.substring(0,A.length-1));var C=A.lastIndexOf("/");return 0<C?A.substring(0,C):""},h=function(A){return A.slice(-1)!=="/"&&(A+="/"),A},y=function(A,C){return C=C!==void 0?C:d.createFolders,A=h(A),this.files[A]||s.call(this,A,null,{dir:!0,createFolders:C}),this.files[A]};function b(A){return Object.prototype.toString.call(A)==="[object RegExp]"}var S={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(A){var C,D,U;for(C in this.files)U=this.files[C],(D=C.slice(this.root.length,C.length))&&C.slice(0,this.root.length)===this.root&&A(D,U)},filter:function(A){var C=[];return this.forEach(function(D,U){A(D,U)&&C.push(U)}),C},file:function(A,C,D){if(arguments.length!==1)return A=this.root+A,s.call(this,A,C,D),this;if(b(A)){var U=A;return this.filter(function(w,N){return!N.dir&&U.test(w)})}var E=this.files[this.root+A];return E&&!E.dir?E:null},folder:function(A){if(!A)return this;if(b(A))return this.filter(function(E,w){return w.dir&&A.test(E)});var C=this.root+A,D=y.call(this,C),U=this.clone();return U.root=D.name,U},remove:function(A){A=this.root+A;var C=this.files[A];if(C||(A.slice(-1)!=="/"&&(A+="/"),C=this.files[A]),C&&!C.dir)delete this.files[A];else for(var D=this.filter(function(E,w){return w.name.slice(0,A.length)===A}),U=0;U<D.length;U++)delete this.files[D[U].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(A){var C,D={};try{if((D=a.extend(A||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:o.utf8encode})).type=D.type.toLowerCase(),D.compression=D.compression.toUpperCase(),D.type==="binarystring"&&(D.type="string"),!D.type)throw new Error("No output type specified.");a.checkSupport(D.type),D.platform!=="darwin"&&D.platform!=="freebsd"&&D.platform!=="linux"&&D.platform!=="sunos"||(D.platform="UNIX"),D.platform==="win32"&&(D.platform="DOS");var U=D.comment||this.comment||"";C=u.generateWorker(this,D,U)}catch(E){(C=new c("error")).error(E)}return new l(C,D.type||"string",D.mimeType)},generateAsync:function(A,C){return this.generateInternalStream(A).accumulate(C)},generateNodeStream:function(A,C){return(A=A||{}).type||(A.type="nodebuffer"),this.generateInternalStream(A).toNodejsStream(C)}};n.exports=S},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,n,r){n.exports=e("stream")},{stream:void 0}],17:[function(e,n,r){var s=e("./DataReader");function o(a){s.call(this,a);for(var c=0;c<this.data.length;c++)a[c]=255&a[c]}e("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data[this.zero+a]},o.prototype.lastIndexOfSignature=function(a){for(var c=a.charCodeAt(0),l=a.charCodeAt(1),d=a.charCodeAt(2),f=a.charCodeAt(3),m=this.length-4;0<=m;--m)if(this.data[m]===c&&this.data[m+1]===l&&this.data[m+2]===d&&this.data[m+3]===f)return m-this.zero;return-1},o.prototype.readAndCheckSignature=function(a){var c=a.charCodeAt(0),l=a.charCodeAt(1),d=a.charCodeAt(2),f=a.charCodeAt(3),m=this.readData(4);return c===m[0]&&l===m[1]&&d===m[2]&&f===m[3]},o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return[];var c=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,c},n.exports=o},{"../utils":32,"./DataReader":18}],18:[function(e,n,r){var s=e("../utils");function o(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}o.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var c,l=0;for(this.checkOffset(a),c=this.index+a-1;c>=this.index;c--)l=(l<<8)+this.byteAt(c);return this.index+=a,l},readString:function(a){return s.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC(1980+(a>>25&127),(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},n.exports=o},{"../utils":32}],19:[function(e,n,r){var s=e("./Uint8ArrayReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.readData=function(a){this.checkOffset(a);var c=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,c},n.exports=o},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,n,r){var s=e("./DataReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},o.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},o.prototype.readAndCheckSignature=function(a){return a===this.readData(4)},o.prototype.readData=function(a){this.checkOffset(a);var c=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,c},n.exports=o},{"../utils":32,"./DataReader":18}],21:[function(e,n,r){var s=e("./ArrayReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return new Uint8Array(0);var c=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,c},n.exports=o},{"../utils":32,"./ArrayReader":17}],22:[function(e,n,r){var s=e("../utils"),o=e("../support"),a=e("./ArrayReader"),c=e("./StringReader"),l=e("./NodeBufferReader"),d=e("./Uint8ArrayReader");n.exports=function(f){var m=s.getTypeOf(f);return s.checkSupport(m),m!=="string"||o.uint8array?m==="nodebuffer"?new l(f):o.uint8array?new d(s.transformTo("uint8array",f)):new a(s.transformTo("array",f)):new c(f)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,n,r){r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(e,n,r){var s=e("./GenericWorker"),o=e("../utils");function a(c){s.call(this,"ConvertWorker to "+c),this.destType=c}o.inherits(a,s),a.prototype.processChunk=function(c){this.push({data:o.transformTo(this.destType,c.data),meta:c.meta})},n.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(e,n,r){var s=e("./GenericWorker"),o=e("../crc32");function a(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(a,s),a.prototype.processChunk=function(c){this.streamInfo.crc32=o(c.data,this.streamInfo.crc32||0),this.push(c)},n.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,n,r){var s=e("../utils"),o=e("./GenericWorker");function a(c){o.call(this,"DataLengthProbe for "+c),this.propName=c,this.withStreamInfo(c,0)}s.inherits(a,o),a.prototype.processChunk=function(c){if(c){var l=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=l+c.data.length}o.prototype.processChunk.call(this,c)},n.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(e,n,r){var s=e("../utils"),o=e("./GenericWorker");function a(c){o.call(this,"DataWorker");var l=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,c.then(function(d){l.dataIsReady=!0,l.data=d,l.max=d&&d.length||0,l.type=s.getTypeOf(d),l.isPaused||l._tickAndRepeat()},function(d){l.error(d)})}s.inherits(a,o),a.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var c=null,l=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":c=this.data.substring(this.index,l);break;case"uint8array":c=this.data.subarray(this.index,l);break;case"array":case"nodebuffer":c=this.data.slice(this.index,l)}return this.index=l,this.push({data:c,meta:{percent:this.max?this.index/this.max*100:0}})},n.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(e,n,r){function s(o){this.name=o||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(o){this.emit("data",o)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(o){this.emit("error",o)}return!0},error:function(o){return!this.isFinished&&(this.isPaused?this.generatedError=o:(this.isFinished=!0,this.emit("error",o),this.previous&&this.previous.error(o),this.cleanUp()),!0)},on:function(o,a){return this._listeners[o].push(a),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(o,a){if(this._listeners[o])for(var c=0;c<this._listeners[o].length;c++)this._listeners[o][c].call(this,a)},pipe:function(o){return o.registerPrevious(this)},registerPrevious:function(o){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=o.streamInfo,this.mergeStreamInfo(),this.previous=o;var a=this;return o.on("data",function(c){a.processChunk(c)}),o.on("end",function(){a.end()}),o.on("error",function(c){a.error(c)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var o=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),o=!0),this.previous&&this.previous.resume(),!o},flush:function(){},processChunk:function(o){this.push(o)},withStreamInfo:function(o,a){return this.extraStreamInfo[o]=a,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var o in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,o)&&(this.streamInfo[o]=this.extraStreamInfo[o])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var o="Worker "+this.name;return this.previous?this.previous+" -> "+o:o}},n.exports=s},{}],29:[function(e,n,r){var s=e("../utils"),o=e("./ConvertWorker"),a=e("./GenericWorker"),c=e("../base64"),l=e("../support"),d=e("../external"),f=null;if(l.nodestream)try{f=e("../nodejs/NodejsStreamOutputAdapter")}catch{}function m(g,_){return new d.Promise(function(p,h){var y=[],b=g._internalType,S=g._outputType,A=g._mimeType;g.on("data",function(C,D){y.push(C),_&&_(D)}).on("error",function(C){y=[],h(C)}).on("end",function(){try{var C=(function(D,U,E){switch(D){case"blob":return s.newBlob(s.transformTo("arraybuffer",U),E);case"base64":return c.encode(U);default:return s.transformTo(D,U)}})(S,(function(D,U){var E,w=0,N=null,T=0;for(E=0;E<U.length;E++)T+=U[E].length;switch(D){case"string":return U.join("");case"array":return Array.prototype.concat.apply([],U);case"uint8array":for(N=new Uint8Array(T),E=0;E<U.length;E++)N.set(U[E],w),w+=U[E].length;return N;case"nodebuffer":return Buffer.concat(U);default:throw new Error("concat : unsupported type '"+D+"'")}})(b,y),A);p(C)}catch(D){h(D)}y=[]}).resume()})}function u(g,_,p){var h=_;switch(_){case"blob":case"arraybuffer":h="uint8array";break;case"base64":h="string"}try{this._internalType=h,this._outputType=_,this._mimeType=p,s.checkSupport(h),this._worker=g.pipe(new o(h)),g.lock()}catch(y){this._worker=new a("error"),this._worker.error(y)}}u.prototype={accumulate:function(g){return m(this,g)},on:function(g,_){var p=this;return g==="data"?this._worker.on(g,function(h){_.call(p,h.data,h.meta)}):this._worker.on(g,function(){s.delay(_,arguments,p)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(g){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new f(this,{objectMode:this._outputType!=="nodebuffer"},g)}},n.exports=u},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,n,r){if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",r.nodebuffer=typeof Buffer<"u",r.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")r.blob=!1;else{var s=new ArrayBuffer(0);try{r.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);o.append(s),r.blob=o.getBlob("application/zip").size===0}catch{r.blob=!1}}}try{r.nodestream=!!e("readable-stream").Readable}catch{r.nodestream=!1}},{"readable-stream":16}],31:[function(e,n,r){for(var s=e("./utils"),o=e("./support"),a=e("./nodejsUtils"),c=e("./stream/GenericWorker"),l=new Array(256),d=0;d<256;d++)l[d]=252<=d?6:248<=d?5:240<=d?4:224<=d?3:192<=d?2:1;l[254]=l[254]=1;function f(){c.call(this,"utf-8 decode"),this.leftOver=null}function m(){c.call(this,"utf-8 encode")}r.utf8encode=function(u){return o.nodebuffer?a.newBufferFrom(u,"utf-8"):(function(g){var _,p,h,y,b,S=g.length,A=0;for(y=0;y<S;y++)(64512&(p=g.charCodeAt(y)))==55296&&y+1<S&&(64512&(h=g.charCodeAt(y+1)))==56320&&(p=65536+(p-55296<<10)+(h-56320),y++),A+=p<128?1:p<2048?2:p<65536?3:4;for(_=o.uint8array?new Uint8Array(A):new Array(A),y=b=0;b<A;y++)(64512&(p=g.charCodeAt(y)))==55296&&y+1<S&&(64512&(h=g.charCodeAt(y+1)))==56320&&(p=65536+(p-55296<<10)+(h-56320),y++),p<128?_[b++]=p:(p<2048?_[b++]=192|p>>>6:(p<65536?_[b++]=224|p>>>12:(_[b++]=240|p>>>18,_[b++]=128|p>>>12&63),_[b++]=128|p>>>6&63),_[b++]=128|63&p);return _})(u)},r.utf8decode=function(u){return o.nodebuffer?s.transformTo("nodebuffer",u).toString("utf-8"):(function(g){var _,p,h,y,b=g.length,S=new Array(2*b);for(_=p=0;_<b;)if((h=g[_++])<128)S[p++]=h;else if(4<(y=l[h]))S[p++]=65533,_+=y-1;else{for(h&=y===2?31:y===3?15:7;1<y&&_<b;)h=h<<6|63&g[_++],y--;1<y?S[p++]=65533:h<65536?S[p++]=h:(h-=65536,S[p++]=55296|h>>10&1023,S[p++]=56320|1023&h)}return S.length!==p&&(S.subarray?S=S.subarray(0,p):S.length=p),s.applyFromCharCode(S)})(u=s.transformTo(o.uint8array?"uint8array":"array",u))},s.inherits(f,c),f.prototype.processChunk=function(u){var g=s.transformTo(o.uint8array?"uint8array":"array",u.data);if(this.leftOver&&this.leftOver.length){if(o.uint8array){var _=g;(g=new Uint8Array(_.length+this.leftOver.length)).set(this.leftOver,0),g.set(_,this.leftOver.length)}else g=this.leftOver.concat(g);this.leftOver=null}var p=(function(y,b){var S;for((b=b||y.length)>y.length&&(b=y.length),S=b-1;0<=S&&(192&y[S])==128;)S--;return S<0||S===0?b:S+l[y[S]]>b?S:b})(g),h=g;p!==g.length&&(o.uint8array?(h=g.subarray(0,p),this.leftOver=g.subarray(p,g.length)):(h=g.slice(0,p),this.leftOver=g.slice(p,g.length))),this.push({data:r.utf8decode(h),meta:u.meta})},f.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:r.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},r.Utf8DecodeWorker=f,s.inherits(m,c),m.prototype.processChunk=function(u){this.push({data:r.utf8encode(u.data),meta:u.meta})},r.Utf8EncodeWorker=m},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,n,r){var s=e("./support"),o=e("./base64"),a=e("./nodejsUtils"),c=e("./external");function l(_){return _}function d(_,p){for(var h=0;h<_.length;++h)p[h]=255&_.charCodeAt(h);return p}e("setimmediate"),r.newBlob=function(_,p){r.checkSupport("blob");try{return new Blob([_],{type:p})}catch{try{var h=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return h.append(_),h.getBlob(p)}catch{throw new Error("Bug : can't construct the Blob.")}}};var f={stringifyByChunk:function(_,p,h){var y=[],b=0,S=_.length;if(S<=h)return String.fromCharCode.apply(null,_);for(;b<S;)p==="array"||p==="nodebuffer"?y.push(String.fromCharCode.apply(null,_.slice(b,Math.min(b+h,S)))):y.push(String.fromCharCode.apply(null,_.subarray(b,Math.min(b+h,S)))),b+=h;return y.join("")},stringifyByChar:function(_){for(var p="",h=0;h<_.length;h++)p+=String.fromCharCode(_[h]);return p},applyCanBeUsed:{uint8array:(function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}})()}};function m(_){var p=65536,h=r.getTypeOf(_),y=!0;if(h==="uint8array"?y=f.applyCanBeUsed.uint8array:h==="nodebuffer"&&(y=f.applyCanBeUsed.nodebuffer),y)for(;1<p;)try{return f.stringifyByChunk(_,h,p)}catch{p=Math.floor(p/2)}return f.stringifyByChar(_)}function u(_,p){for(var h=0;h<_.length;h++)p[h]=_[h];return p}r.applyFromCharCode=m;var g={};g.string={string:l,array:function(_){return d(_,new Array(_.length))},arraybuffer:function(_){return g.string.uint8array(_).buffer},uint8array:function(_){return d(_,new Uint8Array(_.length))},nodebuffer:function(_){return d(_,a.allocBuffer(_.length))}},g.array={string:m,array:l,arraybuffer:function(_){return new Uint8Array(_).buffer},uint8array:function(_){return new Uint8Array(_)},nodebuffer:function(_){return a.newBufferFrom(_)}},g.arraybuffer={string:function(_){return m(new Uint8Array(_))},array:function(_){return u(new Uint8Array(_),new Array(_.byteLength))},arraybuffer:l,uint8array:function(_){return new Uint8Array(_)},nodebuffer:function(_){return a.newBufferFrom(new Uint8Array(_))}},g.uint8array={string:m,array:function(_){return u(_,new Array(_.length))},arraybuffer:function(_){return _.buffer},uint8array:l,nodebuffer:function(_){return a.newBufferFrom(_)}},g.nodebuffer={string:m,array:function(_){return u(_,new Array(_.length))},arraybuffer:function(_){return g.nodebuffer.uint8array(_).buffer},uint8array:function(_){return u(_,new Uint8Array(_.length))},nodebuffer:l},r.transformTo=function(_,p){if(p=p||"",!_)return p;r.checkSupport(_);var h=r.getTypeOf(p);return g[h][_](p)},r.resolve=function(_){for(var p=_.split("/"),h=[],y=0;y<p.length;y++){var b=p[y];b==="."||b===""&&y!==0&&y!==p.length-1||(b===".."?h.pop():h.push(b))}return h.join("/")},r.getTypeOf=function(_){if(typeof _=="string")return"string";var p=Object.prototype.toString.call(_);return p==="[object Array]"?"array":s.nodebuffer&&a.isBuffer(_)?"nodebuffer":s.uint8array&&p==="[object Uint8Array]"?"uint8array":s.arraybuffer&&p==="[object ArrayBuffer]"?"arraybuffer":void 0},r.checkSupport=function(_){if(!s[_.toLowerCase()])throw new Error(_+" is not supported by this platform")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(_){var p,h,y="";for(h=0;h<(_||"").length;h++)y+="\\x"+((p=_.charCodeAt(h))<16?"0":"")+p.toString(16).toUpperCase();return y},r.delay=function(_,p,h){setImmediate(function(){_.apply(h||null,p||[])})},r.inherits=function(_,p){function h(){}h.prototype=p.prototype,_.prototype=new h},r.extend=function(){var _,p,h={};for(_=0;_<arguments.length;_++)for(p in arguments[_])Object.prototype.hasOwnProperty.call(arguments[_],p)&&h[p]===void 0&&(h[p]=arguments[_][p]);return h},r.prepareContent=function(_,p,h,y,b){return c.Promise.resolve(p).then(function(S){return s.blob&&(S instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(S))!==-1)?Blob.prototype.arrayBuffer!==void 0?S.arrayBuffer():typeof FileReader<"u"?new c.Promise(function(A,C){var D=new FileReader;D.onload=function(U){A(U.target.result)},D.onerror=function(U){C(U.target.error)},D.readAsArrayBuffer(S)}):c.Promise.reject(new Error(_+" is a Blob, but we have no way of reading it.")):S}).then(function(S){var A=r.getTypeOf(S);return A?(A==="arraybuffer"?S=r.transformTo("uint8array",S):A==="string"&&(b?S=o.decode(S):h&&y!==!0&&(S=(function(C){return d(C,s.uint8array?new Uint8Array(C.length):new Array(C.length))})(S))),S):c.Promise.reject(new Error("Can't read the data of '"+_+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,n,r){var s=e("./reader/readerFor"),o=e("./utils"),a=e("./signature"),c=e("./zipEntry"),l=e("./support");function d(f){this.files=[],this.loadOptions=f}d.prototype={checkSignature:function(f){if(!this.reader.readAndCheckSignature(f)){this.reader.index-=4;var m=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+o.pretty(m)+", expected "+o.pretty(f)+")")}},isSignature:function(f,m){var u=this.reader.index;this.reader.setIndex(f);var g=this.reader.readString(4)===m;return this.reader.setIndex(u),g},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var f=this.reader.readData(this.zipCommentLength),m=l.uint8array?"uint8array":"array",u=o.transformTo(m,f);this.zipComment=this.loadOptions.decodeFileName(u)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var f,m,u,g=this.zip64EndOfCentralSize-44;0<g;)f=this.reader.readInt(2),m=this.reader.readInt(4),u=this.reader.readData(m),this.zip64ExtensibleData[f]={id:f,length:m,value:u}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var f,m;for(f=0;f<this.files.length;f++)m=this.files[f],this.reader.setIndex(m.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),m.readLocalPart(this.reader),m.handleUTF8(),m.processAttributes()},readCentralDir:function(){var f;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(f=new c({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(f);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var f=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(f<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(f);var m=f;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===o.MAX_VALUE_16BITS||this.diskWithCentralDirStart===o.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===o.MAX_VALUE_16BITS||this.centralDirRecords===o.MAX_VALUE_16BITS||this.centralDirSize===o.MAX_VALUE_32BITS||this.centralDirOffset===o.MAX_VALUE_32BITS){if(this.zip64=!0,(f=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(f),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var u=this.centralDirOffset+this.centralDirSize;this.zip64&&(u+=20,u+=12+this.zip64EndOfCentralSize);var g=m-u;if(0<g)this.isSignature(m,a.CENTRAL_FILE_HEADER)||(this.reader.zero=g);else if(g<0)throw new Error("Corrupted zip: missing "+Math.abs(g)+" bytes.")},prepareReader:function(f){this.reader=s(f)},load:function(f){this.prepareReader(f),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},n.exports=d},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,n,r){var s=e("./reader/readerFor"),o=e("./utils"),a=e("./compressedObject"),c=e("./crc32"),l=e("./utf8"),d=e("./compressions"),f=e("./support");function m(u,g){this.options=u,this.loadOptions=g}m.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(u){var g,_;if(u.skip(22),this.fileNameLength=u.readInt(2),_=u.readInt(2),this.fileName=u.readData(this.fileNameLength),u.skip(_),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((g=(function(p){for(var h in d)if(Object.prototype.hasOwnProperty.call(d,h)&&d[h].magic===p)return d[h];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+o.pretty(this.compressionMethod)+" unknown (inner file : "+o.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,g,u.readData(this.compressedSize))},readCentralPart:function(u){this.versionMadeBy=u.readInt(2),u.skip(2),this.bitFlag=u.readInt(2),this.compressionMethod=u.readString(2),this.date=u.readDate(),this.crc32=u.readInt(4),this.compressedSize=u.readInt(4),this.uncompressedSize=u.readInt(4);var g=u.readInt(2);if(this.extraFieldsLength=u.readInt(2),this.fileCommentLength=u.readInt(2),this.diskNumberStart=u.readInt(2),this.internalFileAttributes=u.readInt(2),this.externalFileAttributes=u.readInt(4),this.localHeaderOffset=u.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");u.skip(g),this.readExtraFields(u),this.parseZIP64ExtraField(u),this.fileComment=u.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var u=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),u==0&&(this.dosPermissions=63&this.externalFileAttributes),u==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var u=s(this.extraFields[1].value);this.uncompressedSize===o.MAX_VALUE_32BITS&&(this.uncompressedSize=u.readInt(8)),this.compressedSize===o.MAX_VALUE_32BITS&&(this.compressedSize=u.readInt(8)),this.localHeaderOffset===o.MAX_VALUE_32BITS&&(this.localHeaderOffset=u.readInt(8)),this.diskNumberStart===o.MAX_VALUE_32BITS&&(this.diskNumberStart=u.readInt(4))}},readExtraFields:function(u){var g,_,p,h=u.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});u.index+4<h;)g=u.readInt(2),_=u.readInt(2),p=u.readData(_),this.extraFields[g]={id:g,length:_,value:p};u.setIndex(h)},handleUTF8:function(){var u=f.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=l.utf8decode(this.fileName),this.fileCommentStr=l.utf8decode(this.fileComment);else{var g=this.findExtraFieldUnicodePath();if(g!==null)this.fileNameStr=g;else{var _=o.transformTo(u,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(_)}var p=this.findExtraFieldUnicodeComment();if(p!==null)this.fileCommentStr=p;else{var h=o.transformTo(u,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(h)}}},findExtraFieldUnicodePath:function(){var u=this.extraFields[28789];if(u){var g=s(u.value);return g.readInt(1)!==1||c(this.fileName)!==g.readInt(4)?null:l.utf8decode(g.readData(u.length-5))}return null},findExtraFieldUnicodeComment:function(){var u=this.extraFields[25461];if(u){var g=s(u.value);return g.readInt(1)!==1||c(this.fileComment)!==g.readInt(4)?null:l.utf8decode(g.readData(u.length-5))}return null}},n.exports=m},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,n,r){function s(g,_,p){this.name=g,this.dir=p.dir,this.date=p.date,this.comment=p.comment,this.unixPermissions=p.unixPermissions,this.dosPermissions=p.dosPermissions,this._data=_,this._dataBinary=p.binary,this.options={compression:p.compression,compressionOptions:p.compressionOptions}}var o=e("./stream/StreamHelper"),a=e("./stream/DataWorker"),c=e("./utf8"),l=e("./compressedObject"),d=e("./stream/GenericWorker");s.prototype={internalStream:function(g){var _=null,p="string";try{if(!g)throw new Error("No output type specified.");var h=(p=g.toLowerCase())==="string"||p==="text";p!=="binarystring"&&p!=="text"||(p="string"),_=this._decompressWorker();var y=!this._dataBinary;y&&!h&&(_=_.pipe(new c.Utf8EncodeWorker)),!y&&h&&(_=_.pipe(new c.Utf8DecodeWorker))}catch(b){(_=new d("error")).error(b)}return new o(_,p,"")},async:function(g,_){return this.internalStream(g).accumulate(_)},nodeStream:function(g,_){return this.internalStream(g||"nodebuffer").toNodejsStream(_)},_compressWorker:function(g,_){if(this._data instanceof l&&this._data.compression.magic===g.magic)return this._data.getCompressedWorker();var p=this._decompressWorker();return this._dataBinary||(p=p.pipe(new c.Utf8EncodeWorker)),l.createWorkerFrom(p,g,_)},_decompressWorker:function(){return this._data instanceof l?this._data.getContentWorker():this._data instanceof d?this._data:new a(this._data)}};for(var f=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],m=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},u=0;u<f.length;u++)s.prototype[f[u]]=m;n.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,n,r){(function(s){var o,a,c=s.MutationObserver||s.WebKitMutationObserver;if(c){var l=0,d=new c(g),f=s.document.createTextNode("");d.observe(f,{characterData:!0}),o=function(){f.data=l=++l%2}}else if(s.setImmediate||s.MessageChannel===void 0)o="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var _=s.document.createElement("script");_.onreadystatechange=function(){g(),_.onreadystatechange=null,_.parentNode.removeChild(_),_=null},s.document.documentElement.appendChild(_)}:function(){setTimeout(g,0)};else{var m=new s.MessageChannel;m.port1.onmessage=g,o=function(){m.port2.postMessage(0)}}var u=[];function g(){var _,p;a=!0;for(var h=u.length;h;){for(p=u,u=[],_=-1;++_<h;)p[_]();h=u.length}a=!1}n.exports=function(_){u.push(_)!==1||a||o()}}).call(this,typeof br<"u"?br:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(e,n,r){var s=e("immediate");function o(){}var a={},c=["REJECTED"],l=["FULFILLED"],d=["PENDING"];function f(h){if(typeof h!="function")throw new TypeError("resolver must be a function");this.state=d,this.queue=[],this.outcome=void 0,h!==o&&_(this,h)}function m(h,y,b){this.promise=h,typeof y=="function"&&(this.onFulfilled=y,this.callFulfilled=this.otherCallFulfilled),typeof b=="function"&&(this.onRejected=b,this.callRejected=this.otherCallRejected)}function u(h,y,b){s(function(){var S;try{S=y(b)}catch(A){return a.reject(h,A)}S===h?a.reject(h,new TypeError("Cannot resolve promise with itself")):a.resolve(h,S)})}function g(h){var y=h&&h.then;if(h&&(typeof h=="object"||typeof h=="function")&&typeof y=="function")return function(){y.apply(h,arguments)}}function _(h,y){var b=!1;function S(D){b||(b=!0,a.reject(h,D))}function A(D){b||(b=!0,a.resolve(h,D))}var C=p(function(){y(A,S)});C.status==="error"&&S(C.value)}function p(h,y){var b={};try{b.value=h(y),b.status="success"}catch(S){b.status="error",b.value=S}return b}(n.exports=f).prototype.finally=function(h){if(typeof h!="function")return this;var y=this.constructor;return this.then(function(b){return y.resolve(h()).then(function(){return b})},function(b){return y.resolve(h()).then(function(){throw b})})},f.prototype.catch=function(h){return this.then(null,h)},f.prototype.then=function(h,y){if(typeof h!="function"&&this.state===l||typeof y!="function"&&this.state===c)return this;var b=new this.constructor(o);return this.state!==d?u(b,this.state===l?h:y,this.outcome):this.queue.push(new m(b,h,y)),b},m.prototype.callFulfilled=function(h){a.resolve(this.promise,h)},m.prototype.otherCallFulfilled=function(h){u(this.promise,this.onFulfilled,h)},m.prototype.callRejected=function(h){a.reject(this.promise,h)},m.prototype.otherCallRejected=function(h){u(this.promise,this.onRejected,h)},a.resolve=function(h,y){var b=p(g,y);if(b.status==="error")return a.reject(h,b.value);var S=b.value;if(S)_(h,S);else{h.state=l,h.outcome=y;for(var A=-1,C=h.queue.length;++A<C;)h.queue[A].callFulfilled(y)}return h},a.reject=function(h,y){h.state=c,h.outcome=y;for(var b=-1,S=h.queue.length;++b<S;)h.queue[b].callRejected(y);return h},f.resolve=function(h){return h instanceof this?h:a.resolve(new this(o),h)},f.reject=function(h){var y=new this(o);return a.reject(y,h)},f.all=function(h){var y=this;if(Object.prototype.toString.call(h)!=="[object Array]")return this.reject(new TypeError("must be an array"));var b=h.length,S=!1;if(!b)return this.resolve([]);for(var A=new Array(b),C=0,D=-1,U=new this(o);++D<b;)E(h[D],D);return U;function E(w,N){y.resolve(w).then(function(T){A[N]=T,++C!==b||S||(S=!0,a.resolve(U,A))},function(T){S||(S=!0,a.reject(U,T))})}},f.race=function(h){var y=this;if(Object.prototype.toString.call(h)!=="[object Array]")return this.reject(new TypeError("must be an array"));var b=h.length,S=!1;if(!b)return this.resolve([]);for(var A=-1,C=new this(o);++A<b;)D=h[A],y.resolve(D).then(function(U){S||(S=!0,a.resolve(C,U))},function(U){S||(S=!0,a.reject(C,U))});var D;return C}},{immediate:36}],38:[function(e,n,r){var s={};(0,e("./lib/utils/common").assign)(s,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),n.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,n,r){var s=e("./zlib/deflate"),o=e("./utils/common"),a=e("./utils/strings"),c=e("./zlib/messages"),l=e("./zlib/zstream"),d=Object.prototype.toString,f=0,m=-1,u=0,g=8;function _(h){if(!(this instanceof _))return new _(h);this.options=o.assign({level:m,method:g,chunkSize:16384,windowBits:15,memLevel:8,strategy:u,to:""},h||{});var y=this.options;y.raw&&0<y.windowBits?y.windowBits=-y.windowBits:y.gzip&&0<y.windowBits&&y.windowBits<16&&(y.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new l,this.strm.avail_out=0;var b=s.deflateInit2(this.strm,y.level,y.method,y.windowBits,y.memLevel,y.strategy);if(b!==f)throw new Error(c[b]);if(y.header&&s.deflateSetHeader(this.strm,y.header),y.dictionary){var S;if(S=typeof y.dictionary=="string"?a.string2buf(y.dictionary):d.call(y.dictionary)==="[object ArrayBuffer]"?new Uint8Array(y.dictionary):y.dictionary,(b=s.deflateSetDictionary(this.strm,S))!==f)throw new Error(c[b]);this._dict_set=!0}}function p(h,y){var b=new _(y);if(b.push(h,!0),b.err)throw b.msg||c[b.err];return b.result}_.prototype.push=function(h,y){var b,S,A=this.strm,C=this.options.chunkSize;if(this.ended)return!1;S=y===~~y?y:y===!0?4:0,typeof h=="string"?A.input=a.string2buf(h):d.call(h)==="[object ArrayBuffer]"?A.input=new Uint8Array(h):A.input=h,A.next_in=0,A.avail_in=A.input.length;do{if(A.avail_out===0&&(A.output=new o.Buf8(C),A.next_out=0,A.avail_out=C),(b=s.deflate(A,S))!==1&&b!==f)return this.onEnd(b),!(this.ended=!0);A.avail_out!==0&&(A.avail_in!==0||S!==4&&S!==2)||(this.options.to==="string"?this.onData(a.buf2binstring(o.shrinkBuf(A.output,A.next_out))):this.onData(o.shrinkBuf(A.output,A.next_out)))}while((0<A.avail_in||A.avail_out===0)&&b!==1);return S===4?(b=s.deflateEnd(this.strm),this.onEnd(b),this.ended=!0,b===f):S!==2||(this.onEnd(f),!(A.avail_out=0))},_.prototype.onData=function(h){this.chunks.push(h)},_.prototype.onEnd=function(h){h===f&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=h,this.msg=this.strm.msg},r.Deflate=_,r.deflate=p,r.deflateRaw=function(h,y){return(y=y||{}).raw=!0,p(h,y)},r.gzip=function(h,y){return(y=y||{}).gzip=!0,p(h,y)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,n,r){var s=e("./zlib/inflate"),o=e("./utils/common"),a=e("./utils/strings"),c=e("./zlib/constants"),l=e("./zlib/messages"),d=e("./zlib/zstream"),f=e("./zlib/gzheader"),m=Object.prototype.toString;function u(_){if(!(this instanceof u))return new u(_);this.options=o.assign({chunkSize:16384,windowBits:0,to:""},_||{});var p=this.options;p.raw&&0<=p.windowBits&&p.windowBits<16&&(p.windowBits=-p.windowBits,p.windowBits===0&&(p.windowBits=-15)),!(0<=p.windowBits&&p.windowBits<16)||_&&_.windowBits||(p.windowBits+=32),15<p.windowBits&&p.windowBits<48&&(15&p.windowBits)==0&&(p.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new d,this.strm.avail_out=0;var h=s.inflateInit2(this.strm,p.windowBits);if(h!==c.Z_OK)throw new Error(l[h]);this.header=new f,s.inflateGetHeader(this.strm,this.header)}function g(_,p){var h=new u(p);if(h.push(_,!0),h.err)throw h.msg||l[h.err];return h.result}u.prototype.push=function(_,p){var h,y,b,S,A,C,D=this.strm,U=this.options.chunkSize,E=this.options.dictionary,w=!1;if(this.ended)return!1;y=p===~~p?p:p===!0?c.Z_FINISH:c.Z_NO_FLUSH,typeof _=="string"?D.input=a.binstring2buf(_):m.call(_)==="[object ArrayBuffer]"?D.input=new Uint8Array(_):D.input=_,D.next_in=0,D.avail_in=D.input.length;do{if(D.avail_out===0&&(D.output=new o.Buf8(U),D.next_out=0,D.avail_out=U),(h=s.inflate(D,c.Z_NO_FLUSH))===c.Z_NEED_DICT&&E&&(C=typeof E=="string"?a.string2buf(E):m.call(E)==="[object ArrayBuffer]"?new Uint8Array(E):E,h=s.inflateSetDictionary(this.strm,C)),h===c.Z_BUF_ERROR&&w===!0&&(h=c.Z_OK,w=!1),h!==c.Z_STREAM_END&&h!==c.Z_OK)return this.onEnd(h),!(this.ended=!0);D.next_out&&(D.avail_out!==0&&h!==c.Z_STREAM_END&&(D.avail_in!==0||y!==c.Z_FINISH&&y!==c.Z_SYNC_FLUSH)||(this.options.to==="string"?(b=a.utf8border(D.output,D.next_out),S=D.next_out-b,A=a.buf2string(D.output,b),D.next_out=S,D.avail_out=U-S,S&&o.arraySet(D.output,D.output,b,S,0),this.onData(A)):this.onData(o.shrinkBuf(D.output,D.next_out)))),D.avail_in===0&&D.avail_out===0&&(w=!0)}while((0<D.avail_in||D.avail_out===0)&&h!==c.Z_STREAM_END);return h===c.Z_STREAM_END&&(y=c.Z_FINISH),y===c.Z_FINISH?(h=s.inflateEnd(this.strm),this.onEnd(h),this.ended=!0,h===c.Z_OK):y!==c.Z_SYNC_FLUSH||(this.onEnd(c.Z_OK),!(D.avail_out=0))},u.prototype.onData=function(_){this.chunks.push(_)},u.prototype.onEnd=function(_){_===c.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=_,this.msg=this.strm.msg},r.Inflate=u,r.inflate=g,r.inflateRaw=function(_,p){return(p=p||{}).raw=!0,g(_,p)},r.ungzip=g},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,n,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";r.assign=function(c){for(var l=Array.prototype.slice.call(arguments,1);l.length;){var d=l.shift();if(d){if(typeof d!="object")throw new TypeError(d+"must be non-object");for(var f in d)d.hasOwnProperty(f)&&(c[f]=d[f])}}return c},r.shrinkBuf=function(c,l){return c.length===l?c:c.subarray?c.subarray(0,l):(c.length=l,c)};var o={arraySet:function(c,l,d,f,m){if(l.subarray&&c.subarray)c.set(l.subarray(d,d+f),m);else for(var u=0;u<f;u++)c[m+u]=l[d+u]},flattenChunks:function(c){var l,d,f,m,u,g;for(l=f=0,d=c.length;l<d;l++)f+=c[l].length;for(g=new Uint8Array(f),l=m=0,d=c.length;l<d;l++)u=c[l],g.set(u,m),m+=u.length;return g}},a={arraySet:function(c,l,d,f,m){for(var u=0;u<f;u++)c[m+u]=l[d+u]},flattenChunks:function(c){return[].concat.apply([],c)}};r.setTyped=function(c){c?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,o)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,a))},r.setTyped(s)},{}],42:[function(e,n,r){var s=e("./common"),o=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{o=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var c=new s.Buf8(256),l=0;l<256;l++)c[l]=252<=l?6:248<=l?5:240<=l?4:224<=l?3:192<=l?2:1;function d(f,m){if(m<65537&&(f.subarray&&a||!f.subarray&&o))return String.fromCharCode.apply(null,s.shrinkBuf(f,m));for(var u="",g=0;g<m;g++)u+=String.fromCharCode(f[g]);return u}c[254]=c[254]=1,r.string2buf=function(f){var m,u,g,_,p,h=f.length,y=0;for(_=0;_<h;_++)(64512&(u=f.charCodeAt(_)))==55296&&_+1<h&&(64512&(g=f.charCodeAt(_+1)))==56320&&(u=65536+(u-55296<<10)+(g-56320),_++),y+=u<128?1:u<2048?2:u<65536?3:4;for(m=new s.Buf8(y),_=p=0;p<y;_++)(64512&(u=f.charCodeAt(_)))==55296&&_+1<h&&(64512&(g=f.charCodeAt(_+1)))==56320&&(u=65536+(u-55296<<10)+(g-56320),_++),u<128?m[p++]=u:(u<2048?m[p++]=192|u>>>6:(u<65536?m[p++]=224|u>>>12:(m[p++]=240|u>>>18,m[p++]=128|u>>>12&63),m[p++]=128|u>>>6&63),m[p++]=128|63&u);return m},r.buf2binstring=function(f){return d(f,f.length)},r.binstring2buf=function(f){for(var m=new s.Buf8(f.length),u=0,g=m.length;u<g;u++)m[u]=f.charCodeAt(u);return m},r.buf2string=function(f,m){var u,g,_,p,h=m||f.length,y=new Array(2*h);for(u=g=0;u<h;)if((_=f[u++])<128)y[g++]=_;else if(4<(p=c[_]))y[g++]=65533,u+=p-1;else{for(_&=p===2?31:p===3?15:7;1<p&&u<h;)_=_<<6|63&f[u++],p--;1<p?y[g++]=65533:_<65536?y[g++]=_:(_-=65536,y[g++]=55296|_>>10&1023,y[g++]=56320|1023&_)}return d(y,g)},r.utf8border=function(f,m){var u;for((m=m||f.length)>f.length&&(m=f.length),u=m-1;0<=u&&(192&f[u])==128;)u--;return u<0||u===0?m:u+c[f[u]]>m?u:m}},{"./common":41}],43:[function(e,n,r){n.exports=function(s,o,a,c){for(var l=65535&s|0,d=s>>>16&65535|0,f=0;a!==0;){for(a-=f=2e3<a?2e3:a;d=d+(l=l+o[c++]|0)|0,--f;);l%=65521,d%=65521}return l|d<<16|0}},{}],44:[function(e,n,r){n.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,n,r){var s=(function(){for(var o,a=[],c=0;c<256;c++){o=c;for(var l=0;l<8;l++)o=1&o?3988292384^o>>>1:o>>>1;a[c]=o}return a})();n.exports=function(o,a,c,l){var d=s,f=l+c;o^=-1;for(var m=l;m<f;m++)o=o>>>8^d[255&(o^a[m])];return-1^o}},{}],46:[function(e,n,r){var s,o=e("../utils/common"),a=e("./trees"),c=e("./adler32"),l=e("./crc32"),d=e("./messages"),f=0,m=4,u=0,g=-2,_=-1,p=4,h=2,y=8,b=9,S=286,A=30,C=19,D=2*S+1,U=15,E=3,w=258,N=w+E+1,T=42,F=113,v=1,z=2,Y=3,G=4;function q(x,et){return x.msg=d[et],et}function Q(x){return(x<<1)-(4<x?9:0)}function ct(x){for(var et=x.length;0<=--et;)x[et]=0}function V(x){var et=x.state,X=et.pending;X>x.avail_out&&(X=x.avail_out),X!==0&&(o.arraySet(x.output,et.pending_buf,et.pending_out,X,x.next_out),x.next_out+=X,et.pending_out+=X,x.total_out+=X,x.avail_out-=X,et.pending-=X,et.pending===0&&(et.pending_out=0))}function W(x,et){a._tr_flush_block(x,0<=x.block_start?x.block_start:-1,x.strstart-x.block_start,et),x.block_start=x.strstart,V(x.strm)}function yt(x,et){x.pending_buf[x.pending++]=et}function mt(x,et){x.pending_buf[x.pending++]=et>>>8&255,x.pending_buf[x.pending++]=255&et}function ut(x,et){var X,L,I=x.max_chain_length,B=x.strstart,nt=x.prev_length,ot=x.nice_match,j=x.strstart>x.w_size-N?x.strstart-(x.w_size-N):0,R=x.window,M=x.w_mask,O=x.prev,K=x.strstart+w,at=R[B+nt-1],tt=R[B+nt];x.prev_length>=x.good_match&&(I>>=2),ot>x.lookahead&&(ot=x.lookahead);do if(R[(X=et)+nt]===tt&&R[X+nt-1]===at&&R[X]===R[B]&&R[++X]===R[B+1]){B+=2,X++;do;while(R[++B]===R[++X]&&R[++B]===R[++X]&&R[++B]===R[++X]&&R[++B]===R[++X]&&R[++B]===R[++X]&&R[++B]===R[++X]&&R[++B]===R[++X]&&R[++B]===R[++X]&&B<K);if(L=w-(K-B),B=K-w,nt<L){if(x.match_start=et,ot<=(nt=L))break;at=R[B+nt-1],tt=R[B+nt]}}while((et=O[et&M])>j&&--I!=0);return nt<=x.lookahead?nt:x.lookahead}function st(x){var et,X,L,I,B,nt,ot,j,R,M,O=x.w_size;do{if(I=x.window_size-x.lookahead-x.strstart,x.strstart>=O+(O-N)){for(o.arraySet(x.window,x.window,O,O,0),x.match_start-=O,x.strstart-=O,x.block_start-=O,et=X=x.hash_size;L=x.head[--et],x.head[et]=O<=L?L-O:0,--X;);for(et=X=O;L=x.prev[--et],x.prev[et]=O<=L?L-O:0,--X;);I+=O}if(x.strm.avail_in===0)break;if(nt=x.strm,ot=x.window,j=x.strstart+x.lookahead,R=I,M=void 0,M=nt.avail_in,R<M&&(M=R),X=M===0?0:(nt.avail_in-=M,o.arraySet(ot,nt.input,nt.next_in,M,j),nt.state.wrap===1?nt.adler=c(nt.adler,ot,M,j):nt.state.wrap===2&&(nt.adler=l(nt.adler,ot,M,j)),nt.next_in+=M,nt.total_in+=M,M),x.lookahead+=X,x.lookahead+x.insert>=E)for(B=x.strstart-x.insert,x.ins_h=x.window[B],x.ins_h=(x.ins_h<<x.hash_shift^x.window[B+1])&x.hash_mask;x.insert&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[B+E-1])&x.hash_mask,x.prev[B&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=B,B++,x.insert--,!(x.lookahead+x.insert<E)););}while(x.lookahead<N&&x.strm.avail_in!==0)}function lt(x,et){for(var X,L;;){if(x.lookahead<N){if(st(x),x.lookahead<N&&et===f)return v;if(x.lookahead===0)break}if(X=0,x.lookahead>=E&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+E-1])&x.hash_mask,X=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart),X!==0&&x.strstart-X<=x.w_size-N&&(x.match_length=ut(x,X)),x.match_length>=E)if(L=a._tr_tally(x,x.strstart-x.match_start,x.match_length-E),x.lookahead-=x.match_length,x.match_length<=x.max_lazy_match&&x.lookahead>=E){for(x.match_length--;x.strstart++,x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+E-1])&x.hash_mask,X=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart,--x.match_length!=0;);x.strstart++}else x.strstart+=x.match_length,x.match_length=0,x.ins_h=x.window[x.strstart],x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+1])&x.hash_mask;else L=a._tr_tally(x,0,x.window[x.strstart]),x.lookahead--,x.strstart++;if(L&&(W(x,!1),x.strm.avail_out===0))return v}return x.insert=x.strstart<E-1?x.strstart:E-1,et===m?(W(x,!0),x.strm.avail_out===0?Y:G):x.last_lit&&(W(x,!1),x.strm.avail_out===0)?v:z}function ft(x,et){for(var X,L,I;;){if(x.lookahead<N){if(st(x),x.lookahead<N&&et===f)return v;if(x.lookahead===0)break}if(X=0,x.lookahead>=E&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+E-1])&x.hash_mask,X=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart),x.prev_length=x.match_length,x.prev_match=x.match_start,x.match_length=E-1,X!==0&&x.prev_length<x.max_lazy_match&&x.strstart-X<=x.w_size-N&&(x.match_length=ut(x,X),x.match_length<=5&&(x.strategy===1||x.match_length===E&&4096<x.strstart-x.match_start)&&(x.match_length=E-1)),x.prev_length>=E&&x.match_length<=x.prev_length){for(I=x.strstart+x.lookahead-E,L=a._tr_tally(x,x.strstart-1-x.prev_match,x.prev_length-E),x.lookahead-=x.prev_length-1,x.prev_length-=2;++x.strstart<=I&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+E-1])&x.hash_mask,X=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart),--x.prev_length!=0;);if(x.match_available=0,x.match_length=E-1,x.strstart++,L&&(W(x,!1),x.strm.avail_out===0))return v}else if(x.match_available){if((L=a._tr_tally(x,0,x.window[x.strstart-1]))&&W(x,!1),x.strstart++,x.lookahead--,x.strm.avail_out===0)return v}else x.match_available=1,x.strstart++,x.lookahead--}return x.match_available&&(L=a._tr_tally(x,0,x.window[x.strstart-1]),x.match_available=0),x.insert=x.strstart<E-1?x.strstart:E-1,et===m?(W(x,!0),x.strm.avail_out===0?Y:G):x.last_lit&&(W(x,!1),x.strm.avail_out===0)?v:z}function St(x,et,X,L,I){this.good_length=x,this.max_lazy=et,this.nice_length=X,this.max_chain=L,this.func=I}function wt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=y,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new o.Buf16(2*D),this.dyn_dtree=new o.Buf16(2*(2*A+1)),this.bl_tree=new o.Buf16(2*(2*C+1)),ct(this.dyn_ltree),ct(this.dyn_dtree),ct(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new o.Buf16(U+1),this.heap=new o.Buf16(2*S+1),ct(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new o.Buf16(2*S+1),ct(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Nt(x){var et;return x&&x.state?(x.total_in=x.total_out=0,x.data_type=h,(et=x.state).pending=0,et.pending_out=0,et.wrap<0&&(et.wrap=-et.wrap),et.status=et.wrap?T:F,x.adler=et.wrap===2?0:1,et.last_flush=f,a._tr_init(et),u):q(x,g)}function re(x){var et=Nt(x);return et===u&&(function(X){X.window_size=2*X.w_size,ct(X.head),X.max_lazy_match=s[X.level].max_lazy,X.good_match=s[X.level].good_length,X.nice_match=s[X.level].nice_length,X.max_chain_length=s[X.level].max_chain,X.strstart=0,X.block_start=0,X.lookahead=0,X.insert=0,X.match_length=X.prev_length=E-1,X.match_available=0,X.ins_h=0})(x.state),et}function k(x,et,X,L,I,B){if(!x)return g;var nt=1;if(et===_&&(et=6),L<0?(nt=0,L=-L):15<L&&(nt=2,L-=16),I<1||b<I||X!==y||L<8||15<L||et<0||9<et||B<0||p<B)return q(x,g);L===8&&(L=9);var ot=new wt;return(x.state=ot).strm=x,ot.wrap=nt,ot.gzhead=null,ot.w_bits=L,ot.w_size=1<<ot.w_bits,ot.w_mask=ot.w_size-1,ot.hash_bits=I+7,ot.hash_size=1<<ot.hash_bits,ot.hash_mask=ot.hash_size-1,ot.hash_shift=~~((ot.hash_bits+E-1)/E),ot.window=new o.Buf8(2*ot.w_size),ot.head=new o.Buf16(ot.hash_size),ot.prev=new o.Buf16(ot.w_size),ot.lit_bufsize=1<<I+6,ot.pending_buf_size=4*ot.lit_bufsize,ot.pending_buf=new o.Buf8(ot.pending_buf_size),ot.d_buf=1*ot.lit_bufsize,ot.l_buf=3*ot.lit_bufsize,ot.level=et,ot.strategy=B,ot.method=X,re(x)}s=[new St(0,0,0,0,function(x,et){var X=65535;for(X>x.pending_buf_size-5&&(X=x.pending_buf_size-5);;){if(x.lookahead<=1){if(st(x),x.lookahead===0&&et===f)return v;if(x.lookahead===0)break}x.strstart+=x.lookahead,x.lookahead=0;var L=x.block_start+X;if((x.strstart===0||x.strstart>=L)&&(x.lookahead=x.strstart-L,x.strstart=L,W(x,!1),x.strm.avail_out===0)||x.strstart-x.block_start>=x.w_size-N&&(W(x,!1),x.strm.avail_out===0))return v}return x.insert=0,et===m?(W(x,!0),x.strm.avail_out===0?Y:G):(x.strstart>x.block_start&&(W(x,!1),x.strm.avail_out),v)}),new St(4,4,8,4,lt),new St(4,5,16,8,lt),new St(4,6,32,32,lt),new St(4,4,16,16,ft),new St(8,16,32,32,ft),new St(8,16,128,128,ft),new St(8,32,128,256,ft),new St(32,128,258,1024,ft),new St(32,258,258,4096,ft)],r.deflateInit=function(x,et){return k(x,et,y,15,8,0)},r.deflateInit2=k,r.deflateReset=re,r.deflateResetKeep=Nt,r.deflateSetHeader=function(x,et){return x&&x.state?x.state.wrap!==2?g:(x.state.gzhead=et,u):g},r.deflate=function(x,et){var X,L,I,B;if(!x||!x.state||5<et||et<0)return x?q(x,g):g;if(L=x.state,!x.output||!x.input&&x.avail_in!==0||L.status===666&&et!==m)return q(x,x.avail_out===0?-5:g);if(L.strm=x,X=L.last_flush,L.last_flush=et,L.status===T)if(L.wrap===2)x.adler=0,yt(L,31),yt(L,139),yt(L,8),L.gzhead?(yt(L,(L.gzhead.text?1:0)+(L.gzhead.hcrc?2:0)+(L.gzhead.extra?4:0)+(L.gzhead.name?8:0)+(L.gzhead.comment?16:0)),yt(L,255&L.gzhead.time),yt(L,L.gzhead.time>>8&255),yt(L,L.gzhead.time>>16&255),yt(L,L.gzhead.time>>24&255),yt(L,L.level===9?2:2<=L.strategy||L.level<2?4:0),yt(L,255&L.gzhead.os),L.gzhead.extra&&L.gzhead.extra.length&&(yt(L,255&L.gzhead.extra.length),yt(L,L.gzhead.extra.length>>8&255)),L.gzhead.hcrc&&(x.adler=l(x.adler,L.pending_buf,L.pending,0)),L.gzindex=0,L.status=69):(yt(L,0),yt(L,0),yt(L,0),yt(L,0),yt(L,0),yt(L,L.level===9?2:2<=L.strategy||L.level<2?4:0),yt(L,3),L.status=F);else{var nt=y+(L.w_bits-8<<4)<<8;nt|=(2<=L.strategy||L.level<2?0:L.level<6?1:L.level===6?2:3)<<6,L.strstart!==0&&(nt|=32),nt+=31-nt%31,L.status=F,mt(L,nt),L.strstart!==0&&(mt(L,x.adler>>>16),mt(L,65535&x.adler)),x.adler=1}if(L.status===69)if(L.gzhead.extra){for(I=L.pending;L.gzindex<(65535&L.gzhead.extra.length)&&(L.pending!==L.pending_buf_size||(L.gzhead.hcrc&&L.pending>I&&(x.adler=l(x.adler,L.pending_buf,L.pending-I,I)),V(x),I=L.pending,L.pending!==L.pending_buf_size));)yt(L,255&L.gzhead.extra[L.gzindex]),L.gzindex++;L.gzhead.hcrc&&L.pending>I&&(x.adler=l(x.adler,L.pending_buf,L.pending-I,I)),L.gzindex===L.gzhead.extra.length&&(L.gzindex=0,L.status=73)}else L.status=73;if(L.status===73)if(L.gzhead.name){I=L.pending;do{if(L.pending===L.pending_buf_size&&(L.gzhead.hcrc&&L.pending>I&&(x.adler=l(x.adler,L.pending_buf,L.pending-I,I)),V(x),I=L.pending,L.pending===L.pending_buf_size)){B=1;break}B=L.gzindex<L.gzhead.name.length?255&L.gzhead.name.charCodeAt(L.gzindex++):0,yt(L,B)}while(B!==0);L.gzhead.hcrc&&L.pending>I&&(x.adler=l(x.adler,L.pending_buf,L.pending-I,I)),B===0&&(L.gzindex=0,L.status=91)}else L.status=91;if(L.status===91)if(L.gzhead.comment){I=L.pending;do{if(L.pending===L.pending_buf_size&&(L.gzhead.hcrc&&L.pending>I&&(x.adler=l(x.adler,L.pending_buf,L.pending-I,I)),V(x),I=L.pending,L.pending===L.pending_buf_size)){B=1;break}B=L.gzindex<L.gzhead.comment.length?255&L.gzhead.comment.charCodeAt(L.gzindex++):0,yt(L,B)}while(B!==0);L.gzhead.hcrc&&L.pending>I&&(x.adler=l(x.adler,L.pending_buf,L.pending-I,I)),B===0&&(L.status=103)}else L.status=103;if(L.status===103&&(L.gzhead.hcrc?(L.pending+2>L.pending_buf_size&&V(x),L.pending+2<=L.pending_buf_size&&(yt(L,255&x.adler),yt(L,x.adler>>8&255),x.adler=0,L.status=F)):L.status=F),L.pending!==0){if(V(x),x.avail_out===0)return L.last_flush=-1,u}else if(x.avail_in===0&&Q(et)<=Q(X)&&et!==m)return q(x,-5);if(L.status===666&&x.avail_in!==0)return q(x,-5);if(x.avail_in!==0||L.lookahead!==0||et!==f&&L.status!==666){var ot=L.strategy===2?(function(j,R){for(var M;;){if(j.lookahead===0&&(st(j),j.lookahead===0)){if(R===f)return v;break}if(j.match_length=0,M=a._tr_tally(j,0,j.window[j.strstart]),j.lookahead--,j.strstart++,M&&(W(j,!1),j.strm.avail_out===0))return v}return j.insert=0,R===m?(W(j,!0),j.strm.avail_out===0?Y:G):j.last_lit&&(W(j,!1),j.strm.avail_out===0)?v:z})(L,et):L.strategy===3?(function(j,R){for(var M,O,K,at,tt=j.window;;){if(j.lookahead<=w){if(st(j),j.lookahead<=w&&R===f)return v;if(j.lookahead===0)break}if(j.match_length=0,j.lookahead>=E&&0<j.strstart&&(O=tt[K=j.strstart-1])===tt[++K]&&O===tt[++K]&&O===tt[++K]){at=j.strstart+w;do;while(O===tt[++K]&&O===tt[++K]&&O===tt[++K]&&O===tt[++K]&&O===tt[++K]&&O===tt[++K]&&O===tt[++K]&&O===tt[++K]&&K<at);j.match_length=w-(at-K),j.match_length>j.lookahead&&(j.match_length=j.lookahead)}if(j.match_length>=E?(M=a._tr_tally(j,1,j.match_length-E),j.lookahead-=j.match_length,j.strstart+=j.match_length,j.match_length=0):(M=a._tr_tally(j,0,j.window[j.strstart]),j.lookahead--,j.strstart++),M&&(W(j,!1),j.strm.avail_out===0))return v}return j.insert=0,R===m?(W(j,!0),j.strm.avail_out===0?Y:G):j.last_lit&&(W(j,!1),j.strm.avail_out===0)?v:z})(L,et):s[L.level].func(L,et);if(ot!==Y&&ot!==G||(L.status=666),ot===v||ot===Y)return x.avail_out===0&&(L.last_flush=-1),u;if(ot===z&&(et===1?a._tr_align(L):et!==5&&(a._tr_stored_block(L,0,0,!1),et===3&&(ct(L.head),L.lookahead===0&&(L.strstart=0,L.block_start=0,L.insert=0))),V(x),x.avail_out===0))return L.last_flush=-1,u}return et!==m?u:L.wrap<=0?1:(L.wrap===2?(yt(L,255&x.adler),yt(L,x.adler>>8&255),yt(L,x.adler>>16&255),yt(L,x.adler>>24&255),yt(L,255&x.total_in),yt(L,x.total_in>>8&255),yt(L,x.total_in>>16&255),yt(L,x.total_in>>24&255)):(mt(L,x.adler>>>16),mt(L,65535&x.adler)),V(x),0<L.wrap&&(L.wrap=-L.wrap),L.pending!==0?u:1)},r.deflateEnd=function(x){var et;return x&&x.state?(et=x.state.status)!==T&&et!==69&&et!==73&&et!==91&&et!==103&&et!==F&&et!==666?q(x,g):(x.state=null,et===F?q(x,-3):u):g},r.deflateSetDictionary=function(x,et){var X,L,I,B,nt,ot,j,R,M=et.length;if(!x||!x.state||(B=(X=x.state).wrap)===2||B===1&&X.status!==T||X.lookahead)return g;for(B===1&&(x.adler=c(x.adler,et,M,0)),X.wrap=0,M>=X.w_size&&(B===0&&(ct(X.head),X.strstart=0,X.block_start=0,X.insert=0),R=new o.Buf8(X.w_size),o.arraySet(R,et,M-X.w_size,X.w_size,0),et=R,M=X.w_size),nt=x.avail_in,ot=x.next_in,j=x.input,x.avail_in=M,x.next_in=0,x.input=et,st(X);X.lookahead>=E;){for(L=X.strstart,I=X.lookahead-(E-1);X.ins_h=(X.ins_h<<X.hash_shift^X.window[L+E-1])&X.hash_mask,X.prev[L&X.w_mask]=X.head[X.ins_h],X.head[X.ins_h]=L,L++,--I;);X.strstart=L,X.lookahead=E-1,st(X)}return X.strstart+=X.lookahead,X.block_start=X.strstart,X.insert=X.lookahead,X.lookahead=0,X.match_length=X.prev_length=E-1,X.match_available=0,x.next_in=ot,x.input=j,x.avail_in=nt,X.wrap=B,u},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,n,r){n.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,n,r){n.exports=function(s,o){var a,c,l,d,f,m,u,g,_,p,h,y,b,S,A,C,D,U,E,w,N,T,F,v,z;a=s.state,c=s.next_in,v=s.input,l=c+(s.avail_in-5),d=s.next_out,z=s.output,f=d-(o-s.avail_out),m=d+(s.avail_out-257),u=a.dmax,g=a.wsize,_=a.whave,p=a.wnext,h=a.window,y=a.hold,b=a.bits,S=a.lencode,A=a.distcode,C=(1<<a.lenbits)-1,D=(1<<a.distbits)-1;t:do{b<15&&(y+=v[c++]<<b,b+=8,y+=v[c++]<<b,b+=8),U=S[y&C];e:for(;;){if(y>>>=E=U>>>24,b-=E,(E=U>>>16&255)===0)z[d++]=65535&U;else{if(!(16&E)){if((64&E)==0){U=S[(65535&U)+(y&(1<<E)-1)];continue e}if(32&E){a.mode=12;break t}s.msg="invalid literal/length code",a.mode=30;break t}w=65535&U,(E&=15)&&(b<E&&(y+=v[c++]<<b,b+=8),w+=y&(1<<E)-1,y>>>=E,b-=E),b<15&&(y+=v[c++]<<b,b+=8,y+=v[c++]<<b,b+=8),U=A[y&D];n:for(;;){if(y>>>=E=U>>>24,b-=E,!(16&(E=U>>>16&255))){if((64&E)==0){U=A[(65535&U)+(y&(1<<E)-1)];continue n}s.msg="invalid distance code",a.mode=30;break t}if(N=65535&U,b<(E&=15)&&(y+=v[c++]<<b,(b+=8)<E&&(y+=v[c++]<<b,b+=8)),u<(N+=y&(1<<E)-1)){s.msg="invalid distance too far back",a.mode=30;break t}if(y>>>=E,b-=E,(E=d-f)<N){if(_<(E=N-E)&&a.sane){s.msg="invalid distance too far back",a.mode=30;break t}if(F=h,(T=0)===p){if(T+=g-E,E<w){for(w-=E;z[d++]=h[T++],--E;);T=d-N,F=z}}else if(p<E){if(T+=g+p-E,(E-=p)<w){for(w-=E;z[d++]=h[T++],--E;);if(T=0,p<w){for(w-=E=p;z[d++]=h[T++],--E;);T=d-N,F=z}}}else if(T+=p-E,E<w){for(w-=E;z[d++]=h[T++],--E;);T=d-N,F=z}for(;2<w;)z[d++]=F[T++],z[d++]=F[T++],z[d++]=F[T++],w-=3;w&&(z[d++]=F[T++],1<w&&(z[d++]=F[T++]))}else{for(T=d-N;z[d++]=z[T++],z[d++]=z[T++],z[d++]=z[T++],2<(w-=3););w&&(z[d++]=z[T++],1<w&&(z[d++]=z[T++]))}break}}break}}while(c<l&&d<m);c-=w=b>>3,y&=(1<<(b-=w<<3))-1,s.next_in=c,s.next_out=d,s.avail_in=c<l?l-c+5:5-(c-l),s.avail_out=d<m?m-d+257:257-(d-m),a.hold=y,a.bits=b}},{}],49:[function(e,n,r){var s=e("../utils/common"),o=e("./adler32"),a=e("./crc32"),c=e("./inffast"),l=e("./inftrees"),d=1,f=2,m=0,u=-2,g=1,_=852,p=592;function h(T){return(T>>>24&255)+(T>>>8&65280)+((65280&T)<<8)+((255&T)<<24)}function y(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function b(T){var F;return T&&T.state?(F=T.state,T.total_in=T.total_out=F.total=0,T.msg="",F.wrap&&(T.adler=1&F.wrap),F.mode=g,F.last=0,F.havedict=0,F.dmax=32768,F.head=null,F.hold=0,F.bits=0,F.lencode=F.lendyn=new s.Buf32(_),F.distcode=F.distdyn=new s.Buf32(p),F.sane=1,F.back=-1,m):u}function S(T){var F;return T&&T.state?((F=T.state).wsize=0,F.whave=0,F.wnext=0,b(T)):u}function A(T,F){var v,z;return T&&T.state?(z=T.state,F<0?(v=0,F=-F):(v=1+(F>>4),F<48&&(F&=15)),F&&(F<8||15<F)?u:(z.window!==null&&z.wbits!==F&&(z.window=null),z.wrap=v,z.wbits=F,S(T))):u}function C(T,F){var v,z;return T?(z=new y,(T.state=z).window=null,(v=A(T,F))!==m&&(T.state=null),v):u}var D,U,E=!0;function w(T){if(E){var F;for(D=new s.Buf32(512),U=new s.Buf32(32),F=0;F<144;)T.lens[F++]=8;for(;F<256;)T.lens[F++]=9;for(;F<280;)T.lens[F++]=7;for(;F<288;)T.lens[F++]=8;for(l(d,T.lens,0,288,D,0,T.work,{bits:9}),F=0;F<32;)T.lens[F++]=5;l(f,T.lens,0,32,U,0,T.work,{bits:5}),E=!1}T.lencode=D,T.lenbits=9,T.distcode=U,T.distbits=5}function N(T,F,v,z){var Y,G=T.state;return G.window===null&&(G.wsize=1<<G.wbits,G.wnext=0,G.whave=0,G.window=new s.Buf8(G.wsize)),z>=G.wsize?(s.arraySet(G.window,F,v-G.wsize,G.wsize,0),G.wnext=0,G.whave=G.wsize):(z<(Y=G.wsize-G.wnext)&&(Y=z),s.arraySet(G.window,F,v-z,Y,G.wnext),(z-=Y)?(s.arraySet(G.window,F,v-z,z,0),G.wnext=z,G.whave=G.wsize):(G.wnext+=Y,G.wnext===G.wsize&&(G.wnext=0),G.whave<G.wsize&&(G.whave+=Y))),0}r.inflateReset=S,r.inflateReset2=A,r.inflateResetKeep=b,r.inflateInit=function(T){return C(T,15)},r.inflateInit2=C,r.inflate=function(T,F){var v,z,Y,G,q,Q,ct,V,W,yt,mt,ut,st,lt,ft,St,wt,Nt,re,k,x,et,X,L,I=0,B=new s.Buf8(4),nt=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!T||!T.state||!T.output||!T.input&&T.avail_in!==0)return u;(v=T.state).mode===12&&(v.mode=13),q=T.next_out,Y=T.output,ct=T.avail_out,G=T.next_in,z=T.input,Q=T.avail_in,V=v.hold,W=v.bits,yt=Q,mt=ct,et=m;t:for(;;)switch(v.mode){case g:if(v.wrap===0){v.mode=13;break}for(;W<16;){if(Q===0)break t;Q--,V+=z[G++]<<W,W+=8}if(2&v.wrap&&V===35615){B[v.check=0]=255&V,B[1]=V>>>8&255,v.check=a(v.check,B,2,0),W=V=0,v.mode=2;break}if(v.flags=0,v.head&&(v.head.done=!1),!(1&v.wrap)||(((255&V)<<8)+(V>>8))%31){T.msg="incorrect header check",v.mode=30;break}if((15&V)!=8){T.msg="unknown compression method",v.mode=30;break}if(W-=4,x=8+(15&(V>>>=4)),v.wbits===0)v.wbits=x;else if(x>v.wbits){T.msg="invalid window size",v.mode=30;break}v.dmax=1<<x,T.adler=v.check=1,v.mode=512&V?10:12,W=V=0;break;case 2:for(;W<16;){if(Q===0)break t;Q--,V+=z[G++]<<W,W+=8}if(v.flags=V,(255&v.flags)!=8){T.msg="unknown compression method",v.mode=30;break}if(57344&v.flags){T.msg="unknown header flags set",v.mode=30;break}v.head&&(v.head.text=V>>8&1),512&v.flags&&(B[0]=255&V,B[1]=V>>>8&255,v.check=a(v.check,B,2,0)),W=V=0,v.mode=3;case 3:for(;W<32;){if(Q===0)break t;Q--,V+=z[G++]<<W,W+=8}v.head&&(v.head.time=V),512&v.flags&&(B[0]=255&V,B[1]=V>>>8&255,B[2]=V>>>16&255,B[3]=V>>>24&255,v.check=a(v.check,B,4,0)),W=V=0,v.mode=4;case 4:for(;W<16;){if(Q===0)break t;Q--,V+=z[G++]<<W,W+=8}v.head&&(v.head.xflags=255&V,v.head.os=V>>8),512&v.flags&&(B[0]=255&V,B[1]=V>>>8&255,v.check=a(v.check,B,2,0)),W=V=0,v.mode=5;case 5:if(1024&v.flags){for(;W<16;){if(Q===0)break t;Q--,V+=z[G++]<<W,W+=8}v.length=V,v.head&&(v.head.extra_len=V),512&v.flags&&(B[0]=255&V,B[1]=V>>>8&255,v.check=a(v.check,B,2,0)),W=V=0}else v.head&&(v.head.extra=null);v.mode=6;case 6:if(1024&v.flags&&(Q<(ut=v.length)&&(ut=Q),ut&&(v.head&&(x=v.head.extra_len-v.length,v.head.extra||(v.head.extra=new Array(v.head.extra_len)),s.arraySet(v.head.extra,z,G,ut,x)),512&v.flags&&(v.check=a(v.check,z,ut,G)),Q-=ut,G+=ut,v.length-=ut),v.length))break t;v.length=0,v.mode=7;case 7:if(2048&v.flags){if(Q===0)break t;for(ut=0;x=z[G+ut++],v.head&&x&&v.length<65536&&(v.head.name+=String.fromCharCode(x)),x&&ut<Q;);if(512&v.flags&&(v.check=a(v.check,z,ut,G)),Q-=ut,G+=ut,x)break t}else v.head&&(v.head.name=null);v.length=0,v.mode=8;case 8:if(4096&v.flags){if(Q===0)break t;for(ut=0;x=z[G+ut++],v.head&&x&&v.length<65536&&(v.head.comment+=String.fromCharCode(x)),x&&ut<Q;);if(512&v.flags&&(v.check=a(v.check,z,ut,G)),Q-=ut,G+=ut,x)break t}else v.head&&(v.head.comment=null);v.mode=9;case 9:if(512&v.flags){for(;W<16;){if(Q===0)break t;Q--,V+=z[G++]<<W,W+=8}if(V!==(65535&v.check)){T.msg="header crc mismatch",v.mode=30;break}W=V=0}v.head&&(v.head.hcrc=v.flags>>9&1,v.head.done=!0),T.adler=v.check=0,v.mode=12;break;case 10:for(;W<32;){if(Q===0)break t;Q--,V+=z[G++]<<W,W+=8}T.adler=v.check=h(V),W=V=0,v.mode=11;case 11:if(v.havedict===0)return T.next_out=q,T.avail_out=ct,T.next_in=G,T.avail_in=Q,v.hold=V,v.bits=W,2;T.adler=v.check=1,v.mode=12;case 12:if(F===5||F===6)break t;case 13:if(v.last){V>>>=7&W,W-=7&W,v.mode=27;break}for(;W<3;){if(Q===0)break t;Q--,V+=z[G++]<<W,W+=8}switch(v.last=1&V,W-=1,3&(V>>>=1)){case 0:v.mode=14;break;case 1:if(w(v),v.mode=20,F!==6)break;V>>>=2,W-=2;break t;case 2:v.mode=17;break;case 3:T.msg="invalid block type",v.mode=30}V>>>=2,W-=2;break;case 14:for(V>>>=7&W,W-=7&W;W<32;){if(Q===0)break t;Q--,V+=z[G++]<<W,W+=8}if((65535&V)!=(V>>>16^65535)){T.msg="invalid stored block lengths",v.mode=30;break}if(v.length=65535&V,W=V=0,v.mode=15,F===6)break t;case 15:v.mode=16;case 16:if(ut=v.length){if(Q<ut&&(ut=Q),ct<ut&&(ut=ct),ut===0)break t;s.arraySet(Y,z,G,ut,q),Q-=ut,G+=ut,ct-=ut,q+=ut,v.length-=ut;break}v.mode=12;break;case 17:for(;W<14;){if(Q===0)break t;Q--,V+=z[G++]<<W,W+=8}if(v.nlen=257+(31&V),V>>>=5,W-=5,v.ndist=1+(31&V),V>>>=5,W-=5,v.ncode=4+(15&V),V>>>=4,W-=4,286<v.nlen||30<v.ndist){T.msg="too many length or distance symbols",v.mode=30;break}v.have=0,v.mode=18;case 18:for(;v.have<v.ncode;){for(;W<3;){if(Q===0)break t;Q--,V+=z[G++]<<W,W+=8}v.lens[nt[v.have++]]=7&V,V>>>=3,W-=3}for(;v.have<19;)v.lens[nt[v.have++]]=0;if(v.lencode=v.lendyn,v.lenbits=7,X={bits:v.lenbits},et=l(0,v.lens,0,19,v.lencode,0,v.work,X),v.lenbits=X.bits,et){T.msg="invalid code lengths set",v.mode=30;break}v.have=0,v.mode=19;case 19:for(;v.have<v.nlen+v.ndist;){for(;St=(I=v.lencode[V&(1<<v.lenbits)-1])>>>16&255,wt=65535&I,!((ft=I>>>24)<=W);){if(Q===0)break t;Q--,V+=z[G++]<<W,W+=8}if(wt<16)V>>>=ft,W-=ft,v.lens[v.have++]=wt;else{if(wt===16){for(L=ft+2;W<L;){if(Q===0)break t;Q--,V+=z[G++]<<W,W+=8}if(V>>>=ft,W-=ft,v.have===0){T.msg="invalid bit length repeat",v.mode=30;break}x=v.lens[v.have-1],ut=3+(3&V),V>>>=2,W-=2}else if(wt===17){for(L=ft+3;W<L;){if(Q===0)break t;Q--,V+=z[G++]<<W,W+=8}W-=ft,x=0,ut=3+(7&(V>>>=ft)),V>>>=3,W-=3}else{for(L=ft+7;W<L;){if(Q===0)break t;Q--,V+=z[G++]<<W,W+=8}W-=ft,x=0,ut=11+(127&(V>>>=ft)),V>>>=7,W-=7}if(v.have+ut>v.nlen+v.ndist){T.msg="invalid bit length repeat",v.mode=30;break}for(;ut--;)v.lens[v.have++]=x}}if(v.mode===30)break;if(v.lens[256]===0){T.msg="invalid code -- missing end-of-block",v.mode=30;break}if(v.lenbits=9,X={bits:v.lenbits},et=l(d,v.lens,0,v.nlen,v.lencode,0,v.work,X),v.lenbits=X.bits,et){T.msg="invalid literal/lengths set",v.mode=30;break}if(v.distbits=6,v.distcode=v.distdyn,X={bits:v.distbits},et=l(f,v.lens,v.nlen,v.ndist,v.distcode,0,v.work,X),v.distbits=X.bits,et){T.msg="invalid distances set",v.mode=30;break}if(v.mode=20,F===6)break t;case 20:v.mode=21;case 21:if(6<=Q&&258<=ct){T.next_out=q,T.avail_out=ct,T.next_in=G,T.avail_in=Q,v.hold=V,v.bits=W,c(T,mt),q=T.next_out,Y=T.output,ct=T.avail_out,G=T.next_in,z=T.input,Q=T.avail_in,V=v.hold,W=v.bits,v.mode===12&&(v.back=-1);break}for(v.back=0;St=(I=v.lencode[V&(1<<v.lenbits)-1])>>>16&255,wt=65535&I,!((ft=I>>>24)<=W);){if(Q===0)break t;Q--,V+=z[G++]<<W,W+=8}if(St&&(240&St)==0){for(Nt=ft,re=St,k=wt;St=(I=v.lencode[k+((V&(1<<Nt+re)-1)>>Nt)])>>>16&255,wt=65535&I,!(Nt+(ft=I>>>24)<=W);){if(Q===0)break t;Q--,V+=z[G++]<<W,W+=8}V>>>=Nt,W-=Nt,v.back+=Nt}if(V>>>=ft,W-=ft,v.back+=ft,v.length=wt,St===0){v.mode=26;break}if(32&St){v.back=-1,v.mode=12;break}if(64&St){T.msg="invalid literal/length code",v.mode=30;break}v.extra=15&St,v.mode=22;case 22:if(v.extra){for(L=v.extra;W<L;){if(Q===0)break t;Q--,V+=z[G++]<<W,W+=8}v.length+=V&(1<<v.extra)-1,V>>>=v.extra,W-=v.extra,v.back+=v.extra}v.was=v.length,v.mode=23;case 23:for(;St=(I=v.distcode[V&(1<<v.distbits)-1])>>>16&255,wt=65535&I,!((ft=I>>>24)<=W);){if(Q===0)break t;Q--,V+=z[G++]<<W,W+=8}if((240&St)==0){for(Nt=ft,re=St,k=wt;St=(I=v.distcode[k+((V&(1<<Nt+re)-1)>>Nt)])>>>16&255,wt=65535&I,!(Nt+(ft=I>>>24)<=W);){if(Q===0)break t;Q--,V+=z[G++]<<W,W+=8}V>>>=Nt,W-=Nt,v.back+=Nt}if(V>>>=ft,W-=ft,v.back+=ft,64&St){T.msg="invalid distance code",v.mode=30;break}v.offset=wt,v.extra=15&St,v.mode=24;case 24:if(v.extra){for(L=v.extra;W<L;){if(Q===0)break t;Q--,V+=z[G++]<<W,W+=8}v.offset+=V&(1<<v.extra)-1,V>>>=v.extra,W-=v.extra,v.back+=v.extra}if(v.offset>v.dmax){T.msg="invalid distance too far back",v.mode=30;break}v.mode=25;case 25:if(ct===0)break t;if(ut=mt-ct,v.offset>ut){if((ut=v.offset-ut)>v.whave&&v.sane){T.msg="invalid distance too far back",v.mode=30;break}st=ut>v.wnext?(ut-=v.wnext,v.wsize-ut):v.wnext-ut,ut>v.length&&(ut=v.length),lt=v.window}else lt=Y,st=q-v.offset,ut=v.length;for(ct<ut&&(ut=ct),ct-=ut,v.length-=ut;Y[q++]=lt[st++],--ut;);v.length===0&&(v.mode=21);break;case 26:if(ct===0)break t;Y[q++]=v.length,ct--,v.mode=21;break;case 27:if(v.wrap){for(;W<32;){if(Q===0)break t;Q--,V|=z[G++]<<W,W+=8}if(mt-=ct,T.total_out+=mt,v.total+=mt,mt&&(T.adler=v.check=v.flags?a(v.check,Y,mt,q-mt):o(v.check,Y,mt,q-mt)),mt=ct,(v.flags?V:h(V))!==v.check){T.msg="incorrect data check",v.mode=30;break}W=V=0}v.mode=28;case 28:if(v.wrap&&v.flags){for(;W<32;){if(Q===0)break t;Q--,V+=z[G++]<<W,W+=8}if(V!==(4294967295&v.total)){T.msg="incorrect length check",v.mode=30;break}W=V=0}v.mode=29;case 29:et=1;break t;case 30:et=-3;break t;case 31:return-4;default:return u}return T.next_out=q,T.avail_out=ct,T.next_in=G,T.avail_in=Q,v.hold=V,v.bits=W,(v.wsize||mt!==T.avail_out&&v.mode<30&&(v.mode<27||F!==4))&&N(T,T.output,T.next_out,mt-T.avail_out)?(v.mode=31,-4):(yt-=T.avail_in,mt-=T.avail_out,T.total_in+=yt,T.total_out+=mt,v.total+=mt,v.wrap&&mt&&(T.adler=v.check=v.flags?a(v.check,Y,mt,T.next_out-mt):o(v.check,Y,mt,T.next_out-mt)),T.data_type=v.bits+(v.last?64:0)+(v.mode===12?128:0)+(v.mode===20||v.mode===15?256:0),(yt==0&&mt===0||F===4)&&et===m&&(et=-5),et)},r.inflateEnd=function(T){if(!T||!T.state)return u;var F=T.state;return F.window&&(F.window=null),T.state=null,m},r.inflateGetHeader=function(T,F){var v;return T&&T.state?(2&(v=T.state).wrap)==0?u:((v.head=F).done=!1,m):u},r.inflateSetDictionary=function(T,F){var v,z=F.length;return T&&T.state?(v=T.state).wrap!==0&&v.mode!==11?u:v.mode===11&&o(1,F,z,0)!==v.check?-3:N(T,F,z,z)?(v.mode=31,-4):(v.havedict=1,m):u},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,n,r){var s=e("../utils/common"),o=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],c=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],l=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];n.exports=function(d,f,m,u,g,_,p,h){var y,b,S,A,C,D,U,E,w,N=h.bits,T=0,F=0,v=0,z=0,Y=0,G=0,q=0,Q=0,ct=0,V=0,W=null,yt=0,mt=new s.Buf16(16),ut=new s.Buf16(16),st=null,lt=0;for(T=0;T<=15;T++)mt[T]=0;for(F=0;F<u;F++)mt[f[m+F]]++;for(Y=N,z=15;1<=z&&mt[z]===0;z--);if(z<Y&&(Y=z),z===0)return g[_++]=20971520,g[_++]=20971520,h.bits=1,0;for(v=1;v<z&&mt[v]===0;v++);for(Y<v&&(Y=v),T=Q=1;T<=15;T++)if(Q<<=1,(Q-=mt[T])<0)return-1;if(0<Q&&(d===0||z!==1))return-1;for(ut[1]=0,T=1;T<15;T++)ut[T+1]=ut[T]+mt[T];for(F=0;F<u;F++)f[m+F]!==0&&(p[ut[f[m+F]]++]=F);if(D=d===0?(W=st=p,19):d===1?(W=o,yt-=257,st=a,lt-=257,256):(W=c,st=l,-1),T=v,C=_,q=F=V=0,S=-1,A=(ct=1<<(G=Y))-1,d===1&&852<ct||d===2&&592<ct)return 1;for(;;){for(U=T-q,w=p[F]<D?(E=0,p[F]):p[F]>D?(E=st[lt+p[F]],W[yt+p[F]]):(E=96,0),y=1<<T-q,v=b=1<<G;g[C+(V>>q)+(b-=y)]=U<<24|E<<16|w|0,b!==0;);for(y=1<<T-1;V&y;)y>>=1;if(y!==0?(V&=y-1,V+=y):V=0,F++,--mt[T]==0){if(T===z)break;T=f[m+p[F]]}if(Y<T&&(V&A)!==S){for(q===0&&(q=Y),C+=v,Q=1<<(G=T-q);G+q<z&&!((Q-=mt[G+q])<=0);)G++,Q<<=1;if(ct+=1<<G,d===1&&852<ct||d===2&&592<ct)return 1;g[S=V&A]=Y<<24|G<<16|C-_|0}}return V!==0&&(g[C+V]=T-q<<24|64<<16|0),h.bits=Y,0}},{"../utils/common":41}],51:[function(e,n,r){n.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,n,r){var s=e("../utils/common"),o=0,a=1;function c(I){for(var B=I.length;0<=--B;)I[B]=0}var l=0,d=29,f=256,m=f+1+d,u=30,g=19,_=2*m+1,p=15,h=16,y=7,b=256,S=16,A=17,C=18,D=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],U=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],E=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],w=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],N=new Array(2*(m+2));c(N);var T=new Array(2*u);c(T);var F=new Array(512);c(F);var v=new Array(256);c(v);var z=new Array(d);c(z);var Y,G,q,Q=new Array(u);function ct(I,B,nt,ot,j){this.static_tree=I,this.extra_bits=B,this.extra_base=nt,this.elems=ot,this.max_length=j,this.has_stree=I&&I.length}function V(I,B){this.dyn_tree=I,this.max_code=0,this.stat_desc=B}function W(I){return I<256?F[I]:F[256+(I>>>7)]}function yt(I,B){I.pending_buf[I.pending++]=255&B,I.pending_buf[I.pending++]=B>>>8&255}function mt(I,B,nt){I.bi_valid>h-nt?(I.bi_buf|=B<<I.bi_valid&65535,yt(I,I.bi_buf),I.bi_buf=B>>h-I.bi_valid,I.bi_valid+=nt-h):(I.bi_buf|=B<<I.bi_valid&65535,I.bi_valid+=nt)}function ut(I,B,nt){mt(I,nt[2*B],nt[2*B+1])}function st(I,B){for(var nt=0;nt|=1&I,I>>>=1,nt<<=1,0<--B;);return nt>>>1}function lt(I,B,nt){var ot,j,R=new Array(p+1),M=0;for(ot=1;ot<=p;ot++)R[ot]=M=M+nt[ot-1]<<1;for(j=0;j<=B;j++){var O=I[2*j+1];O!==0&&(I[2*j]=st(R[O]++,O))}}function ft(I){var B;for(B=0;B<m;B++)I.dyn_ltree[2*B]=0;for(B=0;B<u;B++)I.dyn_dtree[2*B]=0;for(B=0;B<g;B++)I.bl_tree[2*B]=0;I.dyn_ltree[2*b]=1,I.opt_len=I.static_len=0,I.last_lit=I.matches=0}function St(I){8<I.bi_valid?yt(I,I.bi_buf):0<I.bi_valid&&(I.pending_buf[I.pending++]=I.bi_buf),I.bi_buf=0,I.bi_valid=0}function wt(I,B,nt,ot){var j=2*B,R=2*nt;return I[j]<I[R]||I[j]===I[R]&&ot[B]<=ot[nt]}function Nt(I,B,nt){for(var ot=I.heap[nt],j=nt<<1;j<=I.heap_len&&(j<I.heap_len&&wt(B,I.heap[j+1],I.heap[j],I.depth)&&j++,!wt(B,ot,I.heap[j],I.depth));)I.heap[nt]=I.heap[j],nt=j,j<<=1;I.heap[nt]=ot}function re(I,B,nt){var ot,j,R,M,O=0;if(I.last_lit!==0)for(;ot=I.pending_buf[I.d_buf+2*O]<<8|I.pending_buf[I.d_buf+2*O+1],j=I.pending_buf[I.l_buf+O],O++,ot===0?ut(I,j,B):(ut(I,(R=v[j])+f+1,B),(M=D[R])!==0&&mt(I,j-=z[R],M),ut(I,R=W(--ot),nt),(M=U[R])!==0&&mt(I,ot-=Q[R],M)),O<I.last_lit;);ut(I,b,B)}function k(I,B){var nt,ot,j,R=B.dyn_tree,M=B.stat_desc.static_tree,O=B.stat_desc.has_stree,K=B.stat_desc.elems,at=-1;for(I.heap_len=0,I.heap_max=_,nt=0;nt<K;nt++)R[2*nt]!==0?(I.heap[++I.heap_len]=at=nt,I.depth[nt]=0):R[2*nt+1]=0;for(;I.heap_len<2;)R[2*(j=I.heap[++I.heap_len]=at<2?++at:0)]=1,I.depth[j]=0,I.opt_len--,O&&(I.static_len-=M[2*j+1]);for(B.max_code=at,nt=I.heap_len>>1;1<=nt;nt--)Nt(I,R,nt);for(j=K;nt=I.heap[1],I.heap[1]=I.heap[I.heap_len--],Nt(I,R,1),ot=I.heap[1],I.heap[--I.heap_max]=nt,I.heap[--I.heap_max]=ot,R[2*j]=R[2*nt]+R[2*ot],I.depth[j]=(I.depth[nt]>=I.depth[ot]?I.depth[nt]:I.depth[ot])+1,R[2*nt+1]=R[2*ot+1]=j,I.heap[1]=j++,Nt(I,R,1),2<=I.heap_len;);I.heap[--I.heap_max]=I.heap[1],(function(tt,At){var vt,Rt,Lt,ht,Mt,Ot,Pt=At.dyn_tree,Et=At.max_code,Vt=At.stat_desc.static_tree,H=At.stat_desc.has_stree,_t=At.stat_desc.extra_bits,xt=At.stat_desc.extra_base,Ct=At.stat_desc.max_length,pt=0;for(ht=0;ht<=p;ht++)tt.bl_count[ht]=0;for(Pt[2*tt.heap[tt.heap_max]+1]=0,vt=tt.heap_max+1;vt<_;vt++)Ct<(ht=Pt[2*Pt[2*(Rt=tt.heap[vt])+1]+1]+1)&&(ht=Ct,pt++),Pt[2*Rt+1]=ht,Et<Rt||(tt.bl_count[ht]++,Mt=0,xt<=Rt&&(Mt=_t[Rt-xt]),Ot=Pt[2*Rt],tt.opt_len+=Ot*(ht+Mt),H&&(tt.static_len+=Ot*(Vt[2*Rt+1]+Mt)));if(pt!==0){do{for(ht=Ct-1;tt.bl_count[ht]===0;)ht--;tt.bl_count[ht]--,tt.bl_count[ht+1]+=2,tt.bl_count[Ct]--,pt-=2}while(0<pt);for(ht=Ct;ht!==0;ht--)for(Rt=tt.bl_count[ht];Rt!==0;)Et<(Lt=tt.heap[--vt])||(Pt[2*Lt+1]!==ht&&(tt.opt_len+=(ht-Pt[2*Lt+1])*Pt[2*Lt],Pt[2*Lt+1]=ht),Rt--)}})(I,B),lt(R,at,I.bl_count)}function x(I,B,nt){var ot,j,R=-1,M=B[1],O=0,K=7,at=4;for(M===0&&(K=138,at=3),B[2*(nt+1)+1]=65535,ot=0;ot<=nt;ot++)j=M,M=B[2*(ot+1)+1],++O<K&&j===M||(O<at?I.bl_tree[2*j]+=O:j!==0?(j!==R&&I.bl_tree[2*j]++,I.bl_tree[2*S]++):O<=10?I.bl_tree[2*A]++:I.bl_tree[2*C]++,R=j,at=(O=0)===M?(K=138,3):j===M?(K=6,3):(K=7,4))}function et(I,B,nt){var ot,j,R=-1,M=B[1],O=0,K=7,at=4;for(M===0&&(K=138,at=3),ot=0;ot<=nt;ot++)if(j=M,M=B[2*(ot+1)+1],!(++O<K&&j===M)){if(O<at)for(;ut(I,j,I.bl_tree),--O!=0;);else j!==0?(j!==R&&(ut(I,j,I.bl_tree),O--),ut(I,S,I.bl_tree),mt(I,O-3,2)):O<=10?(ut(I,A,I.bl_tree),mt(I,O-3,3)):(ut(I,C,I.bl_tree),mt(I,O-11,7));R=j,at=(O=0)===M?(K=138,3):j===M?(K=6,3):(K=7,4)}}c(Q);var X=!1;function L(I,B,nt,ot){mt(I,(l<<1)+(ot?1:0),3),(function(j,R,M,O){St(j),yt(j,M),yt(j,~M),s.arraySet(j.pending_buf,j.window,R,M,j.pending),j.pending+=M})(I,B,nt)}r._tr_init=function(I){X||((function(){var B,nt,ot,j,R,M=new Array(p+1);for(j=ot=0;j<d-1;j++)for(z[j]=ot,B=0;B<1<<D[j];B++)v[ot++]=j;for(v[ot-1]=j,j=R=0;j<16;j++)for(Q[j]=R,B=0;B<1<<U[j];B++)F[R++]=j;for(R>>=7;j<u;j++)for(Q[j]=R<<7,B=0;B<1<<U[j]-7;B++)F[256+R++]=j;for(nt=0;nt<=p;nt++)M[nt]=0;for(B=0;B<=143;)N[2*B+1]=8,B++,M[8]++;for(;B<=255;)N[2*B+1]=9,B++,M[9]++;for(;B<=279;)N[2*B+1]=7,B++,M[7]++;for(;B<=287;)N[2*B+1]=8,B++,M[8]++;for(lt(N,m+1,M),B=0;B<u;B++)T[2*B+1]=5,T[2*B]=st(B,5);Y=new ct(N,D,f+1,m,p),G=new ct(T,U,0,u,p),q=new ct(new Array(0),E,0,g,y)})(),X=!0),I.l_desc=new V(I.dyn_ltree,Y),I.d_desc=new V(I.dyn_dtree,G),I.bl_desc=new V(I.bl_tree,q),I.bi_buf=0,I.bi_valid=0,ft(I)},r._tr_stored_block=L,r._tr_flush_block=function(I,B,nt,ot){var j,R,M=0;0<I.level?(I.strm.data_type===2&&(I.strm.data_type=(function(O){var K,at=4093624447;for(K=0;K<=31;K++,at>>>=1)if(1&at&&O.dyn_ltree[2*K]!==0)return o;if(O.dyn_ltree[18]!==0||O.dyn_ltree[20]!==0||O.dyn_ltree[26]!==0)return a;for(K=32;K<f;K++)if(O.dyn_ltree[2*K]!==0)return a;return o})(I)),k(I,I.l_desc),k(I,I.d_desc),M=(function(O){var K;for(x(O,O.dyn_ltree,O.l_desc.max_code),x(O,O.dyn_dtree,O.d_desc.max_code),k(O,O.bl_desc),K=g-1;3<=K&&O.bl_tree[2*w[K]+1]===0;K--);return O.opt_len+=3*(K+1)+5+5+4,K})(I),j=I.opt_len+3+7>>>3,(R=I.static_len+3+7>>>3)<=j&&(j=R)):j=R=nt+5,nt+4<=j&&B!==-1?L(I,B,nt,ot):I.strategy===4||R===j?(mt(I,2+(ot?1:0),3),re(I,N,T)):(mt(I,4+(ot?1:0),3),(function(O,K,at,tt){var At;for(mt(O,K-257,5),mt(O,at-1,5),mt(O,tt-4,4),At=0;At<tt;At++)mt(O,O.bl_tree[2*w[At]+1],3);et(O,O.dyn_ltree,K-1),et(O,O.dyn_dtree,at-1)})(I,I.l_desc.max_code+1,I.d_desc.max_code+1,M+1),re(I,I.dyn_ltree,I.dyn_dtree)),ft(I),ot&&St(I)},r._tr_tally=function(I,B,nt){return I.pending_buf[I.d_buf+2*I.last_lit]=B>>>8&255,I.pending_buf[I.d_buf+2*I.last_lit+1]=255&B,I.pending_buf[I.l_buf+I.last_lit]=255&nt,I.last_lit++,B===0?I.dyn_ltree[2*nt]++:(I.matches++,B--,I.dyn_ltree[2*(v[nt]+f+1)]++,I.dyn_dtree[2*W(B)]++),I.last_lit===I.lit_bufsize-1},r._tr_align=function(I){mt(I,2,3),ut(I,b,N),(function(B){B.bi_valid===16?(yt(B,B.bi_buf),B.bi_buf=0,B.bi_valid=0):8<=B.bi_valid&&(B.pending_buf[B.pending++]=255&B.bi_buf,B.bi_buf>>=8,B.bi_valid-=8)})(I)}},{"../utils/common":41}],53:[function(e,n,r){n.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,n,r){(function(s){(function(o,a){if(!o.setImmediate){var c,l,d,f,m=1,u={},g=!1,_=o.document,p=Object.getPrototypeOf&&Object.getPrototypeOf(o);p=p&&p.setTimeout?p:o,c={}.toString.call(o.process)==="[object process]"?function(S){process.nextTick(function(){y(S)})}:(function(){if(o.postMessage&&!o.importScripts){var S=!0,A=o.onmessage;return o.onmessage=function(){S=!1},o.postMessage("","*"),o.onmessage=A,S}})()?(f="setImmediate$"+Math.random()+"$",o.addEventListener?o.addEventListener("message",b,!1):o.attachEvent("onmessage",b),function(S){o.postMessage(f+S,"*")}):o.MessageChannel?((d=new MessageChannel).port1.onmessage=function(S){y(S.data)},function(S){d.port2.postMessage(S)}):_&&"onreadystatechange"in _.createElement("script")?(l=_.documentElement,function(S){var A=_.createElement("script");A.onreadystatechange=function(){y(S),A.onreadystatechange=null,l.removeChild(A),A=null},l.appendChild(A)}):function(S){setTimeout(y,0,S)},p.setImmediate=function(S){typeof S!="function"&&(S=new Function(""+S));for(var A=new Array(arguments.length-1),C=0;C<A.length;C++)A[C]=arguments[C+1];var D={callback:S,args:A};return u[m]=D,c(m),m++},p.clearImmediate=h}function h(S){delete u[S]}function y(S){if(g)setTimeout(y,0,S);else{var A=u[S];if(A){g=!0;try{(function(C){var D=C.callback,U=C.args;switch(U.length){case 0:D();break;case 1:D(U[0]);break;case 2:D(U[0],U[1]);break;case 3:D(U[0],U[1],U[2]);break;default:D.apply(a,U)}})(A)}finally{h(S),g=!1}}}}function b(S){S.source===o&&typeof S.data=="string"&&S.data.indexOf(f)===0&&y(+S.data.slice(f.length))}})(typeof self>"u"?s===void 0?this:s:self)}).call(this,typeof br<"u"?br:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Ss)),Ss.exports}var Mm=Sm();const Em=ym(Mm),Ri=Object.freeze({style:"printed",diameter:136,width:25,root:14,tip:7,standOff:0,backHeight:95,tipAngle:35,padThickness:2,padRecess:1,allowance:.5}),Vi={diameter:[60,240],width:[25,45],root:[12,24],tip:[6,12],standOff:[0,30],backHeight:[90,120],tipAngle:[20,50],padThickness:[1,4],padRecess:[.5,2],allowance:[.2,1.2]},bm=i=>i*Math.PI/180;function La(i={}){const t={...Ri,...i};if(!["printed","sculpted"].includes(t.style))throw Error("Unknown cradle style.");for(const[d,[f,m]]of Object.entries(Vi))if(!Number.isFinite(t[d])||t[d]<f||t[d]>m)throw Error(`${d} must be between ${f} and ${m} mm${d==="tipAngle"?" (angle in degrees)":""}.`);if(t.padRecess>=t.padThickness)throw Error("Padding must be thicker than its recess.");if(t.tip>t.root)throw Error("Tip thickness must not exceed root thickness.");const e=t.diameter/2+t.allowance+t.padThickness-t.padRecess,n=t.root+t.standOff,r=((e+n)**2-(e+t.tip)**2)/(2*(e+n+(e+t.tip)*Math.cos(bm(t.tipAngle)))),s=9.92+n+e,o=e+n-r,a=s-r,c=t.style==="sculpted"?Math.min(3,t.tip*.45):2,l=Math.min(18,t.width-2*c-2*t.padRecess-.4);return{...t,R:e,C:s,Ro:o,Co:a,rootSection:n,padWidth:l,edgeRadius:c}}function Gi(i){const t=Array.isArray(i)?i:[i],e=t.reduce((o,a)=>o+a.indices.length/3,0),n=new ArrayBuffer(84+e*50),r=new DataView(n);new Uint8Array(n).set(new TextEncoder().encode("Museum Mount Studio | millimeters | side down")),r.setUint32(80,e,!0);let s=84;for(const o of t){const a=o.positions;for(let c=0;c<o.indices.length;c+=3){const l=o.indices[c]*3,d=o.indices[c+1]*3,f=o.indices[c+2]*3,m=[a[d]-a[l],a[d+1]-a[l+1],a[d+2]-a[l+2]],u=[a[f]-a[l],a[f+1]-a[l+1],a[f+2]-a[l+2]],g=[m[1]*u[2]-m[2]*u[1],m[2]*u[0]-m[0]*u[2],m[0]*u[1]-m[1]*u[0]],_=Math.hypot(...g)||1;for(let p=0;p<3;p++)r.setFloat32(s+4*p,g[p]/_,!0);for(let p=0;p<3;p++)for(let h=0;h<3;h++)r.setFloat32(s+12+12*p+4*h,a[o.indices[c+p]*3+h],!0);s+=50}}return n}const Jo={download:'<path d="M12 3v12m-4-4 4 4 4-4M4 16v5h16v-5"/>',reset:'<path d="M3 11a9 9 0 1 1 3 7M3 4v7h7"/>',cube:'<path d="m12 3 9 5v9l-9 5-9-5V8l9-5Zm0 9 9-4M12 12 3 8m9 4v10"/>',hull:'<path d="M3 15a9 9 0 0 1 18 0M3 15v3h18v-3M9 6V3h6v3"/>',link:'<path d="m10 13 4-4m-6 7-2 2a4 4 0 0 1-6-6l4-4a4 4 0 0 1 6 0m4 0 2-2a4 4 0 0 1 6 6l-4 4a4 4 0 0 1-6 0"/>',check:'<path d="m5 12 4 4 10-10"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10h.01"/>',pad:'<path d="M3 12c3 9 15 9 18 0M3 8c3 9 15 9 18 0"/>',plate:'<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M12 7h.01M12 17h.01"/>'},$e=(i,t=16)=>`<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${Jo[i]||Jo.cube}</svg>`,wm=[["width","Cradle width","mm"],["standOff","Extra wall clearance","mm"],["tipAngle","Front lip angle","°"]],Tm=[["root","Root thickness","mm"],["tip","Tip thickness","mm"],["backHeight","Back height","mm"],["padThickness","Pad thickness","mm"],["padRecess","Pad recess","mm"],["allowance","Hull clearance","mm"]];let jt={...Ri};try{const i=JSON.parse(localStorage.getItem("museum-mount-v1")||"null");i&&(La(i),jt={...Ri,...i})}catch{}try{const i=new URLSearchParams(location.search).get("design");if(i){const t=JSON.parse(atob(i));La(t),jt={...Ri,...t}}}catch{}document.querySelector("#app").innerHTML=`
<header><a class="brand" href="/" aria-label="Iron Keel Studio home"><img class="studio-mark" src="/assets/logo.png" alt=""><span>IRON KEEL<small>STUDIO / WORKSHOP TOOLS</small></span></a><div class="header-meta"><a href="/fleet">The Fleet</a><a href="/">← Studio home</a><a href="#" id="help-link">How it works ↗</a></div></header>
<main><section class="intro"><div><p class="eyebrow">The Iron Keel workshop</p><h1>Museum Mount Generator</h1><p>Shape the cradle. Check the fit. Build a display worthy of your boat.</p></div><span class="badge">${$e("check",13)} One wall plate. Every cradle.</span></section>
<div class="workspace"><aside class="config" aria-label="Cradle dimensions"><div class="config-head"><span>Your dimensions</span><button class="small-button" id="reset">Reset to 136 mm</button></div>
<section class="config-section design-section"><div class="section-title"><span class="number">00</span>Cradle design</div><div class="design-switch" role="group" aria-label="Cradle design"><button data-style="printed" class="active" aria-pressed="true">Print-tested V2</button><button data-style="sculpted" aria-pressed="false">Sculpted prototype</button></div><p id="design-note" class="hint">Your original sliding cradle, rebuilt parametrically.</p></section><section class="config-section"><div class="section-title"><span class="number">01</span>Hull size</div><label class="field-label" for="diameter">Hull diameter <span class="saved-dot" id="saved">Saved on this device</span></label><div class="diameter-wrap"><input id="diameter" type="number" min="60" max="240" step="1" value="${jt.diameter}" inputmode="decimal"><span>mm</span></div><input aria-label="Hull diameter slider" data-range="diameter" type="range" min="60" max="240" step="1" value="${jt.diameter}"><div class="range-labels"><span>60 mm</span><span>240 mm</span></div><div class="presets">${[100,136,180].map(i=>`<button class="preset ${jt.diameter===i?"active":""}" data-preset="${i}">${i} mm</button>`).join("")}</div><p class="hint">Measure across the hull at the exact position where this cradle will sit.</p></section>
<section class="config-section"><div class="section-title"><span class="number">02</span>Shape your cradle</div>${wm.map(([i,t,e])=>`<div class="control"><label class="field-label" for="${i}">${t}<output id="out-${i}" for="${i}">${jt[i]} ${e}</output></label><input id="${i}" data-range="${i}" type="range" min="${Vi[i][0]}" max="${Vi[i][1]}" step="1" value="${jt[i]}"></div>`).join("")}<p class="hint">A larger lip angle creates a lower, more discreet tip.</p></section>
<details class="advanced"><summary>Advanced dimensions</summary><div class="advanced-grid">${Tm.map(([i,t,e])=>`<label for="${i}">${t} (${e})<input id="${i}" data-number="${i}" type="number" min="${Vi[i][0]}" max="${Vi[i][1]}" step="${["padThickness","padRecess","allowance"].includes(i)?".1":"1"}" value="${jt[i]}"></label>`).join("")}</div></details><div class="config-footer">${$e("plate",14)}<span>The dovetail stays the same, whatever size you make.</span></div></aside>
<section class="right-col" aria-label="Preview and printable files"><div class="viewer" id="viewer"><div class="viewer-top"><span class="viewer-label" id="viewer-label">MM—136 / MUSEUM CRADLE</span><div class="tabs" role="group" aria-label="Preview layout"><button class="active" data-view="installed" aria-pressed="true">Installed</button><button data-view="print" aria-pressed="false">Print layout</button><button data-view="exploded" aria-pressed="false">Exploded</button></div></div><div id="status" class="status busy" role="status" aria-live="polite">Preparing your cradle…</div><div class="viewer-bottom"><div class="viewer-help">Drag to rotate · Scroll to zoom<br><span id="view-note">Seated in the matching wall plate</span></div><div class="viewer-tools"><button class="icon-btn" id="toggle-hull" title="Show hull reference" aria-label="Show hull reference" aria-pressed="false">${$e("hull")}</button><button class="icon-btn" id="home-view" title="Reset camera" aria-label="Reset camera">${$e("reset")}</button><button class="icon-btn" id="copy-link" title="Copy design link" aria-label="Copy design link">${$e("link")}</button></div></div></div>
<div class="viewer-caption"><div class="stat"><span class="stat-label">Cradle footprint</span><strong id="footprint">— × — mm</strong></div><div class="stat"><span class="stat-label">Print height</span><strong id="print-height">25 mm</strong></div><div class="stat"><span class="stat-label">Geometry</span><strong id="mesh-check">Generating…</strong></div></div>
<div class="downloads"><div><h2>Ready for the workbench.</h2><p>Your custom STL files, settings, and a print guide.</p></div><button id="download-kit" class="primary" disabled>${$e("download")}Download print kit <span style="opacity:.55;font-size:10px">.ZIP</span></button></div>
<div class="parts"><button class="part-button" data-download="supported" disabled>${$e("download",12)}Cradle + support</button><button class="part-button" data-download="cradle" disabled>${$e("cube",12)}Cradle only</button><button class="part-button" data-download="pad" disabled>${$e("pad",12)}Soft pad</button><button class="part-button" id="download-settings" disabled>Settings .JSON</button></div>
<div class="instructions"><strong>Print on its side.</strong> The cradle and removable dovetail shoe are already aligned. Keep them together in your slicer; print the soft pad separately. Start with a fit coupon before hanging your model.</div>
<details class="accessories" open><summary>Matching wall plates & fit coupons</summary><p>The shared wall plate fits every cradle here. The default is the physically tested 0.075 mm fit. Start with its coupon on your printer; 0.35 mm is a looser alternative. These are clearances on each dovetail flank.</p><div class="accessory-links"><a download href="/mount-generator/downloads/wall-plate-0075.stl">Default wall plate · 0.075 mm ↓</a><a download href="/mount-generator/downloads/wall-plate-035.stl">Wall plate · 0.35 mm ↓</a><a download href="/mount-generator/downloads/fit-coupon-0075.stl">Default fit coupon · 0.075 mm ↓</a><a download href="/mount-generator/downloads/fit-coupon-035.stl">Fit coupon · 0.35 mm ↓</a></div></details></section></div>
<footer><span class="footer-left">${$e("check",12)}Evolved from Iron Keel’s original sliding cradle.</span><span>Custom sizes need fit and load testing.</span></footer></main>
<dialog id="help"><h2>A small mount.<br>A better display.</h2><p>Measure the hull diameter where each cradle will support your submarine. For a tapered hull, generate each cradle separately using its local diameter.</p><ol><li>Enter the diameter and adjust the cradle shape.</li><li>Rotate the preview or switch to print layout.</li><li>Download the print kit and check the fit coupon.</li></ol><p>The shared dovetail never scales. For different hull diameters, align the hull centers when installing the wall plates. Extra wall clearance increases the cradle’s reach.</p><p>The 136 mm Fusion prototype printed successfully. The browser generator closely follows its dimensions with tessellated edge rounds; new sizes and loads still need testing. This is not a load-rated mount.</p><button class="primary" id="close-help">Got it</button></dialog><div class="toast" role="status" id="toast"></div>`;const Jt=i=>document.querySelector(i);let fe=null,wn="installed",Lr=!1,fa=0,Qo;const Ia=new Worker(new URL("/mount-generator/assets/worker-rdal8VIF.js",import.meta.url),{type:"module"});function Ei(i){Jt("#toast").textContent=i,Jt("#toast").classList.add("show"),setTimeout(()=>Jt("#toast").classList.remove("show"),2500)}function Ki(i,t=""){const e=Jt("#status");e.textContent=i,e.className="status "+t}function Ua(i){document.querySelectorAll("[data-download],#download-kit,#download-settings").forEach(t=>t.disabled=!i)}function Zn(){clearTimeout(Qo),fa++,Ua(!1);try{La(jt)}catch(t){Ki(t.message,"error");return}Ki("Updating your cradle…","busy");const i=fa;Qo=setTimeout(()=>Ia.postMessage({id:i,params:jt}),160)}Ia.onmessage=({data:i})=>{if(i.id!==fa)return;if(i.error){Ki(i.error,"error"),Jt("#mesh-check").textContent="Check dimensions";return}fe=i.model,Ki(fe.params.style==="sculpted"?"Sculpted prototype · Test print required":"Print-tested V2 profile · Closed meshes"),Ua(!0),Jt("#mesh-check").textContent="Closed solid meshes";const t=fe.cradle.bounds;Jt("#footprint").textContent=`${(t.max[0]-t.min[0]).toFixed(1)} × ${(t.max[1]-t.min[1]).toFixed(1)} mm`,Jt("#print-height").textContent=jt.width+" mm",Jt("#viewer-label").textContent=`MM—${jt.diameter} / ${jt.style==="sculpted"?"SCULPTED PROTOTYPE":"PRINT-TESTED V2"}`;try{localStorage.setItem("museum-mount-v1",JSON.stringify(jt))}catch{}kr()};Ia.onerror=i=>{Ki("The geometry engine could not load. Please reload the page.","error"),Ua(!1)};function Ci(){document.querySelectorAll("[data-style]").forEach(i=>{const t=i.dataset.style===jt.style;i.classList.toggle("active",t),i.setAttribute("aria-pressed",t)}),Jt("#design-note").textContent=jt.style==="sculpted"?"A wider back to cover the receiver, a fuller root and a softer tip. New geometry: test print before use.":"Your proven geometry, with the calibrated wall interface.";for(const i of Object.keys(Ri)){const t=Jt("#"+i);t&&(t.value=jt[i]),document.querySelectorAll(`[data-range="${i}"]`).forEach(n=>n.value=jt[i]);const e=Jt("#out-"+i);e&&(e.textContent=jt[i]+(i==="tipAngle"?" °":" mm"))}document.querySelectorAll("[data-preset]").forEach(i=>i.classList.toggle("active",+i.dataset.preset===jt.diameter))}Jt("#diameter").addEventListener("input",i=>{jt.diameter=+i.target.value,Ci(),Zn()});document.querySelectorAll("[data-range]").forEach(i=>i.addEventListener("input",t=>{jt[t.target.dataset.range]=+t.target.value,Ci(),Zn()}));document.querySelectorAll("[data-number]").forEach(i=>i.addEventListener("input",t=>{jt[t.target.dataset.number]=+t.target.value,Zn()}));document.querySelectorAll("[data-preset]").forEach(i=>i.onclick=()=>{jt.diameter=+i.dataset.preset,Ci(),Zn()});document.querySelectorAll("[data-style]").forEach(i=>i.onclick=()=>{jt={...jt,...i.dataset.style==="sculpted"?{style:"sculpted",width:36,root:18,tip:6}:{style:"printed",width:25,root:14,tip:7}},Ci(),Zn(),pa=!0});Jt("#reset").onclick=()=>{jt={...Ri},Ci(),Zn(),Ei("Restored the original 136 mm dimensions.")};Jt("#help-link").onclick=i=>{i.preventDefault(),Jt("#help").showModal()};Jt("#close-help").onclick=()=>Jt("#help").close();Jt("#help").addEventListener("click",i=>{i.target===Jt("#help")&&Jt("#help").close()});Jt("#copy-link").onclick=async()=>{const i=new URL(location.href);i.searchParams.set("design",btoa(JSON.stringify(jt)));try{await navigator.clipboard.writeText(i.href),Ei("Design link copied.")}catch{Ei("Clipboard unavailable. Save your settings JSON instead.")}};let Xe,kn,tn,En,ze,Sn,pa=!0;const ki=Jt("#viewer");try{Xe=new im({antialias:!0,alpha:!0}),Xe.setPixelRatio(Math.min(devicePixelRatio,2)),Xe.setClearColor(0,0),Xe.outputColorSpace=Pe,Xe.toneMapping=el,Xe.toneMappingExposure=.85,ki.prepend(Xe.domElement),kn=new Ml;const i=new ua(Xe),t=new vm;kn.environment=i.fromScene(t,.04).texture,t.dispose(),i.dispose(),tn=new Ne(35,1,.1,4e3),En=new sm(tn,Xe.domElement),En.enableDamping=!0,En.dampingFactor=.08,En.minDistance=80,En.maxDistance=1400,kn.add(new ph(16773077,1517112,.9));const e=new Eo(16774111,1.8);e.position.set(150,240,220),kn.add(e);const n=new Eo(11523811,2);n.position.set(-140,40,-160),kn.add(n),ze=new zi,kn.add(ze);const r=()=>{const a=ki.clientWidth,c=ki.clientHeight;Xe.setSize(a,c),tn.aspect=a/c,tn.updateProjectionMatrix()};new ResizeObserver(r).observe(ki),r();const s=()=>{requestAnimationFrame(s),En.update(),Xe.render(kn,tn)};s();const o=await new xm().loadAsync("/mount-generator/downloads/wall-plate-0075.stl");o.applyMatrix4(new oe().set(0,0,1,0,0,1,0,0,-1,0,0,16.129,0,0,0,1)),o.computeVertexNormals(),Sn=new de(o,new Zi({color:3949643,roughness:.52,metalness:.14})),fe&&kr()}catch(i){console.error(i),ki.insertAdjacentHTML("afterbegin",'<div class="fallback">3D preview needs WebGL.<br>You can still generate and download your printable files.</div>')}function Ms(i,t){const e=new Ze;return e.setAttribute("position",new Me(i.positions,3)),e.setIndex(new Me(i.indices,1)),e.computeVertexNormals(),new de(e,new ah({color:t,roughness:.5,metalness:.06,clearcoat:.08,clearcoatRoughness:.5}))}function Na(){if(!tn||!fe||!ze)return;const i=new Pn().setFromObject(ze),t=i.getBoundingSphere(new bi),e=Math.min(tn.fov*Math.PI/360,Math.atan(Math.tan(tn.fov*Math.PI/360)*tn.aspect)),n=t.radius/Math.sin(e)*1.06,r=(wn==="print"?new $(.1,-.5,1):new $(.58,.34,.82)).normalize();En.target.copy(t.center),tn.position.copy(t.center).addScaledVector(r,n),En.update()}function kr(){if(!ze||!fe)return;for(;ze.children.length;){const n=ze.children[0];ze.remove(n),n!==Sn&&(n.geometry?.dispose(),n.material?.dispose())}const i=fe.params,t=Ms(fe.cradle,1514272),e=Ms(fe.pad,1514270);if(ze.add(t,e),wn==="print"){const n=Ms(fe.shoe,12884566);ze.add(n),e.position.z=-fe.pad.bounds.min[2],e.position.y=-58,Sn&&(Sn.rotation.set(0,0,0),Sn.position.set(0,0,0))}else if(t.position.z=-i.width/2,e.position.z=-i.width/2,Sn&&(Sn.position.set(wn==="exploded"?-30:0,0,0),ze.add(Sn)),wn==="exploded"&&(t.position.y=26,e.position.y=26,e.position.x=14),Lr){const n=new Aa(i.diameter/2,i.diameter/2,125,72,1,!0),r=new de(n,new Zi({color:9088148,transparent:!0,opacity:.19,depthWrite:!1,side:Qe,roughness:.8}));r.rotation.x=Math.PI/2,r.position.set(i.C,wn==="exploded"?26:0,0),ze.add(r)}pa&&(Na(),pa=!1)}document.querySelectorAll("[data-view]").forEach(i=>i.onclick=()=>{wn=i.dataset.view,document.querySelectorAll("[data-view]").forEach(t=>{t.classList.toggle("active",t===i),t.setAttribute("aria-pressed",t===i)}),Jt("#view-note").textContent=wn==="print"?"Gold = removable support · Pad shown separately":wn==="exploded"?"Parts separated for clarity":"Seated in the matching wall plate",kr(),Na()});Jt("#home-view").onclick=Na;Jt("#toggle-hull").onclick=()=>{Lr=!Lr,Jt("#toggle-hull").setAttribute("aria-pressed",Lr),kr()};const Fa=()=>`museum-cradle-${jt.style==="sculpted"?"sculpted-prototype-":""}${jt.diameter}mm-${jt.width}w`;function Oa(i,t,e="application/octet-stream"){const n=URL.createObjectURL(i instanceof Blob?i:new Blob([i],{type:e})),r=document.createElement("a");r.href=n,r.download=t,r.click(),setTimeout(()=>URL.revokeObjectURL(n),1e4)}function Il(){const i=fe.pad,t=new Float32Array(i.positions);for(let e=2;e<t.length;e+=3)t[e]-=i.bounds.min[2];return{...i,positions:t}}document.querySelectorAll("[data-download]").forEach(i=>i.onclick=()=>{if(!fe)return;const t=i.dataset.download;Oa(Gi(t==="supported"?[fe.cradle,fe.shoe]:t==="pad"?Il():fe.cradle),`${Fa()}-${t}.stl`),Ei("STL downloaded in millimeters.")});const Ba=()=>JSON.stringify({generator:"Museum Mount Studio",version:3,units:"mm",wallPlateFlankClearance:.075,parameters:jt,interface:{wide:22.9,neck:16.14,depth:5.88,height:78},printOrientation:"Side down; preserve cradle and support relative position"},null,2);Jt("#download-settings").onclick=()=>Oa(Ba(),Fa()+"-settings.json","application/json");function Am(){return`MUSEUM MOUNT STUDIO
${jt.style==="sculpted"?"SCULPTED PROTOTYPE - NEW SHAPE, NOT YET PHYSICALLY VALIDATED":"PRINT-TESTED V2 PROFILE"}
Custom cradle for ${jt.diameter} mm hull diameter

Print footprint: ${Jt("#footprint").textContent}. Print height: ${jt.width} mm.

1. Print the fit coupon first. The default 0.075 mm receiver was confirmed by physical fit testing on the reference printer; verify it on your own printer. The 0.35 mm receiver is a looser alternative. Clearances are normal to each flank.
2. Load cradle-with-support.stl as ONE object. The two shells are already aligned with the flat side on the bed. Do not auto-arrange its shells separately. The support shoe is intended to replace automatic support beneath the dovetail. Inspect the sliced preview; its vertical release gap is 0.2 mm and may need printer-specific tuning.
3. Remove the temporary support shoe after printing. It is not part of the wall mount.
4. Print soft-pad.stl separately in flexible material, or cut adhesive foam. Use ${jt.padThickness} mm padding with a ${jt.padRecess} mm recess. The pad has been shifted onto Z=0.
5. The wall plate prints wall-face-down. Screw heads must sit flush beneath the sliding tongue.

Cradle-only.stl is included for your own support setup. A separate support-shoe.stl is also aligned to the cradle.

The fixed dovetail matches the Museum Mount V2 interface; it does not scale with hull diameter. If making supports at different hull diameters, align the hull centers when mounting wall plates.

This browser generator follows the dimensions of the successfully printed 136 mm Fusion prototype. Its edge rounds are tessellated approximations. New dimensions, fit, print settings, wall fixings, and loads require physical testing. No load rating is implied.

Dimensions:
${Ba()}
`}Jt("#download-kit").onclick=async()=>{if(!fe)return;const i=Jt("#download-kit");i.disabled=!0;const t=i.innerHTML;i.textContent="Preparing your files…";try{const e=new Em;e.file("cradle-with-support.stl",Gi([fe.cradle,fe.shoe])),e.file("cradle-only.stl",Gi(fe.cradle)),e.file("support-shoe.stl",Gi(fe.shoe)),e.file("soft-pad.stl",Gi(Il())),e.file("settings.json",Ba()),e.file("PRINT-GUIDE.txt",Am());for(const n of["wall-plate-0075.stl","wall-plate-035.stl","fit-coupon-0075.stl","fit-coupon-035.stl"]){const r=await fetch("/mount-generator/downloads/"+n);if(!r.ok)throw Error("Could not include the wall plate files.");e.file("wall-interface/"+n,await r.arrayBuffer())}Oa(await e.generateAsync({type:"blob",compression:"DEFLATE"}),Fa()+"-print-kit.zip"),Ei("Your print kit is ready.")}catch(e){Ei(e.message||"Download failed. Please try again.")}finally{i.innerHTML=t,i.disabled=!1}};Ci();Zn();
