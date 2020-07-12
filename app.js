`use strict`


var Seattle = {
    name: 'Seattle',
    minCust: 23,
    maxCust: 65,
    avgSale: 6.3,
    Array: [],
    randomCus: function () {
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    },
    cookiesList: function () {
        for (let index = 1; index < 19; index++) {
            var cookies = Math.round(this.randomCus() * this.avgSale);
            this.Array.push(cookies);
        }
    },
    totalCookies: function() {
        var total = 0;
        for (let index = 0; index < this.Array.length; index++) {
            total += parseInt(this.Array[index]);
        }
        return total
    }
}

var Amman = {
    name: 'Amman',
    minCust: 203,
    maxCust: 605,
    avgSale: 3.3,
    Array: [],
    randomCus: function () {
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    },
    cookiesList: function () {
        for (let index = 1; index < 19; index++) {
            var cookies = Math.round(this.randomCus() * this.avgSale);
            this.Array.push(cookies);
        }
    },
    totalCookies: function() {
        var total = 0;
        for (let index = 0; index < this.Array.length; index++) {
            total += parseInt(this.Array[index]);
        }
        return total
    }
}

var Paris = {
    name: 'Paris',
    minCust: 5,
    maxCust: 23,
    avgSale: 2.3,
    Array: [],
    randomCus: function () {
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    },
    cookiesList: function () {
        for (let index = 1; index < 19; index++) {
            var cookies = Math.round(this.randomCus() * this.avgSale);
            this.Array.push(cookies);
        }
    },
    totalCookies: function() {
        var total = 0;
        for (let index = 0; index < this.Array.length; index++) {
            total += parseInt(this.Array[index]);
        }
        return total
    }
}

var Dubai = {
    name: 'Dubai',
    minCust: 1,
    maxCust: 10,
    avgSale: 5.3,
    Array: [],
    randomCus: function () {
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    },
    cookiesList: function () {
        for (let index = 1; index < 19; index++) {
            var cookies = Math.round(this.randomCus() * this.avgSale);
            this.Array.push(cookies);
        }
    },
    totalCookies: function() {
        var total = 0;
        for (let index = 0; index < this.Array.length; index++) {
            total += parseInt(this.Array[index]);
        }
        return total
    }
}


function render(city) {
    city.cookiesList()
    var list = document.createElement("ul");
    list.innerHTML = city.name;
    var parent = document.getElementById('parent');
    parent.append(list);
    for (let index = 1; index < 18; index++) {
        var hour = document.createElement("li");
        hour.innerHTML = "Hour: "+index + ":00 | Cookies: "+city.Array[index];
        list.append(hour);
    }
    var total = document.createElement("li");
    total.innerHTML = "Total cookies : " + (city.totalCookies());
    list.append(total);
}