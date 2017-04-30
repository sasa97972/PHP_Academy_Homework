<?php

$arr = [];
$even = 1;
for ($i = 0; $i < 10; $i++) {
    $arr[] = rand(1,100);
}
foreach ($arr as $key => $number) {
    if ($key % 2 == 0 && $number > 0) {
        $even *= $number;
    } elseif ($key % 2 != 0 && $number > 0) {
        echo "Элемент с непарным индексом {$number} <br>";
    }
}
echo "Сумма всех элементов с парным индексом = {$even}";