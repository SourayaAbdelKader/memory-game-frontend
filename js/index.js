const boxes = document.querySelectorAll(".box")
let number_of_clicks = 0;
let number_of_pictures = 6;
let html = 0
let css = 0
let js = 0


const start = () => {
    boxes.forEach((box, i) => {
        box.addEventListener("click", () => {
            number_of_clicks += 1;
            
            const image = document.getElementById("img"+i);
            image.classList.add("show");

            if (image.classList.contains("html")==true) {
                html += 1; image.classList.add("displayed");
                if (css != 0 || js != 0 ) { css=0, html = 0, js= 0; }
            } 

            if (html == 2 ) {
                hide_contants(0, 4);
                number_of_clicks = 0;
            } else { hideAllPictures(boxes, number_of_clicks); }
            
            if (image.classList.contains("css")==true) {
                css += 1; ; image.classList.add("displayed");
                if (html != 0 || js != 0 ) { css=0, html = 0, js= 0; }
            }

            if (css == 2 ) {
                hide_contants(1, 2);
                number_of_clicks = 0;
            } else { hideAllPictures(boxes, number_of_clicks);}

            if (image.classList.contains("js")==true) {
                js += 1; ; image.classList.add("displayed");
                if (html != 0 || css != 0 ) { css=0, html = 0, js= 0; }
            }

            if (js == 2 ) {
                hide_contants(5, 3);
                number_of_clicks = 0;
            } else { hideAllPictures(boxes, number_of_clicks);}
    
    if (number_of_pictures == 0) {
        const score = document.getElementById("score")
        score.innerText += "You won! Your score is 3"
    }
        })
})}


const hideAllPictures = (boxes, number_of_clicks) => {
    if (number_of_clicks > 2) {
        boxes.forEach((box,i) => {
            const image = document.getElementById("img"+i);
            image.classList.remove("show")
    })
    }
}

// hides the pairs after founding them
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

start();