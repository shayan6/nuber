<?php

	print_r($_POST);
	// Check if submit +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	if(isset($_POST)) {
	    
		// Database connection +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		$servername = "localhost";
		$username = "root";
		$password = "";
		$dbname = "nuber";

		// Create connection*************************************************************************************************
		$conn = new mysqli($servername, $username, $password, $dbname);
		// Check connection*************************************************************************************************
		if ($conn->connect_error) {
		    die("Connection failed: " . $conn->connect_error);
		} 

		// get posted values*************************************************************************************************
		$id = filter_var($_POST["id"], FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);
		$status = filter_var($_POST["status"], FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);

		$sql = "UPDATE rides SET status = '$status' WHERE id = $id";

		if (mysqli_query($conn, $sql)) {
		    echo "Record updated successfully";
		} else {
		    echo "Error updating record: " . mysqli_error($conn);
		}


	}


?>