$(function() {
    $.getJSON("json/past-editions.json", function (data) {
        var template = $.templates("#past-editions-template");
        $("#past-editions").html(template.render(data));
    });
});

