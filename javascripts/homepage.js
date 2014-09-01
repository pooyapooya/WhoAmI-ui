/**
 * Created by po0ya on 24/08/14.
 */


var demoEntered = 0;
$(document).ready( function() {

    $('#leftside-button').mousedown(function(){

        $('#left-sidebar-login').sidebar({
            overlay: false,
            exclusive: false

        }).sidebar('toggle');

        $('#right-sidebar-login').sidebar({
            exclusive: false
        }).sidebar('toggle');

        if( demoEntered==0 || demoEntered == 3) {
            demoEntered = 2;
            $('#leftside-button').css('marginLeft' , '0px' );
        }
        else {
            demoEntered = 3;
            $('#leftside-button').css('marginLeft' , '-10px' );

        }
    });


/*    $('#error').mouseover(function(){
        if (demoEntered === 0) {

            $('#left-sidebar-login').sidebar({
                overlay: false,
                exclusive: false

            }).sidebar('toggle');

            $('#right-sidebar-login').sidebar({
                exclusive: false
            }).sidebar('toggle');

            $('#leftside-button').css('marginLeft' , '0px' );

            demoEntered = 1;
        }

    }).mouseout(function(){
        if (demoEntered === 1) {

            $('#left-sidebar-login').sidebar({
                overlay: false,
                exclusive: false

            }).sidebar('toggle');

            $('#right-sidebar-login').sidebar({
                exclusive: false
            }).sidebar('toggle');
            $('#leftside-button').css('marginLeft' , '-10px' );


            demoEntered = 0;
        }

    });
*/
});