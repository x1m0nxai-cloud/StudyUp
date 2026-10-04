const C='studyup-v2',A=['./','index.html','manifest.json','icon-192.png','icon-512.png','icon-maskable.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(A)));});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(C).then(h=>h.put(e.request,c));return r;}).catch(()=>caches.match(e.request).then(r=>r||caches.match('index.html'))));});
