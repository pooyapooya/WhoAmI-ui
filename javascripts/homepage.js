/**
 * Created by po0ya on 24/08/14.
 */


demoEntered = false;
$(document).ready( function() {

    $('#error').mouseover(function(){
        if (demoEntered === false) {

            $('#sidebar-login').sidebar({
                overlay: true
            }).sidebar('toggle');




            demoEntered = true;
        }

    });


});