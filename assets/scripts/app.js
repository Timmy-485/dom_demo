let modal = document.querySelector("#add-modal")
let btns = document.getElementsByTagName("button")
let addMovieBtn = btns[4]
let backdrop = document.getElementById("backdrop")

addMovieBtn.addEventListener("click", showModal = () =>{
    modal.classList.add("visible")
    backdrop.classList.toggle("visible")
})


let cancelBtn = document.querySelector(".btn")
let backdropBody = document.getElementById("backdrop");
console.log(cancelBtn)

let clearInputs = () => {
    let inputs = document.getElementsByTagName("input")
    for (x of inputs){
        x.value = ""
    }
}

let cancel = () => {
    clearInputs()
    modal.classList.remove("visible")
    backdrop.classList.remove("visible")
    
}

cancelBtn.addEventListener("click", cancel);

backdropBody.addEventListener("click", cancel);

const addMovie = document.querySelector(".btn--success")
let movieDetails = []
addMovie.addEventListener("click", getDeats = () => {
    const allDeats = document.getElementsByTagName("input");
    const title = allDeats[0].value
    const imgUrl = allDeats[1].value
    const rating = allDeats[2].value

    if (title == "" && imgUrl == "" && rating < 1){
        alert("Fill in the empty fields")
        cancel()
    }
    else{
        let deatsObj = {
            title,
            imgUrl,
            rating
        }
        movieDetails.push(deatsObj);
        console.log(movieDetails)
        cancel()
    }
})