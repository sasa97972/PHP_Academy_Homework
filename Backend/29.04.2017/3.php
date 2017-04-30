<?php

$arr = [26, 17, 136, 12, 79, 15];
$result = 0;
foreach ($arr as $int) {
    $result += pow($int,2);
}
echo "Сумма квадратов элементов массива = {$result}";