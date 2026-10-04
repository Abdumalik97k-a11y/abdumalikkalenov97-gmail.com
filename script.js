/* Osh Travel Guide — vanilla JS. Demo data; verify hours/prices locally. */
const U = id => `https://images.unsplash.com/${id}?w=900&q=70`;
const I = {m1:U('photo-1506905925346-21bda4d32df4'),m2:U('photo-1469474968028-56623f02e42e'),m3:U('photo-1519681393784-d120267933ba'),
 t:U('photo-1488646953014-85cb44e25828'),f1:U('photo-1555939594-58d7cb561ad1'),f2:U('photo-1544025162-d76694265947'),
 h1:U('photo-1566073771259-6a8506099945'),h2:U('photo-1551882547-ff40c63fe5fa'),l:U('photo-1472214103451-9374bd1c798e')};

/* ---- Data (price in som; time in minutes) ---- */
const places=[
{id:'sulaiman',n:'Sulaiman-Too',img:I.m3,d:'Sacred mountain and UNESCO World Heritage Site.',loc:'City centre',t:120,price:100,tags:['historical','nature','family','paid'],lat:40.5283,lng:72.7872,hrs:'08:00–18:00',how:'Walk from the bazaar (10 min) or take a taxi to the main entrance.',long:'Sulaiman-Too rises above Osh with caves, shrines and trails. A short climb rewards you with a panorama of the whole Fergana Valley.'},
{id:'bazaar',n:'Osh Bazaar',img:I.f1,d:'Vibrant Silk Road market full of spices, fruit and bread.',loc:'Along Ak-Buura River',t:90,price:0,tags:['historical','food','family','free'],lat:40.5331,lng:72.8,hrs:'07:00–18:00',how:'Central location; any bus or marshrutka to “Bazaar”.',long:'One of Central Asia’s oldest markets. Try fresh nan, dried fruits, nuts and honey.'},
{id:'uzgen-tower',n:'Uzgen Tower',img:I.t,d:'Medieval Karakhanid minaret of the 11th–12th century.',loc:'Uzgen, 50 km from Osh',t:60,price:100,tags:['historical','paid'],lat:40.7686,lng:73.301,hrs:'09:00–18:00',how:'Marshrutka from Osh to Uzgen (~1 h), then a short walk.',long:'The tower is a surviving piece of the Karakhanid-era city and a symbol of Uzgen.'},
{id:'uzgen-maus',n:'Uzgen Mausoleums',img:I.l,d:'Three elegant Karakhanid mausoleums beside the tower.',loc:'Uzgen',t:45,price:100,tags:['historical','paid'],lat:40.7683,lng:73.3015,hrs:'09:00–18:00',how:'Same complex as Uzgen Tower.',long:'The mausoleums show fine brickwork and carved decoration typical of the 11th–12th centuries.'},
{id:'alymbek',n:'Alymbek Datka Park',img:I.m2,d:'Green city park with shady paths and monuments.',loc:'Central Osh',t:60,price:0,tags:['family','nature','free'],lat:40.529,lng:72.796,hrs:'Open all day',how:'Short walk from the city centre.',long:'A relaxed place to rest between sights, popular with families in the evenings.'},
{id:'navoi',n:'Navoi Park',img:I.m2,d:'Leafy park with fountains and walking alleys.',loc:'Osh',t:45,price:0,tags:['family','nature','free'],lat:40.515,lng:72.804,hrs:'Open all day',how:'Taxi or city bus.',long:'A quiet green space for a stroll, coffee and people-watching.'},
{id:'rabat',n:'Rabat Abdullakhan Mosque',img:I.t,d:'Historic mosque at the foot of Sulaiman-Too.',loc:'Foot of Sulaiman-Too',t:40,price:0,tags:['historical','free'],lat:40.5265,lng:72.788,hrs:'Outside prayer times',how:'Walk from Sulaiman-Too entrance.',long:'Dress modestly and be respectful of worshippers. Great combined with a Sulaiman-Too visit.'},
{id:'museum',n:'Osh Regional Museum',img:I.l,d:'Local history, archaeology and culture of southern Kyrgyzstan.',loc:'Osh centre',t:75,price:150,tags:['historical','family','paid'],lat:40.5275,lng:72.7945,hrs:'09:00–17:00 (closed Mon)',how:'Central; walk or taxi.',long:'Exhibits introduce the long history of Osh and the surrounding region.'},
{id:'akbuura',n:'Ak-Buura River',img:I.m1,d:'River promenade splitting the city, ideal for sunset walks.',loc:'Osh centre',t:45,price:0,tags:['nature','family','free'],lat:40.53,lng:72.8,hrs:'Open all day',how:'Walk from the bazaar.',long:'Quiet embankments and bridges give a relaxed view of daily life.'},
{id:'kyrgyzata',n:'Kyrgyz-Ata National Park',img:I.m1,d:'Walnut forests, gorges and mountain views.',loc:'Nookat district, ~60 km',t:360,price:200,tags:['nature','family','paid'],lat:40.17,lng:72.6,hrs:'08:00–19:00',how:'Hire a taxi or car for the day.',long:'Great for hiking and picnics. Coordinates on the map are approximate.'}];
const foods=[['Osh Plov','Rice, carrot and lamb cooked in a kazan.',200,I.f1],['Samsa','Baked pastry with meat and onion.',50,I.f2],['Manti','Steamed dumplings with minced meat.',250,I.f2],['Lagman','Hand-pulled noodles in rich sauce.',230,I.f1],['Kuurdak','Fried meat and potatoes, a nomad classic.',350,I.f2],['Boorsok','Golden fried dough bites for tea.',80,I.f1],['Kymyz','Fermented mare’s milk, refreshing and sour.',100,I.f2],['Maksym','Traditional cereal drink, great in summer.',40,I.f1]];
const hotels=[['Silk Road Boutique',I.h1,4.7,4200,'Lenin St, Osh',['Wi-Fi','Breakfast','A/C']],['Sulaiman View Hotel',I.h2,4.5,3300,'Near Sulaiman-Too',['Wi-Fi','Terrace','Parking']],['Fergana Valley Inn',I.h1,4.3,2600,'Kurmanjan Datka Ave',['Wi-Fi','Breakfast']],['Nur Guest House',I.h2,4.6,1500,'Old town',['Wi-Fi','Kitchen','Tours']]];
const routes=[
{n:'Osh in 1 Day',dur:'8 h',dist:'12 km',bud:1500,from:'Bazaar',to:'Alymbek Datka Park',p:['bazaar','sulaiman','rabat','alymbek']},
{n:'Osh in 2 Days',dur:'2 days',dist:'30 km',bud:3500,from:'Osh Airport',to:'Navoi Park',p:['sulaiman','rabat','museum','bazaar','akbuura','navoi']},
{n:'Historical Osh',dur:'6 h',dist:'8 km',bud:1000,from:'Museum',to:'Rabat Abdullakhan',p:['museum','sulaiman','rabat','bazaar']},
{n:'Food Tour',dur:'4 h',dist:'5 km',bud:1200,from:'Osh Bazaar',to:'Ak-Buura River',p:['bazaar','akbuura']},
{n:'Nature & Mountains',dur:'1 day',dist:'130 km',bud:3000,from:'City centre',to:'Kyrgyz-Ata',p:['kyrgyzata','alymbek','navoi']},
{n:'Osh + Uzgen',dur:'1 day',dist:'110 km',bud:2500,from:'Bus station',to:'Uzgen',p:['bazaar','uzgen-tower','uzgen-maus']}];
const transport=[['🚕 Taxi','Apps or street taxi. ~100 som minimum, 20–30 som/km.'],['🚌 Bus','City buses, ~20 som per ride.'],['🚐 Marshrutka','Minibuses on fixed routes, 20–30 som; Uzgen ~100–150 som.'],['🚶 Walking','Free. The centre is compact and walkable.'],['🚗 Car rental','From ~3,000–5,000 som per day (with driver costs more).']];
const markers=[...places.filter(p=>['sulaiman','bazaar','alymbek','navoi','rabat'].includes(p.id)).map(p=>({n:p.n,d:p.d,lat:p.lat,lng:p.lng,id:p.id})),
{n:'Osh Airport',d:'Domestic and international flights.',lat:40.609,lng:72.793},{n:'Main Bus Station',d:'Regional buses and marshrutkas.',lat:40.52,lng:72.793}];
const T={en:{home:'Home',places:'Places',food:'Food',hotels:'Hotels',map:'Map',about:'About Osh',contact:'Contact',h1:'Discover Osh',sub:'Explore the ancient heart of Kyrgyzstan',b1:'Explore Places',b2:'Plan My Trip',ph:'Where do you want to go?'},
ru:{home:'Главная',places:'Места',food:'Еда',hotels:'Отели',map:'Карта',about:'Об Оше',contact:'Контакты',h1:'Откройте Ош',sub:'Исследуйте древнее сердце Кыргызстана',b1:'Смотреть места',b2:'Спланировать поездку',ph:'Куда вы хотите поехать?'},
ky:{home:'Башкы',places:'Жерлер',food:'Тамак',hotels:'Мейманканалар',map:'Карта',about:'Ош жөнүндө',contact:'Байланыш',h1:'Ошту ачыңыз',sub:'Кыргызстандын байыркы жүрөгүн таанып көрүңүз',b1:'Жерлерди көрүү',b2:'Саякатты пландоо',ph:'Кайда баргыңыз келет?'}};

