function loadJSONData(){

	let xhttp = new XMLHttpRequest();

	let todolist = document.getElementById('list');


	xhttp.onreadystatechange = function(){
		if(xhttp.readyState == 4 && xhttp.response == 200){
			console.log(xhttp.response);
			 let html = "";
			 for( let i = 0; i < data.length; i++){
			 	html += "<li>"+data[i].userId.Id +data[i].userId.title +data[i].userId.completed "</li>";
			 }
			    todolist.innerHTML = html;
		}

		xhttp.open('GET', 'https://jsonplaceholder.typicode.com./todos', true);
		xhttp.send();
	}
