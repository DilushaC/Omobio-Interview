<?php
    header('Access-Control-Allow-Origin: *');

    header('Access-Control-Allow-Methods: GET, POST,UPDATE,DELETE');

    header("Access-Control-Allow-Headers: Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization");


    include('./DBconnect.php');

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } else {
        $username = $_POST["username"];

        $query = "SELECT username,password from user where username = '" . $username . "'";
        $array = array();

        if ($result = mysqli_query($conn, $query)) {
            if (mysqli_num_rows($result) > 0) {
                while ($row = mysqli_fetch_array($result)) {
                    $array[] = array("username" => $row["username"], "password" => $row["password"]);
                }
                echo json_encode($array);
            } else {
                
                echo "Wrong password";
            }
        } else {
            echo "Query not executed";
        }
}
