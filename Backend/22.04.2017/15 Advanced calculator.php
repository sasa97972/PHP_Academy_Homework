<?php

if (isset($_POST['form_count'])) {
$a = $_POST['a'];
$b = $_POST['b'];
$operator = $_POST['operator'];

if ($operator =='+') {
    $result = $a + $b;
} elseif ($operator == '-') {
    $result = $a - $b;
} elseif ($operator == '*') {
    $result = $a * $b;
} elseif ($operator == '/' && $b != 0) {
    $result = $a / $b;
} elseif ($operator == '%' && $b != 0) {
    $result = $a % $b;
} else {
    $result = 'На ноль делить нельзя !';
}
}
?>

<form action="" method="post">
    <label for="a">Введите число a</label>
    <input type="number" name="a"><br><br>
    <label for="a">Введите число b</label>
    <input type="number" name="b"><br><br>
    <span>Выберите необходимое действие:</span>
    <select name="operator" id="operator">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
        <option value="%">%</option>
    </select>
    <br><br>
    <input type="submit" name="form_count" value="Отправить">
</form>

<?php if (isset($result)) {?> <h1>Результат: <?php echo $result;}?></h1>
