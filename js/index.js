const boxes = document.querySelectorAll(".box")


boxes.forEach((box, i) => {
    box.addEventListener("click", () => {
        const image = document.getElementById("img"+i);
        image.classList.add("show")
    })
});



