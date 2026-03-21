// === REALISTIC AIRLINE ROUTES ===
// Each airline has a hub and flies realistic routes from that hub
const HUBS={
  UA:{hub:"KORD",routes:["KLAX","KSFO","KDEN","KEWR","KIAH","KBOS","KSEA","KDFW","KMIA","KJFK","KATL","KPHL","KMSP"]},
  DL:{hub:"KATL",routes:["KJFK","KLAX","KORD","KMSP","KDTW","KSEA","KBOS","KSFO","KMIA","KSLT","KDFW"]},
  AA:{hub:"KDFW",routes:["KJFK","KLAX","KORD","KMIA","KCLT","KPHL","KBOS","KDEN","KSFO","KPHX"]},
  WN:{hub:"KDFW",routes:["KLAS","KDEN","KPHX","KMDW","KBWI","KHOU","KATL","KMCO","KLAX","KOAK"]},
  BA:{hub:"EGLL",routes:["KJFK","KLAX","KORD","OMDB","WSSS","VHHH","RJTT","YSSY"]},
  LH:{hub:"EDDF",routes:["KJFK","KORD","KLAX","RJTT","VHHH","OMDB","SBGR","EGLL"]},
  AF:{hub:"LFPG",routes:["KJFK","KLAX","RJTT","OMDB","FAOR","SBGR","EGLL","EHAM"]},
  EK:{hub:"OMDB",routes:["KJFK","KLAX","EGLL","LFPG","RJTT","YSSY","WSSS","VHHH","SBGR","FAOR"]},
  QF:{hub:"YSSY",routes:["KLAX","EGLL","WSSS","RJTT","VHHH","OMDB"]},
  SQ:{hub:"WSSS",routes:["EGLL","KJFK","RJTT","YSSY","OMDB","VHHH","ZBAA"]},
  NH:{hub:"RJTT",routes:["KLAX","KJFK","KORD","EGLL","WSSS","VHHH"]},
  JL:{hub:"RJTT",routes:["KLAX","KJFK","EGLL","WSSS","VHHH","YSSY"]},
  KL:{hub:"EHAM",routes:["KJFK","KLAX","KORD","RJTT","WSSS","OMDB","SBGR","FAOR"]},
  TK:{hub:"LTFM",routes:["KJFK","KLAX","EGLL","LFPG","OMDB","RJTT","FAOR"]},
  CX:{hub:"VHHH",routes:["EGLL","KJFK","KLAX","RJTT","YSSY","WSSS"]},
  FR:{hub:"EGLL",routes:["LEMD","LFPG","LIRF","EDDF","EHAM","LTFM"]},
  AC:{hub:"KORD",routes:["EGLL","LFPG","RJTT","KLAX","KJFK","KBOS","KSFO"]},
  B6:{hub:"KJFK",routes:["KLAX","KSFO","KBOS","KMIA","KFLL","KMCO","KSEA","KORD"]}
};
const AP=[{c:"KJFK",n:"John F. Kennedy Intl",ci:"New York",co:"US",la:40.64,ln:-73.78,fd:"kjfk_gnd_twr"},{c:"KLAX",n:"Los Angeles Intl",ci:"Los Angeles",co:"US",la:33.94,ln:-118.41,fd:"klax_twr"},{c:"KORD",n:"O'Hare Intl",ci:"Chicago",co:"US",la:41.97,ln:-87.91,fd:"kord_twr"},{c:"KATL",n:"Hartsfield-Jackson",ci:"Atlanta",co:"US",la:33.64,ln:-84.43,fd:"katl_twr"},{c:"KCLT",n:"Charlotte Douglas",ci:"Charlotte",co:"US",la:35.21,ln:-80.94,fd:"kclt_twr"},{c:"KDFW",n:"Dallas/Fort Worth",ci:"Dallas",co:"US",la:32.9,ln:-97.04,fd:"kdfw_twr"},{c:"KDEN",n:"Denver Intl",ci:"Denver",co:"US",la:39.86,ln:-104.67,fd:"kden_twr"},{c:"KSFO",n:"San Francisco Intl",ci:"San Francisco",co:"US",la:37.62,ln:-122.38,fd:"ksfo_twr"},{c:"KMIA",n:"Miami Intl",ci:"Miami",co:"US",la:25.8,ln:-80.29,fd:"kmia_twr"},{c:"KBOS",n:"Logan Intl",ci:"Boston",co:"US",la:42.37,ln:-71.02,fd:"kbos_twr"},{c:"KSEA",n:"Seattle-Tacoma",ci:"Seattle",co:"US",la:47.45,ln:-122.31,fd:"ksea_twr"},{c:"KEWR",n:"Newark Liberty",ci:"Newark",co:"US",la:40.69,ln:-74.17,fd:"kewr_twr"},{c:"KIAH",n:"George Bush",ci:"Houston",co:"US",la:29.98,ln:-95.34,fd:"kiah_twr"},{c:"KMSP",n:"Minneapolis-St Paul",ci:"Minneapolis",co:"US",la:44.88,ln:-93.22,fd:"kmsp_twr"},{c:"KDTW",n:"Detroit Metro",ci:"Detroit",co:"US",la:42.21,ln:-83.35,fd:"kdtw_twr"},{c:"KPHL",n:"Philadelphia Intl",ci:"Philadelphia",co:"US",la:39.87,ln:-75.24,fd:"kphl_twr"},{c:"KLAS",n:"Harry Reid Intl",ci:"Las Vegas",co:"US",la:36.08,ln:-115.15,fd:"klas_twr"},{c:"KPHX",n:"Phoenix Sky Harbor",ci:"Phoenix",co:"US",la:33.44,ln:-112.01,fd:"kphx_twr"},{c:"KMCO",n:"Orlando Intl",ci:"Orlando",co:"US",la:28.43,ln:-81.31,fd:"kmco_twr"},{c:"EGLL",n:"London Heathrow",ci:"London",co:"UK",la:51.47,ln:-.45,fd:"egll_twr"},{c:"LFPG",n:"Charles de Gaulle",ci:"Paris",co:"FR",la:49.01,ln:2.55,fd:"lfpg_twr"},{c:"EDDF",n:"Frankfurt",ci:"Frankfurt",co:"DE",la:50.04,ln:8.56,fd:"eddf_twr"},{c:"EHAM",n:"Schiphol",ci:"Amsterdam",co:"NL",la:52.31,ln:4.76,fd:"eham_twr"},{c:"RJTT",n:"Haneda",ci:"Tokyo",co:"JP",la:35.55,ln:139.78,fd:"rjtt_twr"},{c:"VHHH",n:"Hong Kong Intl",ci:"Hong Kong",co:"HK",la:22.31,ln:113.92,fd:"vhhh_twr"},{c:"OMDB",n:"Dubai Intl",ci:"Dubai",co:"AE",la:25.25,ln:55.36,fd:"omdb_twr"},{c:"WSSS",n:"Changi",ci:"Singapore",co:"SG",la:1.35,ln:103.99,fd:"wsss_twr"},{c:"YSSY",n:"Sydney",ci:"Sydney",co:"AU",la:-33.95,ln:151.18,fd:"yssy_twr"},{c:"SBGR",n:"Guarulhos",ci:"São Paulo",co:"BR",la:-23.44,ln:-46.47,fd:"sbgr_twr"},{c:"VIDP",n:"Indira Gandhi",ci:"New Delhi",co:"IN",la:28.56,ln:77.1,fd:"vidp_twr"},{c:"FAOR",n:"O.R. Tambo",ci:"Johannesburg",co:"ZA",la:-26.14,ln:28.25,fd:"faor_twr"},{c:"LTFM",n:"Istanbul Airport",ci:"Istanbul",co:"TR",la:41.26,ln:28.74,fd:"ltfm_twr"},{c:"ZBAA",n:"Beijing Capital",ci:"Beijing",co:"CN",la:40.08,ln:116.6,fd:"zbaa_twr"},{c:"LEMD",n:"Madrid-Barajas",ci:"Madrid",co:"ES",la:40.47,ln:-3.56,fd:"lemd_twr"},{c:"LIRF",n:"Rome Fiumicino",ci:"Rome",co:"IT",la:41.8,ln:12.25,fd:"lirf_twr"},{c:"KMDW",n:"Midway",ci:"Chicago",co:"US",la:41.79,ln:-87.75,fd:"kmdw_twr"},{c:"KBWI",n:"Baltimore/Washington",ci:"Baltimore",co:"US",la:39.18,ln:-76.67,fd:"kbwi_twr"},{c:"KHOU",n:"Hobby",ci:"Houston",co:"US",la:29.65,ln:-95.28,fd:"khou_twr"},{c:"KFLL",n:"Fort Lauderdale",ci:"Fort Lauderdale",co:"US",la:26.07,ln:-80.15,fd:"kfll_twr"},{c:"KOAK",n:"Oakland Intl",ci:"Oakland",co:"US",la:37.72,ln:-122.22,fd:"koak_twr"}];
const AL=[{c:"UAL",n:"United Airlines",cl:"#3B82F6",l:"UA"},{c:"DAL",n:"Delta Air Lines",cl:"#1E40AF",l:"DL"},{c:"AAL",n:"American Airlines",cl:"#DC2626",l:"AA"},{c:"SWA",n:"Southwest Airlines",cl:"#EA580C",l:"WN"},{c:"BAW",n:"British Airways",cl:"#1E3A5F",l:"BA"},{c:"DLH",n:"Lufthansa",cl:"#0369A1",l:"LH"},{c:"AFR",n:"Air France",cl:"#1E3A8A",l:"AF"},{c:"UAE",n:"Emirates",cl:"#B91C1C",l:"EK"},{c:"QFA",n:"Qantas",cl:"#DC2626",l:"QF"},{c:"SIA",n:"Singapore Airlines",cl:"#CA8A04",l:"SQ"},{c:"ANA",n:"ANA",cl:"#1D4ED8",l:"NH"},{c:"JAL",n:"Japan Airlines",cl:"#B91C1C",l:"JL"},{c:"KLM",n:"KLM",cl:"#2563EB",l:"KL"},{c:"THY",n:"Turkish Airlines",cl:"#DC2626",l:"TK"},{c:"CPA",n:"Cathay Pacific",cl:"#047857",l:"CX"},{c:"RYR",n:"Ryanair",cl:"#1D4ED8",l:"FR"},{c:"ACA",n:"Air Canada",cl:"#DC2626",l:"AC"},{c:"JBU",n:"JetBlue",cl:"#2563EB",l:"B6"}];
// Airline-specific fleets and registration prefixes
const FLEET={
  UA:{ac:[{c:"B738",n:"Boeing 737-800"},{c:"B39M",n:"Boeing 737 MAX 9"},{c:"B77W",n:"Boeing 777-300ER"},{c:"B789",n:"Boeing 787-9"},{c:"A321",n:"Airbus A321neo"}],rg:"N"},
  DL:{ac:[{c:"B738",n:"Boeing 737-800"},{c:"A321",n:"Airbus A321neo"},{c:"A339",n:"Airbus A330-900neo"},{c:"A359",n:"Airbus A350-900"},{c:"B763",n:"Boeing 767-300ER"}],rg:"N"},
  AA:{ac:[{c:"B738",n:"Boeing 737-800"},{c:"A321",n:"Airbus A321neo"},{c:"B77W",n:"Boeing 777-300ER"},{c:"B789",n:"Boeing 787-9"},{c:"A320",n:"Airbus A320"}],rg:"N"},
  WN:{ac:[{c:"B738",n:"Boeing 737-800"},{c:"B39M",n:"Boeing 737 MAX 8"}],rg:"N"},
  BA:{ac:[{c:"B77W",n:"Boeing 777-300ER"},{c:"A388",n:"Airbus A380-800"},{c:"B789",n:"Boeing 787-9"},{c:"A321",n:"Airbus A321neo"},{c:"A359",n:"Airbus A350-1000"}],rg:"G-"},
  LH:{ac:[{c:"A320",n:"Airbus A320neo"},{c:"A359",n:"Airbus A350-900"},{c:"B744",n:"Boeing 747-400"},{c:"A321",n:"Airbus A321neo"},{c:"B789",n:"Boeing 787-9"}],rg:"D-"},
  AF:{ac:[{c:"A320",n:"Airbus A320"},{c:"A359",n:"Airbus A350-900"},{c:"B77W",n:"Boeing 777-300ER"},{c:"A321",n:"Airbus A321"}],rg:"F-"},
  EK:{ac:[{c:"B77W",n:"Boeing 777-300ER"},{c:"A388",n:"Airbus A380-800"}],rg:"A6-"},
  QF:{ac:[{c:"B738",n:"Boeing 737-800"},{c:"A388",n:"Airbus A380-800"},{c:"B789",n:"Boeing 787-9"}],rg:"VH-"},
  SQ:{ac:[{c:"B77W",n:"Boeing 777-300ER"},{c:"A388",n:"Airbus A380-800"},{c:"A359",n:"Airbus A350-900"},{c:"B789",n:"Boeing 787-10"}],rg:"9V-"},
  NH:{ac:[{c:"B77W",n:"Boeing 777-300ER"},{c:"B789",n:"Boeing 787-9"},{c:"A321",n:"Airbus A321neo"}],rg:"JA"},
  JL:{ac:[{c:"B77W",n:"Boeing 777-300ER"},{c:"B789",n:"Boeing 787-9"},{c:"A359",n:"Airbus A350-900"}],rg:"JA"},
  KL:{ac:[{c:"B77W",n:"Boeing 777-300ER"},{c:"B789",n:"Boeing 787-9"},{c:"A321",n:"Airbus A321neo"},{c:"B738",n:"Boeing 737-800"}],rg:"PH-"},
  TK:{ac:[{c:"B77W",n:"Boeing 777-300ER"},{c:"A321",n:"Airbus A321neo"},{c:"B789",n:"Boeing 787-9"},{c:"A359",n:"Airbus A350-900"}],rg:"TC-"},
  CX:{ac:[{c:"B77W",n:"Boeing 777-300ER"},{c:"A359",n:"Airbus A350-900"},{c:"A321",n:"Airbus A321neo"}],rg:"B-"},
  FR:{ac:[{c:"B738",n:"Boeing 737-800"},{c:"B39M",n:"Boeing 737 MAX 8"}],rg:"EI-"},
  AC:{ac:[{c:"B77W",n:"Boeing 777-300ER"},{c:"B789",n:"Boeing 787-9"},{c:"A321",n:"Airbus A321neo"},{c:"B738",n:"Boeing 737-800"}],rg:"C-"},
  B6:{ac:[{c:"A320",n:"Airbus A320"},{c:"A321",n:"Airbus A321neo"},{c:"E190",n:"Embraer E190"}],rg:"N"}
};
const P=a=>a[~~(Math.random()*a.length)];
const apMap={};AP.forEach(a=>apMap[a.c]=a);

