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




const yourMoney = 100
const catPrice = 1000



if (yourMoney === catPrice)
{
    console.log("You have just enough to buy the cat")
}
else if (yourMoney > catPrice)
{
    console.log(`You have enough to buy the cat with $${yourMoney - catPrice} left over.`)
}
else 
{
    console.log(`You don't have enough to buy the cat, you need $${catPrice - yourMoney} more dollars.`)
}



const dayOfWeek = 'Purple'

if (dayOfWeek == 'Monday' || dayOfWeek == 'Wednesday') 
{
    console.log(`It is ${dayOfWeek}, better get to class!`)
}
else if (dayOfWeek == 'Tuesday' || dayOfWeek == 'Thursday' || dayOfWeek == 'Friday') 
{
    console.log(`Today is ${dayOfWeek}, no class tonight!`)
}
else if (dayOfWeek == 'Saturday' || dayOfWeek == 'Sunday') 
{
    console.log(`It's the weekend!`)
}
else {
    console.log("Please enter a valid day")
}

*****
Ternary statement allow us to write if/else conditionals in one single line, 
But don't allow as much power as if/else/elseif because there are only two output options,  yes/no

let ageInYears = 20
ageInYears >= 18 ? console.log("You can vote") : console.log("You cant vote")
******



Switch statement  can be used for multiple branches based on === equality

Case
Action
Break


const food = 'Fish'

switch(food)
{
    case 'chicken':
        console.log("Ill have chicken parm")
        break;
    case 'steak':
        console.log("I'll have steak")
        break;
    case 'fish':
        console.log("I'll have the fish")
        break;
    default:
        console.log(`Please enter a valid entree`);
}

const edible = `cat`

switch(edible)
{
    case 'dog':
        console.log("this is a dog, no eat")
        break;
    case 'cat':
        console.log("This is a cat, no eat")
        break;
    case 'chicken':
        console.log("This is a chicken, eat it")
        break;
    case 'horse':
        console.log("This is a horse, edible but meh")
        break
    default:
        console.log("Please enter a different potential food")


}

LOOPS
For loops: 
If () {}
switch () {}

Inside of () we are putting in 3 sets of instructions
Where we begin end and how much we increment

Initializiation: let i = 0
Test condition: (i < 10)
Final expression/incrementor: I++
block: (whatever needs done each loop)


for (let i = 1; i < 10; i++)
{
    console.log(i)
}



const foods = ['tacos', 'ramen', 'doubles', 'turkey', 'poptarts', 'goat', 'cat']

for (i = 0; i < foods.length ; i++)
{
    console.log(foods[i])
}


const wizards = [
    {name: "Harry Potter", house: "Gryffindor"}, 
    {name: "Lord Voldomort", house: "Slytherin"}, 
    {name: "Cedric Diggory", house: "Hufflepuff"},
    {name: "Luna Lovegood", house: "Ravenclaw"},  
    {name: "Albus Dumbledor", house: "Gryffindor"}, 
    {name: "Merlin", house: "Slytherin"}, 
    {name: "Pomona Sprout", house: "Hufflepuff"}, 
    {name: "Gilderoy Lockheart", house: "Ravenclaw"}, 
    {name: "Ron Weasley", house: "Gryffindor"}, 
    {name: "Severus Snape", house: "Slytherin"}, 
    {name: "Nymphadora Tonks", house: "Hufflepuff"}, 
    {name: "Padma Patil", house: "Ravenclaw"}, 
    {name: "Hermoine Granger", house: "Gryffindor"} 
   ]


   for (let i = 0; i < wizards.length; i ++)
   {
    if (wizards[i].house != "Slytherin")
    {
        console.log(wizards[i].name)
    }
   }
*/

