function hyClick() {
    let x = document.getElementById("get");
    if (x.href === "/id/") {
        x.href = "/id/";
    } else {
        x.innerHTML = "Hello";
    }
}
