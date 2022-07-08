const button = document.querySelector(".volumeicon")
const audio = document.querySelector("audio")
const img = document.querySelector(".logo")

button.addEventListener("click", buttonClicked)

function buttonClicked(){
    img.classList.toggle("animation")
    button.classList.toggle("bxs-volume-full")
    button.classList.toggle("bxs-volume-mute")
    if(audio.paused){
        audio.play()
        audio.loop = true;
    }
    else{
        audio.pause()
    }
    
}