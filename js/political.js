function fetch_jokes()
{
	const element=document.getElementById("jokes");
	var str="";
	for(var i=0;i<5;i++)
	{
		const xhr = new XMLHttpRequest();
		xhr.open("GET","https://api.chucknorris.io/jokes/random?category=political",false);
		xhr.send();
		let p=document.createElement('p');
		const json=JSON.parse(xhr.responseText);
		console.log(json.value);
		str+="<p>"+String(i+1)+"."+json.value+"</p><br><br>";
	}
	element.innerHTML=str;
}