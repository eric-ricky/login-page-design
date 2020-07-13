
$(document).ready(function() {    
    $(".textbox input").on("focus", function() {
        $(this).addClass("focus");
    });
    $(".textbox input").on("blur", function() {
        if($(this).val() == "") {
            $(this).removeClass("focus");
        }        
    });

    // modal
    $("input.btn").on("click", function() {
        if($(".textbox input").val() !== "") {
            $(".modal").css("display","block");
        } else {
            alert('INPUT FIELD CANNOT BE EMPTY');
        }
        
    });
    $(".modal-content .close, .modal").on("click", function() {
        $(".modal").css("display","none");        
    });
})