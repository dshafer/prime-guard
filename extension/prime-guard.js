(function(window){
  var removeBuyBox = function() {
    var buyBoxen = document.getElementsByClassName("buy-box");
    for(var x=0; x < buyBoxen.length; x++) {
      buyBoxen[x].style.display = "none";
    }
  }

  // if logged in - is there a "watch from beginning" button?
  var doRemove = document.getElementById("from-beginning-btn") !== null;

  // if not logged in - is there a "watch for $0.00 with Prime" banner?
  if (!doRemove) {
    var dividerTitleDivs = document.getElementsByClassName("divider-title");
    for(var x=0; x < dividerTitleDivs.length; x++) {
      doRemove |= dividerTitleDivs[x].innerText === "Watch for $0.00 with Prime";
    }
  }

  if (doRemove) {
    removeBuyBox();
  }
})(window);
