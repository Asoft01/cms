
$(document).ready(function(){
// Editor CKEDITOR  
ClassicEditor
    .create( document.querySelector( '#body' ) )
    .catch( error => {
        console.error( error );
} );

// REST OF THE CODE

// alert('hello');

});