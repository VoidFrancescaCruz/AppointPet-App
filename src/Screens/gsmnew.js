// March 1, 2023


//boolean variables
var fade_state = true;
var homeShow = false;
var headerShow = false;
var ginN = false;

//element per class
// var child2 =document.getElementsByClassName("child2");
// var homefade = document.getElementsByClassName("homefade");

// var h = document.getElementByClass
//Buttons
var yes_btn = document.getElementById("yes_btn");
var no_btn = document.getElementById('no_btn');

//Texts
var spirit_text = document.getElementById('spirit_text');
var one_text = document.getElementById('one_text');
var confirm_text = document.getElementById('confirm_text');
var agree_text = document.getElementById('agree_text');
var one_text_stay = document.getElementById('one_text_stay');


var text1 = document.getElementById('text1');

var text2 = document.getElementById('text2');

//images
var ginLogo = document.getElementById('ginLogo');
var people = document.getElementById('people');
var gin = document.getElementById('gin1');

//content
var home_content = document.getElementById('home_content');
var gsm_slider = document.getElementById('gsm_slider');

//header
var header = document.getElementById('head_white');
var foot = document.getElementById('foot');

//column
var col1 = document.getElementById('col1');


   if (fade_state === true) {
        //trigers animation
         yes_btn.style.display = "block";
       ginLogo.style.animation = "fade-out_up3 2s forwards";
             
      spirit_text.style.animation = "fade-out_up2 2s forwards";
                    
       one_text.style.animation = "fade-out_up2 2s forwards";
        
       confirm_text.style.animation = "fade-out_up2 2s forwards";
        
        yes_btn.style.animation = "fade-out 2s forwards";
        
        no_btn.style.animation = "fade-out_up2 2s forwards";
        
        agree_text.style.animation = "fade-out_up2 2s forwards";
        
        one_text_stay.style.animation = "oneTxtShow 2s forwards";
        gsm_slider.style.opacity = "0%";
         
        //sets fade_state
           fade_state = false;
}

//new scroll animation
window.addEventListener("scroll", (event) => {
    
   let scroll = this.scrollY;
   console.log(scroll);
    //250-350
   if (scroll < 250 && scroll >= 180 && fade_state == false) {
       
         one_text_stay.style.animation = "oneTxtHide 2s forwards";
         fade_state = true;
        yes_btn.style.display = "none";
        one_text_stay.style.display = "none";
        home_content.style.display = "none";

   }
    else if (scroll >= 190 && fade_state == true) {
        home_content.style.display = "block";
        home_content.style.animation = "homeShow 2s forwards";
        header.style.animation = "homeShow 2s forwards";
        homeShow = true;
        headerShow = true;
      gsm_slider.style.opacity = "100%";
   }
   
   else if (homeShow === true && headerShow == true && scroll <=222) {
     header.style.animation = "homeHide 0.5s forwards";
    //  foot.style.animation = "homeHide 0.5s forwards";
             headerShow = false;

   }
   else if (homeShow === true && headerShow == false && scroll <=222) {
      home_content.style.animation = "homeHide2 2s forwards";
      homeShow = false;
           gsm_slider.style.opacity = "0%";

   }
   
    else if (fade_state === true && homeShow === false && scroll <=150) {
    one_text_stay.style.display = "block";
      one_text_stay.style.animation = "oneTxtShow 2s forwards";
      fade_state = false;

   }
   else if (scroll >= 251 && fade_state == true)
   {
    //   home_content.style.animation = "oneTxtShow 2s forwards";
   }
  


});



  
//  jQuery(function($) {
//   $(".home2, .home1").mouseover(function(){
//     $(".child3").css("opacity", "100%");
//   });
//   $(".home2, .home1").mouseout(function(){
//     $(".child3").css("opacity", "0%");
//   });
// });
 
  



//hover encodeURIComponent
function bigImg(x) {
  x.style.height = "64px";
  x.style.width = "64px";
}

function normalImg(x) {
  x.style.height = "32px";
  x.style.width = "32px";
}
