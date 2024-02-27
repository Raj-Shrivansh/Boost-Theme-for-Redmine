$('document').ready(function(){
    $('a.issue').each(function() {
        var text = $(this).text();
        $(this).addClass(text.split(" ")[0].toLowerCase())
      });;
});
