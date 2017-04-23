<?php

$s = 200; //distance in km
$t = 2; //time in hour

$v_1 = $s/$t; //km/hr
$v_2 = ($s*1000)/($t*3600); //m/s

echo "distance: $s km <br>", "time: $t hours <br>";
echo "speed in km/hr : {$v_1} <br>", "speed in m/s : {$v_2}";