<?php

Config::set('site_name', 'Dulya-news');
Config::set('languages', array('en', 'fr', 'ua'));
Config::set('base_url', 'Module4');

Config::set('routes', array(
    'default' => '',
    'admin' => 'admin_',
));

Config::set('default_route', 'default');
Config::set('default_language', 'en');
Config::set('default_controller', 'posts');
Config::set('default_action', 'index');

Config::set('db.host', 'localhost');
Config::set('db.user', 'root');
Config::set('db.password', '');
Config::set('db.db_name', 'news');

Config::set('salt', 'alexandrDulya');