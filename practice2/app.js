const seasons = {
    winter: ["December", "January", "February"],
    spring: ["March", "April", "May"],
    summer: ["June", "July", "August"],
    autumn: ["September", "October", "November"]
};

const seasonBgc = {
    winter: "#b3d4fc",
    spring: "#d4fcb3",
    summer: "#ffe59e",
    autumn: "#fbc6a4"
};

const monthContainer = document.querySelector("#month-buttons");

function showMonths(season) {
    monthContainer.innerHTML = "";


    document.body.style.background = seasonBgc[season];


    seasons[season].forEach(month => {
        const button = document.createElement("button");
        button.textContent = month;
        button.classList.add("animate__animated", "animate__fadeInUp");
        monthContainer.appendChild(button);
    });
}

["winter", "spring", "summer", "autumn"].forEach(season => {
    const btn = document.querySelector(`#${season}`);
    if (btn) {
        btn.addEventListener("click", () => showMonths(season));
    }
});
