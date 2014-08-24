/**
 * Created by po0ya on 24/08/14.
 */


demoEntered = false;
$(document).ready( function() {

    $('#error').mouseover(function(){
        if (demoEntered === false) {

            $('#left-sidebar-login').sidebar({
                overlay: false,
                exclusive: false

            }).sidebar('toggle');

            $('#right-sidebar-login').sidebar({
                exclusive: false
            }).sidebar('toggle');


            demoEntered = true;
        }

    });


});