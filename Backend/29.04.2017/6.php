<?php

$arr = array('green'=>'зеленый', 'red'=>'красный','blue'=>'голубой');
foreach ($arr as $en_color => $ru_color) {
    $en[] = $en_color;
    $ru[] = $ru_color;
}
echo '<pre>';
print_r($en);
echo '</pre><hr>';
echo '<pre>';
print_r($ru);
echo '</pre>';
