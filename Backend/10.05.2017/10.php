<?php
function uniqWord($str)
{
    $arr = explode(" ", $str);
    foreach ($arr as $word) {
        $word = trim($word, "?.,\n\r");
        $lowArr[] = mb_strtolower($word);
    }
    $lowArr = array_unique($lowArr);
    return count($lowArr);
}
?>
<form action="" method="get">
    <label for="string">Введите слова через пробел:</label>
    <input type="text" name="string" id="string"><br><br>
    <input type="submit" name="form_1">
</form>
<?php if (isset($_GET['form_1'])):?>
<h4>Количество уникальных слов в тексте: <?= uniqWord($_GET['string']) ?></h4>
<?php endif; ?>
