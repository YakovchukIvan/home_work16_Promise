"use strict"

const list__item1 = document.querySelector(".list__item1")
const btnYes1 = document.querySelector(".btnYes1")
const btnNo1 = document.querySelector(".btnNo1")
const btnYes2 = document.querySelector(".btnYes2")
const btnNo2 = document.querySelector(".btnNo2")
const svg1 = document.querySelector(".svg1One")
const svg2 = document.querySelector(".svg2One")
const svg1Two = document.querySelector(".svg1Two")
const svg2Two = document.querySelector(".svg2Two")

const promise = new Promise(function(resolve, reject) {

    btnYes1.addEventListener("click", () => {
        if(btnYes1) {
            console.log("Good");
            resolve(
            svg1.style.display = "block",
            svg2.style.display = "none"
            )
        }
    })
    btnNo1.addEventListener("click", () => {
        if(btnYes1) {
            console.log("No good");
            reject(
                svg1.style.display = "none",
                svg2.style.display = "block"
            )
        }
    })
    

    
})

promise.then(() => {
    return new Promise((resolve, reject) => {
    btnYes2.addEventListener("click", () => {
        if(btnYes2) {
            console.log("Good");
            resolve(
            svg1Two.style.display = "block",
            svg2Two.style.display = "none"
            )
        }
    })

    btnNo2.addEventListener("click", () => {
        if(btnYes2) {
            console.log("No good");
            reject(
                svg1Two.style.display = "none",
                svg2Two.style.display = "block"
            )
        }
    })
    
    })
})

// const promise = new Promise(function(resolve, reject){

//   setTimeout(function(){

//     console.log("Start process");

    


//     resolve()
//     reject("Bad idea")
//   }, 2000)
// })

// .then(() =>{

//   return new Promise((resolve, reject) =>{

//     setTimeout(() => {

//       const car = {
//         brend: "Tesla",
//         model: "X"
//       }
//       console.log("You want to buy: ", car.brend, car.model);
//       // reject("Not enough money")
//       resolve(car)
//     }, 2000)
//   })
// })

// .then((car) =>{

//   return new Promise((resolve, reject) =>{

//     setTimeout(() => {

//       console.log("CTO cheking...");

//       // const car = {
//       //   brend: "Tesla",
//       //   model: "X",
//       //   techStatus: "checked"
//       // }
//       car.techStatus = "checked"

//       console.log("Technical status: ", car.techStatus);

//       resolve(car)
//       // reject("Technical status bad!")
//     }, 2000)
//   })

// })

// .then((car) =>{

//   return new Promise((resolve, reject) =>{

//     setTimeout(() => {

//       console.log("Police checking register ...");
      
//       // const car = {
//       //   brend: "Tesla",
//       //   model: "X",
//       //   techStatus: "checked",
//       //   policeStatus: "cheked"
//       // }
//       car.policeStatus = "checked"
//       console.log("Police status: ", car.policeStatus);

//       resolve(car)
//       // reject("Police status bad")

//     }, 2000)
//   })

// })


// .then((car) =>{

//   return new Promise((resolve, reject) =>{

//     setTimeout(() => {

//       console.log("Car status ...");

//       // const car = {
//       //   brend: "Tesla",
//       //   model: "X",
//       //   techStatus: "checked",
//       //   policeStatus: "cheked",
//       //   status: "bought"
//       // }
//       car.status = "bought";

//       console.log("Car status: ", car.status);
//       resolve(car)
//       // reject("Oppssss!")

//     }, 2000)
//   })

// })

// .then((car) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("You bought the car !!!");
//       console.log(car);
//       resolve()
//     }, 2000)
//   })
// })

// .catch((error) => { // .catch приймає значення з reject
//   console.error(error)
// })

// .finally(() => { // в кінці визивається, якщо зайшов в .catch
//   console.log("Finish process");
// })







