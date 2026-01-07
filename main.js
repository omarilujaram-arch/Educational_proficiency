    const p=document.getElementById('particles');
        for(let i=0;i<25;i++){const d=document.createElement('div');d.className='particle';d.style.left=Math.random()*100+'%';d.style.animationDelay=Math.random()*18+'s';d.style.animationDuration=(14+Math.random()*8)+'s';p.appendChild(d)}
        
        // Navbar scroll
        const nav=document.getElementById('navbar');
        window.addEventListener('scroll',()=>{nav.classList.toggle('scrolled',window.scrollY>50);document.getElementById('scrollTop').classList.toggle('vis',window.scrollY>400)});
        
        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',e=>{e.preventDefault();document.querySelector(a.getAttribute('href'))?.scrollIntoView({behavior:'smooth'})})});
        
        // Modals
        function openModal(id){document.getElementById(id).classList.add('act');document.body.style.overflow='hidden'}
        function closeModal(id){document.getElementById(id).classList.remove('act');document.body.style.overflow=''}
        document.querySelectorAll('.modal').forEach(m=>{m.addEventListener('click',e=>{if(e.target===m)closeModal(m.id)})});
        
        // Animations on scroll
        const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.style.opacity='1';e.target.style.transform='translateY(0)'}})},{threshold:0.1});
        document.querySelectorAll('.f-card,.p-card,.s-card,.stat').forEach(el=>{el.style.opacity='0';el.style.transform='translateY(30px)';el.style.transition='all .6s cubic-bezier(.4,0,.2,1)';obs.observe(el)});
   