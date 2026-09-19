
document.addEventListener('DOMContentLoaded',()=>{
 const t=document.querySelector('.mobile-toggle'),n=document.querySelector('nav');
 if(t&&n)t.onclick=()=>n.classList.toggle('open');
 document.querySelectorAll('.faq-q').forEach(q=>q.onclick=()=>q.parentElement.classList.toggle('open'));
 const fc=document.querySelector('.float-contact'),fcb=document.querySelector('.float-contact button');
 if(fc&&fcb)fcb.onclick=()=>fc.classList.toggle('open');
 document.querySelectorAll('form[data-demo]').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();const b=f.querySelector('button[type=submit]');if(b){b.disabled=true;b.textContent='Submitted';}const msg=f.querySelector('.demo-success');if(msg)msg.style.display='block';}));
 const finder=document.querySelector('[data-finder]');
 if(finder){
  const data={
   residential:{title:'Residential Solutions',copy:'Connectivity, communication and security support for the home.',chips:['Internet & Connectivity','TV & Home Phone','Mobility','Home Security','CCTV','Alarm Systems']},
   business:{title:'Business Solutions',copy:'Technology, payments, security and operational support for growing businesses.',chips:['Business Internet','Business Mobility','Voice Solutions','Security & CCTV','Access Control','POS & Payments','Operational Consulting']},
   drive:{title:'NEXA Drive',copy:'Flexible mobility for personal, corporate and changing transportation needs.',chips:['Short-Term Rentals','Long-Term Mobility','Corporate Mobility','Fleet Support','Mobility Partnerships']}
  };
  const tabs=finder.querySelectorAll('.tab'),title=finder.querySelector('[data-title]'),copy=finder.querySelector('[data-copy]'),chips=finder.querySelector('[data-chips]');
  tabs.forEach(tab=>tab.onclick=()=>{tabs.forEach(x=>x.classList.remove('active'));tab.classList.add('active');const d=data[tab.dataset.key];title.textContent=d.title;copy.textContent=d.copy;chips.innerHTML=d.chips.map(x=>`<span class="chip">${x}</span>`).join('')});
 }
});
