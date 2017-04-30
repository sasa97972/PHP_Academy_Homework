<?php

$allMonth = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
$month = 'Апрель';
foreach ($allMonth as $item) {
    if ($item == $month) {
        echo " <b>{$item}</b>";
    } else {
        echo " $item";
    }
}











