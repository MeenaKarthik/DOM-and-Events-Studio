// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load",function(){

    console.log("window has been loaded");

    let takeOffBtn = document.getElementById("takeoff");
    let landBtn = document.getElementById("landing");
    let abortBtn = document.getElementById("missionAbort");
    

    let flightStatusObj = document.getElementById("flightStatus");
    let shuttleBackgroundObj = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let rocket = document.getElementById("rocket");
    let altitude = 0;

    takeOffBtn.addEventListener("click", function(event){
        let value = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(value){
        flightStatusObj.innerHTML = "Shuttle in flight.";
        shuttleBackgroundObj.style.backgroundColor = "blue";
        spaceShuttleHeight.innerHTML = 10000;
        rocket.style.setProperty("top", 230+"px");
        } 
    });

    landBtn.addEventListener("click",function(event){
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatusObj.innerHTML = "The shuttle has landed.";
        shuttleBackgroundObj.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
        rocket.style.setProperty("top", 240+"px");
        rocket.style.setProperty("left", 0+"px");


    });

    abortBtn.addEventListener("click",function(event){
        let value = window.confirm("Confirm that you want to abort the mission.");
        if(value){
        flightStatusObj.innerHTML = "Mission aborted.";
        shuttleBackgroundObj.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
        rocket.style.setProperty("top", 240+"px");
        rocket.style.setProperty("left", 0+"px");
        }
    });

    document.addEventListener("click",function(event){
        
        if(event.target.id === 'up'){
            let value = parseInt(rocket.style.getPropertyValue("top"));
            console.log(value);
            if(value>=10){
            value -=10;
            altitude = 10000;
            rocket.style.setProperty("top", value+"px");
            spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML)+altitude;
            }
        }
        if(event.target.id === 'down'){
            let value = parseInt(rocket.style.getPropertyValue("top"));
            console.log(value);
            if(value<=230){
            value +=10;
            altitude = 10000;
            rocket.style.setProperty("top", value+"px");
            spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML)-altitude;
            }
        }
        if(event.target.id === 'left'){
            let value = parseInt(rocket.style.getPropertyValue("left"));
            console.log(value);
            if(value>=-220){
            value -=10;
            rocket.style.setProperty("left", value+"px");
            }
        }
        if(event.target.id === 'right'){
            let value = parseInt(rocket.style.getPropertyValue("left"));
            console.log(value);
            if(value<=220){
            value +=10;
            rocket.style.setProperty("left", value+"px");
            }
        }

    });


});

