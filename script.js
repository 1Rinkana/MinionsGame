const questions = [
    {
        text: "Magst du Maksym?",
        image: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXVlN3Y4bDNuc3hoZHUwc282NTRnbmI2cGVpdm1tZGpydGkyNDVyZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xZx7ht7MH8Wqs/giphy.gif"
    },
    {
        text: "Liebst du Maksym?",
        image: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeW1laXBvdXE3am5qMGx2ZjcyNXk0OW96MTVpZXNlbGY4MmtrZnVoNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iCJFckRSHG608/giphy.gif"
    },
    {
        text: "Willst du mit Maksym ins Kino gehen?",
        image: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWZkczh6b3RxcmU5dTR1bGZrMG42dHlvb3k5YWNsbzJvYnZ6cmhqNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BgCKI6HGLcG5QmGjT0/giphy.gif"
    },
    {
        text: "Wills du gern einen Popcorn oder ein Getränk bekommen?",
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/74d4dd87-ae1e-473f-92a5-f00a087c8a82/d9nljy5-c91f1dd1-27be-48be-8449-2edca04697cd.jpg/v1/fill/w_1600,h_961,q_75,strp/minion_and_spiderman_by_ensarofficial_d9nljy5-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTYxIiwicGF0aCI6Ii9mLzc0ZDRkZDg3LWFlMWUtNDczZi05MmE1LWYwMGEwODdjOGE4Mi9kOW5sank1LWM5MWYxZGQxLTI3YmUtNDhiZS04NDQ5LTJlZGNhMDQ2OTdjZC5qcGciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.vf36wsuLbkYr3EhtZuhjdGeecYSunlbJAuA6cfjxbHA"
    }
];

let currentQuestionIndex = 0;
const CORRECT_PASSWORD = '  ';

// DOM Elements
const passwordInput = document.getElementById('passwordInput');
const submitBtn = document.getElementById('submitBtn');
const hintBtn = document.getElementById('hintBtn');

const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const option1Btn = document.getElementById('option1Btn');
const option2Btn = document.getElementById('option2Btn');

const standardButtons = document.getElementById('standardButtons');
const finalButtons = document.getElementById('finalButtons');

const loginView = document.getElementById('loginView');
const quizView = document.getElementById('quizView');
const gameOverView = document.getElementById('gameOverView');
const endingAView = document.getElementById('endingAView');
const endingBView = document.getElementById('endingBView');

const questionText = document.getElementById('questionText');
const quizImage = document.getElementById('quizImage');
const errorMessage = document.getElementById('errorMessage');
const hintMessage = document.getElementById('hintMessage');

const playAgainButtons = document.querySelectorAll('.play-again-btn');

function hideAllViews() {
    loginView.classList.add('hidden');
    quizView.classList.add('hidden');
    gameOverView.classList.add('hidden');
    endingAView.classList.add('hidden');
    endingBView.classList.add('hidden');
}

function showQuestion() {
    const current = questions[currentQuestionIndex];
    questionText.textContent = current.text;
    quizImage.src = current.image;

    // Check if it's the final question
    if (currentQuestionIndex === questions.length - 1) {
        standardButtons.classList.add('hidden');
        finalButtons.classList.remove('hidden');
    } else {
        standardButtons.classList.remove('hidden');
        finalButtons.classList.add('hidden');
    }
}

function animateBananas() {
    const bananaContainer = document.createElement('div');
    bananaContainer.classList.add('banana-container');
    document.body.appendChild(bananaContainer);

    for (let i = 0; i < 20; i++) {
        const banana = document.createElement('img');
        banana.src = 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3RyZHVzZzltdDN2azVmZnRrMTNvaG11MnJud2NnbWRpeGpvMjYxMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/5wFxv9v1c3XUlo7ywR/giphy.gif';
        banana.classList.add('banana');
        banana.style.left = Math.random() * 100 + 'vw';
        banana.style.animationDelay = Math.random() * 2 + 's';
        bananaContainer.appendChild(banana);
    }

    setTimeout(() => {
        if (document.body.contains(bananaContainer)) {
            document.body.removeChild(bananaContainer);
        }
    }, 7000);
}

function animateCryingMinion() {
    const cryingMinionContainer = document.createElement('div');
    cryingMinionContainer.classList.add('crying-minion-container');
    document.body.appendChild(cryingMinionContainer);

    const cryingMinion = document.createElement('img');
    cryingMinion.src = 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjdzY25zYWI4dzU5M3J5eGlpNDl3Nm51aHRmNHZqMHR6Z3EzbGxyZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/xJFUMgl6gUtVguQwfV/giphy.gif';
    cryingMinion.classList.add('crying-minion');
    cryingMinionContainer.appendChild(cryingMinion);

    setTimeout(() => {
        if (document.body.contains(cryingMinionContainer)) {
            document.body.removeChild(cryingMinionContainer);
        }
    }, 5000);
}

// Login Handler
submitBtn.addEventListener('click', () => {
    if (passwordInput.value === CORRECT_PASSWORD) {
        hideAllViews();
        quizView.classList.remove('hidden');
        currentQuestionIndex = 0;
        showQuestion();

        passwordInput.value = '';
        errorMessage.textContent = '';
        hintMessage.classList.add('hidden');
    } else {
        errorMessage.textContent = 'Falsches Passwort. Versuch es erneut!';
    }
});

// Hint Toggle
hintBtn.addEventListener('click', () => {
    hintMessage.classList.toggle('hidden');
});

// "Yes" Click -> Next question with banana animation
yesBtn.addEventListener('click', () => {
    animateBananas();
    currentQuestionIndex++;
    showQuestion();
});

// "No" Click -> Game Over screen + crying Minion animation
noBtn.addEventListener('click', () => {
    animateCryingMinion();
    hideAllViews();
    gameOverView.classList.remove('hidden');
});

// Final Question - Option 1
option1Btn.addEventListener('click', () => {
    animateBananas();
    hideAllViews();
    endingAView.classList.remove('hidden');
});

// Final Question - Option 2
option2Btn.addEventListener('click', () => {
    hideAllViews();
    endingBView.classList.remove('hidden');
});

// Play / Try Again Button Logic
playAgainButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        hideAllViews();
        loginView.classList.remove('hidden');
    });
});

// Create a custom banana element that follows the mouse
const customCursor = document.createElement('img');
customCursor.src = 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnJvY2loeW9vNnc1eHpxMHkzbnViMnhmZTdtaHFtMW16em56czJxNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/JH6TIYsmQJ8FFDuDHI/giphy.gif';

// Style the element so it floats above everything
Object.assign(customCursor.style, {
    position: 'fixed',
    width: '70px',
    height: 'auto',
    pointerEvents: 'none', // Allows clicking through the banana to buttons below
    zIndex: '9999',
    transition: 'transform 0.05s ease-out',
    display: 'none' // Hidden until mouse moves
});

document.body.appendChild(customCursor);

// Update banana position on mouse move
window.addEventListener('mousemove', (e) => {
    customCursor.style.display = 'block';
    customCursor.style.left = `${e.clientX}px`;
    customCursor.style.top = `${e.clientY}px`;
});