/* ---- Helpers & state ---- */
const $=s=>document.querySelector(s), som=n=>n?n.toLocaleString()+' som':'Free';
const load=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))||d}catch{return d}};
let trip=load('trip',[]), favs=load('favs',[]), filter='all';
const save=()=>{localStorage.setItem('trip',JSON.stringify(trip));localStorage.setItem('favs',JSON.stringify(favs))};
const img=(s,a)=>`<img src="${s}" alt="${a}" loading="lazy" onerror="this.remove()">`;
const gmaps=q=>`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q+' Osh Kyrgyzstan')}`;

/* ---- Places + filters ---- */
const cats=['all','historical','nature','food','family','free','paid'];
$('#filters').innerHTML=cats.map(c=>`<button class="chip${c==='all'?' on':''}" data-f="${c}">${c[0].toUpperCase()+c.slice(1)}</button>`).join('');
$('#filters').onclick=e=>{const f=e.target.dataset.f;if(!f)return;filter=f;document.querySelectorAll('.chip').forEach(c=>c.classList.toggle('on',c.dataset.f===f));renderPlaces()};
function renderPlaces(){
  const list=places.filter(p=>filter==='all'||p.tags.includes(filter)||(filter==='food'&&p.id==='bazaar'));
  $('#placeGrid').innerHTML=list.map(p=>`<article class="card"><div class="im">${img(p.img,p.n)}<button class="fav${favs.includes(p.id)?' on':''}" data-fav="${p.id}" aria-label="Favorite">${favs.includes(p.id)?'♥':'♡'}</button></div>
  <div class="bd"><h3>${p.n}</h3><p>${p.d}</p><span class="meta">📍 ${p.loc} · ⏱ ${p.t>=60?(p.t/60).toFixed(p.t%60?1:0)+' h':p.t+' min'}</span><span class="price">${som(p.price)}</span>
  <button class="btn" data-place="${p.id}">View Details</button></div></article>`).join('')||'<p>No places match this filter.</p>';
}
document.addEventListener('click',e=>{
  const t=e.target;
  if(t.dataset.fav){favs=favs.includes(t.dataset.fav)?favs.filter(x=>x!==t.dataset.fav):[...favs,t.dataset.fav];save();renderPlaces()}
  if(t.dataset.place)openPlace(t.dataset.place);
  if(t.dataset.route)openRoute(+t.dataset.route);
  if(t.dataset.add)toggleTrip(t.dataset.add);
  if(t.dataset.rm){trip=trip.filter(x=>x!==t.dataset.rm);save();renderTrip()}
  if(t.dataset.addroute){routes[t.dataset.addroute].p.forEach(id=>{if(!trip.includes(id))trip.push(id)});save();renderTrip();closeModal()}
  if(t.dataset.hotel||t.dataset.food)window.open(gmaps(t.dataset.hotel||t.dataset.food+' restaurant'),'_blank');
  if(t===$('#modal')||t.dataset.close)closeModal();
});

