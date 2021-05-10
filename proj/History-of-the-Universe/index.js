withinviewport.defaults.sides = 'left right';

$(document).ready(function(){
  //Make sure each segment has the amount of lines specified by the number
  curNumLines = 1;
  $(".segment").each(function(){
    numlines = $(this).data("lines");
    numlinesInt = parseInt(numlines);
    curNumLines += numlinesInt;
    point = "<div class=\"point\"></div>";
    
    $(this).append(point);
    for(var i=0;i<numlines;i++){
      $(this).append("<div class=\"line\"></div>")
    }
    $(this).append(point);
  })

  var doViewportDet = true;
  $(document).scroll( function() {
    doViewportDet = true;
  });
  var prevdy = 120;
  $(document).bind('mousewheel', function(e){
    var dx = e.originalEvent.wheelDeltaX
    var dy = e.originalEvent.wheelDeltaY;
    var doreturn = (Math.abs(dy) != prevdy | e.originalEvent.shiftKey)
    prevdy = Math.round((Math.abs(dy) + prevdy)*5)/10;
    if(doreturn){return;}
    
    dy = $("body").scrollLeft() - dy;
    $("body").scrollLeft(dy);
  });
  
  //reveal effect
  /*setInterval( function() {
    
    if ( doViewportDet ) {
      doViewportDet = false;
      $(".segment").each(function(){
        if($(this).withinviewport({left:-600, right:-600, bottom:-900, top:-900})[0]){
          $(this).addClass("display")
        }else{
          $(this).removeClass("display")
        }
      })
    }
    
  }, 100 );*/
  $(".segment").addClass("display");
  
  $(".dot").hover(function(){
    obj = $(this).get(0)
    obj.style.width = parseInt(obj.scrollWidth) + 10 + "px";
  }, function(){
    $(this).get(0).style.width = "";
  })
  
  //Modal interaction
  $(".dot").click(function(index, elem){
    var elems = $(".modal .main .content").children();
    var data = ModalData[$(this).data("page")];
    if(data == undefined){ console.log("Error, cannot find page"); return; }
    elems.filter("h1").text(data.title);
    
    var h2 = elems.filter("h2");
    if("subtitle" in data) {
      h2.text(data.subtitle);
      h2.css("display", "block");
    }else{
      h2.css("display", "none");
    }
    
    elems.filter("img").get(0).src = "info/" + data.img;
    elems.filter("p").html(data.para);
    
    var link = elems.filter("a");
    console.log(data);
    if("source" in data) {
      link.attr("href", data.source);
      link.css("display", "block");
    }else{
      link.css("display", "none");
    }
    
    $(".modal").addClass("visible");
  })
  $(".modal .main .btn").click(function(){
    $(".modal").removeClass("visible");
  })
  
  function updateScale() {
    var newScale = $(window).height() / 700;
    var css = 'scale(' + newScale + ',' +  newScale + ')'
    $(".timeline").css('transform', css);
    $("body").css("height", $(".timeline")[0].getBoundingClientRect().height);
  }
  
  $(window).resize(function(){
    doViewportDet = true;
    updateScale();
  })
  updateScale();
  
  
})