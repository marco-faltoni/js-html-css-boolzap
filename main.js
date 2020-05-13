
// Milestone 1

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
        var nuovo_testo_utente = $('.template .message').clone();
        $(nuovo_testo_utente).addClass('right');

        // inserisco il testo letto dall'input
        nuovo_testo_utente.find('.h4-light').text(testo_utente);

        // appendo il nuovo fumetto risposta utente
        $('.central-tab.main-visible').append(nuovo_testo_utente);

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
    var risposta_template2 = $('.template .message').clone();
    $(risposta_template2).addClass('left');
    $(risposta_template2).find('.check-read').hide();
    $(risposta_template2).find('.h4-light').text('Sono tuo padre');
    $('.central-tab.main-visible').append(risposta_template2);
}


// Milestone 2 seconda parte - SEARCH BAR
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
              $(this).closest('.chat').show();
              count++;
            }
        });
    } else {
        $('.friends-tab .chat').show();
    }
});


// Milestone 3 prima parte - cambio finestra
$('.friends-tab .chat').click(function(){
    $('.central-tab').removeClass('main-visible');
    var data_chat = $(this).attr('data-finestra-chat');
    console.log(data_chat);

    $('.central-tab[data-finestra-chat="'+ data_chat +'"]').addClass('main-visible');
});



// Milestone 3 seconda parte - cancellare messaggi
$(document).on('click', '.message-options', function(){
    var sottomenu = $(this).next('.message-options-panel');
    console.log(sottomenu);
    if(sottomenu.is(':visible')) {
        // se sì => ho cliccato la stessa voce per chiuderlo
        sottomenu.hide();
    } else {
        // se no => ho cliccato una nuova voce per aprirlo
        // chiudo altri eventuali dropdown aperti in precedenza
        $('.message-options-panel').hide();
        // visualizzo il menu dropdown
        sottomenu.show();
    }

    $('.message-destroy').click(function(){
        $(this).closest('.message').hide();
    });
})

// $('.message-right').on('click', '.message-options', function(){
//     var sottomenu = $(this).next('.message-options-panel');
//     console.log(sottomenu);
//     if(sottomenu.is(':visible')) {
//         // se sì => ho cliccato la stessa voce per chiuderlo
//         sottomenu.hide();
//     } else {
//         // se no => ho cliccato una nuova voce per aprirlo
//         // chiudo altri eventuali dropdown aperti in precedenza
//         $('.message-options-panel').hide();
//         // visualizzo il menu dropdown
//         sottomenu.show();
//     }
//
//     $('.message-destroy').click(function(){
//         $(this).closest('.message-right').hide();
//     });
// });



// function sottomenu_e_cancella() {
//     $('.message-options').click(function(){
//
//         var sottomenu = $(this).next('.message-options-panel');
//         console.log(sottomenu);
//         if(sottomenu.is(':visible')) {
//             // se sì => ho cliccato la stessa voce per chiuderlo
//             sottomenu.hide();
//         } else {
//             // se no => ho cliccato una nuova voce per aprirlo
//             // chiudo altri eventuali dropdown aperti in precedenza
//             $('.message-options-panel').hide();
//             // visualizzo il menu dropdown
//             sottomenu.show();
//         }
//
//         $('.message-destroy').click(function(){
//             $(this).closest('.message-right').hide();
//         });
//
//     });
// }





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



// // se clicco sulla "x" nella sezione ricevi notifiche, questa scompare, e riorganizzo l'altezza della sezione contatti
// $('.notification-tab span .fa-times').click(function() {
//     $('.notification-tab').slideUp();
//     $('.friends-tab').removeClass('friends-tab').addClass('when-slideUp');
// })



// $('.message-right').click(function(event) {
//     console.log('event.target:');
//     console.log(event.target);
//     console.log('this:');
//     console.log(this);
// });
