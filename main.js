$('.input').click(function() {
    $('.fa-microphone').removeClass('fa-microphone').addClass('fa-paper-plane');
})

$('.microphone').click(function() {
    // leggo il testo inserito dall'utente
    var testo_utente = $('#message-text').val();
    console.log(testo_utente);

    // copio elemento template
    var nuovo_testo_utente = $('.template .message-right').clone();
    console.log(nuovo_testo_utente);

    // inserisco il testo letto dall'input
    nuovo_testo_utente.find('.h4-light').text(testo_utente);

    // appendo il nuovo fumetto risposta utente
    $('.central-tab').append(nuovo_testo_utente);

    // faccio ritornare l'input vuoto al valore iniziale
    testo_utente = $('#message-text').val('');
})









// $(document).click(function(event) {
//     var target = $(event.target);
//
//     if ($('.microphone').hasClass('fa-paper-plane')) {
//         $('.fa-paper-plane').removeClass('fa-paper-plane').addClass('fa-microphone');
//     }
// });