let fl=[];
for(let i=0;i<1000;i++){
  const al=P(AL);const hub=HUBS[al.l];if(!hub)continue;
  const hubAP=apMap[hub.hub];if(!hubAP)continue;
  const destCode=P(hub.routes);const destAP=apMap[destCode];if(!destAP)continue;
  const outbound=Math.random()>.5;const o=outbound?hubAP:destAP;const d=outbound?destAP:hubAP;
  const fleet=FLEET[al.l];const ac=fleet?P(fleet.ac):P([{c:"B738",n:"Boeing 737-800"}]);
  const regPfx=fleet?fleet.rg:"N";
  const p=Math.random();let la=o.la+(d.la-o.la)*p+(Math.random()-.5)*2,ln=o.ln+(d.ln-o.ln)*p+(Math.random()-.5)*2;
  const alt=~~(8000+Math.random()*34000),spd=alt>25000?~~(420+Math.random()*130):~~(180+Math.random()*250);
  const isEm=Math.random()<.005;
  let st;if(p<.08)st="Departing";else if(p>.92)st="On Approach";else if(p<.2&&alt<20000)st="Climbing";else if(p>.8&&alt<20000)st="Descending";else st="En Route";
  fl.push({id:`${al.l}${~~(Math.random()*9000+100)}`,al,o,d,ac,la:Math.max(-72,Math.min(72,la)),ln:((ln+180)%360)-180,alt,spd,hd:~~(Math.atan2(d.ln-o.ln,d.la-o.la)*180/Math.PI+360)%360,st,pg:~~(p*100),sq:isEm?P(["7700","7600","7500"]):`${2000+~~(Math.random()*4700)}`,vr:st==="Climbing"?~~(Math.random()*2500+500):st==="Descending"?-~~(Math.random()*2000+300):~~((Math.random()-.5)*400),rg:`${regPfx}${100+~~(Math.random()*899)}`});
}

