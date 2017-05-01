<?php

for ($column = 1; $column <= 9; $column++) {
    for ($row = 1; $row <= 9; $row++) {
        echo "$column x $row = ". $row * $column .'<br>';
    }
    echo '<br>';
}