
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show");
}


    // Ambil parameter movie dari URL
    const urlParams = new URLSearchParams(window.location.search);
    const movie = urlParams.get('movie');

    // Data film sesuai dengan ID film
    const movies = {
        insideout2: {
            trailer: 'https://www.youtube.com/embed/LEjhY15eCx0?start=1',
            title: 'INSIDE OUT 2',
            duration: '96 min',
            rating: '4.5 *',
            ageRating: 'SU',
            synopsis: `This adventure will take you into the complicated world of emotions. Along with the emotions of Joy, Sadness, Anger, Fear, and Disgust, Riley now also faces Anxiety, a new emotion with an orange color. The presence of Anxiety in Riley's headquarters adds drama to the emotional control room.`
        },
        badboys: {
            trailer: 'https://www.youtube.com/embed/hRFY_Fesa9Q?si=JfNaHIVtx8fOhasP',
            title: 'BAD BOYS: RIDE OR DIE',
            duration: '93 min',
            rating: '4 *',
            ageRating: '17+',
            synopsis: `Detectives Mike Lowrey (Will Smith) and Marcus Burnett (Martin Lawrence) are back in action.The two heroes are now living on the run after their late captain Conrad Howard (Joe Pantoliano) was accused of corruption. However, a video message from the captain suggests that there is a bigger crime going on within the Miami police force.`
        },
        dilan: {
            trailer: 'https://www.youtube.com/embed/-TqgMfZg4Po?si=EcieR2v05_GVUmy0',
            title: 'DILAN 1983 : WO AI NI',
            duration: '116 min',
            rating: '3.5 *',
            ageRating: '13+',
            synopsis: `Dilan's childhood when he was 12 years old. When he was 12 years old, Dilan joined his father on duty in Timor Leste, which was previously called East Timor. Dilan spent around 1.5 years in East Timor and returned to Bandung and went to school at his old place. In 1983, Dilan met a new ethnic Chinese student from Semarang named Mei Lien. Mei Lien's presence at Dilan's school makes him feel like he likes Mei so he wants to learn Mandarin. Dilan's desire to learn Mandarin surprised his family.`
        },
        grandma: {
            trailer: 'https://www.youtube.com/embed/QTx4eY-jIo8?si=DyVi4vpPY0QH7iyq',
            title: 'HOW TO MAKE MILLIONS BEFORE GRANDMA DIES',
            duration: '126 min',
            rating: '5 *',
            ageRating: '13+',
            synopsis: `The story of this film centers on a young man named M. He chooses to leave his job to take care of his grandmother, Amah, who has cancer. However, M's intention to care for Amah is not out of love. Rather, it is to target Amah's inheritance. Driven by the desire to get a million-dollar inheritance, M put aside his dreams as a game caster. He returned home to his terminally ill grandmother to care for her. However, winning Amah's heart was no easy feat. Amah is a tough woman who is difficult to conquer. She is demanding and very difficult to satisfy.`
        },
        garfield: {
            trailer: 'https://www.youtube.com/IeFWNtMo1Fs?si=K6qalJuPJObEc5Zw',
            title: 'THE GARFELD MOVIE',
            duration: '101 min',
            rating: '4 *',
            ageRating: 'SU',
            synopsis: `Garfield (voiced by Chris Pratt), the world-famous, Monday-hating, lasagna-loving indoor cat, is about to have a wild outdoor adventure. After an unexpected reunion with his long-lost father - scruffy street cat Vic (voiced by Samuel L. Jackson) - Garfield and his canine friend Odie are forced from their perfectly pampered life into joining Vic in a hilarious, high-stakes heist.`
        },
        pakutanahjawa: {
            trailer: 'https://www.youtube.com/embed/aOaF02Ao9Bs?si=CF5GlGYnvHKyIey3',
            title: 'PAKU TANAH JAWA',
            duration: '100 min',
            rating: '4 *',
            ageRating: '17+',
            synopsis: `Ningrum has had to face negative views from local residents since childhood because her mother, Handini, was always accused of having sex with many men. The death of one of Handini's close friends further plunges her family into local gossip. Ningrum's life becomes increasingly uneasy when the man she secretly loves, named Jalu, is trapped as Handini's new sacrifice. Ningrum has to face various supernatural terrors. Finally, Ningrum got a clue and asked for help from a Kyai who gave him a powerful spear to destroy black magic on earth.`
        },
        haikyu: {
            trailer: 'https://www.youtube.com/embed/OQu2orbv_KA?si=4Tyolj2KsuLQqNPn',
            title: 'HAIKYU!! THE DUMPSTER BATTLE',
            duration: '86 min',
            rating: '4 *',
            ageRating: '13+',
            synopsis: `Karasuno High School made it through the Miyagi prefecture preliminaries for the Harutaka Volleyball Tournament, which was crowded with strong teams, and advanced to the third round by defeating Hyogo Prefecture representative Inarizaki High School, which was considered one of the favorites for the championship. Their opponent, Nekoma High School, used to have a rivalry with Karasuno, and although their interactions with each other decreased at one point, after Hinata and the others joined the club, they once again became good friends, working out together at training camps and practice games. `
        },
        strangers: {
            trailer: 'https://www.youtube.com/embed/3pZUQmZdOi4?si=rj4VBaZAEYckeGWb',
            title: 'THE STRANGERS : CHAPTER 1',
            duration: '116 min',
            rating: '3 *',
            ageRating: '13+',
            synopsis: `After their car breaks down in an eerie small town, a young couple (Madelaine Petsch and Froy Gutierrez) are forced to spend the night in a remote cabin. Panic ensues as they are terrorized by three masked strangers who strike with no mercy and seemingly no motive in THE STRANGERS: CHAPTER 1, the chilling first entry of this upcoming horror feature film series.`
        },
        conan: {
            trailer: 'https://www.youtube.com/embed/DHJrkN_GeX8?si=Y9IS5m5BQwRXUY3n',
            title: 'DETECTIVE CONAN VS KID THE PHANTOM THIEF',
            duration: '167 min',
            rating: '4 *',
            ageRating: 'SU',
            synopsis: `High school student Kuroha Kaido discovers his late father's secret life as the Phantom Thief Kid, inherits his costume, and embarks on a quest to uncover the mysterious organization behind his father's murder.`
        },
        theplot: {
            trailer: 'https://www.youtube.com/embed/NZ6kuHyiSEU?si=bI1c-93HALeWbvr2',
            title: 'THE PLOT',
            duration: '85 min',
            rating: '3 *',
            ageRating: '13+',
            synopsis: `The story is about a hitman named Brain who suffers an accident during a murder and struggles to survive while suspecting everyone around him to find out who is behind the accident after barely surviving.`
        },
        ipar: {
            trailer: 'https://www.youtube.com/embed/EW5vFLBpOfw?si=Mbon1PXHsKWrW6iH',
            title: 'IPAR ADALAH MAUT',
            duration: '143 min',
            rating: '5 *',
            ageRating: '17+',
            synopsis: `Love is unpredictable. Nisa engages with Aris, a brilliant professor with a fascinating personality. Their marriage appears to be a picture-perfect fairytale, especially after the birth of their first child, Raya. However, just like love, problems also arise out of the blue. Nisa's mother entrusts her second daughter, Rani, to live with Aris and Nisa. Initially, Rani keeps her distance with Aris. It does not last long though, before the window to a forbidden relationship is opened. Behind Nisa's back, he develops an affair with his wife's sister.`
        },
        sengkolo: {
            trailer: 'https://www.youtube.com/embed/mB8DCB42w8E?si=7EVoUE70R0U_Knkl',
            title: 'SENGKOLO: MALAM SATU SURO',
            duration: '125 min',
            rating: '4 *',
            ageRating: '13+',
            synopsis: `Ibrahim, a mortician who lost his family in a terrible incident, quits his job. When a rich family in their village died mysteriously, the residents believed it was black magic. There were no bathers who wanted to bathe them, until the village head asked Ibrahim for help. Although reluctant, Ibrahim finally agreed. After a year, he finds clues about his family's death and confronts the evil that awaits him in the cursed house. Will he be able to fight the devil with his lost faith?`
        }
    };

    //privacy policy
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
    document.querySelector('#details').textContent = `${movies[movie].duration} | ${movies[movie].rating} | ${movies[movie].ageRating}`;
    document.querySelector('.righter p').textContent = movies[movie].synopsis;

    document.getElementById('schedule').addEventListener('click', function() {
        window.location.href = 'index.html#theaters';
    });

    $(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const movie = urlParams.get('movie');

    // Load reviews for the specific movie
    function loadReviews(movieId) {
        var reviews = JSON.parse(localStorage.getItem('movieReviews')) || [];
        var reviewsContainer = $('#reviews');
        reviewsContainer.empty();
        reviews.forEach(function(review) {
            if (review.movie === movieId && review.rating !== '1') { // Filter out reviews with 1 star rating
                var newReview = $('<div></div>').addClass('review');
                newReview.html(`<strong>${review.name}</strong> rated <strong>${review.rating}</strong> stars<br>${review.feedback}`);
                reviewsContainer.append(newReview);
            }
        });
    }

    // Load reviews when the page loads
    loadReviews(movie);

    $('#reviewForm').on('submit', function(event) {
        event.preventDefault();  // Prevent the default form submission

        // Get the form values
        var name = $('#name').val();
        var rating = $('#rating').val();
        var feedback = $('#feedback').val();

        // Only proceed if rating is valid (not '1')
        if (rating === '1') {
            alert('Please select a valid rating.');
            return;
        }

        // Save review to local storage with movie identifier
        var reviews = JSON.parse(localStorage.getItem('movieReviews')) || [];
        var review = {
            movie: movie,
            name: name,
            rating: rating,
            feedback: feedback
        };
        reviews.push(review);
        localStorage.setItem('movieReviews', JSON.stringify(reviews));

        // Clear the form fields
        $('#name').val('');
        $('#rating').val('1');
        $('#feedback').val('');

        // Reload reviews for the current movie
        loadReviews(movie);
    });
});

 // Function to toggle the submit review button appearance based on login status
