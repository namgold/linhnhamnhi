
function sendContent(){
    $.ajax({
        url: "/", 
        method: "POST",
        data: {content: content.value},
        success: function(result){
            $("#frontendMessage").html(result.frontendMessage);
            $("#message").html(result.message);
        }
    });
}