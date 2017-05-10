<?php
if (isset($_POST['form_1'])) {
    move_uploaded_file($_FILES['img']['tmp_name'], "gallery/".$_FILES['img']['name']);
}
$arr = array_diff(scandir('gallery/'), ['.','..']);
$count = 1;
$number = 1;
$width = "1000px";
$height = "500px";
if (isset($_POST['order'])) {
    if ($_POST['order'] == 4) {
        $count = 4;
        $number = 4;
        $width = "300px";
        $height = "150px";
    }
    if ($_POST['order'] == 3) {
        $count = 3;
        $number = 3;
        $width = "500px";
        $height = "250px";
    }
    if ($_POST['order'] == 2) {
        $count = 2;
        $number = 2;
        $width = "700px";
        $height = "350px";
    }
}
?>
<form action="" method="post" enctype="multipart/form-data">
    <label for="img">Выберите картинку для загрузки</label>
    <input type="file" name="img" id="img" accept="image/*"><br><br>
    <label for="img">Количество картинок в ряду:</label>
    <select name="order" id="order">
        <option value="1" selected>1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
    </select><br><br>
    <input type="submit" name="form_1">
</form>
<table style="margin: 0 auto;" border="1">
    <caption><h1>Галерея</h1></caption>
    <?php foreach ($arr as $source):
        if ($count % $number * 2 == 0) {echo "</tr>";}
        if ($count % $number == 0) {echo "<tr>";}
        echo "<td>"."<img src=\"gallery/$source\" alt=\"image\" width=\"$width\" height=\"$height\">"."</td>";
        $count++;
    endforeach; ?>
</table>