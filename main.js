(function(){
  // aktywna zakładka w menu
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll('[data-nav]').forEach(a=>{
    if(a.getAttribute('href') === path) a.classList.add('active');
  });

  // kopiowanie numeru / maila
  document.querySelectorAll('[data-copy]').forEach(btn=>{
    btn.addEventListener('click', async () => {
      const val = btn.getAttribute('data-copy');
      try{
        await navigator.clipboard.writeText(val);
        const old = btn.textContent;
        btn.textContent = "Skopiowano ✓";
        setTimeout(()=>btn.textContent=old, 1200);
      }catch(e){}
    });
  });
})();
