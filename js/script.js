function switch_mode(x)
{
	var mode=document.getElementById("mode");
	if(!x.checked)
	{
		document.body.style.backgroundColor = "white";
		document.querySelectorAll('p').forEach(e => e.style.color = "black");
		mode.innerHTML="Light Mode";
	}
	else
	{
		document.body.style.backgroundColor = "black";
		document.querySelectorAll('p').forEach(e => e.style.color = "white");	
		mode.innerHTML="Dark Mode";		
	}
}
