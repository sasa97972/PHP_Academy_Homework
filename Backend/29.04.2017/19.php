<?php

$arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
$day = date('l');
foreach ($arr as $item) {
    if ($item == $day) {
        echo " <i>{$item}</i>";
    } else {
        echo " $item";
    }
}