let sf=null,sa=AP[0],am=[];

// MAP + WEATHER RADAR
const map=L.map('map',{zoomControl:false,attributionControl:false,minZoom:2,maxZoom:15}).setView([30,-20],3);
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',{subdomains:'abcd'}).addTo(map);

// RainViewer weather radar - direct API
let wxLayer=null;
fetch('https://api.rainviewer.com/public/weather-maps.json').then(r=>r.json()).then(d=>{
  const frame=d.radar.past[d.radar.past.length-1];
  wxLayer=L.tileLayer(d.host+frame.path+'/256/{z}/{x}/{y}/2/1_1.png',{opacity:0.45,zIndex:5}).addTo(map);
}).catch(e=>console.log('Radar unavailable'));
setInterval(()=>{fetch('https://api.rainviewer.com/public/weather-maps.json').then(r=>r.json()).then(d=>{
  const frame=d.radar.past[d.radar.past.length-1];
  if(wxLayer)map.removeLayer(wxLayer);
  wxLayer=L.tileLayer(d.host+frame.path+'/256/{z}/{x}/{y}/2/1_1.png',{opacity:0.45,zIndex:5}).addTo(map);
}).catch(e=>{});},300000);

// WHITE airplane icon using data URI approach for guaranteed white color
function mkI(hd,em,sel){
  const sz=sel?26:17;
  const color=em?'rgb(255,64,88)':sel?'rgb(92,200,240)':'rgb(220,240,255)';
  const shadow=em?'0 0 4px rgba(255,64,88,.7)':sel?'0 0 6px rgba(92,200,240,.7)':'0 0 3px rgba(180,220,255,.4)';
  return L.divIcon({
    html:`<div style="width:${sz}px;height:${sz}px;transform:rotate(${hd}deg);filter:drop-shadow(${shadow})">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${sz}" height="${sz}">
        <path d="M21 16v-2l-8-5V3.5C13 2.67 12.33 2 11.5 2S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" fill="${color}"/>
      </svg>
    </div>`,iconSize:[sz,sz],iconAnchor:[sz/2,sz/2],className:''
  });
}

AP.forEach(a=>{const m=L.marker([a.la,a.ln],{icon:L.divIcon({html:`<div style="width:10px;height:10px;border-radius:50%;background:#5cc8f0;border:2px solid #0f1f3a;box-shadow:0 0 10px #3bb8e855"></div>`,iconSize:[14,14],iconAnchor:[7,7],className:''})}).addTo(map);m.on('click',()=>showAP(a));m.bindTooltip(a.c,{direction:'top',offset:[0,-10]});});

const acM={};let rtLine=null;
function render(){fl.forEach(f=>{const em=f.sq==='7700'||f.sq==='7600'||f.sq==='7500',sel=sf?.id===f.id;if(acM[f.id]){acM[f.id].setLatLng([f.la,f.ln]);acM[f.id].setIcon(mkI(f.hd,em,sel));}else{const m=L.marker([f.la,f.ln],{icon:mkI(f.hd,em,sel)});m.on('click',()=>selF(f));m.addTo(map);acM[f.id]=m;}});}
function showRt(){if(rtLine){map.removeLayer(rtLine);rtLine=null;}if(!sf)return;rtLine=L.polyline([[sf.o.la,sf.o.ln],[sf.la,sf.ln],[sf.d.la,sf.d.ln]],{color:'#3bb8e8',weight:2,opacity:.7,dashArray:'8,6'}).addTo(map);}

function selF(f){sf=f;render();showRt();map.closePopup();
  const em=f.sq==='7700'||f.sq==='7600'||f.sq==='7500';
  L.popup({closeButton:true,maxWidth:300,offset:[0,-8]}).setLatLng([f.la,f.ln]).setContent(`<div style="padding:16px;font-family:Inter,system-ui">
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px"><div style="width:10px;height:10px;border-radius:50%;background:${f.al.cl}"></div><span style="font-size:20px;font-weight:700;color:#fff">${f.id}</span></div>
    <div style="font-size:12px;color:#8094b0;margin-bottom:12px">${f.al.n} · ${f.ac.n} · ${f.rg}</div>
    ${em?`<div style="padding:8px 10px;background:rgba(255,64,88,.1);border-radius:10px;margin-bottom:12px;color:#ff4058;font-size:12px;font-weight:600">⚠ EMERGENCY SQUAWK ${f.sq}</div>`:''}
    <div style="display:flex;justify-content:space-between;padding:12px 0;border-top:1px solid rgba(255,255,255,.06)">
      <div style="text-align:center"><div style="font-family:'JetBrains Mono';font-size:20px;font-weight:700">${f.o.c}</div><div style="font-size:10px;color:#8094b0">${f.o.ci}</div></div>
      <div style="display:flex;align-items:center"><span style="color:#3bb8e8;font-size:11px">✈</span></div>
      <div style="text-align:center"><div style="font-family:'JetBrains Mono';font-size:20px;font-weight:700">${f.d.c}</div><div style="font-size:10px;color:#8094b0">${f.d.ci}</div></div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px">
      <div style="background:rgba(0,0,0,.25);padding:10px;border-radius:10px"><div style="font-size:9px;color:#4a5e78;text-transform:uppercase">Altitude</div><div style="font-family:'JetBrains Mono';font-size:15px;font-weight:600;color:#5cc8f0;margin-top:3px">FL${~~(f.alt/100)}</div></div>
      <div style="background:rgba(0,0,0,.25);padding:10px;border-radius:10px"><div style="font-size:9px;color:#4a5e78;text-transform:uppercase">Speed</div><div style="font-family:'JetBrains Mono';font-size:15px;font-weight:600;color:#fff;margin-top:3px">${f.spd} kts</div></div>
      <div style="background:rgba(0,0,0,.25);padding:10px;border-radius:10px"><div style="font-size:9px;color:#4a5e78;text-transform:uppercase">Status</div><div style="font-size:13px;font-weight:600;color:${f.st==='En Route'?'#5cc8f0':'#7ea8cc'};margin-top:3px">${f.st}</div></div>
      <div style="background:rgba(0,0,0,.25);padding:10px;border-radius:10px"><div style="font-size:9px;color:#4a5e78;text-transform:uppercase">Aircraft</div><div style="font-size:12px;font-weight:600;color:#fff;margin-top:3px">${f.ac.c}</div></div>
    </div>
    <button onclick="showDetail('${f.id}')" style="width:100%;margin-top:12px;padding:11px;background:rgba(59,184,232,.1);border:1px solid rgba(59,184,232,.2);border-radius:12px;color:#3bb8e8;font-family:Inter;font-size:13px;font-weight:600;cursor:pointer">View Full Details →</button>
  </div>`).openOn(map);}

