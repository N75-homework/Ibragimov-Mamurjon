/* Swipe left/right on Tinder using speechrecognition */
var phrases = ['yes', 'no'];
var recog = new ChromeSpeechRecognition(phrases)
recog.onresult = function(phrase, confidence){
    phrase = phrase.toLowerCase()
    document.querySelector('h3#heard').innerHTML = 'I heard you say: ' + phrase
    if (phrases.indexOf(phrase) > -1) 
        switch (phrase){
            case 'yes':
                var btn = document.querySelector('button[data-testid="gamepadLike"]') // like button
                if (btn) btn.click()
                break;
                
            case 'no':
                var btn = document.querySelector('button[data-testid="gamepadDislike"]') // dislike button
                if (btn) btn.click()
                break;
        }
    else
        console.log('unrecognized phrase', phrase)    
}

var words = "Words to say: " + phrases.join(', ')
document.querySelector('h3#words').innerHTML = words
