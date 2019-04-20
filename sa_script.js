window.onload = init;

function init() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("Thank You");
      return false;
   }
   
}