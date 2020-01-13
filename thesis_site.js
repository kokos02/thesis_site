var tools = [];
var cases = [];

function display_cases() {
    var case_number;

    for (case_number = 1; case_number <= 51; case_number++) {
        tools[case_number] = case_number;
        $("#photo_video").append(
            ' <div class="col-12">\
    <h3 style="font-size:3vw;">' +
            cases[case_number] +
            '</h3>\
\
<video controls class=" vido col-9">\
<source src="videos/' + case_number + '.mp4" type="video/mp4">\
</video>\
\
<div class="row">\
    <figure class="figure col-lg-3 col-9">\
      <img src="photos/case study  ' + case_number + ' X axis.png" class="img-fluid figure-img axis_images">\
      <figcaption class="figure-caption"> X axis</figcaption>\
    </figure>\
\
    <figure class="figure col-lg-3 col-9">\
      <img src="photos/case study  ' + case_number + ' Y axis.png" class="img-fluid figure-img axis_images">\
      <figcaption class="figure-caption"> Y axis</figcaption>\
    </figure>\
\
    <figure class="figure col-lg-3 col-9">\
      <img src="photos/case study  ' + case_number + ' Z axis.png" class="img-fluid figure-img axis_images">\
      <figcaption class="figure-caption"> Z axis</figcaption>\
    </figure>\
    </div>\
    </div>\
\
\
\
 \
  <br>\
  <hr class="style2">\
  <br>'
        );
    }
}

function receive_and_display() {
    $(document).ready(function() {
        /* call the php that has the php array which is json_encoded */
        $.getJSON("thesis_site.php", function(data) {
            /* data will hold the php array as a javascript object */
            $.each(data, function(key, val) {
                cases[key] = val;
            });
            display_cases();
        });
    });
}

function show_about() {
    document.getElementById("photo_video").style.display = "none";
    document.getElementById("about_tab").style.display = "block";
    document.getElementById("about_button").style.fontWeight = "500";
    document.getElementById("home_button").style.fontWeight = "400";
}

function show_tools() {
    document.getElementById("photo_video").style.display = "block";
    document.getElementById("about_tab").style.display = "none";
    document.getElementById("about_button").style.fontWeight = "300";
    document.getElementById("home_button").style.fontWeight = "400";
}