/*
    One unique image, with appropriate and matching content in the alt tag.  
    A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
    A unique color that supports the image and paragraph of content

    pic - image src
    alt - the alt tag for the image
    desc - a description of the coffee
    day - the day of the week for the coffee
    color - color associated with coffee
    name - the name of the coffee

*/


let myDate = new Date();
let myDay = myDate.getDay();
let today = " ";
switch(myDay){

 	case 0:
    	today =  "Sunday";
 	break;

 	case 2:
   	    today = "Tuesday";
        coffee = {
            name:"Bubble Tea",
            pic:"bubble-tea.jpg",
            alt:"A pic of a yummy bubble tea.",
            color:"pink",
            day:"Tuesday",
            desc:`I like bubble tea`
        };
 	break;
    case 3:
        today = "Wedensday"
        coffee = {
            name:"Bubble Tea",
            pic:"bubble-tea.jpg",
            alt:"A pic of a yummy bubble tea.",
            color:"pink",
            day:"Tuesday",
            desc:`I like bubble tea`
            };
    break;
    case 4:
         today = "Thursday";
        coffee = {
            name:"Caramel Latte",
            pic:"caramel-latte.jpg",
            alt:"A pic of a yummy caremal latte.",
            color:"green",
            day:"Thursday",
            desc:`I like cramel latte`
        };
    break;
 	default:
    	today = "Something went wrong!";}
console.log(coffee);
// adds coffee to page
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee)
    //Change background color of HTML element
document.querySelector("html").style.backgroundColor = coffee.color;

alert(today);
function coffeeTemplate(coffee){
    let myReturn = "";

    myReturn += `
   <p>
<img src="images/${coffee.pic}" alt="${coffee.alt}" id="coffee">
   <strong>${coffee.day}Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong>${coffee.name}</strong> ${coffee.desc}
 </p>

    `;

    return myReturn;
}

