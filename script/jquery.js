
$('#transactionTable').DataTable( {
    "order": [[ 4, "desc" ]]
} );

$('#memberTable').DataTable( {
    // "order": [[ 4, "desc" ]]
} );

$('#linkedAccTable').DataTable( {
    "order": [[ 3, "desc" ]]
} );

$('.addTransBtn').on('click', function(){
    showPopup('addTransPopup')
});

function showPopup(popupId){
    $('#'+popupId).addClass('active');
}

$('.popup-fader').on('click', function(){
    $(this).parent().removeClass('active');
});


(function($, undefined) {

    "use strict";
    // When ready.
    $(function() {
        var $form = $( "form" );
        var $input = $form.find( ".commaSep" );
        $input.on( "keyup", function( event ) {
            // When user select text in the document, also abort.
            var selection = window.getSelection().toString();
            if ( selection !== '' ) {
                return;
            }

            // When the arrow keys are pressed, abort.
            if ( $.inArray( event.keyCode, [38,40,37,39] ) !== -1 ) {
                return;
            }


            var $this = $( this );

            // Get the value.
            var input = $this.val();

            var input = input.replace(/[\D\s\._\-]+/g, "");
                    input = input ? parseInt( input, 10 ) : 0;

                    $this.val( function() {
                        return ( input === 0 ) ? "" : input.toLocaleString( "en-US" );
                    } );
        } );

        /**
         * ==================================
         * When Form Submitted
         * ==================================
         */
        $form.on( "submit", function( event ) {

            var $this = $( this );
            var arr = $this.serializeArray();

            for (var i = 0; i < arr.length; i++) {
                    arr[i].value = arr[i].value.replace(/[($)\s\._\-]+/g, ''); // Sanitize the values.
            };

            console.log( arr );

            event.preventDefault();
        });

    });
})(jQuery);


$('.edit-form').on('click', function(){
    console.log('asd');
    $(this).parents('.flex-module').find('.edit-linked').addClass('edit');
    $(this).parents('.flex-module').find('input').attr('readonly', false);
});

$('.generic-btn.red').on('click', function(){
    $(this).parents('.flex-module').find('.edit-linked').removeClass('edit');
    $(this).parents('.flex-module').find('input').attr('readonly', true);
})
