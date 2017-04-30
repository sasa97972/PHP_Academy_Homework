<?php
if (isset($_GET['form_1'])){
    $num = str_split((string)$_GET['number']);
    $sum = array_sum($num);
}
?>
    <form action="" method="get">
        <input type="number" name="number" placeholder="Введите число">
        <input type="submit" name="form_1">
    </form>

<?php if (isset($sum)): ?>
    <h3>Сумма = <?= $sum ?></h3>
<?php endif; ?>