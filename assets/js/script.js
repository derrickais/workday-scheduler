const bodyEl = document.querySelector("body");
const containerEl = document.querySelector(".container");
const buttonEls = document.querySelectorAll("button");

const populatePage = function() {
    for (let index = 9; index < 18; index++) {
        let hour = index;
        if (hour > 12) {
            hour = hour % 12
        }
        const data = localStorage.getItem(hour)
        if (data) {
            const textArea = document.querySelector(`textarea[data-hour="${hour}"]`);
            textArea.value = data;
        }
    }
};

const colorFields = function(){
    const currentHour = moment().hour();
    for (let index = 9; index < 18; index++) {
        let hour = index;
        if (hour > 12) {
            hour = hour % 12
        }
        const textArea = document.querySelector(`textarea[data-hour="${hour}"]`);
        if (index < currentHour) {
            textArea.classList.add('past')
        } 

        if (index == currentHour) {
            textArea.classList.add('present')
        }

        if (index > currentHour) {
            textArea.classList.add('future')
        } 
    }
}

const saveTask = function(event) {
    console.log(event)
    const hour = event.target.dataset.hour;
    const textArea = document.querySelector(`textarea[data-hour="${hour}"]`)
    const content = textArea.value;
    localStorage.setItem(hour, content);
};

buttonEls.forEach(buttonEl => {
    buttonEl.addEventListener("click", saveTask);
});

populatePage();
colorFields();