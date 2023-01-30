 import "./css/style.css";  
 
// ====== first solution ==========
// const box = document.querySelector(".modal");

// const thePromise = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("block");
//     }, 3000);
//   });
// };

// const resolvingBoxPromise = async () => {
//   let result = await thePromise();
//   box.style.display = result;
// };

// resolvingBoxPromise();

// =========== second solution ===============

 
let modal = document.querySelector(".modal")
let span = document.querySelector(".close")
let btn = document.querySelector(".btn")

const myPromise = () => {
    return new Promise((resolve) => {

        setTimeout(() => {
            resolve(modal.style.display = "block")
        }, 3000);
    });
}

const resolvingPromise = async () => {
    let result = await myPromise();
    return result
}

resolvingPromise()

span.style.cursor = "pointer"

span.addEventListener("click", () => {
    modal.style.display = "none";
})

// btn promise

const Promise = new Promise((resolve, reject) => {
    resolve();
});

const btnResolving = async () => {
    btn.addEventListener("animationend", () => {
         alert("Continue to subscribe")
    })
    btn.addEventListener("mouseover", () => {
        btn.style.backgroundColor = "red";
    })
    btn.addEventListener("mouseout", () => {
        btn.style.backgroundColor = "";
    });
}

btnResolving()