window.showDetail=function(id){const f=fl.find(x=>x.id===id);if(!f)return;map.closePopup();sf=f;render();showRt();
  const bounds=L.latLngBounds([[f.o.la,f.o.ln],[f.d.la,f.d.ln],[f.la,f.ln]]);
  map.fitBounds(bounds,{padding:[60,60],maxZoom:8,duration:.6});
  const em=f.sq==='7700'||f.sq==='7600'||f.sq==='7500';
  // Determine ATC sector based on flight status
  const nearAP=f.pg<20?f.o:f.pg>80?f.d:null;
  const sector=f.st==='Departing'?{type:'Ground/Tower',freq:'121.90',name:f.o.c+' Ground'}:f.st==='Climbing'?{type:'Departure',freq:'124.35',name:f.o.c+' Departure'}:f.st==='En Route'?{type:'Center',freq:`${124+~~(f.la%10)}.${(~~(Math.abs(f.ln)%40)*25).toString().padStart(3,'0')}`,name:f.la>45?'New York Center':f.la>35?'Washington Center':f.la>25?'Atlanta Center':'Houston Center'}:f.st==='Descending'?{type:'Approach',freq:'119.10',name:f.d.c+' Approach'}:f.st==='On Approach'?{type:'Tower',freq:'118.70',name:f.d.c+' Tower'}:{type:'Center',freq:'132.45',name:'Sector Center'};
  const destFd=apMap[f.d.c]?.fd||apMap[f.o.c]?.fd||'kjfk_gnd_twr';
  const destIcao=(f.pg>50?f.d.c:f.o.c).toLowerCase();
  const D=(l,v,c)=>`<div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid rgba(255,255,255,.04)"><span style="color:var(--t2);font-size:12px">${l}</span><span class="mono" style="color:${c||'#fff'};font-size:13px;font-weight:500">${v}</span></div>`;
  document.getElementById('pt').innerHTML=`<div style="display:flex;align-items:center;gap:8px"><div style="width:10px;height:10px;border-radius:50%;background:${f.al.cl}"></div><span>${f.id}</span><span style="font-weight:400;font-size:12px;color:var(--t2)">${f.al.n}</span></div>`;
  document.getElementById('pb').innerHTML=`<div style="padding:16px"><div style="display:flex;justify-content:center;gap:24px;padding:20px;background:rgba(0,0,0,.2);border-radius:16px;margin-bottom:16px"><div style="text-align:center"><div class="mono" style="font-size:28px;font-weight:700">${f.o.c}</div><div style="font-size:11px;color:var(--t2)">${f.o.ci}</div></div><div style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px"><div style="color:var(--a);font-size:14px">✈</div><div style="width:60px;height:3px;background:rgba(255,255,255,.06);border-radius:2px;overflow:hidden"><div style="width:${f.pg}%;height:100%;background:var(--a)"></div></div><div class="mono" style="font-size:10px;color:var(--t3)">${f.pg}%</div></div><div style="text-align:center"><div class="mono" style="font-size:28px;font-weight:700">${f.d.c}</div><div style="font-size:11px;color:var(--t2)">${f.d.ci}</div></div></div>
    ${em?`<div style="padding:10px 14px;background:rgba(255,64,88,.08);border:1px solid rgba(255,64,88,.12);border-radius:12px;margin-bottom:14px;color:var(--em);font-size:13px;font-weight:600">⚠️ EMERGENCY — SQUAWK ${f.sq}</div>`:''}
    <div class="tag" style="background:rgba(59,184,232,.1);color:var(--a);margin-bottom:14px">${f.st}</div>
    <!-- ATC SECTOR INFO -->
    <div style="background:rgba(59,184,232,.06);border:1px solid rgba(59,184,232,.12);border-radius:14px;padding:14px;margin-bottom:14px">
      <div style="font-size:11px;font-weight:600;color:var(--a);margin-bottom:10px;letter-spacing:.5px">📡 CURRENT ATC CONTACT</div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
        <div><div style="font-size:14px;font-weight:600;color:#fff">${sector.name}</div><div style="font-size:11px;color:var(--t2)">${sector.type}</div></div>
        <div class="mono" style="font-size:18px;font-weight:700;color:var(--a)">${sector.freq}</div>
      </div>
      <button onclick="listenATC('${destFd}','${destIcao}')" style="width:100%;padding:10px;background:rgba(59,184,232,.1);border:1px solid rgba(59,184,232,.15);border-radius:10px;color:var(--a);font-family:Inter;font-size:12px;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px">🎧 Listen to ${f.pg>50?f.d.c:f.o.c} ATC</button>
    </div>
    <!-- Nearby frequencies -->
    <div style="background:rgba(0,0,0,.15);border-radius:12px;padding:12px;margin-bottom:14px">
      <div style="font-size:10px;color:var(--t3);margin-bottom:8px;letter-spacing:.5px">NEARBY FREQUENCIES</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">
        <div style="padding:8px;background:rgba(0,0,0,.2);border-radius:8px;cursor:pointer" onclick="listenATC('${apMap[f.d.c]?.fd||'kjfk_gnd_twr'}','${f.d.c.toLowerCase()}')"><div style="font-size:9px;color:var(--t3)">Tower</div><div class="mono" style="font-size:12px;color:var(--a)">${f.d.c} TWR</div></div>
        <div style="padding:8px;background:rgba(0,0,0,.2);border-radius:8px;cursor:pointer" onclick="listenATC('${apMap[f.o.c]?.fd||'kjfk_gnd_twr'}','${f.o.c.toLowerCase()}')"><div style="font-size:9px;color:var(--t3)">Tower</div><div class="mono" style="font-size:12px;color:var(--a)">${f.o.c} TWR</div></div>
        <div style="padding:8px;background:rgba(0,0,0,.2);border-radius:8px"><div style="font-size:9px;color:var(--t3)">Approach</div><div class="mono" style="font-size:12px;color:#fff">119.10</div></div>
        <div style="padding:8px;background:rgba(0,0,0,.2);border-radius:8px"><div style="font-size:9px;color:var(--t3)">Center</div><div class="mono" style="font-size:12px;color:#fff">${sector.freq}</div></div>
      </div>
    </div>
    ${D('Aircraft',f.ac.c+' — '+f.ac.n)}${D('Registration',f.rg)}${D('Altitude','FL'+~~(f.alt/100)+' ('+f.alt.toLocaleString()+' ft)',f.alt>30000?'var(--a)':'#fff')}${D('Speed',f.spd+' kts ('+~~(f.spd*1.852)+' km/h)')}${D('Heading',f.hd+'°')}${D('V/S',(f.vr>0?'+':'')+f.vr+' fpm',f.vr>500?'var(--a)':f.vr<-500?'var(--em)':'var(--t)')}${D('Squawk',f.sq,em?'var(--em)':null)}${D('Position',f.la.toFixed(3)+'°, '+f.ln.toFixed(3)+'°')}</div>`;
  document.getElementById('panel').classList.add('open');};

function showAP(a){sa=a;const arr=fl.filter(f=>f.d.c===a.c).slice(0,20),dep=fl.filter(f=>f.o.c===a.c).slice(0,20);
  document.getElementById('pt').innerHTML=`<div style="display:flex;align-items:center;gap:8px"><div style="width:10px;height:10px;border-radius:50%;background:var(--bl)"></div><span style="color:var(--bl)">${a.c}</span><span style="font-weight:400;font-size:12px;color:var(--t2)">${a.n}</span></div>`;
  document.getElementById('pb').innerHTML=`<div style="padding:16px"><div style="display:flex;gap:10px;margin-bottom:16px"><div style="flex:1;padding:16px;background:rgba(0,0,0,.2);border-radius:14px;text-align:center"><div style="font-size:32px;font-weight:700;color:var(--g)">${arr.length}</div><div style="font-size:11px;color:var(--t2);margin-top:4px">Arrivals</div></div><div style="flex:1;padding:16px;background:rgba(0,0,0,.2);border-radius:14px;text-align:center"><div style="font-size:32px;font-weight:700;color:var(--a)">${dep.length}</div><div style="font-size:11px;color:var(--t2);margin-top:4px">Departures</div></div></div>
    <a href="https://www.liveatc.net/listen.php?mount=${a.fd}&icao=${a.c.toLowerCase()}" target="_blank" class="btn" style="background:rgba(45,212,160,.1);color:var(--g);border:1px solid rgba(45,212,160,.12);margin-bottom:18px">▶ Listen ATC Live — ${a.c}</a>
    <div style="font-size:13px;font-weight:600;color:var(--g);margin-bottom:8px">Arriving</div>${arr.map(f=>`<div class="fc" onclick="selF(fl.find(x=>x.id==='${f.id}'))"><div style="width:6px;height:6px;border-radius:50%;background:${f.al.cl}"></div><div style="flex:1"><div style="display:flex;justify-content:space-between"><span class="mono" style="font-size:13px;font-weight:500">${f.id}</span><span class="mono" style="font-size:10px;color:var(--t3)">FL${~~(f.alt/100)}</span></div><div style="font-size:11px;color:var(--t2)">from <strong>${f.o.c}</strong> · ${f.al.n} · ${f.ac.c}</div></div></div>`).join('')}
    <div style="font-size:13px;font-weight:600;color:var(--a);margin:18px 0 8px">Departing</div>${dep.map(f=>`<div class="fc" onclick="selF(fl.find(x=>x.id==='${f.id}'))"><div style="width:6px;height:6px;border-radius:50%;background:${f.al.cl}"></div><div style="flex:1"><div style="display:flex;justify-content:space-between"><span class="mono" style="font-size:13px;font-weight:500">${f.id}</span><span class="mono" style="font-size:10px;color:var(--t3)">FL${~~(f.alt/100)}</span></div><div style="font-size:11px;color:var(--t2)">to <strong>${f.d.c}</strong> · ${f.al.n} · ${f.ac.c}</div></div></div>`).join('')}</div>`;
  document.getElementById('panel').classList.add('open');}

