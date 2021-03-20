var z="n";
do{
var x= prompt("Set the limit (in minutes): ");
var y= x*3600*1000 //to convert to milliseconds
var start=new Date().getTime();
setTimeout(setAlert,y);

}while(z=='y')

function setAlert(){
    var elapsed=new Date().getTime()-start;
    alert((elapsed/(3600*1000)).toFixed(3)+" minutes have passed! After 2 warnings this site will be blocked :)");
	if(new Date().getTime()>elapsed)
	   z=prompt("Want to snooze? (y/n)");
}
