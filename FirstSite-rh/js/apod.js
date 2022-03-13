const apiDate = document.getElementById('apiDate');
const apiDate2 = document.getElementById('apiDate2');
const apiExplanation = document.getElementById('apiExplanation');
var apiHDimg = document.getElementById('apiHDimg');
var apiHDimg2 = document.getElementById('apiHDimg2');
const apiTitle = document.getElementById('apiTitle');
const iframe = document.getElementById('apiVid1');

fetch('https://api.nasa.gov/planetary/apod?api_key=vWv8BPRnKTFgEUlVlrAMqwx9BxHyZJSksox3ar5V')
    .then(res => res.json())
    .then(data => {
        if (apiHDimg.media_type === "image") {
            apiHDimg.src = "../img/NASA_modal.jpg";
            apiHDimg2.src = "../img/NASA_modal.jpg";
            iframe.style.dispay = "block";
            iframe.src = data.url;
            apiHDimg.alt = '-videos not yet supported-';
            apiHDimg2.alt =  '-videos not yet supported-';
            } else {
            apiDate.innerHTML = 'Date: ' + data.date;
            apiDate2.innerHTML = 'Date: ' + data.date;
            apiExplanation.innerHTML = data.explanation;
            apiHDimg.src = data.url;
            apiHDimg2.src = data.hdurl;
            apiTitle.innerHTML = data.title;
            iframe.style.dispay = "none";
        }
    })


// Gives today's date.
now = new Date();
localtime = now.toString();
utctime = now.toGMTString();

day = now.getDay();
month = now.getMonth();
year = now.getYear();

now = new Date();
localtime = now.toString();
utctime = now.toGMTString();

day = now.getDate();
month = now.getMonth() + 1;
year = now.getFullYear();

//Picks a random date from APOD start (June 15, 1995)
const full_date = year + '-' + '0' + month + '-' + '0' + day;
const random_full_date = (Math.floor(Math.random() * (26) + 1995)) + '-' + (Math.floor(Math.random() * (12) + 1)) + '-' + (Math.floor(Math.random() * (28) + 1));
const makedate = year - 120 + 2009 + '-' + month + '-' + day;


// APOD Random start
const api2Date = document.getElementById('api2Date');
const api2Date2 = document.getElementById('api2Date2');
const api2Explanation = document.getElementById('api2Explanation');
const api2HDimg = document.getElementById('api2HDimg');
const api2HDimg2 = document.getElementById('api2HDimg2');
const api2Title = document.getElementById('api2Title');


fetch(`https://api.nasa.gov/planetary/apod?api_key=vWv8BPRnKTFgEUlVlrAMqwx9BxHyZJSksox3ar5V&date=${random_full_date}`)
    .then(res => res.json())
    .then(data => {
        api2Date.innerHTML = 'Date: ' + data.date;
        api2Date2.innerHTML = 'Date: ' + data.date;
        api2Explanation.innerHTML = data.explanation;
        api2HDimg.src = data.url;
        api2HDimg2.src = data.hdurl;
        api2Title.innerHTML = data.title;
    })