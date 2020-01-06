var tools = [];
var cases = [];




function display_cases() {
    
    var case_number;
   

    for (case_number = 1; case_number < 30; case_number++) {

      tools[case_number]=case_number;
        $("#photo_video").append(" <div class=\"col-4\">\
    <h3 style=\"font-size:3vw;\">" + cases[case_number] + "</h3>\
\
    <figure class=\"figure\">\
      <img src=\"tattoo.png\" class=\"img-fluid figure-img axis_images\">\
      <figcaption class=\"figure-caption\"> X axis</figcaption>\
    </figure>\
\
    <figure class=\"figure\">\
      <img src=\"comp.jpg\" class=\"img-fluid figure-img axis_images\">\
      <figcaption class=\"figure-caption\"> Y axis</figcaption>\
    </figure>\
\
    <figure class=\"figure\">\
      <img src=\"comp.jpg\" class=\"img-fluid figure-img axis_images\">\
      <figcaption class=\"figure-caption\"> Z axis</figcaption>\
    </figure>\
\
    <video width=\"400\" controls>\
      <source src=\"0001-0120.mp4\" type=\"video/mp4\">\
    </video>\
\
\
  </div>\
  <br>\
  <hr class=\"style2\">\
  <br>")

}
}


function receive_and_display(){
  $(document).ready(function(){
    /* call the php that has the php array which is json_encoded */
    $.getJSON('thesis_site.php', function(data) {
            /* data will hold the php array as a javascript object */
            $.each(data, function(key, val) {
              cases[key] = val;
            });
            display_cases();
    });

});
 /* alert(str);
  if(str.length == 0){
    document.getElementById('output').innerHTML = '';
    alert("lenght 0");
  } else {
    // AJAX REQ
    alert("lenght !=0");
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){ 
        alert("ready")
        var array = JSON.parse(this.responseText);
        alert(array[0]);
      }
    }
    xmlhttp.open("GET", "thesis_site.php?q="+str, true);
    xmlhttp.send();
  }*/
  
}