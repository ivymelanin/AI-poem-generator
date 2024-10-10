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
    let context = "Write any poem in two paragraphs and be short and clear. start every sentence in a new line ";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiUrl).then(poem);
}

let poemLine = document.querySelector("#poem-generator");
poemLine.addEventListener("submit", generatePoem);
