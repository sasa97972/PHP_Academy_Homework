<?php
$newTxt = fopen('test.txt', 'w');
for ($i = 1; $i <= 10; $i++) {
    fwrite($newTxt, str_repeat("$i", $i).PHP_EOL);
}
fclose($newTxt);