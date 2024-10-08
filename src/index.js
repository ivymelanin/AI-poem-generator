function poem(response) {
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
      }); 
}
function generatePoem(event) {
    event.preventDefault();
    let instructionInput = document.querySelector("#instructions");
    let apiKey ="77e54fc3f3o315bb21050ac08t45b6af";
    let prompt = `User instructions: Generate a poem about ${instructionInput.value}`;
    let context = "Write any poem which is short and clear. generate a 6 line poem and each line in a new line, and separate each line ";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="generating">⏳ Generating a French poem about ${instructionInput.value}</div>`;
    axios.get(apiUrl).then(poem);
}

let poemLine = document.querySelector("#poem-generator");
poemLine.addEventListener("submit", generatePoem);
