<?php

$arr = [4, 2, 5, 19, 13, 0, 10];
$e = [2, 3, 4];
$confirm = null;
foreach ($e as $number) {
    if (in_array($number, $arr)) {
        $confirm = true;
    }
}
if (isset($confirm)) {
    echo 'Есть!';
} else {
    echo 'Нет!';
}