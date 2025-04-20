 
    
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show");
}

    // Ambil parameter movie dari URL
    const urlParams = new URLSearchParams(window.location.search);
    const movie = urlParams.get('movie');

    // Data film sesuai dengan ID film
    const movies = {
        exorcism: {
            trailer: 'https://www.youtube.com/embed/I1lNNd_klK4?si=NlZcVu2GYQULPtlX',
            title: 'THE EXORCISM',
            ReleaseDate: 'June 2024',
            MovieType: 'Horror, Thriller',
            production: 'Miramax',
            casts: 'Russell Crowe, Ryan Simpkins, Sam Worthington, Chloe Bailey, Adam Goldberg, Adrian Pasdar, David Hyde Pierce, Tracey Bonner, Marcenae Lynette, Joshua John Miller',
            synopsis: `A troubled actor begins to exhibit a disruptive behavior while shooting a horror film. His estranged daughter wonders if he's slipping back into his past addictions or if there's something more sinister at play.`
        },
        despicableme4: {
            trailer: 'https://www.youtube.com/embed/qQlr9-rF32A?si=E_eWWcQ1CEBEQ-d-',
            title: 'DESPICABLE ME 4',
            ReleaseDate: 'July 2024',
            MovieType: 'Animation, Comedy',
            production: 'Universal Pictures',
            casts: 'Steve Carell, Kristen Wiig, Joey King, Will Ferrell, Sofia Vergara, Miranda Cosgrove, Dana Gaier, Madison Skyy Polan, Pierre Coffin, Steve Coogan, Stephen Colbert, Chloe Fineman',
            synopsis: `Gru, Lucy, Margo, Edith, dan Agnes siap menyambut anggota baru di keluarga. Di tengah kebahagiaan, Gru harus menghadapi penjahat bernama Maxime Le Mal yang berniat membalas dendam kepada Gru. Apakah Gru bisa menyelamatkan keluarga kecilnya?`
    },
        twisters: {
            trailer: 'https://www.youtube.com/embed/Jm27YjLnPHc?si=8KM8iDQImYbY6z5C',
            title: 'TWISTERS',
            ReleaseDate: 'July 2024',
            MovieType: 'Action, Adventure',
            production: 'Warner Bros. Pictures',
            casts: 'Glen Powell, Daisy Edgar-Jones, Maura Tierney, Kiernan Shipka, Katy O Brian, David Corenswet, Anthony Ramos, Sasha Lane, Paul Scheer, Daryl McCormack, Brandon Perea',
            synopsis: `Tyler Owens (Glen Powell) and Kate Cooper (Daisy Edgar-Jones) are hurricane researchers and storm chasers who put their lives on the line in an effort to test a warning system that can mitigate Oklahoma's frequent hurricanes.`
    },
        deadpool: {
            trailer: 'https://www.youtube.com/embed/73_1biulkYk?si=gLPK0bBiTr73G6V8',
            title: 'DEADPOOL VS WOLVERINE',
            ReleaseDate: 'July 2024',
            MovieType: 'Action, Sci-Fi',
            production: 'Walt Disney Pictures',
            casts: 'Ryan Reynolds, Hugh Jackman, Emma Corrin, Morena Baccarin, Rob Delaney, Karan Soni, Leslie Uggams, Matthew Macfadyen',
            synopsis: `The irresponsible Deadpool or Wade Wilson (Ryan Reynolds) is trusted to change the history of the Marvel Cinematic Universe (MCU) with Wolverine (Hugh Jackman). They work together to defeat a common enemy.`
    },
        myboo: {
            trailer: 'https://www.youtube.com/embed/saBiD7UJt00?si=kp8-Wk86mLpeqCG_',
            title: 'MY BOO',
            ReleaseDate: 'July 2024',
            MovieType: 'Romance, Comedy, Horror',
            production: 'RA Pictures',
            casts: 'Maylada Susri, Sutthirak Subvijitra, Chalermpol Thikampornteerawong, Tatchaya Supatanyasatit, Dharmthai Plangsilp, Punyawee Jungcharoen, Narttida Pitakwararat, Arunphong Naraphan, Kittiphong Boonprakh',
            synopsis: `Joe (Sutthirak Subvijitra), a gamer, inherits a haunted house and its resident ghosts. However, neither the humans nor the ghosts want to leave the house. Eventually Joe and the ghosts decide to work together to run a haunted house ride to attract visitors for money. As time goes by Joe finds the ghosts there very charming, especially Anong (Maylada Susri), who intrigues him. Will these two people from two different worlds be able to overcome their differences and be together?`
    }
}

const privacyPolicyLink = document.getElementById('privacy-policy-link');
const popupForm = document.getElementById('privacy-policy');
const closeBtn = document.querySelector('.close-btn');


privacyPolicyLink.addEventListener('click', function(event) {
    event.preventDefault();
    popupForm.classList.remove('hide');
});


closeBtn.addEventListener('click', function() {
    popupForm.classList.add('hide');
});


window.addEventListener('click', function(event) {
    if (event.target === popupForm) {
        popupForm.classList.add('hide');
    }
});


    // Isi data film ke dalam template
    document.querySelector('#title').textContent = movies[movie].title;
    document.querySelector('iframe').src = movies[movie].trailer;
    document.querySelector('#details').textContent = `${movies[movie].ReleaseDate} | ${movies[movie].MovieType} | ${movies[movie].production}`;
    document.querySelector('.righter p').textContent = movies[movie].synopsis;
    document.querySelector('#casts').textContent = movies[movie].casts;



