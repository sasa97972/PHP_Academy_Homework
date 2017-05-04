<?php
function myPrintR(array $arr)
{
    echo "Array ( ";
    foreach ($arr as $key => $value) {
        echo "[{$key}] => ";
        if (is_array($value)) {
            myPrintR($value);
        } else {
            echo "{$value} ";
        }
    }
    echo ") ";
}
$testArr = [
    "hello" => "world",
    "orange" => "blue",
    123,
    [
        1,
        2,
        [
            'dark',
            'sunny'
        ]
    ]
];
print_r($testArr);
echo '<br>';
myPrintR($testArr);