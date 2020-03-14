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

MENU.addEventListener('click',(event) =>{
    MENU.querySelectorAll('a').forEach(el =>  el.classList.remove('active'));
    event.target.classList.add('active');

});

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
    for(let i=0; i<portfolios.length; i++){
    spisok[i]=portfolios[i].src;
    portfolios[i].remove();
    }


    function draw(j){
    let img=document.createElement('img');
    img.src=spisok[j];
    img.id ='active_off';
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


let subject;
BUTTON.addEventListener('click',() =>{
    if (document.getElementById('forma_1').value.toString()=='' || document.getElementById('forma_2').value.toString().search('@')==-1) return;
    subject=document.getElementById('forma_3').value.toString();
   
    if(subject!=''){
        document.getElementById('result_3').innerText='Тема: '+ subject;
    } else {
        document.getElementById('result_3').innerText='Без темы';
    }
   
    subject=document.getElementById('forma_4').value.toString();
   

    
    
    if(subject!=''){
        document.getElementById('result_4').innerText='Описание: '+ subject;
        } else {
        document.getElementById('result_4').innerText='Без описания';
        }
    
    
    document.getElementById('message-block').classList.remove('hidden');
    
 
 });
 CLOSE_BUTTON.addEventListener('click',() =>{
     document.getElementById('message-block').classList.add('hidden');
     document.getElementById('forma_1').value='';
     document.getElementById('forma_2').value='';
     document.getElementById('forma_3').value='';
     document.getElementById('forma_4').value='';

   }); 