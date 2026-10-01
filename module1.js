/* VAR-01 Problem Specification 
Objective: Convert and display a total number of seconds in standard digital clock format (HH:MM:SS).
Rules: If hours, minutes, or seconds are single digits, they must be padded with a leading zero (e.g., 5 becomes '05').
Logical Hint: Use division to find hours, and the remainder operator (%) to isolate remaining minutes and seconds. Use .padStart().
Expected Case Scenario: Input: 3665 → Output: '01:01:05'.
 */
const convertSecondsToDigitalClock = (totalSeconds) => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        console.log(formattedTime);

        if (totalSeconds === 0) {
            clearInterval(intervalId);
            console.log("Countdown finished!");
        }
        totalSeconds--;
};
    

convertSecondsToDigitalClock(3665); // Example usage: countdown from 3665 seconds (1 hour, 1 minute, and 5 seconds)

/* VAR-02 Problem Specification
Objective: Calculate a customer's total electricity bill based on an tiered unit consumption slab.
Slabs / Rules:Calculate progressively. First 100 units: $1.00/unit. Next 100 units (101-200): $2.00/unit. Above 200 units: $5.00/unit.
Logical Hint: Do not charge the maximum tier rate for all units. Process the computation progressively slab-by-slab.
Expected Case Scenario: Input: 250 units → Calculation: (100 * 1) + (100 * 2) + (50 * 5) → Output: $550
 */
const calculateElectricityBill = (units) => {
    let bill = 0;

    if (units <= 100) {
        bill = units * 1;
    } else {
        bill += 100 * 1;

        if (units <= 200) {
            bill += (units - 100) * 2;
        } else {
            bill += 100 * 2;
            bill += (units - 200) * 5;
        }
    }

    console.log(`Total electricity bill for ${units} units: $${bill}`);
    return bill;
};

calculateElectricityBill(250);
// Total electricity bill for 250 units: $550


/* VAR-03 Problem Specification 
Objective: Split a total amount evenly among N friends and display the individual share along with the remaining leftover change.
Slabs / Rules: Individual shares must be flat integers (no cents). Leftover remainder change must be calculated and stored as a standalone value.
Logical Hint: Utilize Math.floor() to compute the clean integer split, and the modulo operator (%) to capture the exact remainder.
Expected Case Scenario: Input: Total = $100, Friends = 3 → Output: Each pays $33, Remainder = $1
*/
const splitAmountAmongFriends = (totalAmount, numberOfFriends) => {
    const individualShare = Math.floor(totalAmount / numberOfFriends);
    const remainder = totalAmount % numberOfFriends;
    console.log(`Each friend pays $${individualShare}, and the remainder is $${remainder}`);
    return { individualShare, remainder };
}
splitAmountAmongFriends(100, 3);


/* VAR-04 Problem Specification
Objective: Calculate a person's exact current age dynamically given their complete Date of Birth (DOB) in the format YYYY-MM-DD.
Slabs / Rules: Your logic must accurately account for whether the individual's birthday has already happened or has yet to happen in the current calendar year.
Logical Hint: Instantiating 'new Date()' gives you access to the modern system calendar. Compare years, then adjust based on months and days.
Expected Case Scenario: Input: '1995-12-15' (Assuming current date is June 2026) → Output: 30 (Since Dec 15 hasn't occurred yet in 2026)
*/
const calculateCurrentAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    console.log(`Current age for DOB ${dob}: ${age}`);
    return age;
};

calculateCurrentAge('1995-12-15');

/* VAR-05 Problem Specification
Objective: Compute the final total checkout amount given the base price of an item and its active discount percentage.
Slabs / Rules: The final output must be rounded to exactly two decimal places representing financial currency cents.
Logical Hint: Calculate the discount fraction via (price * discount / 100). Use the primitive number utility .toFixed(2) to secure precision.
Expected Case Scenario: Input: Price = $125.50, Discount = 15% → Output: $106.68
*/
const calculateFinalCheckoutAmount = (price, discountPercentage) => {
    const discountAmount = price * (discountPercentage / 100);
    const finalAmount = price - discountAmount;
    const roundedFinalAmount = finalAmount.toFixed(2);
    console.log(`Final checkout amount after ${discountPercentage}% discount on $${price}: $${roundedFinalAmount}`);
    return roundedFinalAmount;
}
calculateFinalCheckoutAmount(125.50, 15);

/* VAR-06 Problem Specification
Objective: Calculate an employee's total weekly payroll salary including overtime rules based on hours worked and baseline hourly pay.
Slabs / Rules: Regular hours threshold is capped at 40 hours/week. Any hours worked over 40 are overtime, compensated at 1.5 times the standard rate.
Logical Hint: Use an if-else structural check. Isolate regular hours from overtime hours before multiplying by their respective rates.
Expected Case Scenario: Input: Hours worked = 45, Rate = $20/hr → Calculation: (40 * 20) + (5 * 30) → Output: $950
*/
const calculateWeeklyPayroll = (hoursWorked, hourlyRate) => {
    const regularHours = Math.min(hoursWorked, 40);
    const overtimeHours = Math.max(0, hoursWorked - 40);
    const regularPay = regularHours * hourlyRate;
    const overtimePay = overtimeHours * hourlyRate * 1.5;
    const totalPay = regularPay + overtimePay;
    console.log(`Weekly payroll for ${hoursWorked} hours at $${hourlyRate}/hr: $${totalPay}`);
    return totalPay;
};
calculateWeeklyPayroll(45, 20);

/* VAR-07 Problem Specification
Objective: Convert a large pool of raw days cleanly into equivalent counts of whole Years, Months, and remaining Days.
Slabs ? Rules: Assume fixed standard chronological baselines: exactly 365 days = 1 year, and exactly 30 days = 1 month.
Logical Hint: Perform successive division and remainder operations. Strip years first, then compute months from the remainder, then remaining days.
Expected Case Scenario: Input: 400 days → Output: 1 Year, 1 Month, and 5 Days
*/
const convertDaysToYearsMonthsDays = (totalDays) => {
    const years = Math.floor(totalDays / 365);
    const remainingDaysAfterYears = totalDays % 365;
    const months = Math.floor(remainingDaysAfterYears / 30);
    const days = remainingDaysAfterYears % 30;
    console.log(`${totalDays} days = ${years} years, ${months} months, and ${days} days`);
}
convertDaysToYearsMonthsDays(400);