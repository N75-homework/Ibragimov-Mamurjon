var getFullName = prompt('Full Name ?')
var fullName = document.getElementsByClassName('box__right__title');
fullName[0].innerHTML = getFullName;


var getjob = prompt('Who are you ?', "Programmer");
var job = document.getElementsByClassName('job');
job[0].innerHTML = getjob;


var getExperience = prompt('In what kind of job did you worked and when?  Please write fully. All your job which you worked.');
var experience = document.getElementsByClassName('experience');

experience[0].innerHTML = getExperience;

var getinformation = prompt('I have to know the basic things about you. Your biography.');
var about = document.getElementsByClassName('about__me');
about[0].innerHTML=getinformation;


var getPhoneNumber = prompt('Please write your Phone number');
var number = document.getElementsByClassName('number__phone');
number[0].innerHTML=getPhoneNumber;

var getEmail = prompt('Please write your Email');
var email = document.getElementsByClassName('number__email');
email[0].innerHTML=getEmail;

var getAdress = prompt('Please write your Current location');
var adress = document.getElementsByClassName('number__adress');
adress[0].innerHTML=getAdress;


var getLanguage = prompt('Please write your native language');

var language = document.getElementsByClassName('language__title');

language[0].innerHTML = getLanguage;

var getLanguage2 = prompt('Please write which foreign language do you know');

var language2 = document.getElementsByClassName('language__title2');

language2[0].innerHTML = getLanguage2;