let newStock = document.querySelector(".newStock");
//let companyNameInput = document.querySelector("companyName1");
//let tickerInput = document.querySelector("ticker");
//let industryInput = document.querySelector("stockIndustry");
let submitBtn = document.querySelector(".done");
let stockOne = document.querySelector(".stockOne");

submitBtn.addEventListener("click", myFunction);
function myFunction() {
  let company = document.getElementById("companyName1").value;
  let tickerInput = document.getElementById("ticker").value;
  let industryInput = document.getElementById("stockIndustry").value;

  stockOne.innerHTML = `Company Name: ${company} <br> Ticker: ${tickerInput}<br> Industry: ${industryInput} `;
  // stockOne.innerHTML = `${tickerInput}`;
}

let myDashboard = [];

function Stock(company, ticker, industry) {
  this.company = company;
  this.ticker = ticker;
  this.industry = industry;
}

// Stock.prototype.sayStock = function () {
//   console.log(this.ticker);
// };

// let stockOne = new Stock("AAPL", "Tech");

// console.log(stockOne);
// stockOne.sayStock();

function addStocktoDashboard() {}
