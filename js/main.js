const WALK_SPEED=3.6;
const BISYLE_SPEED=20.1;
const CAR_SPEED=70;
const PILOT_SPEED=800;
var form=document.getElementById('form')
var distanceInput=document.getElementById('distance')
var carElement=document.getElementById('car')
var walkElement=document.getElementById('walk')
var bisycleElement=document.getElementById('bisycle')
var pilotElement=document.getElementById('pilot')

form.addEventListener('submit',event => {
    event.preventDefault()
    console.log(distanceInput.value)
    walkElement.textContent=getTime(WALK_SPEED , distanceInput.value)
    bisycleElement.textContent=getTime(BISYLE_SPEED , distanceInput.value)
    carElement.textContent=getTime(CAR_SPEED , distanceInput.value)
    pilotElement.textContent=getTime(PILOT_SPEED, distanceInput.value)

})
function getTime (speed ,distance) {
    let time=distance/speed

    return normalizeTime(time)
}
function normalizeTime(time){
    let hour = Math.floor(time)
    let minute = Math.ceil((time-hour)*60)
    
    let hourString =!hour ? `` : `${hour} soat`

    return hourString + `${minute} minut`
}