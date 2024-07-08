document.addEventListener('DOMContentLoaded', () => {
    const daySelect = document.getElementById('day');
    const monthSelect = document.getElementById('month');
    const yearSelect = document.getElementById('year');
    const hourSelect = document.getElementById('hour');
    const minuteSelect = document.getElementById('minute');
    const peopleCount = document.getElementById('people-count');
    const decreaseButton = document.getElementById('decrease');
    const increaseButton = document.getElementById('increase');
    const form = document.querySelector('form');
    const selects = [daySelect,monthSelect,yearSelect,hourSelect,minuteSelect]
    let people = 1

    for (let i = 1; i <= 31; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        daySelect.appendChild(option);
    }

    for (let i = 1; i <= 12; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        monthSelect.appendChild(option);
    }

    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i <= currentYear + 1; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        yearSelect.appendChild(option);
    }

    for (let i = 1; i <= 12; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        hourSelect.appendChild(option);
    }

    const minutes = [0, 15, 30, 45];
    for (let i of minutes) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = (i < 10 ? '0' : '') + i;
        minuteSelect.appendChild(option);
    }


    function updatePeople(){
        peopleCount.textContent = `${people} ${people===1?"person":"people"}`
    }

    decreaseButton.addEventListener('click', ()=>{
        if(people > 1){
            people--
            updatePeople()
        }
    })

    increaseButton.addEventListener('click', ()=>{
        people++
        updatePeople()
    })


    selects.forEach(select => {
        select.addEventListener('change', function() {
            if (this.value) {
                this.classList.remove('placeholder');
            } else {
                this.classList.add('placeholder');
            }
        });
    });


    form.addEventListener('submit', (e)=>{
        e.preventDefault()
    })


});
