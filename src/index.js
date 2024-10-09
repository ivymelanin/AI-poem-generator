function generatePoem(event) {
    event.preventDefault();

    new Typewriter("#poem", {
        strings: "hey there",
        autoStart: true,
        delay: 1;
        cursor: "";
      });
}

let poemLine = document.querySelector("#poem");
poemLine.addEventListener("submit", generatePoem);
