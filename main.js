function changeTheme() {
    console.log("Changing theme")
    var card = document.getElementById("card");
    var body = document.getElementById("body");
    var links = document.getElementsByClassName("link");
    body.classList.toggle("dark-text");
    card.classList.toggle("dark");
    body.classList.toggle("dark");
    for (i=0; i<links.length; i++){
        links[i].classList.toggle("dark-text");
    }
};
