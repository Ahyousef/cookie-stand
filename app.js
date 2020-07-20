`use strict`

var timeArray = ["6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM"];

var hourlyTotals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function CityConst(name, minCust, maxCust, avgSale) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgSale = avgSale;
    this.Array = [];
    this.total = 0;
}

CityConst.prototype.randomCus = function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
};

CityConst.prototype.cookiesList = function () {
    this.Array = [];
    for (let index = 0; index < timeArray.length; index++) {
        var cookies = Math.round(this.randomCus() * this.avgSale);
        hourlyTotals[index] += cookies;
        this.Array.push(cookies);
    };
};

CityConst.prototype.totalCookies = function () {
    for (let index = 0; index < this.Array.length; index++) {
        this.total += parseInt(this.Array[index]);
    };
    hourlyTotals[hourlyTotals.length - 1] += this.total;
    return this.total;
};

CityConst.prototype.render = function () {
    var row = document.createElement("tr");
    var header = document.createElement("th");
    header.innerHTML = this.name;
    row.append(header);
    for (let index = 0; index < (this.Array).length; index++) {
        var data = document.createElement("td");
        data.innerHTML = (this.Array)[index];
        row.append(data);
    };
    var dailyTotal = document.createElement("td");
    dailyTotal.innerHTML = this.total;
    row.append(dailyTotal);
    table.append(row);
    parent.append(table);
}



var Seattle = new CityConst("Seattle", 23, 65, 6.3);
var Tokyo = new CityConst("Tokyo", 3, 24, 1.2);
var Dubai = new CityConst("Dubai", 11, 38, 3.7);
var Paris = new CityConst("Paris", 20, 38, 2.3);
var Lima = new CityConst("Lima", 2, 16, 4.6);



var cityNames = [Seattle, Tokyo, Dubai, Paris, Lima];


var table = document.createElement("table");
var parent = document.getElementById("parent");


function header() {
    var row = document.createElement("tr");
    var empty = document.createElement("th");
    row.append(empty);
    for (let index = 0; index < timeArray.length; index++) {
        var heading = document.createElement("th");
        heading.textContent = timeArray[index];
        row.append(heading);
    };

    var Total = document.createElement("th");
    Total.innerHTML = "Daily Location Total";
    row.append(Total);
    table.append(row);
    parent.append(table);
}

function footer() {
    var row = document.createElement("tr");
    var Totals = document.createElement("th");
    Totals.innerHTML = "Totals"
    row.append(Totals);
    for (let index = 0; index < timeArray.length + 1; index++) {
        var data = document.createElement("td");
        data.textContent = hourlyTotals[index];
        row.append(data);
    };
    table.append(row);
    parent.append(table);
}
var displayed = false;
function displayAll() {
    if (displayed == false) {

        header()
        for (let index = 0; index < cityNames.length; index++) {
            cityNames[index].randomCus();
            cityNames[index].cookiesList();
            cityNames[index].totalCookies();
            cityNames[index].render();
        };
        footer()
        displayed = true;

    };
};

function darkTheme() {
    var body = document.body;
    body.classList.toggle("darkBody");
    var sub = document.getElementsByClassName("subtitles");
}


var standForm = document.getElementById("standForm");

submit.onclick = () => {
    debugger
    var myNode = document.getElementById("parent");
    myNode.innerHTML = '';
    table.innerHTML =''
    hourlyTotals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  }

standForm.addEventListener('submit', function () {
    event.preventDefault();

    var cityNameValue = event.target.cityName.value;

    var minCusValue = event.target.minCus.value;

    var maxCusValue = event.target.maxCus.value;

    var avgSaleValue = event.target.avgSale.value;

    var newCity = new CityConst(
        cityNameValue,
        minCusValue,
        maxCusValue,
        avgSaleValue
    )
    cityNames.push(newCity);

        displayed = false;
        displayAll();

});


