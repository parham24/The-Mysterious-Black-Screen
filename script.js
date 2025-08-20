// گرفتن عناصر از HTML
const body = document.body;
const footstepSound = document.getElementById('footstepSound');
const secretMessage = document.getElementById('secretMessage');
const key = document.getElementById('key');
const lock = document.getElementById('lock');

// بخش 1: پخش صدای پا با حرکت ماوس
body.addEventListener('mousemove', () => {
    footstepSound.play();
});

// بخش 2: نمایش پیام با کلیک راست
body.addEventListener('contextmenu', (event) => {
    event.preventDefault(); // جلوگیری از باز شدن منوی پیش‌فرض کلیک راست
    secretMessage.style.display = 'block'; // نمایش پیام
});

// بخش 3: بررسی تایپ برعکس
let userInput = '';
const targetPhrase = 'open sesame'; // جمله کلیدی که کاربر باید برعکس تایپ کند
const reversedTarget = targetPhrase.split('').reverse().join(''); // "emas es nepo"

body.addEventListener('keydown', (event) => {
    userInput += event.key.toLowerCase();

    // اگر ورودی کاربر با جمله برعکس شده مطابقت داشت
    if (userInput.includes(reversedTarget)) {
        // نمایش کلید و قفل
        key.style.display = 'block';
        lock.style.display = 'block';
        secretMessage.style.display = 'none'; // مخفی کردن پیام قبلی
    }
});

// بخش 4: باز کردن قفل (این بخش نیاز به کد پیچیده‌تر برای کشیدن و رها کردن دارد)
// این یک نمونه ساده است که با کلیک روی قفل، باز می‌شود
lock.addEventListener('click', () => {
    alert("قفل باز شد! به دنیای رازآلود خوش آمدی.");
    // در اینجا می‌توانید کاربر را به صفحه دیگری هدایت کنید
    // window.location.href = "another-page.html";
});