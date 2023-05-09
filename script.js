/* flow control/loops

If statements
Syntax: 
if () {}

When checking conditions, == or === are needed.  Using = re-assigned value of veriable

== Just measure content value... '1989' = 1989

=== Measures value and data type... '1989' != 1989


true == 'true'  (yes, it does bc ==)
true === 'true' (false,  triple equals checks the data types.. boolean and string here respectively)


if (ageInYears >= 25)
{
console.log("yes")
}
{
console.log("no")
}



let ageInYears = 20;

const dayOfTheWeek = "Friday";

if (dayOfTheWeek === "Tuesday")
{
    console.log("Today is tuesday")
}
else if (dayOfTheWeek === "Saturday")
{
    console.log("today is saturday")
}
else
{
    console.log("Enter a different day")
}

*/


const yourMoney = 100
const catPrice = 100



if (yourMoney === catPrice)
{
    console.log("You have just enough to buy the cat")
}
else if (yourMoney > catPrice)
{
    console.log(`You have enough to buy the cat with ${yourMoney - catPrice} left over.`)
}
else 
{
    console.log(`You don't have enough to buy the cat, you need ${catPrice - yourMoney} more dollars.`)
}