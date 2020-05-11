$('.input').click(function() {
    $('.fa-microphone').removeClass('fa-microphone').addClass('fa-paper-plane');
})

$('.microphone').click(function() {
    // leggo il testo inserito dall'utente
    var testo_utente = $('#message-text').val();
    console.log(testo_utente);

    // copio elemento template
    var nuovo_testo_utente = $('.template .message-right').clone();
    // inserisco il testo letto dall'input
    nuovo_testo_utente.text(testo_utente);
    // appendo il nuovo fumetto risposta utente
    $('.central-tab').append(nuovo_testo_utente);
})









// $(document).click(function(event) {
//     var target = $(event.target);
//
//     if ($('.microphone').hasClass('fa-paper-plane')) {
//         $('.fa-paper-plane').removeClass('fa-paper-plane').addClass('fa-microphone');
//     }
// });
