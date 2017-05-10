<?php
function showFile($dir) {
    if (scandir($dir)) return scandir($dir);
    return "Путь указан не верно";
}
?>
<form action="" method="get">
    <label for="dir">Введи путь к директории:</label>
    <input type="text" name="dir" id="dir"><br><br>
    <input type="submit" name="form_1">
</form>
<?php
if (isset($_GET['form_1'])) {
    echo "<pre>";
    @print_r(showFile($_GET['dir']));
    echo "</pre>";
}

