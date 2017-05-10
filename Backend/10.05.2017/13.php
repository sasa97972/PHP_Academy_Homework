<?php
$string = 'яблоко черешня вишня вишня черешня груша яблоко черешня вишня яблоко вишня вишня черешня груша яблоко черешня черешня вишня яблоко вишня вишня черешня вишня черешня груша яблоко черешня черешня вишня яблоко вишня вишня черешня черешня груша яблоко черешня вишня';
$arr = explode(" ", $string);
foreach ($arr as $word_1) {
    $count = 0;
    foreach ($arr as $word_2) {
        if ($word_1 == $word_2) $count++;
    }
    $result[$word_1] = $count;
}
arsort($result);
foreach ($result as $key => $item) {
    echo "{$key} - {$item}"."<br>";
}