const x = document.getElementById("background")

function Flipper() {
    x.style.backgroundColor = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'); // Let us focus how this works
}