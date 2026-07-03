function control(value) {
    document.getElementById("box").value += value;
}
function clearBox() {
    document.getElementById("box").value = "";
}

function calculate() {
    try {
        let result = document.getElementById("box").value;
        result = result.replace(/X/g, "*");
        document.getElementById("box").value = eval(result);
        
    } catch (e) {
        document.getElementById("box").value = "Error";

    }
} 
