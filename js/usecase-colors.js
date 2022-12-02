var phrases = 'orange|yellow|blue|green|red|black|white|pink|gold|magenta|purple|brown'.split('|')
var recog = new ChromeSpeechRecognition(phrases)

recog.onresult = function(phrase, confidence){
    phrase = phrase.toLowerCase()
    document.querySelector('h3#heard').innerHTML = 'I heard you say: ' + phrase
    if (phrases.indexOf(phrase) > -1) 
        document.body.style.backgroundColor = phrase
    else
        console.log('unrecognized phrase', phrase)    
}

var words = "Words to say: " + phrases.join(', ')
document.querySelector('h3#words').innerHTML = words
