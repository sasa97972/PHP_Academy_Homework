<?php

if (isset($_GET['form_1'])) {
    $count = 0;
    $numAll = str_split((string)$_GET['number_1']);
    $num = $_GET['number_2'];
    foreach ($numAll as $item) {
        if ($item == $num) {
            $count++;
        }
    }
}
?>

<form action="" method="get">
    <label for="number_1">Введите число, в котором будет совершен поиск</label>
    <input type="number" name="number_1" id="number_1"><br><br>
    <label for="number_2">Введите число, которое нужно искать</label>
    <input type="number" id="number_2" name="number_2"><br><br>
    <input type="submit" name="form_1">
</form>

<?php if (isset($count)): ?>
    <h3>Количество вхождений = <?= $count ?></h3>
<?php endif; ?>
