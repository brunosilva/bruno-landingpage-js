let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos) {
    document.querySelector(".mobile-only").style.top = "0";
  } else {
    document.querySelector(".mobile-only").style.top = "-64px";
  }
  prevScrollpos = currentScrollPos;
}

function isMobile(){
  var device;
  if (screen.width < 640 || screen.height < 480) {
    device = "smartphone";
    return device;
  } else if (screen.width < 1024 || screen.height < 768) {
    device = "tablet";
    return device;
  } else {
    device = "desktop";
    return device; 
  }
};

$(document).ready(function () {
  $('.carousel').slick({
    slidesToShow: 4,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    nav: true,
    autoplay:true,
    slidesToScroll: 1,
  });
  
  if(isMobile() == "smartphone" || isMobile() == "tablet"){
    var element = document.querySelector("#menu");
    var elementItem = document.querySelector("#menu > ul.listMenu");
    elementItem.style.display = "none";

    hamburguer = newElement("hamburguer","fas fa-bars fa-2x","i");
    hamburguer.setAttribute("id", "menuHamburguer");
    
    element.appendChild(hamburguer);

    console.log(element);
    // hamburguer.addEventListener("click", {
    //   console.log("click ok no menu hamburguer");
    // });
  };

});