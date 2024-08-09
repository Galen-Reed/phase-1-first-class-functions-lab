// Code your solution in this file!
const returnFirstTwoDrivers = function (array) {
    return array.slice(0,2);
};

const returnLastTwoDrivers = function (array) {
    return array.slice(2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
    return function (integer) {return integer*5}
 }

 const fareDoubler = function(integer) {
    return integer*2
 }
 const fareTripler = function(integer) {
    return integer*3
 }
 function selectDifferentDrivers(array, selectingDrivers) {
    return selectingDrivers(array);
 }