

console.log("js si carga")


document.getElementById("formulario").addEventListener("submit", 
            function (e){
                e.preventDefault();

               const nombre = document.getElementById("nombre").value; 
               const mensaje = document.getElementById("mensaje").value;
               
               if (nombre.length < 3){
                    alert("minimo 3 caractertes");
               }

               if(nombre === ""){
                alert("campo vacio");
               }

               if(mensaje === ""){
                alert("campo vacio");
               }
               
               alert(`gracias ${nombre}, hemos recibido tu mensaje`);



            }
        )
