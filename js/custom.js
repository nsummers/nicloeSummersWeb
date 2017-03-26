(function( ns, $, undefined ) {
        
    ns.fry = function() {
        var oliveOil;

        addItem( "\t\n Butter \n\t" );
        addItem( oliveOil );
        console.log( "Frying " + ns.ingredient );
    };
    
}( window.ns = window.ns || {}, jQuery ));