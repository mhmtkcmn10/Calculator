function calculator() {

    document.getElementsByTagName('body')[0].innerHTML = '\
    <div class="anagovde">\
    <input type="text" id="hesapAlani">\
    <div class="ilksira">\
    <input type="submit" id="onc" value="ON/C" onclick="sifirekle()">\
    <input type = "submit" id = "ce" value = "CE" onclick="temizle()">\
    <input type="submit" id="mrc" value="MRC" onclick="hafizaalma()">\
    <input type="submit" id="meksi" value="M-" onclick="hafizacikar()">\
    <input type="submit" id="martı" value="M+" onclick="hafizatopla()">\
    </div>\
    <div class="ikisira">\
    <input type="submit" id="sayiyedi" value="7" onclick="sayiYaz(7)">\
    <input type = "submit" id = "sayisekiz" value = "8" onclick="sayiYaz(8)">\
    <input type="submit" id="sayidokuz" value="9" onclick="sayiYaz(9)">\
    <input type="submit" id="bolu" value="%" onclick="yuzde()">\
    <input type="submit" id="kok" value="√" onclick="kokalma()">\
    </div>\
    <div class="ucsira">\
    <input type="submit" id="sayidört" value="4" onclick="sayiYaz(4)">\
    <input type = "submit" id = "sayibes" value = "5" onclick="sayiYaz(5)" >\
    <input type="submit" id="sayialti" value="6" onclick="sayiYaz(6)">\
    <input type="submit" id="carpma" value="X" onclick="carp()">\
    <input type="submit" id="yuzde" value="÷" onclick="bolme()">\
    </div>\
    <div class="dortsira">\
    <input type="submit" id="sayibir" value="1" onclick="sayiYaz(1)">\
    <input type = "submit" id = "sayiiki" value = "2" onclick="sayiYaz(2)" >\
    <input type="submit" id="sayiuc" value="3" onclick="sayiYaz(3)">\
    <input type="submit" id="sayisifir" value="0" onclick="sayiYaz(0)">\
    <input type="submit" id="nokta" value="." onclick="nokta()">\
    <input type="submit" id="artıbolueksi" value="+/-" onclick="artieksi()">\
    </div>\
    <div class="besira">\
    <input type="submit" id="arti" value="+" onclick="topla()">\
    </div>\
    <div class="altisira">\
    <input type="submit" id="eksi" value="-" onclick="cikar()">\
    <input type="submit" id="esittir" value="=" onclick="esit()">\
    </div>\
    </div>\
                '
}

// function sayiYaz(deger) {
//     // document.getElementById('hesapAlani').value = document.getElementById('hesapAlani').value + deger;
//     document.getElementById('hesapAlani').value = document.getElementById('hesapAlani').value + deger;

// }


var gecicideger;

function hafizatopla() {

    if(gecicideger!=undefined)
    {
        document.getElementById('hesapAlani').value = parseFloat(document.getElementById('hesapAlani').value) + parseFloat(gecicideger);
    }
}

function hafizacikar() {

    if(gecicideger!=undefined)
    {
        document.getElementById('hesapAlani').value = parseFloat(document.getElementById('hesapAlani').value) - parseFloat(gecicideger);
    }
}


function hafizaalma() {

    if (document.getElementById('hesapAlani').value != '') {

        gecicideger = document.getElementById('hesapAlani').value;
        document.getElementById('hesapAlani').value = '';
    }
}
// function topla() {

//     if (gecicideger != undefined) {

//         document.getElementById('hesapAlani').value = parseInt(gecicideger) + parseInt(document.getElementById('hesapAlani').value);

//     }
//     else {
//         gecicideger = parseInt(document.getElementById('hesapAlani').value);
//         document.getElementById('hesapAlani').value = '';

//     }


// }

// function cikar() {
//     if (gecicideger != undefined) {
//         document.getElementById('hesapAlani').value = gecicideger - parseInt(document.getElementById('hesapAlani').value);

//     }
//     else {
//         gecicideger = parseInt(document.getElementById('hesapAlani').value);
//         document.getElementById('hesapAlani').value = '';

//     }
// }

// function carp() {
//     if (gecicideger != undefined) {
//         document.getElementById('hesapAlani').value = gecicideger * parseInt(document.getElementById('hesapAlani').value);

//     }
//     else {
//         gecicideger = parseInt(document.getElementById('hesapAlani').value);
//         document.getElementById('hesapAlani').value = '';

//     }
// }

// function bolme() {
//     if (gecicideger != undefined) {
//         document.getElementById('hesapAlani').value = gecicideger / parseInt(document.getElementById('hesapAlani').value);

//     }
//     else {
//         gecicideger = parseInt(document.getElementById('hesapAlani').value);
//         document.getElementById('hesapAlani').value = '';

//     }
// }




function sayiYaz(sayi) {
    if (document.getElementById('hesapAlani').value == 0) {
        document.getElementById('hesapAlani').value = sayi; 
    }

    else {
        
        document.getElementById('hesapAlani').value += sayi;
    }
}

function topla()   {
    sayi1 = parseFloat(document.getElementById('hesapAlani').value);
    document.getElementById('hesapAlani').value = '';      
    islem = topla;                         
}

function cikar() {
    sayi1 = parseFloat(document.getElementById('hesapAlani').value);
    document.getElementById('hesapAlani').value = "";
    islem = cikar;
}

function carp() {
    sayi1 = parseFloat(document.getElementById('hesapAlani').value);
    document.getElementById('hesapAlani').value = "";
    islem = carp;
}

function bolme() {
    sayi1 = parseFloat(document.getElementById('hesapAlani').value);
    document.getElementById('hesapAlani').value = "";
    islem = bolme;
}
function yuzde() {
    // if (gecicideger != undefined) {
    //     document.getElementById('hesapAlani').value = (parseInt(document.getElementById('hesapAlani').value) * gecicideger) / 100;
    // }
    // else {
    //     gecicideger = parseInt(document.getElementById('hesapAlani').value);
    //     document.getElementById('hesapAlani').value = '';

    // }
    sayi1 = parseFloat(document.getElementById('hesapAlani').value);
    document.getElementById('hesapAlani').value = "";
    islem = yuzde;
}

function nokta(){
    // sayi1 = parseFloat(document.getElementById('hesapAlani').value);
    
    // document.getElementById('hesapAlani').value+='.';

    document.getElementById('hesapAlani').value+=".";



}

function esit() {
    sayi2 = parseFloat(document.getElementById('hesapAlani').value);
    if (islem == topla) {
        document.getElementById('hesapAlani').value = sayi1 + sayi2;

    }

    else if (islem == cikar) {
        document.getElementById('hesapAlani').value = sayi1 - sayi2;
    }

    else if (islem == carp) {
        document.getElementById('hesapAlani').value = sayi1 * sayi2;
    }

    else if (islem == bolme) {
        document.getElementById('hesapAlani').value = sayi1 / sayi2;
    }
    else if(islem==yuzde){
        document.getElementById('hesapAlani').value = (sayi1 * sayi2)/100;
    }
 

}

function artieksi() {
    document.getElementById('hesapAlani').value = document.getElementById('hesapAlani').value * -1;
}

var karekok;
function kokalma() {
    karekok = Math.sqrt(document.getElementById('hesapAlani').value);

    document.getElementById('hesapAlani').value = karekok;
}

function temizle() {
    document.getElementById('hesapAlani').value = " ";
}

function sifirekle() {
    document.getElementById('hesapAlani').value = "0";

}
