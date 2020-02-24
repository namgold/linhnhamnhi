function sendContent(e) {
    e.preventDefault();
    $.ajax({
        url: "/", 
        method: "POST",
        data: {content: $("#content").val()},
        success: function(result){
            $("#frontendMessage").html(result.frontendMessage);
            $("#message").html(result.message);
        }
    });
}