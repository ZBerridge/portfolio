<?php
/*
*
*  Registers and Enqueues Scripts and CSS
*
*/


if ( ! class_exists('ZB_Scripts')):

    class ZB_Scripts {

        public function __construct()
        {
            $this->zb_register_scripts();
            $this->zb_enqueue_scripts();
        }

        private function zb_register_scripts(){
            wp_register_style('zb-style', get_template_directory_uri() . '/dist/css/styles.min.css');
            wp_register_style('zb-bootstrap-css', get_template_directory_uri() . '/dist/assets/css/bootstrap.min.css');
            wp_deregister_script('jquery');
            wp_register_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js', array(), null, true);
            wp_register_script('zb-bootstrap-js', get_template_directory_uri() . '/dist/assets/js/bootstrap.bundle.min.js', array('jquery'), null, true);
            wp_register_script('zb-bundle', get_template_directory_uri() . '/dist/js/bundle.min.js', array('zb-bootstrap-js'), null, true);

        }

        private function zb_enqueue_scripts()
        {
            wp_enqueue_style('zb-bootstrap-css');
            wp_enqueue_style('zb-style');
            wp_enqueue_script('jquery');
            wp_enqueue_script('zb-bootstrap-js');
            wp_enqueue_script('zb-bundle');

        }

    }

endif;

function create_ZB_Scripts_obj()
{
    $zb_script_register = new ZB_Scripts();
}

add_action( 'wp_enqueue_scripts', 'create_ZB_Scripts_obj' );

?>
