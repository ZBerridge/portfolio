<?php
/**
 *
 * Created by PhpStorm.
 * User: zack
 * Date: 12/24/2018
 * Time: 8:51 PM
 * Template for displaying Blog listings
 *
 */

$has_thumbnail = has_post_thumbnail();
$slug = get_post_field('post_name', get_the_ID() );

?>

    <div class="col-12">
        <div class="zb-post-card my-5 row">
            <?php if( $has_thumbnail ):
            ?>
            <div class="zb-post-thumb col-xs-12 col-md-4">
                <div class="zb-post-thumb-wrap d-flex justify-content-center align-items-center">
                    <?php echo get_the_post_thumbnail( $post->ID, 'thumbnail' ); ?>
                </div>
            </div>
            <?php
                endif;
            ?>
            <div class="zb-post-snip col-xs-12 <?php if( $has_thumbnail):
                    echo 'col-md-8';
                    else:
                    echo  'col-md-12';
                endif;
                ?>
            ">
                <div class="col-xs-12 zb-post-title py-2">
                    <h4><a class="font-black" href="<?php echo '/posts/' . $slug; ?>"><?php the_title(); ?></a></h4>
                    <span class="font-black font-weight-bold"><?php the_date(); ?></span>
                </div>
                <div class="col-xs-12 zb-post-excerpt">
                    <?php the_excerpt(); ?>
                </div>
            </div>
        </div>
    </div>
