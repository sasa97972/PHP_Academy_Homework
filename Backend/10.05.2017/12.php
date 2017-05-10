<?php
function reverse($str)
{
    $revArr = [];
    $arr = explode(".", $str);
    $arr = array_reverse($arr);
    unset($arr[0]);
    $arr[count($arr)] = " ".$arr[count($arr)];
    $result = implode(".", $arr);
    return $result;
}
$testStr = 'А Васька слушает да ест. А воз и ныне там. А вы друзья как ни садитесь, все в музыканты не годитесь. А король-то — голый. А ларчик просто открывался. А там хоть трава не расти.';
echo reverse($testStr);