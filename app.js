// importo express nel file 

const express = require("express");
const app = express();
const port = 3000;

//assets statici di expressjs (middleware)

app.use(express.static('public'));

// rotta path "home"

app.get('/', (req, res) => {
    res.send("<h1>Server del mio blog</h1>")
});


// rotta path bacheca
app.get('/bacheca', (req, res) => {

    const posts = [
        {
            titolo: "Ciambellone fatto in casa",
            contenuto: "Un dolce soffice e semplice, perfetto per colazione o merenda.",
            immagine: "/images/ciambellone.jpeg",
            tags: ["dolci", "forno", "colazione"]
        },
        {
            titolo: "Cracker alla barbabietola",
            contenuto: "Snack croccanti e colorati, sani e gustosi.",
            immagine: "/images/cracker_barbabietola.jpeg",
            tags: ["salato", "snack", "vegetariano"]
        },
        {
            titolo: "Pane fritto dolce",
            contenuto: "Ricetta tradizionale povera ma deliziosa, con zucchero e cannella.",
            immagine: "/images/pane_fritto_dolce.jpeg",
            tags: ["tradizione", "dolci", "street food"]
        },
        {
            titolo: "Pasta fresca artigianale",
            contenuto: "Pasta fatta a mano con ingredienti semplici e genuini.",
            immagine: "/images/pasta.jpeg",
            tags: ["primi", "italiano", "cucina"]
        },
        {
            titolo: "Torta paesana",
            contenuto: "Dolce rustico lombardo a base di pane, cacao e amaretti.",
            immagine: "/images/torta_paesana.jpeg",
            tags: ["dolci", "tradizione", "lombardia"]
        }
    ];

    // ritorniamo res con json array di oggetti posts
    res.json({
        total: posts.length,
        posts: posts
    });

})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})