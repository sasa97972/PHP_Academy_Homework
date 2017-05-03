<table border="1" cellpadding="15px">
    <?php for ($i = 1; $i <= 9; $i++) : ?>
    <tr>
        <?php for ($g = 1; $g <= 9; $g++) : ?>
            <td>
                <?php $result = $i * $g; ?>
                <?php echo "{$g} x {$i} = {$result}";?>
            </td>
        <?php endfor; ?>
    </tr>
<?php endfor; ?>
</table>