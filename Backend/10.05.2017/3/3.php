<?php
function delWords($number) {
    $str = file_get_contents('test.txt');
    $arr = explode(" ", $str);
    $arr = array_filter($arr, function ($word) use ($number)
    {
       if (mb_strlen($word) > $number ) return false; return true;
    });
    $arr = implode($arr, " ");
    file_put_contents('test.txt', $arr);
}
if (isset($_POST['form_1'])) delWords($_POST['number']);
?>
<form action="" method="post">
    <label for="number">Введите число</label>
    <input type="number" id="number" name="number">
    <br><br>
    <input type="submit" name="form_1">
</form>
