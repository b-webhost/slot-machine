function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

function setSlotNumbers() {
    let randomInt = getRandomInt(100, 999);
    odometer.innerHTML = randomInt;
    let arr = String(randomInt).split("");

    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1] || arr[i - 1] == arr[i]) count++;
    }

    if (count == 3) {        
        let num = Number(document.getElementById("bank").innerText)
        document.getElementById("bank").innerText = String(num + 50000)
        document.getElementById("win").innerText = "50000";
    } else if (count == 2) {
        let num = Number(document.getElementById("bank").innerText)
        document.getElementById("bank").innerText = String(num + 5000)
        document.getElementById("win").innerText = "5000";
    } else {        
        document.getElementById("win").innerText = "0";
    }
}

setTimeout(function() {
    odometer.innerHTML = getRandomInt(100, 999);
}, 1000);


