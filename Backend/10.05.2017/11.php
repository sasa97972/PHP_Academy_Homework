<?php
function letterUp($str)
{
    $arr = explode(".", $str);
    foreach ($arr as $sent) {
        $sent = trim($sent, " ");
        $arrUp[] = " ".mb_strtoupper(mb_substr($sent, 0, 1)).mb_substr($sent, 1);
    }
    return implode(".", $arrUp);
}

$testStr = 'а васька слушает да ест. а воз и ныне там. а вы друзья как ни садитесь, все в музыканты не годитесь. а король-то — голый. а ларчик просто открывался.а там хоть трава не расти.';
echo letterUp($testStr);