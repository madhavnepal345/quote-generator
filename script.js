const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
        category: "inspiration"
    },
    {
        text: "In the middle of difficulty lies opportunity.",
        author: "Albert Einstein",
        category: "inspiration"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt",
        category: "inspiration"
    },
    {
        text: "Science is not only a disciple of reason but also one of romance and passion.",
        author: "Stephen Hawking",
        category: "science"
    },
    {
        text: "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
        author: "Marie Curie",
        category: "science"
    },
    {
        text: "The good thing about science is that it's true whether or not you believe in it.",
        author: "Neil deGrasse Tyson",
        category: "science"
    },
    {
        text: "The only true wisdom is in knowing you know nothing.",
        author: "Socrates",
        category: "wisdom"
    },
    {
        text: "Knowing yourself is the beginning of all wisdom.",
        author: "Aristotle",
        category: "wisdom"
    },
    {
        text: "Wisdom is not a product of schooling but of the lifelong attempt to acquire it.",
        author: "Albert Einstein",
        category: "wisdom"
    },
    {
        text: "The journey of a thousand miles begins with one step.",
        author: "Lao Tzu",
        category: "inspiration"
    }
];
const quoteText=document.getElementById('quoteText');
const quoteAuthor=document.getElementById('quoteAuthor');
const quoteCategory=document.getElementById('quoteCategory');
const prevBtn=document.getElementsById('prevBtn');
const nextBtn=document.getElementById('nextBtn');
const randomBtn=document.getElementById('randomBtn');
const categorySelect=document.getElementById('category');
const themeToggle=document.getElementById('themeToggle');
const increaseFontBtn=document.getElementById('increaseFont');
const decreaseFontBtn=document.getElementById('decreaseFont');
const copyBtn=document.getElementById('copyBtn');
const shareBtn=document.getElementById('shareBtn');
const favoriteBtn=document.getElementById('favorites-container');
const favoriteList=document.getElementById('favorites-list');

let currentIndex=0;
let currentCategory='all';
let filteredQuotes=[...quotes];
let baseFontSize=24;

function init(){
    displayQuote(currentIndex);
    setupEvenListners();
    checkThemePreference();

}

function displayQuote(index)
{
    if(filteredQuotes.length===0)
    {
        quoteText.textContent="No quotes available in this category";
        quoteAuthor.textContent="";
        quoteCategory.textContent="";
        return;

    }
    if(index>=filteredQuotes.length)
    {
        index=0;
    }
    else if(index<0)
    {
        index=filteredQuotes.length-1;
    }
    currentIndex=index;
    const quote=filteredQuotes[currentIndex];

    quoteText.textContent=quote.text;
    quoteAuthor.textContent='-${quote.author}';
    quoteCategory.textContent=quote.category;

    quoteText.style.fontSize='${baseFontSize}px';
}

function filteredQuotes(category){
    currentCategory=category;
    if(category==='all')
    {
        filteredQuotes=[...quotes];

    }
    else{
        filteredQuotes=quotes.filter(quote=>quote.category===category);
    }
    currentIndex=0;
    displayQuote(currentIndex);
}

function setupEvenListners(){
    prevBtn.addEverntListener('click',()=>
    {
        currentIndex--;
        displayQuote(currentIndex);
    });
    nextBtn.addEventListener('click',()=>{
        currentIndex++;
        displayQuote(currentIndex);
    });
    
}