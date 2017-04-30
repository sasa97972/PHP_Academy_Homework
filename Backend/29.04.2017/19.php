<?php

$arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
$day = 'Воскресенье';
foreach ($arr as $item) {
    if ($item == $day) {
        echo " <i>{$item}</i>";
    } else {
        echo " $item";
    }
}
