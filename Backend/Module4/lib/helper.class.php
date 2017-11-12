<?php

class Helper
{
    public static function getBasePath ()
    {
        return Config::get('base_url') ? '/'.Config::get('base_url').'/' : '/';
    }
}
