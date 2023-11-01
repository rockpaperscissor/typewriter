let title = document.querySelector(".main_heading");
let name = "i am  a software developer";
let index = 1;

function typeWriter() {
    let new_title = name.slice(0, index);
    title.innerText = new_title;
    index > name.length ? index = 1 : index++;
   // index++;
    setTimeout(() => typeWriter(), 100); // Keep the 600ms timeout as per your original code
}

typeWriter();
