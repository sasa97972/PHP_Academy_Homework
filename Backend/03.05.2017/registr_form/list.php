<?php
$arr = file('register.txt');
echo "Registered users:"."<br>";
echo str_repeat("-", 50)."<br>";
foreach ($arr as $users) {
    $users = unserialize($users);
    echo "Login: ".$users["login"]."<br>";
    echo "Password: ".$users["password"]."<br>";
    echo "Email: ".$users["email"]."<br>";
    echo str_repeat("-", 50)."<br>";
}
