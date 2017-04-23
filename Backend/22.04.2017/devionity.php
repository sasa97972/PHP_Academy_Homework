<?php

//1
$countries = array(1 =>'Ukraine', 'Turkey', 'United Kingdom', 'France', 'Italy');

echo '<pre>';
print_r($countries);
echo '<pre>';

//2
$countries_capitals = array('Ukraine' => 'Kiev' , 'Turkey' => 'Ankara' , 'United Kingdom' => 'London', 'France' => 'Paris', 'Italy' => 'Rome');
echo '<pre>';
print_r($countries_capitals);
echo '<pre>';

//3
$books = array('book1' => array('style1' => 'style1', 'author1' => 'author1', 'name1' => 'name1', 'price1' => 100),
'book2' => array('style2' => 'style2', 'author2' => 'author2', 'name2' => 'name2', 'price2' => 200),
'book3' => array('style3' => 'style3', 'author3' => 'author3', 'name3' => 'name3', 'price3' => 300));
echo '<pre>';
print_r($books);
echo '<pre>';

//4
define('UA', 'UA');
define('UK', 'UK');
$d = array(UA, UK);
echo '<pre>';
print_r($d);
echo '</pre>';

//5
$hello = 'world';
$world = 'hello';
echo $$$$$hello;
