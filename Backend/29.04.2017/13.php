<?php

$n =1;
$g =1;
while ($n <= 9) {
    while ($g <= 9) {
        $res = $n * $g;
        echo "$n x $g = $res".'<br>';
        $g++;
    }
    echo '<br>';
    $g = 1;
    $n++;
}