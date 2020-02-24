
function sendContent(e) {
    e.preventDefault();
    var form = $(this);
    $.ajax({
        url: "/", 
        method: "POST",
        data: form.serialize(),
        success: function(result){
            $("#frontendMessage").html(result.frontendMessage);
            $("#message").html(result.message);
        }
    });
}