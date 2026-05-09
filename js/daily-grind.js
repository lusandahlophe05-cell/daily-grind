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

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
//console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);
      //retrieve data from querystring
    if(urlParams.get("day")){        
    myDay = urlParams.get("day")
    }


    
switch(myDay){

 	case 0:
    	today =  "Sunday";
        coffee = {
            name:"soft cream",
            pic:"soft-cream.jfif",
            alt:"A creamy Vanilla Latte, the perfect relaxing Sunday treat",
            color:"#F5F0E8",
            day:"Sunday",
            desc:`Sunday's special is our smooth and creamy Vanilla Latte. There's
                  no better way to ease into a lazy Sunday than with this sweet
                   and comforting classic.`
        };
 	break;
    case 1:
    	today =  "Monday",
        coffee = {
            name:" Deep Espresso Brown ",
            pic: "deep-espresso-brown.jfif",
            alt: "A bold shot of Espresso to power up your Monday",
            color:"#3B1F0A",
            day:"Monday",
            desc:`Monday's special is our bold and powerful Espresso. We know
                  Mondays are tough, so let this strong little shot get you through the day!`
        };
    break;
 	case 2:
   	    today = "Tuesday"
        coffee = {
            name:"cappuccino",
            pic:"warm cappuccino.jfif",
            alt:"A frothy Cappuccino to get you through Tuesday",
            color:"#C68642",
            day:"Tuesday",
            desc:`Tuesday's special is our classic Cappuccino. Equal parts espresso,
             steamed milk and foam — the perfect balance for a Tuesday morning.`
        };
 	break;
    case 3:
        today = "Wedensday"
        coffee = {
            name:"caramel gold",
            pic:"caramel-gold.jfif",
            alt:"A sweet Caramel Macchiato to beat the Wednesday slump",
            color:"#D4A017",
            day:"Wedensday",
            desc:`Wednesday's special is our indulgent Caramel Macchiato. Hump day 
                  deserves something sweet — layers of vanilla, espresso and caramel
                   to keep you going!`
            };
    break;
    case 4:
         today = "Thursday",
        coffee = {
            name:"dark cold brew",
            pic:"dark-cold-brew.jfif",
            alt:"A smooth Cold Brew to power through Thursday",
            color:"#1C1C1C",
            day:"Thursday",
            desc:`Thursday's special is our slow-steeped Cold Brew. The weekend is
                  almost here — stay cool and focused with this smooth and 
                  refreshing coffee.`
        };
    break;
    case 5:
         today = "Friday",
        coffee = {
            name:"rich chocolate",
            pic:"rich-chocolate.jfif",
            alt:"A rich Mocha to celebrate Friday",
            color:"#4B2E2E",
            day:"Friday",
            desc:`Friday's special is our rich and chocolatey Mocha. You made it
                  through the week — treat yourself to this delicious blend of
                   espresso and chocolate!`
        };
    break;
    case 6:
         today = "Saturday",
        coffee = {
            name:"icy blended",
            pic:"icy blended.jfif",
            alt:"A fun and icy Frappuccino for a Saturday treat",
            color:"#A8D8EA",
            day:"Saturday",
            desc:`Saturday's special is our blended Frappuccino. It's the weekend, 
                 so why not treat yourself to this cool, creamy and totally fun drink!`
        };
    break;
 	default:
    	today = "Something went wrong!";}

// adds coffee to page
document.getElementById("coffee-cup").innerHTML = coffeeTemplate("coffee");
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

