const names = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function() {
    return names.slice(0, 2);
}

const returnLastTwoDrivers = function() {
     return names.slice(2)
        return returnFirstTwoDrivers.slice[2];
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers] 

function createFareMultiplier(integer) {
    return function calculate() {
        return integer*5
    }
} 
const fareDoubler = createFareMultiplier(4)
const fareTripler = createFareMultiplier(7.2)

function selectDifferentDrivers(names, returnLastTwoDrivers) {
    return returnLastTwoDrivers(names);

}