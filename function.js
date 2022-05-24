function isLeapYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    else {
        cosole.log('sorry I am not a leap year')
    }

}
const myYear = 2001;
const isMyLeapYear = isLeapYear(myYear);
console.log('is my year leap year', isMyLeapYear);
