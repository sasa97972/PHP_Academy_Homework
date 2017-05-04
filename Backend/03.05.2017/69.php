<?php
function arrCount(array &$arr)
{
    array_push($arr, count($arr));
}
$arr = ['hello', 'test', 'world'];
arrCount($arr);
print_r($arr);