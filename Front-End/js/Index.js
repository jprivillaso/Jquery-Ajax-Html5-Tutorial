/**
 * This method calls the service
 * @returns {undefined}
 */
var serviceCall = function(){
    /**
     * This is the data you are going to send to the server, in JSON format
     */
    var data = {
        'action' : 'getId'
    };
    
    /**
     * Ajax Call,
     * Methods can change depending on your needs
     */
    $.ajax({
        data: data,
        datatype: 'json',
        type: 'GET',
        url: '../../Back-End/Controller/Controller.php',
        /**
         * If the call was done successfully, so it will come back
         * automatically to success method. The param result can have 
         * any name, and it is server's response
         * @param {type} result
         * @returns {undefined}
         */
        success: function(result){
            console.log(result); //Printing the response in browser's 
        },
        /**
         * If there was any error calling the server, so it will come 
         * automatically to error method
         * @returns {undefined}
         */
        error: function(){
            console.log('error calling the service');
        }
    });
};

/**
 * This  method is responsible for the events of the elements in the DOM
 * @returns {undefined}
 */
var bindingEvents = function(){
    /**
     * We access the DOM though JQuery when some actino is done.
     * When sendRequestBtn is clicked, this method will trigger
     */
    $('#sendRequestBtn').on('click', function(){
        serviceCall();
    });
};

/**
 * This method triggers when the document is loaded. So after the page is
 * loaded completely, this method will trigger automatically.
 */
$(document).ready(function(){
    bindingEvents();
});