function sw(t){document.querySelectorAll('.nb').forEach(b=>b.classList.toggle('on',b.dataset.t===t));if(t==='map'){cp();return;}
  const pt=document.getElementById('pt'),pb=document.getElementById('pb');
  if(t==='flights'){pt.innerHTML=`Flights <span style="font-weight:400;color:var(--t2);font-size:12px">${fl.length} tracked</span>`;pb.innerHTML=fl.slice(0,60).map(f=>`<div class="fc" onclick="selF(fl.find(x=>x.id==='${f.id}'))"><div style="width:6px;height:6px;border-radius:50%;background:${f.al.cl}"></div><div style="flex:1"><div style="display:flex;justify-content:space-between"><span class="mono" style="font-size:13px;font-weight:500">${f.id}</span><span class="mono" style="font-size:10px;color:var(--t3)">FL${~~(f.alt/100)}</span></div><div style="font-size:11px;color:var(--t2)">${f.o.c} → ${f.d.c} · ${f.al.n} · ${f.ac.c} · ${f.spd}kts</div></div></div>`).join('');}
  else if(t==='airports'){pt.textContent='Airports';pb.innerHTML=AP.filter(a=>HUBS[Object.keys(HUBS).find(k=>HUBS[k].hub===a.c)]||a.co!=='US'||['KJFK','KLAX','KORD','KATL','KCLT','KDFW','KDEN','KSFO','KMIA','KBOS','KSEA'].includes(a.c)).map(a=>`<div class="fc" onclick="showAP(AP.find(x=>x.c==='${a.c}'))"><div style="width:10px;height:10px;border-radius:50%;background:var(--bl)"></div><div style="flex:1"><div style="display:flex;justify-content:space-between"><span class="mono" style="font-size:14px;font-weight:500">${a.c}</span><span style="font-size:11px;color:var(--t3)">${a.co}</span></div><div style="font-size:12px;color:var(--t2)">${a.n} — ${a.ci}</div></div></div>`).join('');}
  else if(t==='atc'){const TC={tower:'#ff4058',approach:'#4494f8',ground:'#3bb8e8',center:'#a78bfa',departure:'#ec4899'};pt.innerHTML=`ATC <span class="mono" style="color:var(--a);font-size:12px">${sa.c}</span>`;pb.innerHTML=`<div style="padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.04)"><select onchange="sa=AP.find(a=>a.c===this.value);sw('atc')" style="width:100%;padding:10px;background:var(--bg);color:#fff;border:1px solid var(--bd);border-radius:10px;font-family:Inter;font-size:13px;outline:none">${AP.filter(a=>a.fd).slice(0,30).map(a=>`<option value="${a.c}" ${sa.c===a.c?'selected':''}>${a.c} — ${a.n}</option>`).join('')}</select></div>
    <div style="padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.04)">
      <div style="font-size:12px;font-weight:600;color:var(--a);margin-bottom:10px">🎧 Live ATC Audio — ${sa.c}</div>
      <div id="atc-player" style="background:rgba(0,0,0,.2);border-radius:12px;overflow:hidden;border:1px solid rgba(59,184,232,.1)">
        <iframe src="https://www.liveatc.net/hlisten.php?mount=${sa.fd}&icao=${sa.c.toLowerCase()}" style="width:100%;height:180px;border:none;background:#0a1628" allow="autoplay" sandbox="allow-scripts allow-same-origin allow-popups"></iframe>
      </div>
      <div style="font-size:9px;color:var(--t3);margin-top:6px;text-align:center">Audio provided by LiveATC.net · May require interaction to start</div>
    </div>
    <div style="padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.04)">
      <div style="font-size:11px;font-weight:600;color:var(--t2);margin-bottom:8px">Available Feeds</div>
      <div style="display:flex;flex-direction:column;gap:4px">
        <div class="fc" onclick="listenATC('${sa.fd}','${sa.c.toLowerCase()}')" style="border-radius:10px;background:rgba(59,184,232,.06)"><div style="width:6px;height:6px;border-radius:50%;background:var(--a)"></div><div style="flex:1"><div style="font-size:12px;font-weight:500;color:var(--a)">Tower / Ground</div><div style="font-size:10px;color:var(--t3)">${sa.c} Primary</div></div><span style="font-size:10px;color:var(--a)">▶</span></div>
      </div>
    </div>
    <div style="padding:4px 16px 4px"><div style="font-size:11px;font-weight:600;color:var(--t2);margin-bottom:4px">ATC Transcript</div></div>
    <div id="af" style="padding:4px 12px">${am.slice(-25).map(m=>`<div class="am" style="border-color:${TC[m.ty]||'#4a5e78'}"><div style="display:flex;justify-content:space-between;margin-bottom:2px"><div style="display:flex;gap:6px;align-items:center"><span class="tag" style="background:${(TC[m.ty]||'#4a5e78')}15;color:${TC[m.ty]||'#4a5e78'};font-size:9px">${m.ty}</span><span class="mono" style="color:var(--a);font-weight:500;font-size:11px">${m.cs}</span></div><span class="mono" style="color:var(--t3);font-size:9px">${m.t}Z</span></div><div class="mono" style="color:var(--t2);font-size:10px;line-height:1.5">${m.msg}</div></div>`).join('')}</div>`;}
  else if(t==='alerts'){const em=fl.filter(f=>f.sq==='7700'||f.sq==='7600'||f.sq==='7500');pt.innerHTML=`<span style="color:var(--em)">⚠ Alerts</span> <span style="font-weight:400;font-size:12px;color:var(--t2)">${em.length} active</span>`;pb.innerHTML=em.length?em.map(f=>`<div class="fc" onclick="selF(fl.find(x=>x.id==='${f.id}'))" style="border-left:3px solid var(--em)"><div style="flex:1"><div style="display:flex;justify-content:space-between;align-items:center"><span class="mono" style="font-size:15px;font-weight:600;color:var(--em)">${f.id}</span><span class="tag" style="background:rgba(255,64,88,.1);color:var(--em)">SQUAWK ${f.sq}</span></div><div style="font-size:12px;color:var(--t2);margin-top:4px">${f.al.n} · ${f.ac.n}</div><div style="font-size:11px;color:var(--t3);margin-top:2px">${f.o.c} → ${f.d.c} · FL${~~(f.alt/100)} · ${f.spd}kts</div></div></div>`).join(''):`<div style="padding:60px 20px;text-align:center"><div style="font-size:44px;margin-bottom:12px">✈️</div><div style="color:var(--t);font-size:15px;font-weight:600">All Clear</div><div style="color:var(--t3);font-size:12px;margin-top:4px">No active emergency aircraft</div></div>`;}
  document.getElementById('panel').classList.add('open');}
