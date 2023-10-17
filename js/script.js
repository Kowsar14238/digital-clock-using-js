
let hours = document.getElementById("hours");
let mint = document.getElementById("mint");
let sec = document.getElementById("sec");
let ampm = document.getElementById("ampm");
let hourFormatSelect = document.getElementById("hourFormat");

//Function to update the time display
function updateTime(){

    let currentTime = new Date();//Get the current date and time

    let hourFormat = parseInt(hourFormatSelect.value);//Get the selected hour format from the dropdown

    let hoursValue = currentTime.getHours();//Get the current hour value
    let ampmValue = "";//Initialize the AM/PM value

    //Check if the 12-hour format is selected
    if(hourFormat == 12){
        
        //Check if it's afternoon or later (PM)
        if(hoursValue >= 12){
            ampmValue = "pm";

            //Convert hours to 12-hour format
            if(hoursValue > 12){
                hoursValue -= 12;
            }
        }
        else{
            ampmValue = "am";//It's morning (AM)

            //Convert midnight (0) to 12 in 12-hour format
            if(hoursValue === 0){
                hoursValue == 12;
            }
        }
        
    }

    //Update the display with leading zeros for hours, minutes, and seconds
    hours.innerHTML = (hoursValue < 10?"0":"") + hoursValue;
    mint.innerHTML = (currentTime.getMinutes() < 10?"0":"") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds() < 10?"0":"") + currentTime.getSeconds();
    
    ampm.innerHTML = ampmValue;//Update the AM/PM display based on the selected format
}

updateTime();
setInterval(updateTime,1000);//Set updateTime to run every 1 second (1000 milliseconds)

