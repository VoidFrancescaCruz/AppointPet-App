// March 2, 2023

// disable one ginebra show text upon scrolling up again


//boolean variables
var fade_state = true;
var homeShow = false;
var headerShow = false;
var ginN = false;

//Buttons
var yes_btn = document.getElementById("yes_btn");
var no_btn = document.getElementById('no_btn');

//Texts
var spirit_text = document.getElementById('spirit_text');
var one_text = document.getElementById('one_text');
var confirm_text = document.getElementById('confirm_text');
var agree_text = document.getElementById('agree_text');
var one_text_stay = document.getElementById('one_text_stay');

//images
var ginLogo = document.getElementById('ginLogo');

//content
var home_content = document.getElementById('home_content');
var gsm_slider = document.getElementById('gsm_slider');

//header
var header = document.getElementById('head_white');

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
        // gsm_slider.style.opacity = "0%";
         
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

   }
    else if (scroll >= 190 && fade_state == true) {
        home_content.style.animation = "homeShow 2s forwards";
        header.style.animation = "homeShow 2s forwards";
        homeShow = true;
        headerShow = true;
        fade_state = false;
   }
   

  
      else if (scroll >= 190 && fade_state == false) {
        // home_content.style.display = "block";
        home_content.style.opacity = "100%";
        header.style.opacity = "100%";
        homeShow = true;
        headerShow = true;
    //   gsm_slider.style.opacity = "100%";
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
