// let numbers.num1 = "", numbers.num2 = "", numbers.operator = null, result = "";
let numbers = {
  num1: "",
  num2: "",
  operator: null,
  allexpression: "",
};

let Display = document.querySelector(".display");

function updateDisplay(content) {
  let existingDisplayCont = document.querySelector(".displaycont");

  if (existingDisplayCont) {
    Display.removeChild(existingDisplayCont);
  }

  let displaycont = document.createElement("div");
  displaycont.className = "displaycont";
  displaycont.textContent = content;

  Display.appendChild(displaycont);
}



function operate(num1, num2, operator) {
  switch (numbers.operator) {
    case "+":
      numbers.num1 = parseFloat(num1) + parseFloat(num2);
      console.log(numbers.num1);
      numbers.allexpression = numbers.num1;
      updateDisplay(numbers.allexpression);
      numbers.num2 = "";
      break;
    case "-":
      numbers.num1 = parseFloat(num1) - parseFloat(num2);
      console.log(numbers.num1);
      numbers.allexpression = numbers.num1;
      updateDisplay(numbers.allexpression);
      numbers.num2 = "";
      break;
    case "*":
      numbers.num1 = parseFloat(num1) * parseFloat(num2);
      console.log(numbers.num1);
      numbers.allexpression = numbers.num1;
      updateDisplay(numbers.allexpression);
      numbers.num2 = "";
      break;
    case "/":
      numbers.num1 = parseFloat(num1) / parseFloat(num2);
      console.log(numbers.num1);
      numbers.allexpression = numbers.num1;
      updateDisplay(numbers.allexpression);
      numbers.num2 = "";
      break;
  }
}

let listOfNumber = document.querySelectorAll(".key");
let Operators = document.querySelectorAll(".btn");

listOfNumber.forEach((number) => {
  if (number.classList.contains("key1")) {
    number.addEventListener("click", () => {
      console.log("cliked1");
      numbers.allexpression += 1;
      updateDisplay(numbers.allexpression);
      if (numbers.operator == null) {
        numbers.num1 += 1;
        console.log(numbers.num1);
      } else if (numbers.operator == "=") {
        numbers.num1 = "";
        numbers.allexpression = "";
        numbers.allexpression += 1;
        numbers.num1 += 1;
        numbers.num2 = "";
        numbers.operator = null;
        console.log(numbers.num1);
        updateDisplay(numbers.allexpression);
      } else {
        numbers.num2 += 1;
        console.log(numbers.num2);
      }
    });
  }
  if (number.classList.contains("key2")) {
    number.addEventListener("click", () => {
      console.log("cliked2");
      numbers.allexpression += 2;
      updateDisplay(numbers.allexpression);
      if (numbers.operator == null) {
        numbers.num1 += 2;
        console.log(numbers.num1);
      } else if (numbers.operator == "=") {
        numbers.num1 = "";
        numbers.allexpression = "";
        numbers.allexpression += 2;
        numbers.num1 += 2;
        numbers.num2 = "";
        numbers.operator = null;
        updateDisplay(numbers.allexpression);
        console.log(numbers.num1);
      } else {
        numbers.num2 += 2;
        console.log(numbers.num2);
      }
    });
  }
  if (number.classList.contains("key3")) {
    number.addEventListener("click", () => {
      console.log("cliked3");
      numbers.allexpression += 3;
      updateDisplay(numbers.allexpression);
      if (numbers.operator == null) {
        numbers.num1 += 3;
        console.log(numbers.num1);
      } else if (numbers.operator == "=") {
        numbers.num1 = "";
        numbers.allexpression = "";
        numbers.allexpression += 3;
        numbers.num1 += 3;
        numbers.num2 = "";
        numbers.operator = null;
        updateDisplay(numbers.allexpression);
        console.log(numbers.num1);
      } else {
        numbers.num2 += 3;
        console.log(numbers.num2);
      }
    });
  }
  if (number.classList.contains("key4")) {
    number.addEventListener("click", () => {
      console.log("cliked4");
      numbers.allexpression += 4;
      updateDisplay(numbers.allexpression);
      if (numbers.operator == null) {
        numbers.num1 += 4;
        console.log(numbers.num1);
      } else if (numbers.operator == "=") {
        numbers.num1 = "";
        numbers.allexpression = "";
        numbers.num1 += 4;
        numbers.allexpression += 4;
        updateDisplay(numbers.allexpression);
        numbers.num2 = "";
        numbers.operator = null;
        console.log(numbers.num1);
      } else {
        numbers.num2 += 4;
        console.log(numbers.num2);
      }
    });
  }
  if (number.classList.contains("key5")) {
    number.addEventListener("click", () => {
      console.log("cliked5");
      numbers.allexpression += 5;
      updateDisplay(numbers.allexpression);
      if (numbers.operator == null) {
        numbers.num1 += 5;
        console.log(numbers.num1);
      } else if (numbers.operator == "=") {
        numbers.num1 = "";
        numbers.allexpression = "";
        numbers.num1 += 5;
        numbers.allexpression += 5;
        updateDisplay(numbers.allexpression);
        numbers.num2 = "";
        numbers.operator = null;
        console.log(numbers.num1);
      } else {
        numbers.num2 += 5;
        console.log(numbers.num2);
      }
    });
  }
  if (number.classList.contains("key6")) {
    number.addEventListener("click", () => {
      console.log("cliked6");
      numbers.allexpression += 6;
      updateDisplay(numbers.allexpression);
      if (numbers.operator == null) {
        numbers.num1 += 6;
        console.log(numbers.num1);
      } else if (numbers.operator == "=") {
        numbers.num1 = "";
        numbers.allexpression = "";
        numbers.num1 += 6;
        numbers.allexpression += 2;
        updateDisplay(numbers.allexpression);
        numbers.num2 = "";
        numbers.operator = null;
        console.log(numbers.num1);
      } else {
        numbers.num2 += 6;
        console.log(numbers.num2);
      }
    });
  }
  if (number.classList.contains("key7")) {
    number.addEventListener("click", () => {
      console.log("cliked7");
      numbers.allexpression += 2;
      updateDisplay(numbers.allexpression);
      if (numbers.operator == null) {
        numbers.num1 += 7;
        console.log(numbers.num1);
      } else if (numbers.operator == "=") {
        numbers.num1 = "";
        numbers.allexpression = "";
        numbers.num1 += 7;
        numbers.allexpression += 2;
        updateDisplay(numbers.allexpression);
        numbers.num2 = "";
        numbers.operator = null;
        console.log(numbers.num1);
      } else {
        numbers.num2 += 7;
        console.log(numbers.num2);
      }
    });
  }
  if (number.classList.contains("key8")) {
    number.addEventListener("click", () => {
      console.log("cliked8");
      numbers.allexpression += 8;
      updateDisplay(numbers.allexpression);
      if (numbers.operator == null) {
        numbers.num1 += 8;
        console.log(numbers.num1);
      } else if (numbers.operator == "=") {
        numbers.num1 = "";
        numbers.allexpression = "";
        numbers.num1 += 8;
        numbers.allexpression += 8;
        updateDisplay(numbers.allexpression);
        numbers.num2 = "";
        numbers.operator = null;
        console.log(numbers.num1);
      } else {
        numbers.num2 += 8;
        console.log(numbers.num2);
      }
    });
  }
  if (number.classList.contains("key9")) {
    number.addEventListener("click", () => {
      console.log("cliked");
      numbers.allexpression += 9;
      updateDisplay(numbers.allexpression);
      if (numbers.operator == null) {
        numbers.num1 += 9;
        console.log(numbers.num1);
      } else if (numbers.operator == "=") {
        numbers.num1 = "";
        numbers.allexpression = "";
        numbers.num1 += 9;
        numbers.allexpression += 9;
        updateDisplay(numbers.allexpression);
        numbers.num2 = "";
        numbers.operator = null;
        console.log(numbers.num1);
      } else {
        numbers.num2 += 9;
        console.log(numbers.num2);
      }
    });
  }
  if (number.classList.contains("key0")) {
    number.addEventListener("click", () => {
      console.log("cliked");
      numbers.allexpression += 0;
      updateDisplay(numbers.allexpression);
      if (numbers.operator == null) {
        numbers.num1 += 0;
        console.log(numbers.num1);
      } else if (numbers.operator == "=") {
        numbers.num1 = "";
        numbers.allexpression = "";
        numbers.num1 += 0;
        numbers.allexpression += 0;
        updateDisplay(numbers.allexpression);
        numbers.num2 = "";
        numbers.operator = null;
        console.log(numbers.num1);
      } else {
        numbers.num2 += 0;
        console.log(numbers.num2);
      }
    });
  }
  if (number.classList.contains("equal")) {
    number.addEventListener("click", () => {
      console.log("equal");
      if (numbers.operator == null || numbers.operator == "=") {
        console.log(numbers.num1);
      } else {
        if(num1 == '' && num2 == ''){

          return;
        }
        operate(numbers.num1, numbers.num2, numbers.operator);
        numbers.operator = "=";
      }
    });
  }
  if (number.classList.contains("ce")) {
    number.addEventListener("click", () => {
      numbers.num1 = "";
      numbers.num2 = "";
      numbers.operator = null;
      numbers.allexpression = '';
      console.log("All set to null");
    });
  }
});

