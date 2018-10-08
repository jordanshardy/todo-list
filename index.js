// Check off a specific todo by clicking

$("ul").on("click", "li", function() {
    $(this).toggleClass("strike");
});

$("ul").on("click", "span", function(e) {
    $(this).parent().fadeOut(300, function() {
        $(this).remove();
    });
    e.stopPropagation();
});

$("input[type='text']").keypress(function(e) {
    if (event.which === 13) {
        var newTodo = ($(this).val());
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + newTodo + "</li>");
    }
});

$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
});