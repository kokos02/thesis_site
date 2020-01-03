function myFunction() {

    alert("ouuuuuuuuuuuu");
    
    var case_number;

    for (case_number = 1; case_number < 30; case_number++) {
        $("#photo_video").append(" <div class=\"col-4\">\
    <h3 style=\"font-size:3vw;\">Case study " + case_number+ "</h3>\
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