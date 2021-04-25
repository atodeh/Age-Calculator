alert("This program is going to calculate your age based on your birthdate, and todays date.");

let birthMonth = -1; //used for loop below to ensure user enters proper month
//converts birth month to # between 1-12, and then multiplies it by number of days in a month
while (birthMonth < 0) {
	birthMonth = ((convertMonthToNumber(prompt("Which month were you born?"))) * 30.417) - 30.417; 
}

let birthDay = 0; //declared as 0 for loop below to ensure user enters day between 1-31
const birthDayMessage = "Which day of the month were you born?";
birthDay = calculateDayOfTheMonth(birthDay, birthDayMessage);

const totalBirthNumber = birthMonth + birthDay; //finds which day out of the #/365 you were born

let birthYear = 0; //used for loop below to ensure user enters valid year
const birthYearMessage = "Which year were you born?";
birthYear = calculateYear(birthYear, birthYearMessage);

const birthYearInDays = (birthYear * 365.25) + totalBirthNumber; //convert birth year into days

let todaysMonth = -1; //used for loop below to ensure user enters proper month
//converts todays month to # between 1-12, and then multiplies it by number of days in a month
while (todaysMonth < 0) {
	todaysMonth = ((convertMonthToNumber(prompt("Which month is it right now?"))) * 30.417) - 30.417;
}

let todaysDay = 0; //declared as 0 for loop below to ensure user enters day between 1-31
const todaysDayMessage = "Which day of the month is it right now?";
todaysDay = calculateDayOfTheMonth(todaysDay, todaysDayMessage);

/*this function will calculate the day of the month
the first parameter is for the day, while the second
parameter is for birth day prompt vs current day prompt*/
function calculateDayOfTheMonth(day, message) {
	while (day < 1 || day > 31 || isNaN(day)) {
		day = Number(prompt(message));
		if (day < 1 || day > 31 || isNaN(day)) {
			alert("Please enter a valid number."); //only happens if user enters invalid number
	} else {
		return day;
	}
}}

const totalTodaysNumber = todaysMonth + todaysDay; //find todays #/365 we are in

let todaysYear = 0; //used for loop below to ensure user enters valid year
const todaysYearMessage = "Which year is it right now?";
todaysYear = calculateYear(todaysYear, todaysYearMessage);

/*this function will calculate the year. The first parameter is for the year,
while the second parameter is for birth year prompt vs current year prompt*/
function calculateYear(year, message) {
	while (year < 1 || year > 2021 || isNaN(year)) {
		year = Number(prompt(message));
		if (year < 1 || year > 2021 || isNaN(year)) {
			alert("Please enter a valid year."); //only happens if user enters invalid year
	} else {
		return year;
	}
}}

const todaysYearInDays = (todaysYear * 365.25) + totalTodaysNumber; //convery todays year into days

const ageYear = (todaysYearInDays - birthYearInDays) / 365.25; //age of user in years
const ageMonth = (todaysYearInDays - birthYearInDays) / 30.5; //age of user in months
const ageDay = (todaysYearInDays - birthYearInDays); //age of user in days

alert(("You are " + Math.round(ageYear) + " years old!\n\n") +
("In months, you are " + Math.round(ageMonth) + " months old!\n") +
("In days, you are " + Math.round(ageDay) + " days old!"));

function convertMonthToNumber(month) {
	switch (month) {
		case "January":
		case "january":
			month = 1;
			break;
		case "February":
		case "february":
			month = 2;
			break;
		case "March":
		case "march":
			month = 3;
			break;
		case "April":
		case "april":
			month = 4;
			break;
		case "May":
		case "may":
			month = 5;
			break;
		case "June":
		case "june":
			month = 6;
			break;
		case "July":
		case "july":
			month = 7;
			break;
		case "August":
		case "august":
			month = 8;
			break;
		case "September":
		case "september":
			month = 9;
			break;
		case "October":
		case "october":
			month = 10;
			break;
		case "November":
		case "november":
			month = 11;
			break;
		case "December":
		case "december":
			month = 12;
			break;
		default: alert("Please enter a valid month.")
		month = 0; //runs loop again
		}
	return month;
}