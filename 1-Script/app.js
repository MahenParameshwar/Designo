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

}