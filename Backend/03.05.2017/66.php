<?php
function arrInPre(array $arr)
{
    echo "<pre>";
    print_r($arr);
    echo "</pre>";
}
$arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arrInPre($arr);
