'use strict'

window.onload = function() {
  new fullpage('#full-page', {
    afterLoad: function(origin, destination) {
      if(destination.index == 2){
        document.querySelector(".page3__people").classList.add("people-move")
      } else if(destination.index == 3){
        document.querySelector(".present__img").classList.add("present-move")        
      } else if(destination.index == 4){
        document.querySelector(".live__img").classList.add("live-move")      
      } else if (destination.index == 5){
        document.querySelector(".Bmart__img").classList.add("Bmart-move")
      } else if (destination.index == 6){
        document.querySelector(".pay__img").classList.add("pay-move")
      }
    },
  })
};

