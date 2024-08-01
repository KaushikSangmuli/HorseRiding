const character = document.querySelector('.character');
const jumpBtn = document.querySelector("#jump")
const container = document.querySelector(".game-container")
const man = document.querySelector(".man")
const horse = document.querySelector("#horse")
const containerBtn = document.querySelector("#container")
let distance = 200

const replay =  document.querySelector("#replay")

for (let i=1 ; i<50;  i++){
distance += 340
let stone = document.createElement("div")
stone.classList.add(`stone${i}`)
stone.classList.add(`obstacle`)
stone.style.left =  `${distance}px`
stone.innerHTML = `
<img class="stonning" src="obstacle.png" alt="obstacle"> 
`

container.append(stone)
}
console.log(horse)

const obstacle = document.querySelectorAll(".obstacle")

let move= 0
jumpBtn.addEventListener('click', () => {
        console.log("clicked")
        if(!man.classList.contains("jump")){
            man.classList.add("jump")
            man.addEventListener('animationend', () => {
                man.classList.remove('jump');
            }, { once: true });
         }
});



// document.addEventListener("DOMContentLoaded", ()=>{
  
// })
const manPos = man.getBoundingClientRect()



containerBtn.addEventListener("click", ()=> {
    horse.style.transform = `scalex(-1)`
    horse.src= `running horse.gif`
    containerBtn.classList.add("hidden")


    const caught = setInterval(() => {        
        move-=20
        if (move > -20000){
            container.style.transform =  `translateX(${move}px)`
            container.style.transition = `all 0.1s ease`
        } else{
            alert("Buddy You Won The Game !")
        }
        const manPos = man.getBoundingClientRect()
        const manPosTop = Math.round(manPos.top)
        const manPosLeft= Math.round(manPos.left)
        const manPosRight = Math.round(manPos.right)
        const manPosBottom = Math.round(manPos.bottom)
        obstacle.forEach((e)=>{
            const obstaclePos = e.getBoundingClientRect()
            const obsPosTop = Math.round(obstaclePos.top)
            const obsPosLeft= Math.round(obstaclePos.left)
            const obsPosRight = Math.round(obstaclePos.right)
            const obsPosBottom = Math.round(obstaclePos.bottom)
            if (!man.classList.contains("jump")){
                
                if(  (manPosRight > obsPosLeft) && (manPosLeft < obsPosRight) ){
                    
                    console.log("touched")
                    clearTimeout(caught)
                    console.log(e)
                    // alert("you loose ")
                    e.style.backgroundColor = " black"
                     horse.src= `standing horse.png`
                     horse.style.transform = ``
                    replay.classList.remove("hidden")
                }
            }
        })
     

    }, 100);
} )

replay.addEventListener("click", ()=>{
    window.location.reload();
})