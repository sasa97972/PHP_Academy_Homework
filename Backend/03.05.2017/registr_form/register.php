<?php
if ($_POST) {
    $file = fopen('register.txt', 'a');
    fwrite($file, serialize($_POST).PHP_EOL);
    fclose($file);
}
