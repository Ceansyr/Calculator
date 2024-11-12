let display = document.getElementById("display");

function append(value) {
    if (display.innerText === "0") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function deleteLast() {
    display.innerText = display.innerText.slice(0, -1);
    if (display.innerText === "") {
        display.innerText = "0";
    }
}

function resetDisplay() {
    display.innerText = "0";
}

function calculate() {
    try {
        let result = eval(display.innerText.replace("x", "*"));
        if (typeof result === "number" && !isNaN(result)) {
            if (result % 1 !== 0) {
                display.innerText = parseFloat(result.toFixed(3));
            } else {
                display.innerText = result;
            }
        } else {
            display.innerText = "Error";
        }
    } catch (error) {
        display.innerText = "Error";
    }
}

