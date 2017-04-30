<?php
$arr = [];
for ($i = 0; $i < 10; $i++) {
    $arr[] = rand(1, 1000);
}
$max = max($arr);
$min = min($arr);
echo "Минимальное значение: " . $min . "<br>";
echo "максимальное значение: " . $max . "<br>";
print_r($arr);
foreach ($arr as $key => $number) {
    if ($number == $max) {
        $arr[$key] = $min;
    } elseif ($number == $min) {
        $arr[$key] = $max;
    }
}
echo '<br>';
print_r($arr);