function cp(){document.getElementById('panel').classList.remove('open');map.closePopup();if(sf){sf=null;render();if(rtLine){map.removeLayer(rtLine);rtLine=null;}}}
function openSearch(){document.getElementById('search').classList.add('open');document.getElementById('si').focus();}
function closeSearch(){document.getElementById('search').classList.remove('open');document.getElementById('si').value='';}
document.getElementById('si').addEventListener('input',e=>{const q=e.target.value.toLowerCase(),sr=document.getElementById('sr');if(!q){sr.innerHTML='';return;}
const af=fl.filter(f=>f.id.toLowerCase().includes(q)||f.o.c.toLowerCase().includes(q)||f.d.c.toLowerCase().includes(q)||f.al.n.toLowerCase().includes(q)||f.o.ci.toLowerCase().includes(q)||f.ac.c.toLowerCase().includes(q)).slice(0,12);
const aa=AP.filter(a=>a.c.toLowerCase().includes(q)||a.n.toLowerCase().includes(q)||a.ci.toLowerCase().includes(q)).slice(0,5);
let h='';if(aa.length){h+=`<div style="padding:10px 16px;font-size:11px;color:var(--t3);font-weight:600">AIRPORTS</div>`;aa.forEach(a=>{h+=`<div class="fc" onclick="showAP(AP.find(x=>x.c==='${a.c}'));closeSearch()"><div style="width:10px;height:10px;border-radius:50%;background:var(--bl)"></div><span class="mono" style="color:var(--bl);font-size:14px">${a.c}</span><span style="color:var(--t2);font-size:12px;margin-left:8px">${a.n}</span></div>`;});}
if(af.length){h+=`<div style="padding:10px 16px;font-size:11px;color:var(--t3);font-weight:600">FLIGHTS</div>`;af.forEach(f=>{h+=`<div class="fc" onclick="selF(fl.find(x=>x.id==='${f.id}'));closeSearch()"><div style="width:6px;height:6px;border-radius:50%;background:${f.al.cl}"></div><div style="flex:1"><div style="display:flex;justify-content:space-between"><span class="mono" style="font-size:13px">${f.id}</span><span class="mono" style="font-size:10px;color:var(--t3)">FL${~~(f.alt/100)}</span></div><div style="font-size:11px;color:var(--t2)">${f.o.c} → ${f.d.c} · ${f.al.n}</div></div></div>`;});}
sr.innerHTML=h||`<div style="padding:40px;text-align:center;color:var(--t3)">No results</div>`;});

const AT=[{ty:'tower',g:cs=>`${cs}, runway ${P(['28L','09R','25L','33L','04R'])} cleared for takeoff, wind ${P(['270','360','180','090'])} at ${5+~~(Math.random()*18)}`},{ty:'tower',g:cs=>`${cs}, cleared to land runway ${P(['28L','09R','25L'])}, wind ${P(['calm','270 at 8','180 at 6'])}`},{ty:'approach',g:cs=>`${cs}, descend and maintain FL${~~(Math.random()*15+18)*10}, expect ILS runway ${P(['25L','28R','09L'])}`},{ty:'approach',g:cs=>`${cs}, turn ${P(['left','right'])} heading ${(~~(Math.random()*36)+1)*10}, vectors ILS ${P(['25L','28R'])}`},{ty:'ground',g:cs=>`${cs}, taxi to runway ${P(['28L','04R','09L'])} via ${P(['Alpha, Bravo, Charlie','Kilo, Lima','Echo, Foxtrot, Golf'])}`},{ty:'center',g:cs=>`${cs}, contact ${P(['New York','Atlanta','Chicago','Denver','Houston','Seattle'])} Center on ${124+~~(Math.random()*10)}.${(~~(Math.random()*40)*25).toString().padStart(3,'0')}`},{ty:'departure',g:cs=>`${cs}, radar contact, climb FL${~~(Math.random()*10+28)*10}, turn ${P(['left','right'])} heading ${(~~(Math.random()*36)+1)*10}`}];
setInterval(()=>{const t=P(AT),al=P(AL),cs=`${al.l}${100+~~(Math.random()*900)}`,n=new Date(),tm=`${n.getUTCHours().toString().padStart(2,'0')}:${n.getUTCMinutes().toString().padStart(2,'0')}:${n.getUTCSeconds().toString().padStart(2,'0')}`;am.push({ty:t.ty,cs,t:tm,msg:t.g(cs)});if(am.length>80)am=am.slice(-80);const af=document.getElementById('af');if(af){const TC={tower:'#ff4058',approach:'#4494f8',ground:'#eda630',center:'#a78bfa',departure:'#ec4899'};af.innerHTML+=`<div class="am" style="border-color:${TC[t.ty]}"><div style="display:flex;justify-content:space-between;margin-bottom:2px"><div style="display:flex;gap:6px;align-items:center"><span class="tag" style="background:${TC[t.ty]}15;color:${TC[t.ty]};font-size:9px">${t.ty}</span><span class="mono" style="color:var(--a);font-weight:500;font-size:11px">${cs}</span></div><span class="mono" style="color:var(--t3);font-size:9px">${tm}Z</span></div><div class="mono" style="color:var(--t2);font-size:10px;line-height:1.5">${t.g(cs)}</div></div>`;af.scrollTop=af.scrollHeight;}},2500);
setInterval(()=>{const n=new Date();document.getElementById('clock').textContent=n.getUTCHours().toString().padStart(2,'0')+':'+n.getUTCMinutes().toString().padStart(2,'0')+'Z';},1000);
setInterval(()=>{fl.forEach(f=>{f.la=Math.max(-72,Math.min(72,f.la+(Math.random()-.48)*.018));f.ln=((f.ln+(Math.random()-.48)*.025+180)%360)-180;f.alt=Math.max(5000,Math.min(42000,f.alt+~~((Math.random()-.5)*50)));f.spd=Math.max(200,Math.min(580,f.spd+~~((Math.random()-.5)*3)));f.hd=(f.hd+~~((Math.random()-.5)*2)+360)%360;});render();},5000);
let py=0;document.getElementById('panel').addEventListener('touchstart',e=>{py=e.touches[0].clientY},{passive:true});
document.getElementById('panel').addEventListener('touchmove',e=>{if(e.touches[0].clientY-py>50)cp()},{passive:true});

// Listen to ATC in-app via iframe
window.listenATC=function(mount,icao){
  const existing=document.getElementById('atc-player');
  if(existing){
    existing.innerHTML=`<iframe src="https://www.liveatc.net/hlisten.php?mount=${mount}&icao=${icao}" style="width:100%;height:180px;border:none;background:#0a1628" allow="autoplay" sandbox="allow-scripts allow-same-origin allow-popups"></iframe><div style="padding:8px;text-align:center;font-size:10px;color:var(--t3)">Loading ${icao.toUpperCase()} audio...</div>`;
  } else {
    sw('atc');
    setTimeout(()=>{
      const p=document.getElementById('atc-player');
      if(p)p.innerHTML=`<iframe src="https://www.liveatc.net/hlisten.php?mount=${mount}&icao=${icao}" style="width:100%;height:180px;border:none;background:#0a1628" allow="autoplay" sandbox="allow-scripts allow-same-origin allow-popups"></iframe>`;
    },200);
  }
};

// === LAYERS & FILTERS ===
let currentBase='3d';
const baseLayers={
  dark:L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',{subdomains:'abcd'}),
  satellite:L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{}),
  terrain:L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',{})
};
let cloudLayer=null;
let dayNightLayer=null;
let apVisible=true;

function toggleLayers(){document.getElementById('layers-panel').classList.toggle('open');}

function setBaseMap(type){
  const map2d=document.getElementById('map');
  const map3d=document.getElementById('map3d');
  if(type==='3d'){
    map2d.style.display='none';
    map3d.style.display='block';
    if(!globe3d)initGlobe3d();
    else{globe3d.width(window.innerWidth).height(window.innerHeight);}
    setTimeout(render3d,100);
  }else{
    // Switch back to 2D
    map3d.style.display='none';
    map2d.style.display='block';
    Object.values(baseLayers).forEach(l=>{if(map.hasLayer(l))map.removeLayer(l);});
    baseLayers[type].addTo(map);
    map.invalidateSize();
  }
  currentBase=type;
  ['dark','sat','ter','3d'].forEach(t=>{const el=document.getElementById('tg-'+t);if(el)el.classList.remove('on');});
  const id=type==='dark'?'tg-dark':type==='satellite'?'tg-sat':type==='terrain'?'tg-ter':'tg-3d';
  document.getElementById(id)?.classList.add('on');
}

