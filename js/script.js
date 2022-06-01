const inputcard1 = document.querySelector('#card1');
const inputcard2 = document.querySelector('#card2');
const text = document.querySelector('H1');
const cards = [
    {
        id: 1,
        name:"",
        class:"",
        atk: 1200,
        def: 850,
        magic: {
            atkMagic: 'N',
            defMagic: 'N'
        }
    },
    {
        id: 2,
        name:"",
        atk: 1300,
        def: 1500,
        magic: {
            atkMagic: 'N',
            defMagic: 'N'
        }
    },
    {
        id: 3,
        atk: 1200,
        def: 1850,
        magic: {
            atkMagic: 'N',
            defMagic: 'N'
        }
    },
    {
        id: 4,
        atk: 1300,
        def: 1100,
        magic: {
            atkMagic: 'N',
            defMagic: 'N'
        }
    },
];

function figth(){
    let cardInput1 = inputcard1.value;
    let cardInput2 = Math.floor(Math.random() * cards.length);

    while(cardInput2 === cardInput1){
        cardInput2 = Math.floor(Math.random() * cards.length);
    }

    inputcard2.value = cardInput2;

    duel(cardInput1, cardInput2);
}

function duel(card1, card2){
    if(checkInput()){

    } else {
        card1 = cards[card1];
        card2 = cards[card2];
        
        checkCardPoints(card1);
    
        if(card1.atk > card2.def){
            text.textContent = "Você ganhou!"
        } else if (card1.atk < card2.def){
            text.textContent = "Você  perdeu!"
        } else if (card1.atk === card2.def){
            text.textContent = "Você empatou!"        
        }
    }
}

function checkCardPoints(card1){
    if(card1.magic.atkMagic === "S"){
        card1.atk += 500;
    }

    if(card1.magic.defMagic === "S"){
        card1.def += 500;
    }
}

function checkInput(){
    if((inputcard1.value === null || inputcard1.value === "") || inputcard1.value < 0 || inputcard1.value > cards.length){
        alert("preencha o campo com um número válido.");
    }

    if((inputcard2.value === null || inputcard2.value === "") || inputcard2.value < 0 || inputcard2.value > cards.length){
        alert("preencha o campo com um número válido.");
    }
}

function addAtkMagic(){
    if((inputcard1.value === null || inputcard1.value === "") || inputcard1.value < 0 || inputcard1.value > cards.length){
        alert("preencha o campo com um número válido.");
    } else {
        cards[inputcard1.value].magic.atkMagic = 'S';
    }
}

function addDefMagic(card){
    if((inputcard1.value === null || inputcard1.value === "") || inputcard1.value < 0 || inputcard1.value > cards.length){
        alert("preencha o campo com um número válido.");
    } else {
        cards[inputcard1.value].magic.defMagic = 'S';
    }
}

function removeAtkMagic(card){
    if((inputcard1.value === null || inputcard1.value === "") || inputcard1.value < 0 || inputcard1.value > cards.length){
        alert("preencha o campo com um número válido.");
    } else {
        cards[inputcard1.value].magic.atkMagic = 'N';
    }

}

function removeDefMagic(card){
    if(inputcard1.value < 0 || inputcard1.value > cards.length){
        alert("preencha o campo com um número válido.");
    } else {
        cards[inputcard1.value].magic.defMagic = 'N';
    }
}

