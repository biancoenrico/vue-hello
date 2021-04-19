// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

var app = new Vue(

    {

    el: '#root',
    data:{
        message: 'hello world',
        img: 'https://marcotettamanti.it/wp-content/uploads/2018/10/hello-world.png',
        h1Style: 'font-size: 60px; text-align: center;',
        imgStyle: "height: 500px; display: block; margin: auto;"
    }

})


