<?php

$n = 1;
$g = 1;
while ($n <= 9) {
    while ($g <= 9) {
        echo "$n x $g = " . $n * $g . '<br>';
        $g++;
    }
    echo '<br>';
    $g = 1;
    $n++;
}