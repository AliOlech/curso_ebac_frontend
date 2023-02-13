$(document).ready(function() {
    $('li').on('click',function(event){
        const element = event.target
    })

    const novaTarefa = $('#nova-tarefa').val();
    const novoItem = $('<li></li>');
    $('form button').on('submit', function(e) {
        e.preventDefault();
        $(`${novaTarefa}`).appendTo(novoItem);
        $(`
            <div class="nova-tarefa">
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('li');
        $(novoItem).fadeIn(1000);
        $('#nova-tarefa').val('')
    })
})

