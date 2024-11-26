// 1. returnFirstTwoDrivers
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
};

// 2. returnLastTwoDrivers
const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
};

// 3. selectingDrivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 4. createFareMultiplier
const createFareMultiplier = function (multiplier) {
    return function (fare) {
        return fare * multiplier;
    };
};

// 5. fareDoubler
const fareDoubler = createFareMultiplier(2);

// 6. fareTripler
const fareTripler = createFareMultiplier(3);

// 7. selectDifferentDrivers
const selectDifferentDrivers = function (drivers, driverSelector) {
    return driverSelector(drivers);
};

// Examples of usage:
// Example 1: returnFirstTwoDrivers
console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); 
// Output: ['Antonia', 'Nuru']

// Example 2: returnLastTwoDrivers
console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); 
// Output: ['Amari', 'Mo']

// Example 3: selectingDrivers
console.log(selectingDrivers[0](['Antonia', 'Nuru', 'Amari', 'Mo'])); 
// Output: ['Antonia', 'Nuru']

console.log(selectingDrivers[1](['Antonia', 'Nuru', 'Amari', 'Mo'])); 
// Output: ['Amari', 'Mo']

// Example 4: createFareMultiplier and fareDoubler
console.log(fareDoubler(10)); 
// Output: 20

// Example 5: fareTripler
console.log(fareTripler(10)); 
// Output: 30

// Example 6: selectDifferentDrivers
console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers)); 
// Output: ['Antonia', 'Nuru']

console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnLastTwoDrivers)); 
// Output: ['Amari', 'Mo']
