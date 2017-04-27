<!-- 28. Предопределенные переменные -->
<form action="" method="get">
    <label for="name">Введите ваше имя:</label>
    <input type="text" name="name" id="name">
    <br><br>
    <label for="email">Введите ваш емейл:</label>
    <input type="email" name="email" id="email">
    <br><br>
    <label for="email">Введите ваш телефон:</label>
    <input type="text" name="phone" id="phone">
    <br><br>
    <input type="submit" name="form_1">
</form>
<?php
if (isset($_GET['form_1'])) {
    echo '<pre>';
    print_r($_GET);
    echo '</pre>';
}
?>
<hr><br>
<!-- 31. Сериализация -->
<form action="" method="get">
    <label for="name_2">Введите ваше имя:</label>
    <input type="text" name="name_2" id="name_2">
    <br><br>
    <label for="email_2">Введите ваш емейл:</label>
    <input type="email" name="email_2" id="email_2">
    <br><br>
    <label for="message">Введите ваше сообщение:</label>
    <textarea name="message" id="message"></textarea>
    <br><br>
    <input type="submit" name="form_2">
</form>
<?php
if (isset($_GET['form_2'])) {
    $ser = serialize($_GET);
    echo $ser;
}
?>
<hr><br>
<!-- 33. Арифметические операторы -->
<?php
$sekInYear = 365 * 24 * 60 * 60;
$sekDiv = $sekInYear % 2;
echo $sekDiv; //0
?>
<hr><br>
<!-- 35. Строковые операторы -->
<?php
$str_concat = '1'.'2'.'3'.'4'.'5';
echo $str_concat; //12345
?>
<hr><br>
<!-- 36. Логические операторы -->
<?php
var_dump( false && true || false && true || !false && true); //true
$x = 5;
echo $x % 2 == 0 ? 'true':'false';
?>
<hr><br>
<!-- 37. Операторы присвоения -->
<?php
$a = 1;
$b = 2;
$a = $a.$b;
echo $b = $a[0].'<br>'; //1
echo $a = $a[1]; //2
?>
<hr><br>
<!-- 44. Конструкции условий: if / else / elseif -->
<?php
$a = 4;
$b = 7;
if ($a > $b) {
    echo $a;
} else {
    echo $b;
}
?>
<hr><br>
<!-- 45. Тернарный оператор -->
<?php
echo $a > $b ? "$a" : "$b";
?>
<hr><br>
<!-- 46. Конструкция switch / case -->
<?php
switch ($a) {
    case $a > $b:
        echo $a;
        break;
    default:
        echo $b;
        break;
}
?>
<hr><br>
<!-- 47. Циклы: for -->
<?php
echo "Простые числа от 1 до 100: ";
for ($i = 2; $i <= 100; $i++) {
    for ($k = 2; $k < $i; $k++) {
        $simple = null;
        $count = $i % $k;
        if ($count == 0) {
            break;
        }
        $simple = true;
    }
    if ($i == 2) {
        $simple = true;
    }
    if (isset($simple)) {
    echo $i.PHP_EOL;
    }
}
?>
<hr><br>
<!-- 48. Циклы while / do-while -->
<?php
$h = 2;
echo "Простые числа от 1 до 100: ";
while ($h <= 100) {
    $g = 2;
    while ($g < $h) {
        $simple = null;
        $count = $h % $g;
        if ($count == 0) {
            break;
        }
        $simple = true;
        $g++;
    }
    if ($h == 2) {
        $simple = true;
    }
    if (isset($simple)) {
        echo $h.PHP_EOL;
    }
    $h++;
}
?>
<hr><br>
<!-- 49. Цикл foreach -->
<?php
$test_arr = [1,2,3,4,5,6,7,8,9,15];
foreach ($test_arr as $item) {
    if ($item % 3 == 0) {
        echo "Число которое делится на 3: {$item} <br>";
    }
}
?>
<hr><br>
<!-- 49. Цикл foreach -->
<?php
echo "Первое простое число от 200 до 400: ";
for ($i = 200; $i <= 400; $i++) {
    for ($k = 2; $k < $i; $k++) {
        $simple = null;
        $count = $i % $k;
        if ($count == 0) {
            break;
        }
        $simple = true;
    }
    if (isset($simple)) {
        echo $i;
        break;
    }
}
?>
<hr><br>