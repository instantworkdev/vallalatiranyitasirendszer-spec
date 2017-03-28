(function() {
  var menuitems = document.querySelectorAll('.has-sub');

  for (var i = 0, len = menuitems.length; i < len; i++) {
    var menuitem = menuitems[i];
    menuitem.addEventListener("click", tapOrClick, false);
    //menuitem.addEventListener("touchend", tapOrClick, false);  /* doesn't seem to be needed for touch */  

    function tapOrClick(event) {
      //handle tap or click.

      if (this.classList.contains('active')) {
        this.classList.remove('active');
      } else {
        /* forEach not working in safari
			    menuitems.forEach(function(element) {
                    element.classList.remove('active');
                });
				*/
        for (var ii = 0, len = menuitems.length; ii < len; ii++) {
          menuitems[ii].classList.remove('active');
        }

        this.classList.add('active');
      }
      event.preventDefault();
      return false;
    }
  }
}());