/* ---- Modal ---- */
const modal=$('#modal'),box=$('#modalBox');
const openModal=h=>{box.innerHTML=h+'<div class="bd"><button class="btn red" data-close="1">Close</button></div>';modal.classList.add('open')};
function closeModal(){modal.classList.remove('open')}
document.addEventListener('keydown',e=>e.key==='Escape'&&closeModal());
function openPlace(id){const p=places.find(x=>x.id===id);
  openModal(`${img(p.img,p.n)}<div class="bd"><h2>${p.n}</h2><p>${p.long}</p><dl><dt>Opening hours</dt><dd>${p.hrs}</dd><dt>Price</dt><dd>${som(p.price)}</dd><dt>Location</dt><dd>${p.loc}</dd><dt>How to get there</dt><dd>${p.how}</dd></dl>
  <div class="row"><a class="btn gold" target="_blank" rel="noopener" href="${gmaps(p.n)}">Open in Google Maps</a><button class="btn" style="background:var(--green);color:#fff" data-add="${p.id}">${trip.includes(p.id)?'Remove from trip':'Add to trip'}</button></div></div>`)}
function openRoute(i){const r=routes[i];
  openModal(`<div class="bd"><h2>${r.n}</h2><p>Start: <b>${r.from}</b> → End: <b>${r.to}</b></p><p>⏱ ${r.dur} · 📏 ${r.dist} · 💰 ~${som(r.bud)}</p>
  <ol>${r.p.map(id=>`<li><a href="#" data-place="${id}">${places.find(p=>p.id===id).n}</a></li>`).join('')}</ol><button class="btn gold" data-addroute="${i}">Add all to my trip</button></div>`)}

