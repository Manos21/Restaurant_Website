document.addEventListener('DOMContentLoaded', () => {
    const eventForm = document.getElementById('event-form')
    const familyEvent = document.getElementById('family-event')
    const specialEvent = document.getElementById('special-event')
    const socialEvent = document.getElementById('social-event')

    const familyImage = document.getElementById('family-image')
    const socialImage = document.getElementById('social-image')
    const specialImage = document.getElementById('special-image')

    eventForm.addEventListener('change',(e)=>{
        if (e.target.id==="family"){
            familyEvent.classList.remove('undisplayed')
            specialEvent.classList.add('undisplayed')
            socialEvent.classList.add('undisplayed')

            familyImage.classList.remove('undisplayed')
            specialImage.classList.add('undisplayed')
            socialImage.classList.add('undisplayed')


        }
        else if(e.target.id==="social"){
            socialEvent.classList.remove('undisplayed')
            specialEvent.classList.add('undisplayed')
            familyEvent.classList.add('undisplayed')

            socialImage.classList.remove('undisplayed')
            specialImage.classList.add('undisplayed')
            familyImage.classList.add('undisplayed')
            
        }else{
            specialEvent.classList.remove('undisplayed')
            familyEvent.classList.add('undisplayed')
            socialEvent.classList.add('undisplayed')
            
            specialImage.classList.remove('undisplayed')
            familyImage.classList.add('undisplayed')
            socialImage.classList.add('undisplayed')
        }
    })
})