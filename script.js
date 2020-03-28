const burger = document.querySelector('#burger');
const MENU = document.getElementById('menu');
const SLIDER = document.getElementById('slider_id');
const SLIDER_DIV = document.getElementById('slider_div');
const BUTTON_LEFT = document.getElementById('button_left');
const BUTTON_RIGHT = document.getElementById('button_right');
const IPHONE_VERTICAL_ON = document.getElementById('iphone_vertical_on');
const IPHONE_VERTICAL_OFF = document.getElementById('iphone_vertical_off');
const IPHONE_HORIZONTAL_ON = document.getElementById('iphone_horizontal_on');
const IPHONE_HORIZONTAL_OFF = document.getElementById('iphone_horizontal_off');
const IPHONE_VERTICAL_SLIDE_2_ON = document.getElementById('iphone_vertical_slide_2_on');
const IPHONE_VERTICAL_SLIDE_2_OFF = document.getElementById('iphone_vertical_slide_2_off');
const KNOPKA = document.getElementById('menu_portfolio');
const PORTFOLIO = document.getElementById('portfolio');
const BUTTON = document.getElementById('forma_5');
const CLOSE_BUTTON = document.getElementById('close-btn');

document.addEventListener('scroll',onScroll);
function onScroll(event){
    const curPos = window.scrollY;
    //console.log(curPos);
    let a1=0;
    document.querySelectorAll('body>.page-wrapper>#wrapper>a').forEach ((el)=>{
              
    
       if ( a1 <= curPos-150 && curPos-150 < (el.offsetTop+a1)) {
        
                MENU.querySelectorAll('a').forEach(a => {
              
                    a.classList.remove('active');
                if (a.getAttribute('href').substring(1)  === el.getAttribute('id')){            
                    a.classList.add('active');
                }
                });
          
       }
       if ( curPos<300 ) {
        
                MENU.querySelectorAll('a').forEach(a => {
                
                    a.classList.remove('active');
                if (a.getAttribute('href').substring(1)  === 'home'){            
                    a.classList.add('active');
                }
                });
          
       }


       a1=el.offsetTop;
             
   
   
    });


}    









IPHONE_VERTICAL_ON.addEventListener('click',(event) =>{
    
        SLIDER.querySelectorAll('#iphone_vertical').forEach(el =>  el.classList.remove('iphone_vertical_on'));
        SLIDER.querySelectorAll('#iphone_vertical').forEach(el =>  el.classList.add('iphone_vertical_off'));


});

IPHONE_VERTICAL_OFF.addEventListener('click',(event) =>{
    
    SLIDER.querySelectorAll('#iphone_vertical').forEach(el =>  el.classList.remove('iphone_vertical_off'));
    SLIDER.querySelectorAll('#iphone_vertical').forEach(el =>  el.classList.add('iphone_vertical_on'));


});

IPHONE_HORIZONTAL_ON.addEventListener('click',(event) =>{
    
    SLIDER.querySelectorAll('#iphone_horizontal').forEach(el =>  el.classList.remove('iphone_horizontal_on'));
    SLIDER.querySelectorAll('#iphone_horizontal').forEach(el =>  el.classList.add('iphone_horizontal_off'));


});

IPHONE_HORIZONTAL_OFF.addEventListener('click',(event) =>{

SLIDER.querySelectorAll('#iphone_horizontal').forEach(el =>  el.classList.remove('iphone_horizontal_off'));
SLIDER.querySelectorAll('#iphone_horizontal').forEach(el =>  el.classList.add('iphone_horizontal_on'));


});

IPHONE_VERTICAL_SLIDE_2_ON.addEventListener('click',(event) =>{
    
    SLIDER.querySelectorAll('#iphone_vertical_slide_2').forEach(el =>  el.classList.remove('iphone_vertical_slide_2_on'));
    SLIDER.querySelectorAll('#iphone_vertical_slide_2').forEach(el =>  el.classList.add('iphone_vertical_slide_2_off'));


});

IPHONE_VERTICAL_SLIDE_2_OFF.addEventListener('click',(event) =>{

SLIDER.querySelectorAll('#iphone_vertical_slide_2').forEach(el =>  el.classList.remove('iphone_vertical_slide_2_off'));
SLIDER.querySelectorAll('#iphone_vertical_slide_2').forEach(el =>  el.classList.add('iphone_vertical_slide_2_on'));


});




BUTTON_RIGHT.addEventListener('click',(event) =>{
    if ( SLIDER_DIV.getAttribute("class") =="slider_1"){
    
        SLIDER.querySelectorAll('div').forEach(el =>  el.classList.remove('slider_1'));
        SLIDER.querySelectorAll('div').forEach(el =>  el.classList.add('slider_2'));
    } else {
        SLIDER.querySelectorAll('div').forEach(el =>  el.classList.remove('slider_2'));
        SLIDER.querySelectorAll('div').forEach(el =>  el.classList.add('slider_1')); 
    };

});


BUTTON_LEFT.addEventListener('click',(event) =>{
    if ( SLIDER_DIV.getAttribute("class") =="slider_1"){
    
        SLIDER.querySelectorAll('div').forEach(el =>  el.classList.remove('slider_1'));
        SLIDER.querySelectorAll('div').forEach(el =>  el.classList.add('slider_2'));
    } else {
        SLIDER.querySelectorAll('div').forEach(el =>  el.classList.remove('slider_2'));
        SLIDER.querySelectorAll('div').forEach(el =>  el.classList.add('slider_1')); 
    };

});




