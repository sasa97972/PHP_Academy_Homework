<?php
function stringRev($str) //Переворачивает и русский и английский текст
{
    $arrRev = [];
    $length = mb_strlen($str);
    for ($i = 0; $i < $length; $i++) {
        $arr[] = mb_substr($str, $i,1);
    }
    foreach ($arr as $item) {
        array_unshift($arrRev, $item);
    }
    return $arrRev;
}
?>
<form action="" method="get">
    <label for="string">Введите строку:</label>
    <input type="text" name="string" id="string"><br><br>
    <input type="submit" name="form_1">
</form>
<?php
if (isset($_GET['form_1'])) {
    echo "Перевёрнутая строка: ";
    $arr = (stringRev($_GET['string'])) ;
    foreach ($arr as $symbol) {
        echo "<big>".$symbol."</big>";
    }
}
