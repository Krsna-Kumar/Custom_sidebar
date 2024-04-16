/*===== EXPANDER MENU  =====*/ 
const showMenu = (toggleId, navbarId, bodyId)=>{
  const toggle = document.getElementById(toggleId),
    navbar = document.getElementById(navbarId),
    bodypadding = document.getElementById(bodyId)

  if(toggle && navbar){
    toggle.addEventListener('click', ()=>{
      navbar.classList.toggle('expander')
      bodypadding.classList.toggle('body-pd')

      // Collapse all submenu items when navbar is toggled
      const collapseMenus = document.querySelectorAll('.collapse__menu');
      collapseMenus.forEach(menu => {
        menu.classList.remove('showCollapse');
        const rotate = menu.previousElementSibling;
        rotate.classList.remove('rotate');
      });
    })
  }
}
showMenu('nav-toggle','navbar','body-pd')

/*===== LINK ACTIVE  =====*/ 
const linkColor = document.querySelectorAll('.nav__link')
function colorLink(){
  linkColor.forEach(l=> l.classList.remove('active'))
  this.classList.add('active')
}
linkColor.forEach(l=> l.addEventListener('click', colorLink))

/*===== COLLAPSE MENU  =====*/ 
const linkCollapse = document.getElementsByClassName('collapse__link')
var i

for(i=0;i<linkCollapse.length;i++){
  linkCollapse[i].addEventListener('click', function(){
  
    const collapseMenu = this.nextElementSibling
    collapseMenu.classList.toggle('showCollapse')

    const rotate = collapseMenu.previousElementSibling
    rotate.classList.toggle('rotate')
  })
}

/*======= PROFILE DROPDOWN ======*/  
let subMenu = document.getElementById('submenu');

function toggleProfile()
{
  subMenu.classList.toggle("open");
}
