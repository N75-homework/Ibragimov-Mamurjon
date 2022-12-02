/* Flipboard.com scroll up or down */
var phrases = ['up', 'down'];
var recog = new ChromeSpeechRecognition(phrases)

document.querySelector('html').style.scrollBehavior = "smooth"

recog.onresult = function(phrase, confidence){
    phrase = phrase.toLowerCase()
    document.querySelector('h3#heard').innerHTML = 'I heard you say: ' + phrase
    if (phrases.indexOf(phrase) > -1) 
        switch (phrase){
            case 'up':
                document.documentElement.scrollTop +=250;
                break;
                
            case 'down':
                document.documentElement.scrollTop -=250;
                break;
        }
    else
        console.log('unrecognized phrase', phrase)    
}

var words = "Words to say: " + phrases.join(', ')
document.querySelector('h3#words').innerHTML = words