/* ---- Routes, food, hotels, transport ---- */
$('#routeGrid').innerHTML=routes.map((r,i)=>`<article class="card"><div class="bd"><h3>${r.n}</h3><span class="meta">⏱ ${r.dur} · 📏 ${r.dist} · 💰 ${som(r.bud)}</span>
 <p><b>Places:</b> ${r.p.map(id=>places.find(p=>p.id===id).n).join(', ')}</p><p>Start: ${r.from}<br>End: ${r.to}</p><button class="btn" data-route="${i}">View Route</button></div></article>`).join('');
$('#foodGrid').innerHTML=foods.map(f=>`<article class="card"><div class="im" style="height:150px">${img(f[3],f[0])}</div><div class="bd"><h3>${f[0]}</h3><p>${f[1]}</p><span class="price">~${som(f[2])}</span><button class="btn" data-food="${f[0]}">Find Restaurant</button></div></article>`).join('');
$('#hotelGrid').innerHTML=hotels.map(h=>`<article class="card"><div class="im">${img(h[1],h[0])}</div><div class="bd"><h3>${h[0]}</h3><span class="meta">★ ${h[2]} · 📍 ${h[4]}</span><span class="price">${som(h[3])} / night</span><p>${h[5].join(' · ')}</p><button class="btn" data-hotel="${h[0]}">View Hotel</button></div></article>`).join('');
$('#transGrid').innerHTML=transport.map(t=>`<div class="panel"><h3>${t[0]}</h3><p>${t[1]}</p></div>`).join('');

/* ---- Taxi calculator ---- */
const calc=()=>$('#fare').textContent=Math.max(100,Math.round(+$('#km').value*+$('#ppk').value))+' som';
$('#km').oninput=$('#ppk').oninput=calc;

