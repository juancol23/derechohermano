 







 



		console.log("post ---- .-.- -- -- - ----" + JSON.parse(localStorage.getItem('post')));

		var post = JSON.parse(localStorage.getItem('post'));
  
		document.getElementById("titulo").innerHTML =post.titulo;

		console.log("post ---- .-.- -- -- - ----" + post);
		console.log("post ---- .-.- -- -- - ----" + post.titulo);