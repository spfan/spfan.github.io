
function location(parent, child) {
   var vparent = document.getElementById(parent),
           childArray = getChild(vparent, child);
   var imgWidth = childArray[0].offsetWidth;
  var cols = Math.floor(document.documentElement.clientWidth / imgWidth); // 计算每行能容纳多少列
   vparent.style.cssText = "width : " + imgWidth * cols + "px;margin:0 auto;";

    var boxHeightArray = [];
    for (var i = 0; i < childArray.length; i++) {
      if (i < cols) {
          boxHeightArray[i] = childArray[i].offsetHeight;
      } else {
           var minHeight = Math.min.apply(null, boxHeightArray);
          var minIndex = getIndex(boxHeightArray, minHeight);

           childArray[i].style.position = "absolute";
           childArray[i].style.top = minHeight + "px";
           childArray[i].style.left = childArray[minIndex].offsetLeft + "px";
           boxHeightArray[minIndex] = boxHeightArray[minIndex] + childArray[i].offsetHeight;
        }
    }
}

function getIndex(boxHeightArray, mingHeight) {
    for (var i = 0; i < boxHeightArray.length; i++) {
        if (boxHeightArray[i] == mingHeight) {
            return i;
        }
    }
}

function getChild(parent, child) {
    var contentArray = [];
    var allcontent = parent.getElementsByTagName("*");
    for (var i = 0; i < allcontent.length; i++) {
        if (allcontent[i].className == child) {
            contentArray.push(allcontent[i]);
        }
    }
    return contentArray;
}

module.exports = location;