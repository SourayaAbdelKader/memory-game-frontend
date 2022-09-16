const boxes = document.querySelectorAll(".box")
let choices = [];
let tries = 0;
score = 0;

// in this function, i adjusted the number of pairs with each others, the only problem is when the pairs are clickes the picture are disapearing quickly.
// same thing for reloading the page, it reloads after loosing, it's reloading right after the you lost message, so I won't appear clearly


boxes.forEach((box, i) => {
    box.addEventListener("click", () => {
        tries += 1;
        choices.push(i);
        const image = document.getElementById("img"+i);
        image.classList.add("show");
        image.classList.add("displayed");

        if (choices.length  == 2 ) {
            if ((choices[0] == 0 && choices[1] == 4) || (choices[0] == 4 && choices[1] == 0)) {
                hide_contants(0, 4);
                choices = [];
                score += 1 ;
            } else if ((choices[0] == 1 && choices[1] == 2) || (choices[0] == 2 && choices[1] == 1)) {
                hide_contants(1, 2);
                choices = [];
                score += 1 ;
            } else if ((choices[0] == 5 && choices[1] == 3) || (choices[0] == 3 && choices[1] == 5)) {
                hide_contants(3, 5);
                choices = [];
                score += 1 ;
            } else { hideAllPictures(boxes);
                choices = [];
            }
        } else if (choices.length > 3) { choices.length = 0 }
        console.log(tries)
        console.log(score)

        if (score == 3 && tries == 6) {
            paragraph = document.getElementById("score");
            let text = document.createTextNode("You won! 🐘 score = 3");
            paragraph.appendChild(text);}
        
        if (tries > 6) {
            paragraph = document.getElementById("score");
            let text = document.createTextNode("You lost! 🐠 ");
            paragraph.appendChild(text);
            window.location.reload();
        }
    })
})



const hideAllPictures = (boxes) => {
        boxes.forEach((box,i) => {
            const image = document.getElementById("img"+i);
            image.classList.remove("show")
    })
}

const hide_contants = (a,b) => {
    let img1 = document.getElementById("img"+a);
    let box1 = document.getElementById("box"+a);
    img1.classList.remove("show");
    box1.classList.add("transparent");
    let img2 = document.getElementById("img"+b);
    let box2 = document.getElementById("box"+b); 
    img2.classList.remove("show");
    box2.classList.add("transparent");
}