<?php

$arr = [1, 20, 15, 17, 24, 35];
$result = 0;
foreach ($arr as $int) {
    $result += $int;
}
echo "Сумма элементов массива = {$result}";