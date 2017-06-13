document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    
    function Phone(brand, price, color, size, processor, battery) {
        this.brand = brand;
        this.price = price;
        this.color = color;
        this.size = size;
        this.processor = processor;
        this.battery = battery;
    }
    
    Phone.prototype.printInfo = function () {
        console.log('To jest telefon marki ' + this.brand + ' kosztuje on ' + this.price + ' ma kolor ' + this.color + ' bateria w tym telefonie wytrzymuje ' + this.battery + ' godzin. Posiada on również processor ' + this.processor + ' a jego wielkość to ' + this.size + ' cali.');
    };
    
    var galaxyS6 = new Phone('Samsung', 500, 'black', 5, 'Intel', 30),
        iPhone6s = new Phone('Apple', 1000, 'white', 5, 'Intel', 25),
        OnePlus = new Phone('One', 300, 'gray', 5, 'AMD', 10);
    
    galaxyS6.printInfo();
    iPhone6s.printInfo();
    OnePlus.printInfo();
});