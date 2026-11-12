const C="tt-v3",SHELL=["./","./index.html","./manifest.webmanifest","./icon-192.png","./icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(SHELL)));self.skipWaiting()});
self.addEventListener("activate",e=>e.waitUntil(clients.claim()));
self.addEventListener("fetch",e=>{const u=new URL(e.request.url);
 if(e.request.method!=="GET")return;
 if(u.origin===location.origin||u.hostname==="cdnjs.cloudflare.com"){
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(n=>{const k=n.clone();caches.open(C).then(c=>c.put(e.request,k));return n})))}});
