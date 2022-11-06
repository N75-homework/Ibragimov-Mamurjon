var ism = prompt('Ismingizni kiriting');
var OTM = prompt('OTM lar dan birini tanlang: 1.TDIU 2.TDMI 3.MU');
var ball = prompt( ism, 'balingizni kiriting:');




var grant = 'Grant asosida oqishga tavsiya qilindingiz';
var kantrakt = 'Kontrakt asosida oqishga tavsiya qilindingiz';
var past = 'Oqishga tavsiya qilinmadingiz';
var xato = 'Siz notgri malumot kiritdingiz';




if (OTM == 1){
    if(ball >= 150){
        alert(grant);
    }
    else if( ball > 120){
        alert(kantrakt);
        
    }
    else if(120 >= ball > 0){
        alert(past);
        
    }
    else{
        alert(xato);
    }
}else if(OTM == 2){
    if(ball >= 160){
        alert(grant);
    }
    else if(ball > 100){
        alert(kantrakt);
    }
    else if(100 >= ball > 0){
        alert( past);
    }
    else{
        alert(xato);
    }
}else if(OTM == 3){
    if(ball >= 180){
        alert(grant);
    }
    else if( ball > 168){
        // console.log(kantrakt);
        alert(kantrakt);
    }
    else if(168 >= ball > 0){
        // console.log(no);
        alert( past);
    }
    else{
        alert(xato);
    }
}else{
    alert(xato);
}
