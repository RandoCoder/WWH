"use strict";

var thisTime = new Date();
    var timeStr = thisTime.toLocaleString();
    
/* displays the specified date and time */
document.getElementById("timeStamp").innerHTML = timeStr;

/* determines skymap time*/
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();    

var mapNum = (2 * thisMonth + thisHour) % 24;
