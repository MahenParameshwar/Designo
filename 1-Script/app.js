window.onload = ()=>{
    const menuBtn = document.querySelector('.menu-btn')
    const mobileNavBlock = document.querySelector('.mobile-nav-block');
    const mobileNavList = document.querySelector('.mobile-nav-list');
    //Toggle Function
    menuBtn.addEventListener("click",()=>{
        menuBtn.classList.toggle('open')
        mobileNavBlock.classList.toggle('active')
        mobileNavList.classList.toggle('active')
    })

    const designCardArr = [...document.querySelectorAll('.design-card')];
    designCardArr.forEach(card=>{
        card.addEventListener('mouseenter',(e)=>e.target.classList.add('active'));
        card.addEventListener('mouseleave',(e)=>e.target.classList.remove('active'));

    })
    // designCardArr.foreach((card)=>{
    //     card.addEventListener('click',()=>console.log(e.target))
    // })
    

    
    

}