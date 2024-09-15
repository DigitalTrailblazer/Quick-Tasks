let inputText = document.querySelector('#input')

let taskLists = document.querySelector('#tasks')

function addTask() {
    if (inputText.value ==='') {
        alert('Enter text to create a task')
    } else {
        const listItem = document.createElement('li')
        listItem.innerHTML = inputText.value
        taskLists.appendChild(listItem) 

        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        listItem.appendChild(span)
    }
    inputText.value = ''
    saveData()
}

taskLists.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        console.log(e.target.tagName);
        console.log(e.target);
        e.target.classList.toggle('checked')
        saveData()
    } else if (e.target.tagName === 'SPAN') {       //explicitly mentioned here
        e.target.parentElement.remove()
        console.log(e.target.tagName);
        saveData()  
    }
}, false)


function saveData() {
    localStorage.setItem('data', taskLists.innerHTML)
}


function getData() {
    taskLists.innerHTML = localStorage.getItem('data')
}
getData()