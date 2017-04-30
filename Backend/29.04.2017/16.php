<?php

$arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
foreach ($arr as $int) {
    if ($int % 3 == 0) {
        echo " $int".'<br>';
    } else {
        echo " $int";
    }
}