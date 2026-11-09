var names=["beranda","material","konstruksi","pemakaian","cara-pesan","panduan","kontak"];
var titles={beranda:"Beranda",material:"Material",konstruksi:"Konstruksi",pemakaian:"Pemakaian","cara-pesan":"Cara pesan",panduan:"Panduan ukuran",kontak:"Kontak"};
function route(){
  var h=(location.hash||"").slice(1);if(names.indexOf(h)<0)h="beranda";
  names.forEach(function(n){document.getElementById("p-"+n).classList.toggle("on",n===h)});
  document.querySelectorAll("nav a").forEach(function(a){
    if(a.getAttribute("href")==="#"+h)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current");
  });
  document.title=(h==="beranda"?"":titles[h]+" – ")+"CV. Marina Jaya Internusa";
  window.scrollTo(0,0);
}
window.addEventListener("hashchange",route);route();
var el={m:m,d:d,l:l,k:k,out:out};
function build(){
  var t="Halo CV. Marina Jaya Internusa, saya ingin meminta penawaran tali tambang.\n";
  t+="Material: "+(el.m.value||"mohon disarankan")+"\n";
  t+="Diameter: "+(el.d.value?el.d.value+" mm":"-")+"\n";
  t+="Panjang: "+(el.l.value?el.l.value+" m":"-")+"\n";
  t+="Keperluan: "+(el.k.value||"-")+"\nTerima kasih.";
  el.out.textContent=t;document.getElementById("wa").href="https://wa.me/6285732186757?text="+encodeURIComponent(t);return t;
}
["input","change"].forEach(function(ev){document.getElementById("f").addEventListener(ev,build)});build();
document.getElementById("cp").addEventListener("click",function(){
  var b=this,t=build();
  function ok(){b.textContent="Pesan tersalin";setTimeout(function(){b.textContent="Salin pesan"},1800)}
  try{navigator.clipboard.writeText(t).then(ok,function(){b.textContent="Gagal menyalin, blok teks secara manual"})}
  catch(e){b.textContent="Gagal menyalin, blok teks secara manual"}
});