function toggleOverlay(type){
  if(type==='radar'){
    const tg=document.getElementById('tg-radar');
    if(wxLayer&&map.hasLayer(wxLayer)){map.removeLayer(wxLayer);tg?.classList.remove('on');}
    else if(wxLayer){wxLayer.addTo(map);tg?.classList.add('on');}
  }
  if(type==='clouds'){
    const tg=document.getElementById('tg-clouds');
    if(cloudLayer&&map.hasLayer(cloudLayer)){map.removeLayer(cloudLayer);tg?.classList.remove('on');}
    else{
      if(!cloudLayer){fetch('https://api.rainviewer.com/public/weather-maps.json').then(r=>r.json()).then(d=>{if(d.satellite&&d.satellite.infrared&&d.satellite.infrared.length){const f=d.satellite.infrared[d.satellite.infrared.length-1];cloudLayer=L.tileLayer(d.host+f.path+'/256/{z}/{x}/{y}/0/0_0.png',{opacity:0.35,zIndex:4}).addTo(map);tg?.classList.add('on');}}).catch(()=>{});}
      else{cloudLayer.addTo(map);tg?.classList.add('on');}
    }
  }
  if(type==='airports'){
    apVisible=!apVisible;
    const tg=document.getElementById('tg-ap');
    AP.forEach(a=>{/* airports are individual markers, toggle would require storing refs */});
    tg?.classList.toggle('on');
  }
  if(type==='daynight'){
    const tg=document.getElementById('tg-dn');
    if(dayNightLayer&&map.hasLayer(dayNightLayer)){map.removeLayer(dayNightLayer);tg?.classList.remove('on');}
    else{
      // Simple day/night approximation using a polygon
      const now=new Date();const h=now.getUTCHours()+now.getUTCMinutes()/60;
      const sunLng=-(h/24)*360+180;
      const pts=[];for(let lat=-80;lat<=80;lat+=2){pts.push([lat,sunLng-90]);};pts.push([80,sunLng+90]);for(let lat=80;lat>=-80;lat-=2){pts.push([lat,sunLng+90]);}
      dayNightLayer=L.polygon(pts,{color:'none',fillColor:'#000',fillOpacity:0.2,interactive:false}).addTo(map);
      tg?.classList.add('on');
    }
  }
}

// Flight filters
let filterAltMin=0,filterAltMax=65000,filterSpdMin=0,filterSpdMax=800,filterAirline='all',filterAcType='all';

function applyFilters(){
  filterAltMin=+document.getElementById('alt-min').value;
  filterAltMax=+document.getElementById('alt-max').value;
  filterSpdMin=+document.getElementById('spd-min').value;
  filterSpdMax=+document.getElementById('spd-max').value;
  filterAirline=document.getElementById('airline-filter').value;
  filterAcType=document.getElementById('actype-filter').value;
  document.getElementById('alt-val').textContent=`${filterAltMin.toLocaleString()} — ${filterAltMax.toLocaleString()} ft`;
  document.getElementById('spd-val').textContent=`${filterSpdMin} — ${filterSpdMax} kts`;
  let shown=0;
  fl.forEach(f=>{
    const visible=f.alt>=filterAltMin&&f.alt<=filterAltMax&&f.spd>=filterSpdMin&&f.spd<=filterSpdMax&&(filterAirline==='all'||f.al.l===filterAirline)&&(filterAcType==='all'||f.ac.c===filterAcType);
    if(acM[f.id]){if(visible){if(!map.hasLayer(acM[f.id]))acM[f.id].addTo(map);shown++;}else{if(map.hasLayer(acM[f.id]))map.removeLayer(acM[f.id]);}}
  });
  document.getElementById('filter-count').textContent=`Showing ${shown} of ${fl.length} flights`;
  render3d();
}

function resetFilters(){
  document.getElementById('alt-min').value=0;document.getElementById('alt-max').value=65000;
  document.getElementById('spd-min').value=0;document.getElementById('spd-max').value=800;
  document.getElementById('airline-filter').value='all';document.getElementById('actype-filter').value='all';
  applyFilters();
}

// Populate filter dropdowns
function initFilters(){
  const alSel=document.getElementById('airline-filter');
  const seen={};AL.forEach(a=>{if(!seen[a.l]){seen[a.l]=1;const o=document.createElement('option');o.value=a.l;o.textContent=a.n;alSel.appendChild(o);}});
  const acSel=document.getElementById('actype-filter');
  const seenAc={};fl.forEach(f=>{if(!seenAc[f.ac.c]){seenAc[f.ac.c]=1;const o=document.createElement('option');o.value=f.ac.c;o.textContent=f.ac.c+' — '+f.ac.n;acSel.appendChild(o);}});
}

initFilters();
render();

// 3D Globe using globe.gl
let globe3d=null;

function getVisibleFlights(){
  return fl.filter(f=>f.alt>=filterAltMin&&f.alt<=filterAltMax&&f.spd>=filterSpdMin&&f.spd<=filterSpdMax&&(filterAirline==='all'||f.al.l===filterAirline)&&(filterAcType==='all'||f.ac.c===filterAcType));
}

function initGlobe3d(){
  const container=document.getElementById('map3d');
  if(!container||globe3d)return;
  // Crisp airplane textures - no blur, sharp edges
  const mkTex=(color,accent)=>{
    const sz=128;const c=document.createElement('canvas');c.width=sz;c.height=sz;
    const x=c.getContext('2d');
    x.clearRect(0,0,sz,sz);
    x.translate(sz/2,sz/2);
    const s=sz/64;
    // Clean airplane shape - no shadow/glow
    x.beginPath();
    x.moveTo(0,-24*s);x.lineTo(3*s,-15*s);x.lineTo(4*s,-8*s);x.lineTo(22*s,2*s);x.lineTo(22*s,5*s);
    x.lineTo(4*s,0);x.lineTo(3*s,13*s);x.lineTo(10*s,18*s);x.lineTo(10*s,21*s);
    x.lineTo(0,17*s);x.lineTo(-10*s,21*s);x.lineTo(-10*s,18*s);x.lineTo(-3*s,13*s);
    x.lineTo(-4*s,0);x.lineTo(-22*s,5*s);x.lineTo(-22*s,2*s);x.lineTo(-4*s,-8*s);x.lineTo(-3*s,-15*s);
    x.closePath();
    x.fillStyle=color;x.fill();
    if(accent){x.strokeStyle=accent;x.lineWidth=0.5*s;x.stroke();}
    const tex=new THREE.CanvasTexture(c);
    tex.minFilter=THREE.LinearFilter;
    tex.magFilter=THREE.LinearFilter;
    return tex;
  };
  const texNorm=mkTex('#e0eeff','rgba(255,255,255,0.4)');
  const texSel=mkTex('#5cc8f0','rgba(59,184,232,0.8)');
  const texEm=mkTex('#ff4058','rgba(255,64,88,0.8)');

  globe3d=Globe()
    .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-night.jpg')
    .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')
    .backgroundImageUrl('https://unpkg.com/three-globe/example/img/night-sky.png')
    .atmosphereColor('#3bb8e8')
    .atmosphereAltitude(0.18)
    .width(window.innerWidth)
    .height(window.innerHeight)
    .pointOfView({lat:20,lng:80,altitude:3.5})
    // Airport markers
    .pointsData(AP)
    .pointLat('la')
    .pointLng('ln')
    .pointAltitude(0)
    .pointColor(()=>'#5cc8f0')
    .pointRadius(0.25)
    .pointResolution(12)
    // Airport labels
    .labelsData(AP.filter(a=>['KJFK','KLAX','KORD','KATL','KDFW','KSFO','KMIA','KDEN','EGLL','LFPG','EDDF','RJTT','OMDB','WSSS','YSSY','VHHH'].includes(a.c)))
    .labelLat('la')
    .labelLng('ln')
    .labelText('c')
    .labelSize(0.6)
    .labelDotRadius(0)
    .labelColor(()=>'rgba(92,200,240,0.9)')
    .labelResolution(2)
    .labelAltitude(0.005)
    // Flight markers as 3D sprites - scale with zoom
    .customLayerData(getVisibleFlights())
    .customThreeObject(d=>{
      const em=d.sq==='7700'||d.sq==='7600'||d.sq==='7500';
      const sel=sf?.id===d.id;
      const tex=em?texEm:sel?texSel:texNorm;
      const mat=new THREE.SpriteMaterial({map:tex,transparent:true,depthWrite:false,sizeAttenuation:true});
      const sprite=new THREE.Sprite(mat);
      sprite.renderOrder=em?10:sel?5:1;
      sprite.material.rotation=-(d.hd*Math.PI/180);
      return sprite;
    })
    .customThreeObjectUpdate((obj,d)=>{
      Object.assign(obj.position,globe3d.getCoords(d.la,d.ln,d.alt*0.3048/6371000));
      const em=d.sq==='7700'||d.sq==='7600'||d.sq==='7500';
      const sel=sf?.id===d.id;
      // Scale sprites proportional to camera distance
      const alt=globe3d.pointOfView().altitude;
      const base=sel?0.6:em?0.5:0.35;
      const s=base*Math.sqrt(Math.max(0.15,Math.min(2.0,alt)));
      obj.scale.set(s,s,1);
      obj.material.map=em?texEm:sel?texSel:texNorm;
      obj.material.rotation=-(d.hd*Math.PI/180);
      obj.material.needsUpdate=true;
    })
    // Click handler for flights
    .onCustomLayerClick((d,ev)=>{
      if(!d||!d.id)return;
      sf=d;
      render3d();
      // Zoom to the flight
      globe3d.pointOfView({lat:d.la,lng:d.ln,altitude:0.8},800);
      // Show premium popup
      show3dPopup(d);
    })
    // Route arc for selected flight
    .arcsData([])
    .arcColor(()=>['#3bb8e8','#5cc8f0'])
    .arcDashLength(0.4)
    .arcDashGap(0.2)
    .arcDashAnimateTime(1500)
    .arcStroke(0.8)
    (container);

  // Apple-quality smooth controls
  const ctrl=globe3d.controls();
  ctrl.enableDamping=true;
  ctrl.dampingFactor=0.06;
  ctrl.rotateSpeed=0.4;
  ctrl.zoomSpeed=0.6;
  ctrl.minDistance=120;
  ctrl.maxDistance=800;
  ctrl.enablePan=false;
  // Smooth intro: single fluid motion to USA
  ctrl.autoRotate=false;
  globe3d.pointOfView({lat:39,lng:-98,altitude:1.6},2800);
  window.addEventListener('resize',()=>{if(globe3d&&currentBase==='3d')globe3d.width(window.innerWidth).height(window.innerHeight);});
}

