<?php
/**
 * Created by PhpStorm.
 * User: zack
 * Date: 12/30/2018
 * Time: 12:21 PM
 */

if ( ! class_exists('ZB_FeaturedImage')):

    class ZB_FeaturedImage {

        public function __construct()
        {
            $this->zb_enable_featured_image();
        }

        private function zb_enable_featured_image(){
            add_theme_support( 'post-thumbnails' );
        }

    }

endif;

function zb_initiate_featured_img(){
    $featured_img_obj = new ZB_FeaturedImage();
}

add_action('after_setup_theme', 'zb_initiate_featured_img');
