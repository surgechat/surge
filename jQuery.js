//Load the file containing the chat log
function loadLog(){     
    $.ajax({
        url: "log.html",
        cache: false,
        success: function(html){        
            $("#chatbox").html(html); //Insert chat log into the #chatbox div               
        },
    });
}
