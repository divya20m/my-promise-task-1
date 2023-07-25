
function fetchCatFact() {
    return new Promise((resolve, reject) => {
        fetch("https://meowfacts.herokuapp.com/")
            .then(response => response.json())
            .then(data => resolve(data.data))
            .catch(error => reject(error));
    });
}


function displayCatFact(fact) {
    const dataContainer = document.querySelector(".data-container");
    const factElement = document.createElement("div");
    factElement.classList.add("card");

    const factText = document.createElement("p");
    factText.textContent = fact;

    factElement.appendChild(factText);
    dataContainer.appendChild(factElement);
}


function fetchNewFact() {
    fetchCatFact()
        .then(fact => displayCatFact(fact))
        .catch(error => console.error("Error fetching cat fact:", error));
}


const fetchButton = document.getElementById("fetch-btn");
fetchButton.addEventListener("click", fetchNewFact);


fetchNewFact();
