let nums = [140, 45, 12, 56, 25, 89, 10, 4, 84, 14]
let result = nums.map(even => even % 2 === 0 ?   " 🍌" : "🍒" );
console.log(result);
let cars = [ "Toyota", "honda", "FORD", "Chevrolet", "bmw", "Mercedes-Benz", "audi", "TESLA", "Nissan", "volVo", "Kia","HYUNDAI", "JeEp", "subaru", "PeuGeOt"];
let carsFlag = cars.map(car => {
    let carsLower = car.toLowerCase();
    let flag = " "
    switch(carsLower) {
        case "toyota":
        case "honda":
        case "nissan":
        case "subaru":
            flag = "🇯🇵";
            break;

        case "ford":
        case "chevrolet":
        case "tesla":
        case "jeep":
            flag = "🇺🇸";
            break;

        case "bmw":
        case "mercedes-benz":
        case "audi":
            flag = "🇩🇪";
            break;

        case "volvo":
            flag = "🇸🇪";
            break;

        case "kia":
        case "hyundai":
            flag = "🇰🇷";
            break;

        case "peugeot":
            flag = "🇫🇷";
            break;

        default:
            flag = "🏳️";
        }
    return `${car} ${flag}`
})
console.log(carsFlag);
let filter = cars.filter(c => c.length <= 4);
console.log(filter);
let lessons = [1,2,3,4,5,6,7,8]
let cards = document.getElementById("cards");

lessons.map(num => {
    const card = document.createElement('div');
    card.className = 'card';

    const heading = document.createElement('h3');
    heading.textContent = `Урок №${num}`;

    card.onclick = () =>{
        card.style.background = "yellow";
        heading.style.color = "black";
    }

    card.appendChild(heading);
    cards.appendChild(card);
});

