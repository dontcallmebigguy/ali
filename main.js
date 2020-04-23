if (localStorage.getItem("ali-nagi-theme") === "dark") {
    changeTheme();
    localStorage.setItem("ali-nagi-theme", "dark");
    document.getElementById("theme").checked = true;
} else {
    localStorage.setItem("ali-nagi-theme", "light");
    document.getElementById("theme").checked = false;
}

function changeTheme() {
    console.log("Changing theme")
    var body = document.getElementById("body");
    var links = document.getElementsByClassName("link");
    console.log(body);
    body.classList.toggle("dark-text");
    body.classList.toggle("dark");
    for (i = 0; i < links.length; i++) {
        links[i].classList.toggle("dark-text");
    }
    if (localStorage.getItem("ali-nagi-theme") === "dark") {
        localStorage.setItem("ali-nagi-theme", "light");
    } else {
        console.log("changing to dark");
    }
};
