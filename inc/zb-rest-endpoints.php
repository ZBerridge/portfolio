<?php
/**
 * Created by PhpStorm.
 * User: zack
 * Date: 11/18/2018
 * Time: 1:47 PM
 */

if ( ! class_exists('ZB_RestEndpoints')):

    class ZB_RestEndpoints {
        public function __construct()
        {
            $this->addPostRoute();
        }

        private function addPostRoute(){
            register_rest_route('zb/v1', 'zb-post-slug', array(
                'methods' => 'GET',
                'callback' => array ($this, 'getPostBySlug')
            ));
        }

        public function getPostBySlug(WP_REST_REQUEST $request){
            $post_slug = $request['slug'];

            $zb_post = get_posts( array( 'name' => $post_slug ) );

            return $zb_post[0]->post_content;
        }

    }

endif;

function zb_initiate_rest_functions(){
    $rest_functions = new ZB_RestEndpoints();
}

add_action('rest_api_init', 'zb_initiate_rest_functions');
