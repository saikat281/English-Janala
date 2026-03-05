
const loadLession = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all") //promise
        .then((res) => res.json()) // promise
        .then((json => displayLessons(json.data)));
}


const displayLessons = (lessons) => {
    console.log(lessons);

    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = '';

    for (let lesson of lessons) {
        const btnDiv = document.createElement("div");


        btnDiv.innerHTML = `
        <a class="btn btn-outline btn-primary" href="">
                <i class="fa-solid fa-book-open"></i>
                 <span>Lession-${lesson.level_no}</span>
        </a>
        `

        levelContainer.appendChild(btnDiv);
    }
}






loadLession();















// const loadLession = () => {
//     fetch("https://openapi.programming-hero.com/api/levels/all")//promise
//         .then((res) => res.json())//promise
//         .then((json => displayLessions(json.data)))

// }

// const displayLessions = (lessons) => {
//     // 1.Get the container & empty
//     const levelContainer = document.getElementById("level-container");
//     levelContainer.innerHTML = '';
//     // 2.Get into every lessions
//     for (let lession of lessons) {
//         //    3.create element
//         const btnDiv = document.createElement("div");

//         btnDiv.innerHTML = `
//         <a class="btn btn-outline btn-primary" href="">
//                 <i class="fa-solid fa-book-open"></i>
//                 <span>Lession-${lession.level_no}</span>
//             </a>
//         `
//         //    4.append into container
//         levelContainer.appendChild(btnDiv);
//     }

// }

// loadLession();