(function(window){
  // is there a "watch from beginning" button?
  if(document.getElementById("from-beginning-btn") !== null) {
    // yes, there is.  Remove the option to purchase it.
    var buyBoxen = document.getElementsByClassName("buy-box");
    for(var x=0; x < buyBoxen.length; x++) {
      buyBoxen[x].style.display = "none";
    }
  }
})(window);
