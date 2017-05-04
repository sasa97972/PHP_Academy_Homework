<?php
function isSimple($number)
{
    if ($number == 2) return true;
    for ($i = 2; $i < $number; $i++) {
        if ($number % $i == 0) {
            return false;
            break;
        }
    }
    return true;
}
var_dump(isSimple(139));