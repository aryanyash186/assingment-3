//
function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}
var dipok = kilometerToMeter(186);
console.log(dipok);



function budgetCalculator(watch, phone, laptop) {
    var totalCost = watch * 50 + phone * 100 + laptop * 500;
    return totalCost;
} 
var puja = budgetCalculator(10, 15, 20)
console.log(puja);



function hotelCost(days) {
    if (days <= 10) {
       var totalHotelBill = days * 100;
    }
    else if (days <= 20) {
        var fastTenDays = 10 * 100;
        var calculatDays = days - 10;
        var secondTenDays = calculatDays * 80;
        totalHotelBill = fastTenDays + secondTenDays;
    }
    else {
        fastTenDays = 10 * 100;
        secondTenDays = 10 * 80;
        calculatDays = days - 20;
        var lastEveryDays = calculatDays * 50;
        totalHotelBill = fastTenDays + secondTenDays + lastEveryDays;
    }
    return totalHotelBill;
}
var dipa = hotelCost(30);
console.log(dipa);



function megaFriend(friendsName) {
    var largeFriendName = friendsName[0];
    for ( var i = 0; i < friendsName.length; i++) {
        var friendName = friendsName[i];
        if (friendName.length > largeFriendName.length) {
            largeFriendName = friendName;
        }
    }
    return largeFriendName;
}
var names = [
  "lavin",
  "dipu",
  "dipto sd",
  "dipto mondol",
  "patho mondolo",
  "partho basshak",
  "md jahid",
  "gourangga",
  "rahat",
  "shajid",
];
var aryanYash = megaFriend(names);
console.log(aryanYash);