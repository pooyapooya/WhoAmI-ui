/**
 * Created by po0ya on 24/08/14.
 */

demoEntered = false;
$(document).ready( function() {
    $('#error').mouseover(function(){
        if (demoEntered === false) {
            $('.demo.sidebar').sidebar('toggle');
            demoEntered = true;
        }

    });

});