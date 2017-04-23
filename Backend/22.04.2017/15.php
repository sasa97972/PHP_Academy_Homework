<?php

$a = 9; //for example
$b = 0; //for example
$operator = '/'; //for example

if ($operator =='+') {
    echo $a + $b;
} elseif ($operator == '-') {
    echo $a - $b;
} elseif ($operator == '*') {
    echo $a * $b;
} elseif ($operator == '/' && $b != 0) {
    echo $a / $b;
} elseif ($operator == '%' && $b != 0) {
    echo $a % $b;
} else {
    echo 'На ноль делить нельзя !';
}