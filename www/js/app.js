console.log( 'JS loaded' );


document.addEventListener( 'deviceready', function() {
    console.log( 'Device ready' );

    $( document ).ready( function() {
        console.log( 'DOM ready, alles ready...' )
        
        navigator.geolocation.getCurrentPosition( function() {
            $('<div>').html(cords.latitude + '/' + cords.longitude ).appendTo( 'body' );
        },function() {
            $('<div>').html('Error no position').appendTo( 'body' );
        })

    });

});