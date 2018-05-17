let h = document.getElementsByTagName("a");
let button = document.getElementById("button")

button.onclick = function() {
    
    for (let i = 0; i < h.length; i++) {
    console.log(h[i].getAttribute('href'));
    
    if (h[i].getAttribute('href') == "#")
        h[i].style.color = "red";
}
}

