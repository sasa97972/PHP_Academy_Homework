<?php
function validTxt($str) {
    $bad = ['fuck', 'bitch', 'damn', 'shit', 'bullshit']; //for example
    $arr = explode(" ",$str);
    foreach ($arr as $word) {
        $word = trim($word, ".,\n\r");
        $word = mb_strtolower($word);
        $word = strip_tags($word);
        if (in_array($word, $bad)) return false;
    }
    return true;
}
if (isset($_POST['form_1'])) {
    $_POST['text'] = strip_tags($_POST['text'], "<b></b>");
    if (validTxt($_POST['text'])) {
        $data = serialize($_POST).PHP_EOL;
        file_put_contents('book.txt', $data, FILE_APPEND);
    } else {
        echo "<span style='color: red;'>Нельзя использовать нецензурную лексику!</span>";
    }
}
$arr = file('book.txt');
if (!empty($arr)):?>
    <h3>Сообщения пользователей:</h3>
    <ul>
        <?php foreach ($arr as $comment) {
            $comment = unserialize($comment);
            echo "<li><b>{$comment['name']}</b>: {$comment['text']} <br></li>";
        }
        ?>
    </ul>
<?php endif; ?>
<br><br>
<form action="" method="post">
    <label for="name">Введите ваше имя:</label>
    <input type="text" name="name" id="name" value="Аноним"><br><br>
    <label for="text">Введите ваш коментарий:</label>
    <input type="text" name="text" id="text"><br><br>
    <input type="submit" name="form_1">
</form>
<?php