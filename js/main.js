// Definimos los mensajes para cada moneda
const mensajes = [
    [
        "A la hora de anotarte a las materias, es importante que elijas las que mejor se adapten a tus posibilidades. FCEA cuenta con variedad de horarios y modalidades para el cursado.",
        "Si te anotás a cursos reglamentarios con los que luego no puedes cumplir la asistencia, no es apropiado evadir la falta de ninguna manera. ** Si cometes una falta de este tipo, la facultad debe aplicar el reglamento. En este caso, corresponden a los artículos 2 y 3."
    ],
    [
        "Planificar tu estudio con tiempo te permitirá estudiar con buena energía cada día. Si no pudiste preparar la instancia, lo recomendable es postergarla y rendirla en mejores condiciones la próxima vez. Recuerda que cada persona tiene sus tiempos para completar la carrera.",
        "Si dejás el estudio para último momento, puede generarte estrés. Seguramente repercuta en tu rendimiento y podría llevarte a cometer faltas inapropiadas. ** Si cometes una falta en una evaluación, la facultad debe aplicar el reglamento. En este caso, corresponden a los artículos 4 y 5."
    ],
    [
        "Crea vínculos con tus pares para generar grupos de estudio que influyan de forma positiva en tu proceso de aprendizaje y te ayuden a transitar la carrera de forma más amigable.",
        "Si en tu grupo de estudio proponen dividir funciones con el objetivo de aprobar fraudulentamente, no lo hagas. Eso no te permitirá incorporar los conocimientos de forma debida. ** Si cometes una falta de este tipo, la facultad debe aplicar el reglamento. En este caso, se corresponde al artículo 6."
    ],
    [
        "Al producir una monografía, es necesario que te tomes el tiempo de buscar las fuentes bibliográficas pertinentes, citar de la manera correcta y desarrollar tu propio texto.",
        "Si al producir una monografía utilizas texto de otra persona como propio, se considera plagio. Esta es una falta grave a nivel universitario y tiene una determinada sanción si es detectado. ** Si cometes una falta de este tipo, la facultad debe aplicar el reglamento. En este caso, se corresponde a los artículos 8 y 9."
    ]
];

// Inicializamos un índice de mensaje para cada moneda
let currentMessageIndexes = [0, 0, 0, 0];

// Función para cambiar el mensaje y girar la moneda
function flipCoin(event) {
    const coin = event.currentTarget;
    // Obtiene el índice de la moneda en la lista
    const coinIndex = Array.from(document.querySelectorAll(".flipping-coin")).indexOf(coin);
    const container = document.querySelectorAll(".mensajes-reglamento")[coinIndex]; // Selecciona solo el contenedor correspondiente
    const mensajeDiv = coin.nextElementSibling.querySelector(".mensaje p");
    
    // Gira la moneda
    coin.classList.toggle("is-flipped");
    // Si la moneda tiene la clase "is-flipped", cambia la clase del contenedor específico
    if (coin.classList.contains("is-flipped")) {
        setTimeout(() => {
            container.classList.toggle("mensajes-reglamento-2");
        }, 800);
    } else {
        // Si la moneda ya no tiene la clase "is-flipped", remueve la clase adicional del contenedor
        setTimeout(()=>{
            container.classList.remove("mensajes-reglamento-2");
        }, 700);
    }
    // Aplica fade-out al mensaje actual
    mensajeDiv.classList.add("fade-out");

    // Espera 1 segundo (duración del fade-out) antes de cambiar el mensaje
    setTimeout(() => {
        // Cambia al siguiente mensaje
        currentMessageIndexes[coinIndex] = (currentMessageIndexes[coinIndex] + 1) % mensajes[coinIndex].length;
        
        // Cambia el contenido del mensaje
        mensajeDiv.textContent = mensajes[coinIndex][currentMessageIndexes[coinIndex]];

        // Elimina la clase fade-out y aplica fade-in
        mensajeDiv.classList.remove("fade-out");
        mensajeDiv.classList.add("fade-in");

        // Remueve la clase fade-in después de 1 segundo (duración del fade-in)
        setTimeout(() => {
            mensajeDiv.classList.remove("fade-in"); // Elimina fade-in
        }, 600); // Duración de fade-in

    }, 600); // Duración de fade-out
}

// Añade el evento click a todas las monedas
document.querySelectorAll(".flipping-coin").forEach(coin => {
    coin.addEventListener("click", flipCoin);
});
