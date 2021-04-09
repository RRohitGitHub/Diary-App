let entryForm = document.getElementById("entryForm")
let entrySection = document.getElementById("entries")
let entryTextBox = document.getElementsByClassName("entry-textbox")
let entriesNav = document.querySelector(".entries-nav")

console.log(entryForm)
let displayButtonInnerText = 0
function addEntryToDOM(e){
    e.preventDefault();
    console.log(entryTextBox[0].value)
    let entryDiv = document.createElement("div")
    entryDiv.classList.add("single-entry")
    entryDiv.textContent = entryTextBox[0].value
    entryDiv.style.display="none"
    entrySection.appendChild(entryDiv)
    entryTextBox[0].value="";
    
    let displayEntryButton = document.createElement("button")
    displayEntryButton.className = "display-entry-button"
    displayButtonInnerText = displayButtonInnerText + 1;
    displayEntryButton.innerText = displayButtonInnerText
    entriesNav.appendChild(displayEntryButton)
    displayEntryButton.addEventListener("click", function () {
        let allEntries = document.querySelectorAll(".single-entry")

        for (let i = 0; i < allEntries.length; i++) {
            allEntries[i].style.display = "none"
        }
        entryDiv.style.display = "block"
    })
}

entryForm.addEventListener("submit",addEntryToDOM)

