let accords = ['D','G','C','C7','F']

// accords.forEach(
//     (elem) =>{
//         console.log(elem.endsWith('7'))
//             if(!elem.endsWith('7')){
//                 accords.indexOf(elem)=accords[elem]+"7"
//             }
//         }
//     )
// console.log(accords)

for(i=0;i<accords.length;i++){
    if(!accords[i].endsWith('7')){
        accords[i]=accords[i]+"7"
    }
}
console.log(accords)

let numbers = [5, 1, 7, 2, -9, 8, 2, 7, 9, 4,-5, 2, -6, 8, -4, 6]
let x = 0;
numbers.forEach((num, index) => {
    console.log(`index: ${index}, number: ${num}`)

    let div = document.createElement('div');
    //div.id = 'content';
    div.innerHTML = `<h1>index: ${index}, number: ${num}</h1>`;
    document.body.appendChild(div);
})

///
/// Dėstytojo eg su callback func
///

numbers.forEach((num, index) => {
    display (num, index)

})

function display(num, index){
    const p = document.createElement('p')
    p.innerHTML = `index: ${index}, number: ${num}`
    document.body.append(p)
}

const numbersPlusOne = numbers.map((number) => number + 1)
console.log(numbers)
console.log(numbersPlusOne)


const numbersMultiplyByTwo = numbers.map((number) => number * 2)
console.log(numbersMultiplyByTwo)


function MultplyCustom (cusomNumber){
    const numbersMultplyCustom = numbers.map((number) => number * cusomNumber)
    console.log(numbersMultplyCustom)
}

MultplyCustom(10);

const budgets = [
    {
      name: "Rytis",
      budget: 50,
    },
    {
      name: "Saulė",
      budget: 230,
    },
    {
      name: "Paulius",
      budget: 1500,
    },
    {
      name: "Gytis",
      budget: 92,
    },
    {
      name: "Sandra",
      budget: 7,
    },
];

let budget = 0;

// function GetBudgets() {
budgets.map(function(element){
    budget += element.budget
}),
console.log(`Biudžetas = ${budget} pinigams`);

let Names = []

budgets.map(function(element){
    Names.push(element.name)
}),
console.log(Names);

//map gražina kopiją
let Mapy = budgets.map(function(element){
    return element.name
})
console.log(Mapy);

console.log(numbers.includes(1))

let result = numbers.filter((num) => {
    return num > 3;
})
console.log(result)

// let twos = numbers.filter((num) => {
//     return num === 2;
// })
// console.log(twos.length)

function GenderDetermination(array, string){
    if(array.includes(string)){
        console.log(`${string} is in the array`)

        string.slice(-1) == "ė" | string.slice(-1) == ("a") ? console.log(`${string} is a Woman`) : console.log(`${string} is a Man`)

    }else{
        console.log(`${string} is not in the array`)
    }
}
//Rytis, Saulė, Paulius, Gytis, Sandra
GenderDetermination(Mapy, "Rytis");
GenderDetermination(Mapy, "Saulė");
GenderDetermination(Mapy, "Paulius");
GenderDetermination(Mapy, "Gytis");
GenderDetermination(Mapy, "Sandra");
GenderDetermination(Mapy, "Vardenis");

function arrCountTwos (array){
    let arrayLenght = array.filter((num) => {
        return num === 2;
    })
    console.log(arrayLenght.length)
}
arrCountTwos(numbers);

console.log(numbers.some((num) => num === 2))
console.log(numbers.every((num) => num === 2))

const names = budgets.map((person) => person.name);
const monies = budgets.map((person) => person.budget);

let isThereNegativeInt = monies.some(int => int < 0)
console.log(isThereNegativeInt)

function bellowHundred(array){
    if(array.every(int => int >= 100)){
        console.log("All array members are >100")
    }
    else{
        let bellowHundo = array.filter(num => num < 100)
        console.log(bellowHundo)
    }
}
let onlyHundos = [100, 100, 100, 100]
let oneHundo = [2, 100, 3, 99]

bellowHundred(monies);
bellowHundred(onlyHundos);
bellowHundred(oneHundo);