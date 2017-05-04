<?php
function arrInPre(array $arr, $method = "print_r")
    {
    echo "<pre>";
    $method($arr);
    echo "</pre>";
}
$arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arrInPre($arr, "var_dump");