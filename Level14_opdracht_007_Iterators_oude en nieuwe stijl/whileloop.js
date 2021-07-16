//while loop
let selectedColors = ["Yellow", "Blue", "Red", "Orange"];

let i = 0;
while (i < selectedColors.length) {
    console.log(selectedColors[i]);
    i++;
}

//for loop
let selectedColors1 = ["Yellow", "Blue", "Red", "Orange"];

for (let i = 0; i < selectedColors1.length; i++) {
    console.log(`${selectedColors1[i]}`)
}


//for each
let selectedColors2 = ["Yellow", "Blue", "Red", "Orange"];
selectedColors2.forEach(i => console.log(i));

//1. Hoeveel regels neemt mijn for loop en mijn while loop in beslag?
// for loop = 6 regels
// while loop = 7 regels

//2. Hoeveel regels neemt mijn forEach method in beslag?
// 2 regels

//3. Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
//for each is bter leesbaar, simpelweg omdat het minder code is om te lezen.

//4. 

const object = { a: 1, b: 2, c: 3, d: 4, e: 5 };

for (const property in object) {
    console.log(`${property}: ${object[property]}`);
}

