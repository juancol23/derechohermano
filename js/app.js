 //configuración personal de Firebase
     






      firebase.initializeApp({
          apiKey: "AIzaSyCE-n4QOuKmPQGnpLdT1svm5z5C1lobZs4",
          authDomain: "camaleonjuridico-92ad6.firebaseapp.com",

          projectId: "camaleonjuridico-92ad6"
      });  
             
      // Initialize Cloud Firestore through Firebase
      var db = firebase.firestore();


      //Leer documentos
      var contenido = document.getElementById('contenido');
 
      db.collection("feed").orderBy('fecha', 'asc')
      .onSnapshot((querySnapshot) => {
          contenido.innerHTML = '';
          querySnapshot.forEach((doc) => {
              console.log(`${doc.id} => ${doc.data().titulo}`);
              contenido.innerHTML += `
           
              	<div class="post-preview" onclick="redireccionar('${doc.id}','${doc.data().titulo}','${doc.data().sumilla}','${doc.data().descripcion}','${doc.data().urlImagen}','${doc.data().autor}');">
	                    <a >
	                      <h2 class="post-title">
	                        ${doc.data().titulo}
	                      </h2>
	                      <h3 class="post-subtitle">
	                        ${doc.data().sumilla}
	                      </h3>
	                      <img src="${doc.data().urlImagen}" width="900px" class="img-fluid" alt="">

	                     
	                    </a>
	                    <p class="post-meta">Publicado y escrito por 
	                      <a >${doc.data().autor}</a>
	                      ${doc.data().fecha}</p>
	            </div>
	            <hr>

              `
          });
      });

  function redireccionar(id, titulo, sumilla, descripcion, urlImagen, autor){


      let post = {
          titulo: titulo,
          sumilla: sumilla,
          descripcion: descripcion,
          urlImagen: urlImagen,
          autor: autor
         
      }

      localStorage.setItem("post", JSON.stringify(post));

      console.log("post ---- .-.- -- -- - ----" + JSON.parse(localStorage.getItem('post')));


      var URLactual = window.location.href;
      let url_condition = URLactual.substr(0,17);

      var url_redi_local = 'http://localhost/derechohermano/post.html';
                            
      var url_redi_remote = 'https://juanvaldemar.github.io/derechohermano/post.html';

       if(url_condition == "http://localhost/"){
          console.log("Test"); 
          location.href= url_redi_local;
        }else{
         console.log("Producción")
         location.href= url_redi_remote;
        }

   
      // window.location.href = "http://localhost/derechohermano/post.html";

      //let order = JSON.parse(localStorage.getItem('order'));



    }


      function registrar(){
         
 
          db.collection("feed").add({ 

              titulo : "CALIDAD REACREDITADA EN CHILE Y ESTADOS UNIDOS",
              sumilla : "Los problemas se ven muy pequeños desde 150 millas de altura",
              urlImagen : "https://www.umayor.cl/um/bundles/carreras/images/carreras/santiago/derecho.jpg",
              autor : "Camaleón Jurídico",
              fecha : "04/sep/2018"
          })
         
          .then(function(docRef) {
              console.log("Fuente publicada: ", docRef.id); 
          })

          .catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              console.log(errorCode);
              console.log(errorMessage);
              // ...
            });

        
      }

 