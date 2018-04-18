<?php 
    require 'connect.php';

    # Get incoming json as string
    $json_str = file_get_contents('php://input');

    # Convert json to object
    $playerArr = json_decode($json_str, true);
    
    # print_r($playerArr);

    # Store obj members into variables
    $playerName = $playerArr['name'];
    $playerTime = $playerArr['time'];
    $playerMoves= $playerArr['moves'];
    $playerStars = $playerArr['stars'];   
    $playerFinalScore = $playerArr['finalScore']; 
    
    # test if vars contain correct data
    # echo $playerName;
    # echo $playerTime; 
    # echo $playerMoves; 
    # echo $playerStars; 
    # echo $playerFinalScore;
    
    # query: store player data into a new db row
    $sql = "INSERT INTO leadbord (Name, Time, Moves, Stars, Score) VALUES ('$playerName', '$playerTime', '$playerMoves', '$playerStars', '$playerFinalScore')";

    # execute $sql query
    $conn->query($sql);

    # check sql query
    #if($conn->query($sql) === TRUE) {
    #    echo 'New record created successfully';
    #} else {
    #    'ERROR: something went wrong';
    #}

    # query: add leadbord table rows in html table
    $sqlSel = "SELECT * FROM leadbord";
    
    $selResult = $conn->query($sqlSel);
    
    $pos = 0;

    if($selResult->num_rows > 0) {
        
        # output data of each row in leadbord table
        while($row = $selResult->fetch_assoc()){
            
            $pos++;
            
            echo '<tr class="tr"><td class="td pos">' . $pos . '</td><td class="td">' . $row['Name'] . '</td><td class="td">' . $row['Time'] . '</td><td class="td">' . $row['Moves'] . '</td><td class="td">' . $row['Stars'] . '</td><td class="td">' . $row['Score'] . '</td><tr>'; 
        }
        
    } else {
        echo '0 rows to add';
    }

    $conn->close();
?>