// Servidor estático que imita Cloudflare Pages: aplica _headers (bloque /*) y respeta .assetsignore
import http from'node:http';import fs from'node:fs';import path from'node:path';
const root=process.argv[2],port=+process.argv[3];const H={};let cur=null;
for(const l of fs.readFileSync(root+'/_headers','utf8').split('\n')){if(/^\S/.test(l)){cur=l.trim();}else if(cur=='/*'&&l.includes(':')){const i=l.indexOf(':');H[l.slice(0,i).trim()]=l.slice(i+1).trim()}}
const ign=fs.readFileSync(root+'/.assetsignore','utf8').split('\n').filter(Boolean).map(x=>x.replace(/\/$/,''));
const T={'.html':'text/html','.js':'text/javascript','.mjs':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.webmanifest':'application/manifest+json','.json':'application/json','.jpg':'image/jpeg','.png':'image/png'};
http.createServer((q,r)=>{let u=decodeURIComponent(q.url.split('?')[0]);const seg=u.split('/')[1];let f=path.join(root,u);
if(fs.existsSync(f)&&fs.statSync(f).isDirectory())f=path.join(f,'index.html');
if(ign.includes(seg)||!fs.existsSync(f)){r.writeHead(404,H);return r.end('404')}r.writeHead(200,{...H,'content-type':T[path.extname(f)]||'application/octet-stream'});fs.createReadStream(f).pipe(r)}).listen(port);
