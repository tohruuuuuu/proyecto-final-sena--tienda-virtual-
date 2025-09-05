 // DOM y manejo del formulario
        document.getElementById("formulario").addEventListener("submit", function (e) {
            e.preventDefault();
            
            const nombre = document.getElementById("nombre").value;
            const email = document.getElementById("email").value;
            const mensaje = document.getElementById("mensaje").value;
            
            // Validacion basicaa
            if (!nombre || !email || !mensaje) {
                showNotification("⚠️ Por favor completa todos los campos", "error");
                return;
            }
            
            // Simulación de envio
            showNotification(`✅ ¡Gracias ${nombre}! Hemos recibido tu mensaje. Te contactaremos pronto.`, "success");
            
            // Limpiar formulario
            document.getElementById("formulario").reset();
            updateCounter();
            
            // todavia no tengo backend pero creo que iba algo asi
            //console.log("Datos del formulario:", { nombre, email, mensaje });
        });

        // Contador de caracteres para textarea
        const textarea = document.getElementById("mensaje");
        const contador = document.getElementById("contador");
        
        textarea.addEventListener("input", updateCounter);
        
        function updateCounter() {
            const currentLength = textarea.value.length;
            contador.textContent = `${currentLength}/500`;
            
            if (currentLength > 450) {
                contador.style.color = "#ef4444";
            } else if (currentLength > 400) {
                contador.style.color = "#f59e0b";
            } else {
                contador.style.color = "#6b7280";
            }
        }

        // Sistema de notificaciones
        function showNotification(message, type = "success") {
            const notification = document.getElementById("notification");
            const notificationText = document.getElementById("notificationText");
            
            notificationText.textContent = message;
            
            if (type === "error") {
                notification.style.background = "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)";
            } else {
                notification.style.background = "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)";
            }
            
            notification.classList.add("show");
            
            setTimeout(() => {
                notification.classList.remove("show");
            }, 4000);
        }

        // Navegación suave
        document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Efectos de hover para las cards de productos
        document.querySelectorAll('.producto-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Inicializar contador
        updateCounter();


        function cambiarTema(){
            document.body.classList.toggle("oscuro");
        }