KNOPKA.addEventListener('click',(event) =>{
    KNOPKA.querySelectorAll('p').forEach(el =>  el.classList.remove('knopka_on'));
    event.target.classList.add('knopka_on');
    
    let portfolios = document.querySelectorAll('.Project');
    let spisok =[];
    let idd=[];
    for(let i=0; i<portfolios.length; i++){
    spisok[i]=portfolios[i].src;
    idd[i]=portfolios[i].id;
    portfolios[i].remove();
    }


    function draw(j){
    let img=document.createElement('img');
    img.src=spisok[j];
    img.id =idd[j];
    img.classList.add('Project');
    
    document.querySelector('#portfolio').appendChild(img);
    }

    draw(11);
    for(let i=0; i<spisok.length-1;i++){
    draw(i);
    }
  

});

PORTFOLIO.addEventListener('click',(event) =>{
    PORTFOLIO.querySelectorAll('img').forEach(el =>  el.id ='active_off');
   if (event.target.id !="portfolio")    event.target.id='active_on';
    
});
function shomModalWindow(){
    const modalWrapper = document.createElement('div');
    modalWrapper.id = 'modal-wrapper';
    const modalWindow = document.createElement('div');
    modalWindow.id = 'modal-window';
    modalWindow.style.top = `${window.pageYOffset + document.documentElement.clientHeight / 2 - 100}px`;  
    modalWindow.style.left = `calc (100% - 150px / 2)`;  
    
    modalWindow.insertAdjacentHTML("beforeend", `<p>Письмо отправлено</p>`);
    if (document.getElementById('subject-input').value){
      if (document.getElementById('subject-input').value.length > 50) {
        modalWindow.insertAdjacentHTML("beforeend", `<p>Тема: ${document.getElementById('subject-input').value.substring(0,50)}...</p>`);
      } else{
        modalWindow.insertAdjacentHTML("beforeend", `<p>Тема: ${document.getElementById('subject-input').value}</p>`);
      }
    } else {
      modalWindow.insertAdjacentHTML("beforeend", `<p>Без темы</p>`);
    }
    
    if (document.getElementById('textarea').value){
      if (document.getElementById('textarea').value.length > 50){
        modalWindow.insertAdjacentHTML("beforeend", `<p>Описание: ${document.getElementById('textarea').value.substring(0,50)}...</p>`);
      } else{
        modalWindow.insertAdjacentHTML("beforeend", `<p>Описание: ${document.getElementById('textarea').value}</p>`);
      }
    } else {
      modalWindow.insertAdjacentHTML("beforeend", `<p>Без описания</p>`);
    }
    
    const closeBtn = document.createElement('button');
    closeBtn.id = 'close-btn';
    closeBtn.innerText = 'Ok';
    modalWindow.appendChild(closeBtn);
  
    modalWrapper.appendChild(modalWindow);
    document.querySelector('.page-wrapper').appendChild(modalWrapper);
    closeBtn.addEventListener('click', function(){
      modalWrapper.remove();
    })
  }
  
  document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault();
    shomModalWindow();
    e.currentTarget.reset();
  })
  
  document.addEventListener('scroll', function(ev) {
    try{
      let targetClass = document.elementFromPoint(document.documentElement.clientWidth - 20, document.documentElement.clientHeight / 2).closest('section').classList.value;
      navItems.forEach(element => {
        element.classList.remove('navigation__button_active');
      });
      navItemsSidebar.forEach(element => {
        element.classList.remove('navigation__button_active');
      });
      
      let activeBtn = navMenu.querySelector(`.${targetClass}-btn`);
      activeBtn.classList.add('navigation__button_active');
      let activeBtnSide = sidebar.querySelector(`.${targetClass}-btn`);
      activeBtnSide.classList.add('navigation__button_active');
    }
    catch{
      return;
    }
    localStorage.setItem('scrollPosition', document.documentElement.scrollTop);
  });
  
  
  
  document.documentElement.scrollTop = localStorage.getItem('scrollPosition') || 0;
  
  let sidebarActive = false;
  let burgerEnable = true;
  function hideSidebar(){
    document.querySelector('.page-wrapper').classList.remove('fixed');
    sidebar.classList.remove('to-left');
    sidebar.style.display = 'none';
    sidebarActive = false;
    document.querySelector('#head-logo').style.opacity = '1';
    burgerEnable = true;
  }
  
  burger.addEventListener('click', function(ev){
    if (burgerEnable){
      burgerEnable = false;
      sidebar.removeEventListener('animationend', hideSidebar);
      burger.classList.toggle('rotate-burger');
      if(!sidebarActive){
        document.querySelector('#head-logo').style.opacity = '0';
        sidebar.style.display = 'flex';
        sidebar.classList.add('from-left');
        sidebar.addEventListener('animationend', function(){
          sidebar.classList.remove('from-left');
          sidebarActive = true;
          burgerEnable = true;
        });
      } else{
        sidebar.classList.add('to-left');
        sidebar.addEventListener('animationend', hideSidebar);
      }
    }
  });
  
  document.querySelector('.sidebar__links-block').addEventListener('click', function(){
    burger.classList.toggle('rotate-burger');
    sidebarActive = false;
    sidebar.classList.add('to-left');
    sidebar.addEventListener('animationend', hideSidebar);
  });



