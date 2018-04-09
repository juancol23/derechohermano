 







 



		console.log("post ---- .-.- -- -- - ----" + JSON.parse(localStorage.getItem('post')));

		var post = JSON.parse(localStorage.getItem('post'));
  
		document.getElementById("titulo").innerHTML =post.titulo;
		document.getElementById("sumilla").innerHTML =post.sumilla;
		document.getElementById("autor").innerHTML =post.autor;
		document.getElementById("fecha").innerHTML =post.fecha;
		document.getElementById("descripcion").innerHTML =post.descripcion;

		console.log("post ---- .-.- -- -- - ----" + post);
		console.log("post ---- .-.- -- -- - ----" + post.titulo);


		


		