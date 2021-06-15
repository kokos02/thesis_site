<?php
$file = 'thesis.txt';
$case = array();



// the following line prevents the browser from parsing this as HTML.
header('Content-Type: text/plain');

// get the file contents, assuming the file to be readable (and exist)
$contents = file_get_contents($file);

for ($x = 1; $x <= 51; $x++) {
    $searchfor = 'Case study '. $x .' :';

    // escape special characters in the query
$pattern = preg_quote($searchfor, '/');
// finalise the regular expression, matching the whole line
$pattern = "/^.*$pattern.*\$/m";
// search, and store all matching occurences in $matches
if(preg_match_all($pattern, $contents, $matches)){
   //echo "Found matches:\n";
   //echo implode("\n", $matches[0]);
   $case[$x] = implode("\n", $matches[0]);
}
else{
   echo "No matches found";
}

}


$arr = array(
	array(
			"first_name" => "Darian",
			"last_name" => "Brown",
			"age" => "28",
			"email" => "darianbr@example.com"
	),
	array(
			"first_name" => "John",
			"last_name" => "Doe",
			"age" => "47",
			"email" => "john_doe@example.com"
	)
);


echo json_encode($case);
