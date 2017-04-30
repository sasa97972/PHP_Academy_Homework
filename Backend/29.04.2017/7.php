<?php

$arr = [2, 5, 9, 15, 0, 4];
foreach ($arr as $int) {
    if ($int > 3 && $int < 10) {
        echo $int.'<br>';
    }
}