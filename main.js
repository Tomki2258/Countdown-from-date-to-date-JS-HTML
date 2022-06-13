
// console.log(z/y);

function rotatePointer(x) {
    document.getElementById("pointer").style.transform = "rotate("+ x * 180.0 +"deg)";
}
function setProcent(y,z,now){
    document.getElementById("procent").innerHTML = (z/y).toFixed(5)+"% time has elapse";
}
setInterval(function() {
    var date1 = document.getElementById("startPicker").valueAsNumber;
    var date2 = document.getElementById("endPicker").valueAsNumber;

    var now = new Date().getTime();

    if(!date1 || !date2)
    {
        document.getElementById("procent").innerHTML="Input fields are empty"
    }
    else
    {
        if(now>date2)
        {
            console.log("Time Elapsed")
            document.getElementById("procent").innerHTML = "Time Elapsed"
        }
        else
        {
            var y = (date2 - date1);
            var z = (now - date1);
            console.log()
            rotatePointer(z/y);
            console.log(date1 +"/"+now+"/"+date2);
            setProcent(y,z,now);
        }

    }
    
}, 1000);