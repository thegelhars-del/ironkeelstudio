import Module from 'manifold-3d';
import wasmUrl from 'manifold-3d/manifold.wasm?url';
import {buildMount} from './geometry.mjs';
const ready=Module({locateFile:()=>wasmUrl}).then(m=>{m.setup();return m;});
self.onmessage=async({data})=>{try{const model=buildMount(await ready,data.params);self.postMessage({id:data.id,model},['cradle','pad','shoe'].flatMap(k=>[model[k].positions.buffer,model[k].indices.buffer]));}catch(e){self.postMessage({id:data.id,error:e.message||'Could not generate geometry.'});}};
