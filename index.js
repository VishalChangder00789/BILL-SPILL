/*Top Input*/

var billGenerated = false;

var input = document.getElementById("LeftSplit_Input_input_id");
var percentage = 0;
var total = 0;
let tipAmnt = 0;

/*Number of People */
var displayInput = document.getElementById("DisplayInput_id");
var IconDisplayInputNumber = document.getElementById("IconImageNumber_id");
let numberofPeople = 0;

displayInput.innerHTML = numberofPeople;
IconDisplayInputNumber.innerHTML = numberofPeople;

/*Right Hand SIDE */
var TipAmount = document.getElementById("TipAmount");
var TotalAmount = document.getElementById("TotalAmount");

/* Main Buttons */
var Generate_Button = document.getElementById("Generate_Button");
var Reset_Button = document.getElementById("Reset_Button");

// Methods Tips
const handle_five_Button = () => {
  percentage = 5 / 100;
};

const handle_ten_Button = () => {
  percentage = 10 / 100;
};

const handle_fifteen_Button = () => {
  percentage = 15 / 100;
};

const handle_twinfive_Button = () => {
  percentage = 25 / 100;
};

const handle_fifty_Button = () => {
  percentage = 50 / 100;
};

const handle_sevenfive_Button = () => {
  percentage = 75 / 100;
};

//Number of people
const handleIncrementButton = () => {
  numberofPeople++;
  displayInput.innerHTML = numberofPeople;
  IconDisplayInputNumber.innerHTML = numberofPeople;

  if (numberofPeople > 0) {
    Generate_Button.style.background = "#9C60FF";
    Generate_Button.style.color = "white";
  }
};
const handleDecrementButton = () => {
  if (numberofPeople > 0) {
    numberofPeople--;
  }
  displayInput.innerHTML = numberofPeople;
  IconDisplayInputNumber.innerHTML = numberofPeople;
  if (numberofPeople <= 0) {
    Generate_Button.style.background = "#f0f0f0";
    Generate_Button.style.color = "#8F8F8F";
  }
};

// Total Amount Decision is happening here

const handleGenerateBill = () => {
  if (numberofPeople != 0) {
    total =
      parseFloat(input.value * percentage) +
      parseFloat(input.value) / parseInt(numberofPeople);

    tipAmnt = parseFloat(input.value * percentage);

    TotalAmount.innerHTML = total.toFixed(3);
    TipAmount.innerHTML = tipAmnt.toFixed(3);
    billGenerated = true;
    Reset_Button.style.background = "white";
  }
};

const handleResetButton = () => {
  if (billGenerated) {
    // Left portion
    percentage = 0;
    input.value = "";
    numberofPeople = 0;
    IconDisplayInputNumber.innerHTML = 0;
    displayInput.innerHTML = 0;

    // Right Portion
    tipAmnt = 0;
    total = 0;
    TotalAmount.innerHTML = total;
    TipAmount.innerHTML = tipAmnt;
    Reset_Button.style.background = "#c39fff";
    Generate_Button.style.background = "#f0f0f0";
    Generate_Button.style.color = "#8F8F8F";
  }
};
