<?php

$row = rand(1,10);
$col = rand(1,10);
$colors = array('red','yellow','blue','gray','maroon','brown','green');
?>

<table border="1" cellpadding="15px" style="text-align: center; margin: 100px auto;">
    <?php for($i = 1; $i <= $row; $i++): ?>
        <tr>
            <?php for($g = 1; $g <= $col; $g++): ?>
                <td bgcolor="<?= $colors[array_rand($colors)] ?>"><?= rand(1,100); ?></td>
            <?php endfor; ?>
        </tr>
    <?php endfor; ?>
</table>