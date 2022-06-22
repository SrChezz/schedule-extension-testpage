courses = [{
  "courseTitle": "Laboratorio de Innovación",
  "courseTeacher": "Ponce Calderon, Anghely Mabel",
  "courseNRC": 24708,
  "courseCredits": 1,  
  "courseDays": [['wednesday']],
  "courseTime": [[130, 90]],
  "courseTime2": ["09:10 - 10:40"],
  "courseShow": true,
},
{
    "courseTitle": "Laboratorio de Innovación",
    "courseTeacher": "Ponce Calderon, Anghely Mabel",
    "courseNRC": 24708,
    "courseCredits": 1,  
    "courseDays": [['wednesday']],
    "courseTime": [[130, 90]],
    "courseTime2": ["09:10 - 10:40"],
    "courseShow": true,
},
{
    "courseTitle": "Laboratorio de Innovación",
    "courseTeacher": "Ponce Calderon, Anghely Mabel",
    "courseNRC": 24708,
    "courseCredits": 1,  
    "courseDays": [['wednesday']],
    "courseTime": [[130, 90]],
    "courseTime2": ["09:10 - 10:40"],
    "courseShow": true,
}
]

const grid = document.getElementById("courseGrid")

courses.forEach(course => {
    
    let newdiv = document.createElement("div")
    newdiv.classList.add('course-cell', 'course-nrc')
    newdiv.innerText = course.nrc
    grid.appendChild(newdiv)

    newdiv = document.createElement("div")
    newdiv.classList.add('course-cell')
    newdiv.innerText = course.section
    grid.appendChild(newdiv)

    newdiv = document.createElement("div")
    newdiv.classList.add('course-cell')
    newdiv.innerText = course.code
    grid.appendChild(newdiv)

    newdiv = document.createElement("div")
    newdiv.classList.add('course-cell', 'course-title')
    newdiv.innerText = course.asig
    grid.appendChild(newdiv)

    newdiv = document.createElement("div")
    newdiv.classList.add('course-cell', 'course-credits')
    newdiv.innerText = course.credit
    grid.appendChild(newdiv)


    
    
    
    newdiv = document.createElement("div")
    newdiv.classList.add('course-cell', 'course-schedule')
    newdiv.innerHTML = 
    `<div>
        <div class="monday">Lunes</div>
        <div class="tuesday">Martes</div>
        <div class="wednesday">Miercoles</div>
        <div class="thursday">Jueves</div>
        <div class="friday">Viernes</div>
        <div class="saturday">Sabado</div>
    </div>
    <div>
        <p class="time"> ${course.time}</p>
    </div>`

    course.days.forEach(day => {
        let activedays = newdiv.querySelector(`.${day}`)
        activedays.classList.add("schedule-active")  
    });

    
    grid.appendChild(newdiv)


    newdiv = document.createElement("div")
    newdiv.classList.add('course-cell')
    newdiv.innerText = course.campus
    grid.appendChild(newdiv)

    newdiv = document.createElement("div")
    newdiv.classList.add('course-cell')
    newdiv.innerText = course.status
    grid.appendChild(newdiv)

    newdiv = document.createElement("div")
    newdiv.classList.add('course-cell')
    newdiv.innerText = course.mode
    grid.appendChild(newdiv)

    newdiv = document.createElement("div")
    newdiv.classList.add('course-cell')
    newdiv.innerText = ""
    grid.appendChild(newdiv)

});


