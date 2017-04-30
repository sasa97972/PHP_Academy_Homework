<?php

$minNumber = 1;
$maxNumber = 9;
for ($column = $minNumber; $column <= $maxNumber; $column++) {
    for ($row = $minNumber; $row <= $maxNumber; $row++) {
        $result = $row * $column;
        echo "$column x $row = $result".'<br>';
    }
    echo '<br>';
}