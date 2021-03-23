var z="n";
for(var i=0;i<3;i++){
  var x= prompt("Set the limit (in minutes): ");
  var y= x*60*1000 //to convert to milliseconds
  var start=new Date().getTime();
  setTimeout(setAlert,y);
  if(new Date().getTime()>elapsed)
     z=prompt("Want to snooze? (y/n)"); 

function setAlert(){
    var elapsed=new Date().getTime()-start;
    alert((elapsed/(60*1000)).toFixed(2)+" minutes have passed! After total "+(2-i)+" warnings this site will be blocked :)");
}
}
