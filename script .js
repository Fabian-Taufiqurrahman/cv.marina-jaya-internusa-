(function(){
  var cur=document.body.getAttribute("data-page");
  document.querySelectorAll("nav a").forEach(function(a){
    if(a.getAttribute("href")===cur)a.setAttribute("aria-current","page");
  });
  var f=document.getElementById("f");
  if(!f)return;
  var m=document.getElementById("m"),d=document.getElementById("d"),l=document.getElementById("l"),k=document.getElementById("k"),out=document.getElementById("out"),wa=document.getElementById("wa"),cp=document.getElementById("cp");
  function build(){
    var t="Halo CV. Marina Jaya Internusa, saya ingin meminta penawaran tali tambang.\n";
    t+="Material: "+(m.value||"mohon disarankan")+"\n";
    t+="Diameter: "+(d.value?d.value+" mm":"-")+"\n";
    t+="Panjang: "+(l.value?l.value+" m":"-")+"\n";
    t+="Keperluan: "+(k.value||"-")+"\nTerima kasih.";
    out.textContent=t;
    wa.href="https://wa.me/6285732186757?text="+encodeURIComponent(t);
    return t;
  }
  ["input","change"].forEach(function(ev){f.addEventListener(ev,build)});
  build();
  cp.addEventListener("click",function(){
    var t=build();
    function ok(){cp.textContent="Pesan tersalin";setTimeout(function(){cp.textContent="Salin pesan"},1800)}
    function fail(){cp.textContent="Gagal menyalin, blok teks secara manual"}
    try{navigator.clipboard.writeText(t).then(ok,fail)}catch(e){fail()}
  });
})();
