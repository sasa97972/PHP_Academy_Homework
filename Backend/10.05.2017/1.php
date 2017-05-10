<?php
function getCommonWords($str1, $str2)
{
    $res = [];
    $arr1 = explode(" ", $str1);
    $arr2 = explode(" ", $str2);
    foreach ($arr1 as $word1) {
        $trWord1 = trim($word1, ".,\n\r");
        foreach ($arr2 as $word2) {
            $trWord2 = trim($word2, ".,\n\r");
            if ($trWord1 == $trWord2) {
                $res[] = $trWord1;
            }
        }
    }
   return array_unique($res);
}
?>
<form action="" method="post">
    <fieldset>
        <legend>Заполните поля текстом</legend>
        <label for="txt_1">Введите первый текст:</label>
        <textarea name="txt_1" id="txt_1" cols="30" rows="10"></textarea>
        <br><br>
        <label for="txt_2">Введите второй текст:</label>
        <textarea name="txt_2" id="txt_2" cols="30" rows="10"></textarea>
        <br><br>
        <input type="submit" name="form_1">
    </fieldset>
</form>
<?php if (isset($_POST['form_1'])) {
    echo "Одинаковые слова в текстовых полях:"."<br>";
    $arr = getCommonWords($_POST['txt_1'], $_POST['txt_2']);
    foreach ($arr as $word) {
        echo "$word <br>";
    }
}

