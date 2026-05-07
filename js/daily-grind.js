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
        coffee = {
            name:"soft cream",
            pic:"soft-cream.jfif",
            alt:"A pic of a yummy bubble tea.",
            color:"#F5F0E8",
            day:"Sunday",
            desc:`I like bubble tea`
        };
 	break;
    case 1:
    	today =  "Monday",
        coffee = {
            name:" Deep Espresso Brown ",
            pic:" deep-espresso-brown.jfif",
            alt:"A pic of a yummy bubble tea.",
            color:"#3B1F0A",
            day:"Monday",
            desc:`I like bubble tea`

 	case 2:
   	    today = "Tuesday"
        coffee = {
            name:"warm cappuccino",
            pic:"warm cappuccino.jfif",
            alt:"A pic of a yummy bubble tea.",
            color:"#C68642",
            day:"Tuesday",
            desc:`I like bubble tea`
        };
 	break;
    case 3:
        today = "Wedensday"
        coffee = {
            name:"caramel gold",
            pic:"caramel-gold.jfif",
            alt:"A pic of a yummy bubble tea.",
            color:"#D4A017",
            day:"Wedensday",
            desc:`I like bubble tea`
            };
    break;
    case 4:
         today = "Thursday",
        coffee = {
            name:"dark cold brew",
            pic:"dark-cold-brew.jfif",
            alt:"A pic of a yummy caremal latte.",
            color:"#1C1C1C",
            day:"Thursday",
            desc:`I like cramel latte`
        };
    break;
    case 5:
         today = "Friday",
        coffee = {
            name:"rich chocolate",
            pic:"rich-chocolate.jfif",
            alt:"A pic of a yummy cold Brew",
            color:"#4B2E2E",
            day:"Friday",
            desc:`I like cold Brew`
        };
    break;
    case 6:
         today = "Saturday",
        coffee = {
            name:"icy blended",
            pic:"icy blended.jfif",
            alt:"A pic of a yummy cold Brew",
            color:"#A8D8EA",
            day:"Saturday",
            desc:`I like cold Brew`
        };
    break;
 	default:
    	today = "Something went wrong!";}
console.log(coffee);
// adds coffee to page
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);
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