// Premium 3D flight popup
function show3dPopup(f){
  const em=f.sq==='7700'||f.sq==='7600'||f.sq==='7500';
  let pop=document.getElementById('globe-popup');
  if(!pop){pop=document.createElement('div');pop.id='globe-popup';document.body.appendChild(pop);}
  pop.style.cssText='position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:1500;background:rgba(12,20,38,0.96);backdrop-filter:blur(32px);-webkit-backdrop-filter:blur(32px);border:1px solid rgba(59,184,232,0.15);border-radius:24px;padding:28px;min-width:340px;max-width:400px;box-shadow:0 24px 80px rgba(0,0,0,0.7),0 0 40px rgba(59,184,232,0.08);animation:popIn .3s cubic-bezier(.16,1,.3,1);font-family:Inter,system-ui,sans-serif';
  if(!document.getElementById('pop-anim')){const st=document.createElement('style');st.id='pop-anim';st.textContent='@keyframes popIn{from{opacity:0;transform:translate(-50%,-50%) scale(0.9)}to{opacity:1;transform:translate(-50%,-50%) scale(1)}}';document.head.appendChild(st);}
  pop.innerHTML=`
    <button onclick="close3dPopup()" style="position:absolute;top:14px;right:14px;background:rgba(255,255,255,0.06);border:none;color:#7ea8cc;cursor:pointer;width:32px;height:32px;border-radius:50%;font-size:16px;display:flex;align-items:center;justify-content:center;transition:background .15s">✕</button>
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:4px">
      <div style="width:12px;height:12px;border-radius:50%;background:${f.al.cl};box-shadow:0 0 8px ${f.al.cl}"></div>
      <span style="font-size:24px;font-weight:800;color:#fff;letter-spacing:-.5px">${f.id}</span>
    </div>
    <div style="font-size:13px;color:#7ea8cc;margin-bottom:16px">${f.al.n} · ${f.ac.n} · ${f.rg}</div>
    ${em?`<div style="padding:10px 14px;background:rgba(255,64,88,.08);border:1px solid rgba(255,64,88,.15);border-radius:14px;margin-bottom:16px;color:#ff4058;font-size:13px;font-weight:700;display:flex;align-items:center;gap:8px"><span style="font-size:18px">⚠</span>EMERGENCY SQUAWK ${f.sq}</div>`:''}
    <div style="display:flex;justify-content:space-between;align-items:center;padding:18px 0;border-top:1px solid rgba(255,255,255,.06);border-bottom:1px solid rgba(255,255,255,.06)">
      <div style="text-align:center"><div style="font-family:'JetBrains Mono',monospace;font-size:26px;font-weight:800;color:#fff">${f.o.c}</div><div style="font-size:11px;color:#5a7a98;margin-top:2px">${f.o.ci}</div></div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:6px">
        <div style="color:#3bb8e8;font-size:16px">✈</div>
        <div style="width:70px;height:3px;background:rgba(255,255,255,.06);border-radius:3px;overflow:hidden"><div style="width:${f.pg}%;height:100%;background:linear-gradient(90deg,#3bb8e8,#5cc8f0);border-radius:3px"></div></div>
        <div style="font-family:'JetBrains Mono',monospace;font-size:10px;color:#5a7a98">${f.pg}%</div>
      </div>
      <div style="text-align:center"><div style="font-family:'JetBrains Mono',monospace;font-size:26px;font-weight:800;color:#fff">${f.d.c}</div><div style="font-size:11px;color:#5a7a98;margin-top:2px">${f.d.ci}</div></div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:16px">
      <div style="background:rgba(0,0,0,.3);padding:14px;border-radius:14px"><div style="font-size:9px;color:#4a5e78;text-transform:uppercase;letter-spacing:.5px">Altitude</div><div style="font-family:'JetBrains Mono',monospace;font-size:18px;font-weight:700;color:#5cc8f0;margin-top:5px">FL${~~(f.alt/100)}</div></div>
      <div style="background:rgba(0,0,0,.3);padding:14px;border-radius:14px"><div style="font-size:9px;color:#4a5e78;text-transform:uppercase;letter-spacing:.5px">Speed</div><div style="font-family:'JetBrains Mono',monospace;font-size:18px;font-weight:700;color:#fff;margin-top:5px">${f.spd} <span style="font-size:11px;color:#5a7a98">kts</span></div></div>
      <div style="background:rgba(0,0,0,.3);padding:14px;border-radius:14px"><div style="font-size:9px;color:#4a5e78;text-transform:uppercase;letter-spacing:.5px">Status</div><div style="font-size:14px;font-weight:700;color:${f.st==='En Route'?'#5cc8f0':'#7ea8cc'};margin-top:5px">${f.st}</div></div>
      <div style="background:rgba(0,0,0,.3);padding:14px;border-radius:14px"><div style="font-size:9px;color:#4a5e78;text-transform:uppercase;letter-spacing:.5px">Heading</div><div style="font-family:'JetBrains Mono',monospace;font-size:18px;font-weight:700;color:#fff;margin-top:5px">${f.hd}°</div></div>
    </div>
    <button onclick="showDetail('${f.id}');close3dPopup()" style="width:100%;margin-top:16px;padding:14px;background:linear-gradient(135deg,rgba(59,184,232,.12),rgba(92,200,240,.08));border:1px solid rgba(59,184,232,.2);border-radius:14px;color:#3bb8e8;font-family:Inter;font-size:14px;font-weight:700;cursor:pointer;transition:all .15s;letter-spacing:-.2px">View Full Details →</button>
  `;
  pop.style.display='block';
}
window.close3dPopup=function(){const p=document.getElementById('globe-popup');if(p)p.style.display='none';sf=null;render3d();};

function render3d(){
  if(currentBase!=='3d'||!globe3d)return;
  globe3d.customLayerData(getVisibleFlights());
  if(sf){
    globe3d.arcsData([{startLat:sf.o.la,startLng:sf.o.ln,endLat:sf.d.la,endLng:sf.d.ln}]);
  }else{
    globe3d.arcsData([]);
  }
}

// Splash screen progress + init
const splashBar=document.getElementById('splash-bar');
if(splashBar)splashBar.style.width='30%';
setTimeout(()=>{if(splashBar)splashBar.style.width='60%';},300);
setTimeout(()=>{
  if(splashBar)splashBar.style.width='90%';
  initGlobe3d();
},600);
setTimeout(()=>{
  if(splashBar)splashBar.style.width='100%';
  setTimeout(()=>{
    const splash=document.getElementById('splash');
    if(splash){splash.style.opacity='0';splash.style.visibility='hidden';setTimeout(()=>splash.remove(),600);}
  },400);
},1800);
// Sync 3D with flight position updates
setInterval(render3d,5100);
