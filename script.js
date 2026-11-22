const searchInput = document.getElementById("search");
const serviceCards = document.querySelectorAll(".service-card");
const statusText = document.getElementById("status");

if (searchInput) {

    searchInput.addEventListener("input", () => {

        const searchTerm = searchInput.value.toLowerCase();

        let visibleCards = 0;

        serviceCards.forEach(card => {

            const text = card.textContent.toLowerCase();

            if (text.includes(searchTerm)) {
                card.style.display = "block";
                visibleCards++;
            } else {
                card.style.display = "none";
            }

        });

        statusText.textContent =
            `${visibleCards} palvelua näkyvissä`;

    });

}

/* localStorage */

const nameInput = document.getElementById("name");

if (nameInput) {

    nameInput.value =
        localStorage.getItem("customerName") || "";

    nameInput.addEventListener("input", () => {

        localStorage.setItem(
            "customerName",
            nameInput.value
        );

    });

}

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", (event) => {

        if (!form.checkValidity()) {

            event.preventDefault();

            const firstInvalid =
                form.querySelector(":invalid");

            firstInvalid.focus();
        }

    });

}

/* Onnistuiko huoltopyynnön lähetys */

const successMessage =
    document.getElementById("successMessage");

if (form && successMessage) {

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        if (form.checkValidity()) {

            successMessage.textContent =
                "Huoltopyyntö vastaanotettu.";

        }

    });

}