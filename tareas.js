$(function(){
    $("#btn1").click(function(){
        var tareas = $("#nuevatarea").val();
        $(".listatareas").prepend('<div class="tarea">'+tareas+'<button class="completar">Completada</button><button class="eliminar">Eliminar</button></div>');
    });

    $(document).on("click", ".completar", function(){
        var tarea = $(this).parent();
        tarea.toggleClass("completed");
    });

    $(document).on("click", ".eliminar", function(){
        var tarea = $(this).parent();
        tarea.addClass("deleted");
        tarea.fadeOut(300, function(){
            $(this).remove();
        });
    });
});
