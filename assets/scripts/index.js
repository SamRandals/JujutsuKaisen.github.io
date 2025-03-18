




// audio codigo 


window.addEventListener("click",()=>{

    const audio = document.querySelector(".audio-main");
    
    setTimeout(() => {
        audio.muted = false;
        audio.play();

    }, 50);
})




// pregunta y respuesta 

const modal = document.querySelector(".modal__main");
const modal__msg= document.querySelector(".modal__msg");

// botones 
const buttonYes= document.querySelector(".button__1");
const buttonNo= document.querySelector(".button__2");
const modal__close= document.querySelector(".modal__close");


buttonYes.addEventListener("click",()=>{

    if(modal.classList.contains("hidden")){
        modal.classList.remove("hidden");
        modal.classList.add("appear");

        modal__msg.classList.remove("bad");
        modal__msg.classList.add("good")

        modal__msg.textContent="Felicidades!";
   
    }
    

})
buttonNo.addEventListener("click",()=>{

    if(modal.classList.contains("hidden")){
        modal.classList.remove("hidden");
        modal.classList.add("appear");

        modal__msg.classList.remove("good");
        modal__msg.classList.add("bad");

        modal__msg.innerHTML="Que lastima, eres igual que frisk, toda una niña!!";
    }
   
   

})
modal__close.addEventListener("click",()=>{
    modal.classList.remove("appear");
   modal.classList.add("hidden");

    modal__msg.innerHTML="";
    modal__msg.classList.remove("good", "bad");
})



//gallery


const buttonGallery = document.querySelector(".gallery__button");

const galleryContainer= document.querySelector(".gallery__container");

const galleryCloseButton = document.querySelector(".gallery__close-button");

buttonGallery.addEventListener("click",()=>{

    if(galleryContainer.classList.contains("hidden")){

        galleryContainer.classList.remove("hidden");
        galleryContainer.classList.add("appear");
    }
})

galleryCloseButton.addEventListener("click",()=>{
    galleryContainer.classList.remove("appear");
    galleryContainer.classList.add("hidden");
})