function toggleSubmitReviewButton() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const submitReviewButton = document.getElementById('submit-review-button');

    if (isLoggedIn) {
        submitReviewButton.classList.remove('disabled');
    } else {
        submitReviewButton.classList.add('disabled');
    }
}

// Show login required popup
function showLoginRequiredPopup() {
    document.getElementById('login-required-popup').classList.add('show');
}

// Close popup
function closePopup(element) {
    const popupForm = element.closest('.popup-form');
    popupForm.classList.remove('show');
    
    if (popupForm.id === 'login-popup') {
        resetLoginForm();
    }
}

// Add event listener for the submit review button
document.getElementById('submit-review-button').addEventListener('click', function(event) {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
        event.preventDefault();
        showLoginRequiredPopup();
    }
});

// Add event listeners for closing the popup
document.querySelectorAll('.close-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        closePopup(btn);
    });
});

window.addEventListener('click', function(event) {
    if (event.target.classList.contains('popup-form')) {
        event.target.classList.remove('show');
    }
});

// Call the toggleSubmitReviewButton function on page load
document.addEventListener('DOMContentLoaded', function() {
    toggleSubmitReviewButton();
    checkLoginStatus();
});



// Function to check login status
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const myMtixBtn = document.getElementById('my-mtix-btn');
    const myMtixDropdown = document.getElementById('my-mtix-dropdown');

    if (isLoggedIn) {
        myMtixBtn.innerHTML = '<i class="fa-solid fa-user"></i>';
        myMtixDropdown.innerHTML = `
            <a href="#" id="logout-link"><i class="fa-solid fa-sign-out"></i> Logout</a>
        `;

        document.getElementById('logout-link').addEventListener('click', function(event) {
            event.preventDefault();
            localStorage.removeItem('isLoggedIn');
            myMtixBtn.innerHTML = 'My M-tix';
            myMtixDropdown.innerHTML = `
                <a href="#" id="login-link"><i class="fa-solid fa-sign-in"></i> Login</a>
            `;
            setupLoginLink();
        });
    } else {
        myMtixBtn.innerHTML = 'My M-tix';
        myMtixDropdown.innerHTML = `
            <a href="#" id="login-link"><i class="fa-solid fa-sign-in"></i> Login</a>
        `;
        setupLoginLink();
    }
}

// Function to setup login link
function setupLoginLink() {
    document.getElementById('login-link').addEventListener('click', function(event) {
        event.preventDefault();
        showLoginPopup();
    });
}

// Initial setup
document.addEventListener('DOMContentLoaded', function() {
    toggleSubmitReviewButton();
    checkLoginStatus();
});