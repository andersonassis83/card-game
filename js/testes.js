const characterCards = [
    {
        id: 1,
        name:"Uriak - o veloz",
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
        name:"Shiokay o ninja atrevido",
        class:"",
        atk: 1300,
        def: 1500,
        magic: {
            atkMagic: 'N',
            defMagic: 'N'
        }
    },
    {
        id: 3,
        name:"Qilla a maga elemental",
        class:"",
        atk: 1200,
        def: 1850,
        magic: {
            atkMagic: 'N',
            defMagic: 'N'
        }
    },
    {
        id: 4,
        name:"Gally - cyber guerreira",
        class:"",
        atk: 1300,
        def: 1100,
        magic: {
            atkMagic: 'N',
            defMagic: 'N'
        }
    },
];

const magicCards = [
    {
        id: 1,
        type: "attak",
        class: "fire",
        name: "valsa do fogo",
        points: 300,
    },
    {
        id: 2,
        type: "defense",
        class: "fire",
        name: "valsa do fogo",
        points: 300,
    },
    {
        id: 3,
        type: "attak",
        class: "fire",
        name: "valsa do fogo",
        points: 300,
    },
    {
        id: 4,
        type: "defense",
        class: "fire",
        name: "valsa do fogo",
        points: 300,
    },
    {
        id: 5,
        type: "attak",
        class: "fire",
        name: "valsa do fogo",
        points: 300,
    },
    {
        id: 6,
        type: "defense",
        class: "fire",
        name: "valsa do fogo",
        points: 300,
    },
    {
        id: 7,
        type: "defense",
        class: "fire",
        name: "valsa do fogo",
        points: 300,
    },
    {
        id: 8,
        type: "attak",
        class: "fire",
        name: "valsa do fogo",
        points: 300,
    },
    {
        id: 9,
        type: "defense",
        class: "fire",
        name: "valsa do fogo",
        points: 300,
    },
    {
        id: 10,
        type: "attak",
        class: "fire",
        name: "valsa do fogo",
        points: 300,
    },
    {
        id: 11,
        type: "defense",
        class: "fire",
        name: "valsa do fogo",
        points: 300,
    },
];

const cardDeck= []; 
const magicDeck = [];

function firstCard(){
    if(cardDeck.length === 0){
        let firstCardToDeck = Math.floor(Math.random() * characterCards.length);
        console.log("escolhido: " + firstCardToDeck);
        cardDeck.push(characterCards[firstCardToDeck]);
        console.log(cardDeck);
    } else {
        console.log("Você já possuium card inicial.");
    }
}

function addCardToDeck(){
    if(cardDeck.length === 4){
        console.log("Você já atingiu o seu limite de cards.");
    } else {
        let cardToDeck = Math.floor(Math.random() * characterCards.length);
        console.log("escolhido: " + cardToDeck);
        magicDeck.push(characterCards[cardToDeck]);
        console.log(magicDeck);
    }
}

function addMagicToDeck(){
    let magicToDeck = Math.floor(Math.random() * characterCards.length);
    console.log("escolhido: " + magicToDeck);
    magicDeck.push(magicCards[magicToDeck]);
    console.log(magicDeck);
}

firstCard();

firstCard();

for(let i = 0; i <= 10; i++){
    addCardToDeck();
    console.log("Cards: " + cardDeck[i].name);
}

for(let i = 0; i <= 10; i++){
    addMagicToDeck();
    console.log("Magias: " + magicDeck[i].name);
}

console.log(cardDeck);
console.log(magicDeck);


