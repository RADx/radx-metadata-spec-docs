var showJsonLdExamples = true;

var jsonldCheckBoxId = "#jsonld-example-visibility-toggle";

init();

function init() {
    $( jsonldCheckBoxId ).click(toggleJsonLdExamples);
    updateJsonLdExamples();
}

function toggleJsonLdExamples() {
    showJsonLdExamples = !showJsonLdExamples;
    updateJsonLdExamples();
}

function updateJsonLdExamples() {
    if(showJsonLdExamples) {
        $( jsonldCheckBoxId ).html("Hide JSON-LD Examples");   
        $( ".jsonld-example" ).css( "display", "" );
    }
    else {
        $( jsonldCheckBoxId ).html("Show JSON-LD Examples");
        $( ".jsonld-example" ).css( "display", "none" );
    }
}