console.log( 'JS loaded' );


document.addEventListener( 'deviceready', function() {
    

    $( document ).ready( function() {
        var started = false;
        var canvas, context;
        var stampId = '';
        var lastColor = 'black';
        var lastStampId = '';


        function init() {
            canvas = $('#imageView').get(0);
            context = canvas.getContext('2d');

            canvas.addEventListener('mousemove', onMouseMove, false);
            canvas.addEventListener('click', onClick, false);


            $('#red').get(0).addEventListener('click', function(e) { 
                onColorClick(e.target.id); }, false);

               $('#blue').get(0).addEventListener('click', function(e) { 
                onColorClick(e.target.id); }, false);

               $('#green').get(0).addEventListener('click', function(e) { 
                onColorClick(e.target.id); }, false);

                $('#yellow').get(0).addEventListener('click', function(e) { 
                 onColorClick(e.target.id); }, false);

                $('#black').get(0).addEventListener('click', function(e) { 
                 onColorClick(e.target.id); }, false);

                 function onMouseMove(ev) {
                    var x,y;

                    if (ev.offsetX >= 0) {
                        
                        x = ev.offsetX - 50;
                        y = ev.offsetY - 5;
                    }

                    if (!started) {
                        started = true;
                        context.beginPath();
                        context.moveTo(x, y);        
                    }
                    else {
                        context.lineTo(x, y);
                        context.stroke();
                    }

                 };


                 function onClick(e) {
                    if (stampId.length > 0) {
                        context.drawImage($(stampId).get(0), e.pageX - 90, e.pageY - 60, 80, 80);
                    }
                }


                function onColorClick(color) {
                    
                    context.closePath();
                    context.beginPath();
                    
                    context.strokeStyle = color;
                }

                function onFill() {
                    
                    context.closePath();
                    context.beginPath();
                    context.fillStyle = context.strokeStyle;
                    context.fillRect(0, 0, canvas.width, canvas.height);
                }
        };        

    });

});