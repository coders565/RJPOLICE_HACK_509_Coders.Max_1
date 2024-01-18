<?php

if (isset($_POST['submit'])) {
    $complaint_no = $_POST["compl_no"];
    $name = $_POST["name"];
    $description = $_POST["feedback"];
    }

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "police_feedback";

$con = mysqli_connect($servername, $username, $password, $dbname);

if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}




$sql = "INSERT INTO feedback4 (id, compl_no, name, description) VALUES ('0', '$complaint_no', '$name', '$description')";
              
$rs = mysqli_query($con, $sql);


if ($rs) {
        echo "Feedback submitted successfully";
    } else {
        echo "Error: ";
    }


mysqli_close($con);

?>
