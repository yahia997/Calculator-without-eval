var text = document.getElementById("text"),
    final = document.getElementById("final"),
    equal = document.getElementById("equal"),
    dele = document.getElementById("del"),
    reset = document.getElementById("del-all");


function add(value) {
    final.textContent = "";
    text.textContent += value;
}

function del() {
    text.textContent = text.textContent.slice(0, -1);
}

function resetFunc() {
    text.textContent = "";
    final.textContent = "";
}

dele.addEventListener('click', () => {
    del();
});
reset.addEventListener('click', () => {
    resetFunc();
});

var result = 0;

const calc = (string) => {
    let nums = string.trim().split(/[-|+|×|÷]/gi) || [];
    let operators = string.match(/[-|+|×|÷]/gi) || [];
    
    result = Number(nums[0]);

    operators.map((a, i) => {
        let nextNumber = Number(nums[i + 1]);
        switch (a) {
            case "×":
                result = result * nextNumber;
                break;
            case "+":
                result = result + nextNumber;
                break;
            case "-":
                result = result - nextNumber;
                break;
            case "÷":
                result = result / nextNumber;
                break;
        }
    });

    final.textContent = result;
}
equal.addEventListener('click', () => {
    calc(text.textContent);
});