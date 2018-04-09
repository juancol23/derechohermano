function ingreso(){
    
    var email = document.getElementById('email').value;
    var contrasena = document.getElementById('password').value;
    
    firebase.auth().signInWithEmailAndPassword(email, contrasena)
    
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
      });
}

function observador(){
// .orderByChild("email").equalTo(user.email)

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {

            console.log('existe usuario activo '+user.email)
            
            document.getElementById("cerrar").innerHTML = `<button  class="btn btn-danger" onclick="cerrar()">cerrar sesión</button>`;

            var URLactual = window.location.href;
            let url_condition = URLactual.substr(0,17);

            var url_redi_local = 'http://localhost/derechohermano/publicar.html';
                                  
            var url_redi_remote = '/publicar.html';

             if(url_condition == "http://localhost/"){
                console.log("Test"); 
                location.href= url_redi_local;
              }else{
               console.log("Producción")
               location.href= url_redi_remote;
              }

          // ...
        } else {
          // User is signed out.
          console.log('no existe usuario activo')
            document.getElementById("cerrar").innerHTML = ``;

          
        }
      });
}
observador();

function cerrar(){
    firebase.auth().signOut()
    .then(function(){
        console.log('Saliendo...') 
    })
    .catch(function(error){
        console.log(error)
    })
}