Operators.forEach((Operator) => {
  if (Operator.classList.contains("btn+")) {
    Operator.addEventListener("click", () => {
      console.log("clicked+");
      if (numbers.operator != null) {
        if(num1 == '' && num2 == ''){
          numbers.operator = '+';
          return;
        }
        operate(numbers.num1, numbers.num2, numbers.operator);
        numbers.operator = "+";
      } else {
        numbers.operator = "+";
      }
      numbers.allexpression += '+';
      updateDisplay(numbers.allexpression);
    });
  }
  if (Operator.classList.contains("btn-")) {
    Operator.addEventListener("click", () => {
      console.log("clicked-");
      if (numbers.operator != null) {
        if(num1 == '' && num2 == ''){
          numbers.operator = '-';
          return;
        }
        operate(numbers.num1, numbers.num2, numbers.operator);
        numbers.operator = "-";
      } else {
        numbers.operator = "-";
      }
      numbers.allexpression += '-';
      updateDisplay(numbers.allexpression);
    });
  }
  if (Operator.classList.contains("btn*")) {
    Operator.addEventListener("click", () => {
      console.log("clicked*");
      if (numbers.operator != null) {
        if(num1 == '' && num2 == ''){
          numbers.operator = '*';
          return;
        }
        operate(numbers.num1, numbers.num2, numbers.operator);
        numbers.operator = "*";
      } else {
        numbers.operator = "*";
      }
      numbers.allexpression += '*';
      updateDisplay(numbers.allexpression);
    });
  }
  if (Operator.classList.contains("btn/")) {
    Operator.addEventListener("click", () => {
      console.log("clicked/");
      if (numbers.operator != null) {
        if(num1 == '' && num2 == ''){
          numbers.operator = '/';
          return;
        }
        operate(numbers.num1, numbers.num2, numbers.operator);
        numbers.operator = "/";
      } else {
        numbers.operator = "/";
      }
      numbers.allexpression += '÷';
      updateDisplay(numbers.allexpression);
    });
  }
});
