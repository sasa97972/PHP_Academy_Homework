<?php
function topWords($str) {
    $arr = explode(" ", $str);
    foreach ($arr as $word) {
       $arrTrim[] = trim($word, ".,\n\r");
    }
    usort($arrTrim, function($word1, $word2)
    {
        return mb_strlen($word1) < mb_strlen($word2);
    });
    return array_slice($arrTrim, 0, 3);
}
?>
<form action="" method="post">
    <fieldset>
        <legend>Заполните поле текстом</legend>
        <label for="txt_1">Введите текст:</label>
        <textarea name="txt_1" id="txt_1" cols="30" rows="10"></textarea>
        <br><br>
        <input type="submit" name="form_1">
    </fieldset>
</form>
<?php if (isset($_POST['form_1'])) {
    $arr = topWords($_POST['txt_1']);
    echo "Топ 1: {$arr[0]}"."<br>";
    echo "Топ 2: {$arr[1]}"."<br>";
    echo "Топ 3: {$arr[2]}"."<br>";
}