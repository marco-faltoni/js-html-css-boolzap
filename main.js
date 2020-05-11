
// rimuovo la classe/icona microfono e metto quella dell'invio quando sono in focus sull'input
$('#message-text').focus(function() {
    $('#mes-but').removeClass('fa-microphone').addClass('fa-paper-plane');
});

// ri-assegno la classe iniziale all'icona una volta usate le due funzioni sotto (click o invio tastiera)
$('#message-text').blur(function() {
    $('#mes-but').removeClass('fa-paper-plane').addClass('fa-microphone');
});

// funzione che si attiva quando clicco sull'icona "invio"
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

        // faccio ritornare l'input vuoto al valore iniziale
        testo_utente = $('#message-text').val('');
        // $('#mes-but').removeClass('fa-paper-plane').addClass('fa-microphone');

        // dopo che ho scritto il mio messaggio e resettato l'input, visualizzo la risposta pre-impostata del computer
        setTimeout(genero_risposta_pc, 1000);
    }

});

// funzione che si attiva quando clicco il tasto "invio" sulla tastiera
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

        // dopo che ho scritto il mio messaggio e resettato l'input, visualizzo la risposta pre-impostata del computer
        setTimeout(genero_risposta_pc, 1000);
    }
});


function genero_risposta_pc() {
    var risposta_template2 = $('.template-2 .message-left').clone();
    $('.central-tab').append(risposta_template2);
}







//
// $(document).click(function(event) {
//     var target = $(event.target);
//
//     if (!target.hasClass('fa-microphone') && !target.hasClass('fa-paper-plane')) {
//         $('#mes-but').removeClass('fa-paper-plane').addClass('fa-microphone');
//     }
// });
