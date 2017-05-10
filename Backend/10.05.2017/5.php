<?php
function showFile($dir, $word) {
    $arr = scandir($dir);
    if ($arr) {
        foreach ($arr as $dir_1) {
            if ($word == $dir_1) $result[] = $dir_1;
            $dir_1 = explode(" ", $dir_1);
            if (in_array($word, $dir_1)) $result[] = implode(" ", $dir_1);
        }
        if (empty($result)) {
            return "По вашему слову ничего не найдено";
        } else {
            return $result;
        }
    } else {
        return "Путь указан не верно";
    }
}
?>
<form action="" method="get">
    <label for="dir">Введи путь к директории:</label>
    <input type="text" name="dir" id="dir"><br><br>
    <label for="word">Введите искомое слово:</label>
    <input type="text" name="word" id="word"><br><br>
    <input type="submit" name="form_1">
</form>
<?php
if (isset($_GET['form_1'])) {
    echo "<pre>";
    @print_r(showFile($_GET['dir'], $_GET['word']));
    echo "</pre>";
}
