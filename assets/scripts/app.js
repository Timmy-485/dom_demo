//get modal and backdrop elements
let modal = document.querySelector("#add-modal")
let btns = document.getElementsByTagName("button")
let addMovieBtn = btns[4]
let backdrop = document.getElementById("backdrop")

//make backdrop and modal visible on click
addMovieBtn.addEventListener("click", showModal = () =>{
    modal.classList.add("visible")
    backdrop.classList.toggle("visible")
})




//clear inputs
let clearInputs = () => {
    let inputs = document.getElementsByTagName("input")
    for (x of inputs){
        x.value = ""
    }
}

//remove modal and backdrop on cancel and click 
let cancelBtn = document.querySelector(".btn")
let backdropBody = document.getElementById("backdrop");
let cancel = () => {
    clearInputs()
    modal.classList.remove("visible")
    backdrop.classList.remove("visible")   
}
cancelBtn.addEventListener("click", cancel);
backdropBody.addEventListener("click", cancel);

//get information inputted into input fields
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
        //close modal and clear input contents after operation
        cancel()
    }
})