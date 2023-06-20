$(document).ready(function () {
    $('form').on('submit', (e) => {
        e.preventDefault();
        const newTask = $('#newTask').val();
        $(`<li class="liTask">${newTask}</li>`).appendTo('#taskList')

        $("#newTask").val('');

        $('.liTask').click(function () {
            $(this).css("text-decoration", "line-through")
        })
    })
})
