
// rimuovo la classe/icona microfono e metto quella dell'invio quando sono in focus sull'input
$('#message-text').focus(function() {
    $('#mes-but').removeClass('fa-microphone').addClass('fa-paper-plane');
});

// ri-assegno la classe iniziale all'icona una volta usate le due funzioni sotto (click o invio tastiera)
$('#message-text').blur(function() {
    $('#mes-but').removeClass('fa-paper-plane').addClass('fa-microphone');
});

// funzione che si attiva quando clicco sull'icona "invio"
$('.microphone').mousedown(invia_messaggio);

// funzione che si attiva quando clicco il tasto "invio" sulla tastiera
$('#message-text').keypress(function( event ) {

    // leggo il testo inserito dall'utente
    var testo_utente = $('#message-text').val();

    // imposto come condizioni che venga premuto il tasto invio, che ci sia la classe/icona di invio e che il testo utente non sia vuoto, altrimenti non entra nella condizione
    if ( event.which == 13 && $('#mes-but').hasClass('fa-paper-plane') && testo_utente.trim() !==("")) {

        invia_messaggio();

    } else {
        // $('.input').addClass('ahashakeheartache');
        // $(this).delay(200).removeClass('ahashaskeheartache');
    }
});

function invia_messaggio() {
        // leggo il testo inserito dall'utente
    var testo_utente = $('#message-text').val();
    console.log(testo_utente);

    // imposto come condizioni che ci sia la classe/icona di invio e che il testo utente non sia vuoto, altrimenti non entra nella condizione
    if ($('#mes-but').hasClass('fa-paper-plane') && testo_utente.trim() !==("")) {

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
    } else {
        // $('.input').addClass('ahashakeheartache');
        // $('.input').on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e){
        //     $('.input').delay(200).removeClass('ahashakeheartache');
        // });
    }
}

// Milestone 2 prima parte - con questa funzione faccio apparire il template2 già presente ma nascosto.
function genero_risposta_pc() {
    var risposta_template2 = $('.template-2 .message-left').clone();
    $('.central-tab').append(risposta_template2);
}

// se clicco sulla "x" nella sezione ricevi notifiche, questa scompare, e riorganizzo l'altezza della sezione contatti
$('.notification-tab span .fa-times').click(function() {
    $('.notification-tab').slideUp();
    $('.friends-tab').removeClass('friends-tab').addClass('when-slideUp');
})


$("#search-bar").keyup(function() {

     // leggo il testo inserito dall'utente e imposto a 0 la conta
    var testo_utente = $(this).val().trim().toLowerCase();
    count = 0;

    // inizio il loop attraverso la lista, mettendo come condizione che la stringa non sia vuota, altrimenti faccio vedere tutti i contatti
    if (testo_utente !==("")) {
        $('.friends-tab .chat .contact-text-2 .text-info-3 h4').each(function() {
            // se le liste contatti non contengono una delle parola immesse, le nascondo
            if ($(this).text().toLowerCase().search(new RegExp(testo_utente, "i")) < 0) {
                $(this).closest('.chat').hide();
              // mostro le liste dei contatti se la parola immessa matcha con quello che ho scrivo, e incremento il count
            } else {
              $(this).show();
              $('.chat').show();
              count++;
            }
        });
    } else {
        $('.friends-tab .chat').show();
    }
});

$("#filter").keyup(function() {

  // Retrieve the input field text and reset the count to zero
  var filter = $(this).val(),
    count = 0;

  // Loop through the comment list
  $('#results div').each(function() {


    // If the list item does not contain the text phrase fade it out
    if ($(this).text().search(new RegExp(filter, "i")) < 0) {
      $(this).hide();

      // Show the list item if the phrase matches and increase the count by 1
    } else {
      $(this).show();
      count++;
    }

  });

});


// MEDOTO DELLA SEARCH BAR PIU SEMPLICE E STATICO
// $('#search-bar').keypress(function(event){
//     // leggo il testo inserito dall'utente
//     var testo_utente = $('#search-bar').val().trim().toLowerCase();
//
//     // imposto come condizioni che venga premuto il tasto invio, che ci sia la classe/icona di invio e che il testo utente non sia vuoto, altrimenti non entra nella condizione
//     if ( event.which == 13 && testo_utente !==("")) {
//         $('.friends-tab .chat .contact-text-2 .text-info-3 h4').each(function(){
//             var testo_contatti = $(this).text().toLowerCase();
//             console.log('testo li: ' + testo_contatti);
//             if (testo_contatti == testo_utente) {
//                 $(this).show();
//             } else {
//                 $(this).closest('.chat').hide();
//             }
//         });
//     } else {
//         $('.friends-tab .chat').show();
//     }
// })

// $('.search-icon .fa-search').click(function() {
//     var testo_utente = $('#search-bar').val().trim().toLowerCase();
//     console.log(testo_utente);
//
//     if (testo_utente != '') {
//         $('.friends-tab .chat .contact-text-2 .text-info-3 h4').each(function(){
//             var testo_contatti = $(this).text().toLowerCase();
//             console.log('testo li: ' + testo_contatti);
//             if (testo_contatti == testo_utente) {
//                 $(this).show();
//             } else {
//                 $(this).closest('.chat').hide();
//             }
//         });
//     } else {
//         $('.friends-tab .chat').show();
//     }
// });
// FINE DEL METODO PIU SEMPLICE




//
// $(document).click(function(event) {
//     var target = $(event.target);
//
//     if (!target.hasClass('fa-microphone') && !target.hasClass('fa-paper-plane')) {
//         $('#mes-but').removeClass('fa-paper-plane').addClass('fa-microphone');
//     }
// });
