var math = document.getElementById("display");
function getValue(val) {
    math.value += val;
}

function acButton() {
    document.getElementById("display").value = "";
}

function del() {
    var currentValue = math.value;
  math.value = currentValue.slice(0, -1);
}

function solve() {
    var result = math.value;
    try {
        var solve = eval(result);
        math.value = solve;
    } catch(error) {
        math.value = 'Error';
    }
}