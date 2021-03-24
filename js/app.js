var app = new Vue({

    el: "#boolzap",
    data: {
        chatUserSelected: 0,
        chatInputText: '',
        searchInput: '',
        user: {
            name: 'Roberto',
            avatar: '_io',
            visible: true,
        },
        contacts: [{
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    },

                ],
            },
            {
                name: 'Antonio',
                avatar: '_1',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    },

                ],
            },
            {
                name: 'Luca',
                avatar: '_2',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    },

                ],
            },
            {
                name: 'Fabiola',
                avatar: '_3',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    },

                ],
            },
            {
                name: 'Mirco',
                avatar: '_4',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    },

                ],
            },
            {
                name: 'Antonello',
                avatar: '_1',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    },

                ],
            },
            {
                name: 'Federica',
                avatar: '_2',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    },

                ],
            },
            {
                name: 'Martina',
                avatar: '_3',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    },

                ],
            },
            {
                name: 'Franco',
                avatar: '_4',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    },

                ],
            },
        ],
    },

    methods: {
        searchListener(searchInput) {
            counterLetters = searchInput.length;
            if (counterLetters > 0) {
                this.contacts.forEach(element => {
                    if (element.name.toLowerCase().substring(0, counterLetters) == searchInput.toLowerCase()) {
                        element.visible = true;
                    } else {
                        element.visible = false;
                    }
                });
            } else {
                this.contacts.forEach(function(element) {
                    element.visible = true;
                });
            }
        },

        userSelected(userSelected) {
            // SELEZIONE UTENTE
            this.chatUserSelected = userSelected;
        },

        sendMessage(userSelected) {
            // CHECK: se il campo è vuoto il tasto enter non fa nullas
            if (this.chatInputText != '') {
                // VARIABILE OGGETTO PER NUOVO MESSAGGIO
                newMessage = {
                    // scrittura della data con day.js
                    date: `${dayjs().format('DD/MM/YYYY')} ${dayjs().format('HH:mm:ss')}`,
                    text: this.chatInputText,
                    status: 'sent'
                };
                // PUSH DEL MESSAGGIO NELLA CHAT
                this.contacts[userSelected].messages.push(newMessage);

                setTimeout(() => {
                    newMessage = {
                        date: `${dayjs().format('DD/MM/YYYY')} ${dayjs().format('HH:mm:ss')}`,
                        text: 'Okay',
                        status: 'received'
                    };
                    this.contacts[userSelected].messages.push(newMessage);
                }, 1000);

                // RESET INPUT BOX ALL'INVIO
                this.chatInputText = '';
            }
        },
    },
});