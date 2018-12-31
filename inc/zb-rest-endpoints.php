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
            $this->addPageRoute();
            $this->addPostsRoute();
        }

        private function addPostRoute(){
            register_rest_route('zb/v1', 'zb-post-slug', array(
                'methods' => 'GET',
                'callback' => array ($this, 'getPostBySlug')
            ));
        }

        public function getPostBySlug(WP_REST_REQUEST $request){
            $post_slug = $request['slug'];
            $post_full = $request['full'];
            $zb_post = get_posts( array( 'name' => $post_slug ) );
            if ($post_full === 'true') {
                return $zb_post[0];
            } else {
                return $zb_post[0]->post_content;
            }
        }

        private function addPostsRoute(){
            register_rest_route('zb/v1', 'zb-posts', array(
                'methods' => 'GET',
                'callback' => array ($this, 'getPosts')
            ));
        }

        public function getPosts(WP_REST_REQUEST $request)
        {
            $zb_post_list = $this->postListingContent($request);

            return $zb_post_list;
        }

        private function postListingContent($request){

            $count = $request['count'];
            $skip = $request['skip'];

            ob_start();
            $args = array(
                'post_type' => 'post',
                'post_status' => 'publish',
                'posts_per_page' => $count,
                'offset' => $skip,
                'orderby' => 'post_date',
                'order' => 'DESC'
            );

            $zb_posts = new WP_Query( $args );

            if ( $zb_posts->have_posts() ){
                while( $zb_posts->have_posts() ){
                    $zb_posts->the_post();
                    get_template_part('template-parts/zb-blog-listing');
                }
            }

            return ob_get_clean();
        }

        private function addPageRoute() {
            register_rest_route('zb/v1', 'zb-page', array(
                'methods' => 'GET',
                'callback' => array ($this, 'getPage')
            ));
        }

        public function getPage(WP_REST_REQUEST $request) {
            $page_id = $request['id'];
            $zb_post = get_post( $page_id );
            return $zb_post;
        }

    }

endif;

function zb_initiate_rest_functions(){
    $rest_functions = new ZB_RestEndpoints();
}

add_action('rest_api_init', 'zb_initiate_rest_functions');
