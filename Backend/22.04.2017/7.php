<?php

$age = 15;
if ($age >= 18 && $age <= 59) {
    echo 'Вам ещё работать и работать';
} elseif ($age > 59) {
    echo 'Вам пора на пенсию';
} elseif ($age > 0 && $age < 18) {
    echo 'Вам ещё рано работать';
}