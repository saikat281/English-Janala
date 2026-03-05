
const loadLession = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all") //promise
        .then((res) => res.json()) // promise
        .then((json => displayLessons(json.data)));
}

const loadLevelWord = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => displayLevelWords(data.data));
}

const displayLevelWords = (words) => {
    //console.log(words.length);
    const wordContainer = document.getElementById("word-container");
    wordContainer.innerHTML = '';

    if(words.length == 0){
        wordContainer.innerHTML = `
        <div class=" col-span-full">
            <img class="mx-auto" src="assets/alert-error.png" alt="">
            <p class="text-gray-500 font-bangla mb-3 text-center">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
            <h1 class="font-bangla text-4xl font-semibold">অন্য Lesson এ যান</h1>
        </div>`

        return;
    }

    words.forEach(word => {
        const card = document.createElement("div");
        card.innerHTML = `

        <div class="bg-white text-center py-20 px-5 rounded-sm shadow-sm space-y-4">
            <h1 class="text-3xl font-bold">${word.word ? word.word : "শব্দ পাওয়া যায়নি"}</h1>
            <p>Meaning /Pronounciation</p>
            <h1 class="font-bangla text-3xl text-gray-900 font-bold">"${word.meaning ? word.meaning : "অর্থ পাওয়া যায়নি"} / ${word.pronunciation ? word.pronunciation : "pronunciation পাওয়া যায়নি"}"</h1>

            <div class="flex justify-between items-center">
                <button class="bg-[#1A91FF10] hover:bg-[#1A91FF80]   px-3 py-2 rounded-sm cursor-pointer"><i class="fa-solid fa-circle-info"></i></button>
                <button class="bg-[#1A91FF10] hover:bg-[#1A91FF80]  px-3 py-2 rounded-sm cursor-pointer"> <i class="fa-solid fa-volume-high"></i> </button>
            </div>
        </div>`

        wordContainer.appendChild(card);
    })
}


const displayLessons = (lessons) => {
    console.log(lessons);

    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = '';

    for (let lesson of lessons) {
        const btnDiv = document.createElement("div");


        btnDiv.innerHTML = `
        <button onclick = "loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary" href="">
                <i class="fa-solid fa-book-open"></i>
                 <span>Lession-${lesson.level_no}</span>
        </button>
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