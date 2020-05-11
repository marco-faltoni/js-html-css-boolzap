$('#message-text').focus(function() {
    $('#mes-but').removeClass('fa-microphone').addClass('fa-paper-plane');
})

$('#message-text').blur(function() {
    $('#mes-but').removeClass('fa-paper-plane').addClass('fa-microphone');
})

$('.microphone').mousedown(function() {

    if ($('#mes-but').hasClass('fa-paper-plane')) {
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

        // faccio ritornare l'input vuoto al valore iniziale e ri-assegno la classe iniziale all'icona
        testo_utente = $('#message-text').val('');
        $('#mes-but').removeClass('fa-paper-plane').addClass('fa-microphone');
    }

})

$('#message-text').keyup(function( event ) {

    if ( event.which == 13 && $('#mes-but').hasClass('fa-paper-plane')) {
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

        // faccio ritornare l'input vuoto al valore iniziale e ri-assegno la classe iniziale all'icona
        testo_utente = $('#message-text').val('');
    }
});
//
// $(document).click(function(event) {
//     var target = $(event.target);
//
//     if (!target.hasClass('fa-microphone') && !target.hasClass('fa-paper-plane')) {
//         $('#mes-but').removeClass('fa-paper-plane').addClass('fa-microphone');
//     }
// });