/* ---- Weather (realistic demo, seeded by date) ---- */
(()=>{const d=new Date(),s=d.getDate()+d.getMonth()*31,m=d.getMonth(),base=[0,3,10,17,22,28,32,31,25,17,9,2][m];
 const t=base+(s%5)-2,c=['Sunny ☀️','Partly cloudy ⛅','Clear 🌤️','Light clouds ☁️'][s%4];
 $('#wx').innerHTML=`<div><div class="t">${t}°C</div><div>${c}</div></div><div>💨 Wind: ${6+s%9} km/h<br>💧 Humidity: ${35+s%30}%<br><small>Demo data — not live</small></div>`})();

/* ---- Trip planner ---- */
function toggleTrip(id){trip=trip.includes(id)?trip.filter(x=>x!==id):[...trip,id];save();renderTrip();if(modal.classList.contains('open'))openPlace(id)}
function renderTrip(){const L=trip.map(id=>places.find(p=>p.id===id));const mins=L.reduce((a,p)=>a+p.t,0),cost=L.reduce((a,p)=>a+p.price,0);
 $('#tripStats').innerHTML=`<span>📍 ${L.length} places</span><span>⏱ ${(mins/60).toFixed(1)} h</span><span>💰 ${som(cost)}</span>`;
 $('#tripList').innerHTML=L.map(p=>`<li>${p.n}<button data-rm="${p.id}">Remove</button></li>`).join('')||'<li>Your trip is empty. Open any place and choose “Add to trip”.</li>'}
$('#clearTrip').onclick=()=>{trip=[];save();renderTrip()};

/* ---- Search (places, food, hotels, routes) ---- */
const index=[...places.map(p=>({l:p.n,k:'Place',a:()=>openPlace(p.id)})),...foods.map(f=>({l:f[0],k:'Food',a:()=>location.hash='#food'})),
 ...hotels.map(h=>({l:h[0],k:'Hotel',a:()=>location.hash='#hotels'})),...routes.map((r,i)=>({l:r.n,k:'Route',a:()=>openRoute(i)}))];
$('#q').oninput=e=>{const v=e.target.value.trim().toLowerCase(),R=$('#results');
 if(!v){R.innerHTML='';return}
 const hits=index.filter(x=>x.l.toLowerCase().includes(v)).slice(0,6);
 R.innerHTML=hits.length?'':'<button>No results</button>';
 hits.forEach(h=>{const b=document.createElement('button');b.innerHTML=`${h.l} <small>${h.k}</small>`;b.onclick=()=>{R.innerHTML='';h.a()};R.append(b)})};

/* ---- Map (Leaflet + OpenStreetMap) ---- */
if(window.L){const map=L.map('leaflet').setView([40.5283,72.7985],13);
 L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OpenStreetMap contributors'}).addTo(map);
 markers.forEach(m=>L.marker([m.lat,m.lng]).addTo(map).bindPopup(`<b>${m.n}</b><br>${m.d}<br>${m.id?`<a href="#" onclick="openPlace('${m.id}');return false">View Details</a>`:`<a target="_blank" rel="noopener" href="${gmaps(m.n)}">View Details</a>`}`))}

/* ---- UI: language, theme, menu, scroll ---- */
function setLang(l){document.documentElement.lang=l;document.querySelectorAll('[data-i18n]').forEach(e=>e.textContent=T[l][e.dataset.i18n]);
 document.querySelectorAll('[data-i18n-ph]').forEach(e=>e.placeholder=T[l][e.dataset.i18nPh]);localStorage.setItem('lang',l)}
$('#lang').onchange=e=>setLang(e.target.value);
const th=localStorage.getItem('theme')||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');document.documentElement.dataset.theme=th;
$('#theme').onclick=()=>{const n=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=n;localStorage.setItem('theme',n)};
$('#burger').onclick=()=>$('#menu').classList.toggle('open');
$('#menu').onclick=()=>$('#menu').classList.remove('open');
$('#toTop').onclick=()=>scrollTo({top:0,behavior:'smooth'});
addEventListener('scroll',()=>$('#toTop').classList.toggle('show',scrollY>600),{passive:true});
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&(e.target.classList.add('in'),io.unobserve(e.target))),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

const savedLang=localStorage.getItem('lang')||'en';$('#lang').value=savedLang;setLang(savedLang);
renderPlaces();renderTrip();calc();
