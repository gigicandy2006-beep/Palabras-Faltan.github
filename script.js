let nombreJugador = "";
let juegoActual = 0;
let preguntaActual = 0;
let puntos = 0;
let estrellas = 3;
let rachaActual = 0;
let dificultadActual = "facil";

const juegosConDiploma = [1, 2, 3, 5];
const reaccionesAcierto = ["🥳", "🤩", "🦸", "🐸", "🎉", "⭐"];
const reaccionesError = ["🙈", "😅", "🤔", "🐢", "🦊", "💪"];
const emojisMemoria = ["🐼", "🌸", "🚀", "🍎", "🦋", "🐸", "⚽", "🌈"];

let cartasMemoria = [];
let cartasVolteadas = [];
let intentosMemoria = 0;
let parejasMemoriaEncontradas = 0;
let memoriaBloqueada = false;
let temporizadorMemoria = null;

const juegos = {

    1: {
        titulo: "🔤 Palabras con B y V",
        preguntas: [
            {
                pregunta: "¿Cuál palabra está escrita correctamente?",
                opciones: ["Baca", "Vaca", "Vaka", "Baha"],
                respuesta: 1
            },
            {
                pregunta: "Completa: El niño montó en su ___ l.",
                opciones: ["bicicleta", "vicicleta", "bisisleta", "vicisleta"],
                respuesta: 0
            },
            {
                pregunta: "¿Cuál palabra está escrita correctamente?",
                opciones: ["Vienvenida", "Bienvenida", "Bienbenida", "Vienbenida"],
                respuesta: 1
            },
            {
                pregunta: "Completa: Mi mamá compró una ___ nueva.",
                opciones: ["bata", "vata", "batha", "vatha"],
                respuesta: 0
            },
            {
                pregunta: "¿Cuál está escrita correctamente?",
                opciones: ["Verde", "Berde", "Vherde", "Bherde"],
                respuesta: 0
            },
            {
                pregunta: "Completa: El avión va a ___ muy alto.",
                opciones: ["bolar", "volar", "vholar", "bolhar"],
                respuesta: 1
            },
            {
                pregunta: "¿Cuál palabra es correcta?",
                opciones: ["Biblioteca", "Viblioteca", "Bibloteca", "Vibloteca"],
                respuesta: 0
            },
            {
                pregunta: "Completa: El perro tiene una ___ roja.",
                opciones: ["banda", "vanda", "bahnda", "vahnda"],
                respuesta: 0
            },
            {
                pregunta: "¿Cuál palabra está correcta?",
                opciones: ["Viaje", "Biaje", "Vhaje", "Bhaje"],
                respuesta: 0
            },
            {
                pregunta: "Completa: Mi hermano sabe ___ muy bien.",
                opciones: ["bailar", "vailar", "bailhar", "vailhar"],
                respuesta: 0
            }
        ]
    },

    2: {
        titulo: "✏️ Los verbos",
        preguntas: [
            {
                pregunta: "Yo ___ en mi casa.",
                opciones: ["estoy", "estoi", "estoii", "estoi"],
                respuesta: 0
            },
            {
                pregunta: "Mañana voy a ___ al colegio.",
                opciones: ["ir", "hir", "yir", "irr"],
                respuesta: 0
            },
            {
                pregunta: "Ella ___ una tarea.",
                opciones: ["hace", "ase", "haze", "ace"],
                respuesta: 0
            },
            {
                pregunta: "En la biblioteca ___ muchos libros.",
                opciones: ["hay", "ay", "ahy", "hai"],
                respuesta: 0
            },
            {
                pregunta: "Voy a ___ la puerta.",
                opciones: ["abrir", "habrir", "abrrir", "avrír"],
                respuesta: 0
            },
            {
                pregunta: "No debes ___ basura al suelo.",
                opciones: ["echar", "hechar", "echarh", "echar"],
                respuesta: 0
            },
            {
                pregunta: "Mis amigos ___ jugando.",
                opciones: ["están", "estan", "estam", "estan"],
                respuesta: 0
            },
            {
                pregunta: "Yo quiero ___ al parque.",
                opciones: ["ir", "hir", "yir", "hír"],
                respuesta: 0
            },
            {
                pregunta: "Mi mamá ___ una deliciosa comida.",
                opciones: ["hace", "ase", "haze", "ace"],
                respuesta: 0
            },
            {
                pregunta: "En la caja ___ muchos juguetes.",
                opciones: ["hay", "ay", "ahy", "hai"],
                respuesta: 0
            }
        ]
    },

    3: {
        titulo: "❗ Puntuación y tildes",
        preguntas: [
            {
                pregunta: "¿Qué signo usamos para terminar una oración?",
                opciones: [".", ",", ":", ";"],
                respuesta: 0
            },
            {
                pregunta: "¿Cuál palabra tiene tilde correctamente?",
                opciones: ["camion", "camión", "camíon", "cámion"],
                respuesta: 1
            },
            {
                pregunta: "¿Qué signo usamos para separar elementos de una lista?",
                opciones: [".", ",", ":", "?"],
                respuesta: 1
            },
            {
                pregunta: "¿Cuál palabra está correctamente escrita?",
                opciones: ["árbol", "arbol", "arból", "árból"],
                respuesta: 0
            },
            {
                pregunta: "¿Qué signo se utiliza después de una pregunta?",
                opciones: [".", "!", "?", ":"],
                respuesta: 2
            },
            {
                pregunta: "¿Cuál palabra lleva tilde?",
                opciones: ["mesa", "lapiz", "casa", "perro"],
                respuesta: 1
            },
            {
                pregunta: "¿Qué signo usamos para expresar sorpresa?",
                opciones: ["¿?", "!", ".", ":"],
                respuesta: 1
            },
            {
                pregunta: "Selecciona la oración correcta.",
                opciones: [
                    "Hola como estás.",
                    "Hola, ¿cómo estás?",
                    "Hola como, estás",
                    "Hola ¿cómo estás."
                ],
                respuesta: 1
            },
            {
                pregunta: "¿Cuál palabra está correctamente escrita?",
                opciones: ["música", "musica", "músíca", "musíca"],
                respuesta: 0
            },
            {
                pregunta: "¿Qué signo puede introducir una explicación o lista?",
                opciones: [",", ".", ":", "!"],
                respuesta: 2
            }
        ]
    },

    4: {
        titulo: "🔎 relaciona",
        preguntas: [
            {
                pregunta: "Encuentra la palabra relacionada con los libros.",
                opciones: ["BIBLIOTECA", "CASA", "PERRO", "SOL"],
                respuesta: 0
            },
            {
                pregunta: "Encuentra una palabra relacionada con la escuela.",
                opciones: ["LAPIZ", "NUBE", "GATO", "PAN"],
                respuesta: 0
            },
            {
                pregunta: "Encuentra el animal.",
                opciones: ["MESA", "PERRO", "LIBRO", "CASA"],
                respuesta: 1
            },
            {
                pregunta: "Encuentra una palabra de la naturaleza.",
                opciones: ["ARBOL", "CUADERNO", "LAPIZ", "SILLA"],
                respuesta: 0
            },
            {
                pregunta: "Encuentra el objeto que usamos para escribir.",
                opciones: ["LAPIZ", "VASO", "PLATO", "ZAPATO"],
                respuesta: 0
            },
            {
                pregunta: "Encuentra el lugar donde aprendemos.",
                opciones: ["ESCUELA", "CASA", "PARQUE", "TIENDA"],
                respuesta: 0
            },
            {
                pregunta: "Encuentra una palabra relacionada con la lectura.",
                opciones: ["CUENTO", "PELOTA", "ZAPATO", "MESA"],
                respuesta: 0
            },
            {
                pregunta: "Encuentra un objeto escolar.",
                opciones: ["CUADERNO", "CAMISA", "TENIS", "VASO"],
                respuesta: 0
            },
            {
                pregunta: "Encuentra el animal.",
                opciones: ["GATO", "LIBRO", "LAPIZ", "MESA"],
                respuesta: 0
            },
            {
                pregunta: "Encuentra una palabra relacionada con la escritura.",
                opciones: ["PALABRA", "PELOTA", "NUBE", "ARBOL"],
                respuesta: 0
            }
        ]
    },

    5: {
        titulo: "📝 C, S y Z",
        preguntas: [
            {
                pregunta: "¿Cuál palabra está escrita correctamente?",
                opciones: ["casa", "sasa", "caza", "zasa"],
                respuesta: 0
            },
            {
                pregunta: "Completa: Mi ___ está llena de libros.",
                opciones: ["sala", "zala", "cala", "tala"],
                respuesta: 0
            },
            {
                pregunta: "¿Cuál palabra lleva Z correctamente?",
                opciones: ["zorro", "sorro", "corro", "forro"],
                respuesta: 0
            },
            {
                pregunta: "¿Cuál palabra lleva C correctamente?",
                opciones: ["cielo", "sielo", "zielo", "tielo"],
                respuesta: 0
            },
            {
                pregunta: "Completa: El niño juega en la ___.",
                opciones: ["calle", "salle", "zalle", "talle"],
                respuesta: 0
            },
            {
                pregunta: "¿Cuál palabra está bien escrita?",
                opciones: ["sopa", "zopa", "copa", "topa"],
                respuesta: 2
            },
            {
                pregunta: "¿Cuál palabra usa S correctamente?",
                opciones: ["sombrero", "zombrero", "combrero", "sombredo"],
                respuesta: 0
            },
            {
                pregunta: "Completa: Me gusta comer ___.",
                opciones: ["cereza", "sereza", "zereza", "teresa"],
                respuesta: 0
            },
            {
                pregunta: "¿Cuál palabra lleva C correctamente?",
                opciones: ["cuerda", "suerda", "zuerda", "tuerda"],
                respuesta: 0
            },
            {
                pregunta: "Selecciona la opción correcta:",
                opciones: ["pez", "pes", "cez", "zes"],
                respuesta: 0
            }
        ]
    }
};


function mostrarPantalla(id) {

    document.querySelectorAll(".pantalla").forEach(pantalla => {
        pantalla.classList.remove("activa");
    });

    document.getElementById(id).classList.add("activa");
}


function comenzarJuego() {

    nombreJugador = document.getElementById("nombre").value.trim();

    const institucion = document.getElementById("institucion").value;
    const grado = document.getElementById("grado").value;
    dificultadActual = document.getElementById("dificultad").value;

    if (nombreJugador === "") {
        alert("⚠️ Por favor escribe tu nombre.");
        return;
    }

    if (institucion === "") {
        alert("⚠️ Escribe el nombre de tu institución.");
        return;
    }

    if (grado === "") {
        alert("⚠️ Selecciona tu grado.");
        return;
    }

    if (dificultadActual === "") {
        alert("⚠️ Selecciona el nivel de dificultad.");
        return;
    }

    document.getElementById("mostrarNombre").textContent = nombreJugador;

    mostrarPantalla("menu");
}


function seleccionarJuego(numero) {

    juegoActual = numero;
    preguntaActual = 0;
    puntos = 0;
    estrellas = 3;
    rachaActual = 0;

    if (dificultadActual === "medio") {
        estrellas = 2;
    } else if (dificultadActual === "dificil") {
        estrellas = 1;
    }

    document.getElementById("puntos").textContent = puntos;

    actualizarEstrellas();

    document.getElementById("tituloJuego").textContent =
        juegos[juegoActual].titulo;

    mostrarPantalla("juego");

    mostrarPregunta();
}


function mostrarPregunta() {

    const datos = juegos[juegoActual].preguntas[preguntaActual];

    document.getElementById("numeroPregunta").textContent =
        preguntaActual + 1;

    document.getElementById("textoPregunta").textContent =
        datos.pregunta;

    const opciones = document.getElementById("opciones");

    opciones.innerHTML = "";

    document.getElementById("mensaje").textContent = "";

    document.getElementById("siguiente").style.display = "none";

    datos.opciones.forEach((opcion, indice) => {

        const boton = document.createElement("button");

        boton.textContent = opcion;

        boton.onclick = () => comprobarRespuesta(indice);

        opciones.appendChild(boton);
    });
}


function mostrarMensajeReaccion(emoji, texto) {
    const mensaje = document.getElementById("mensaje");
    const reaccion = document.createElement("span");
    const contenido = document.createElement("span");

    reaccion.className = "reaccion";
    reaccion.textContent = emoji;
    reaccion.setAttribute("aria-hidden", "true");
    contenido.textContent = texto;
    mensaje.replaceChildren(reaccion, contenido);
}


function lanzarConfeti() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    const pregunta = document.querySelector(".pregunta");
    if (!pregunta) {
        return;
    }

    const limites = pregunta.getBoundingClientRect();
    const origenX = limites.left + limites.width / 2;
    const origenY = limites.top + limites.height / 2;
    const colores = ["#ff6b6b", "#ffd166", "#06d6a0", "#4cc9f0", "#a78bfa", "#ff8fab", "#f97316"];

    for (let indice = 0; indice < 80; indice++) {
        const pieza = document.createElement("span");
        const desplazamientoX = (Math.random() - 0.5) * 620;
        const desplazamientoY = 180 + Math.random() * 280;

        pieza.className = "confeti";
        pieza.setAttribute("aria-hidden", "true");
        pieza.style.left = `${origenX}px`;
        pieza.style.top = `${origenY}px`;
        pieza.style.background = `linear-gradient(135deg, ${colores[Math.floor(Math.random() * colores.length)]}, ${colores[Math.floor(Math.random() * colores.length)]})`;
        pieza.style.width = `${10 + Math.random() * 8}px`;
        pieza.style.height = `${14 + Math.random() * 12}px`;
        pieza.style.animationDuration = `${1.8 + Math.random() * 1.4}s`;
        pieza.style.setProperty("--confeti-x", `${desplazamientoX}px`);
        pieza.style.setProperty("--confeti-y", `${desplazamientoY}px`);
        pieza.style.setProperty("--confeti-giro", `${Math.random() * 900 - 450}deg`);

        if (Math.random() < 0.35) {
            pieza.classList.add("confeti-redondo");
        }

        pieza.addEventListener("animationend", () => pieza.remove(), { once: true });
        document.body.appendChild(pieza);
    }
}


function lanzarLluvia() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    for (let indice = 0; indice < 90; indice++) {
        const gota = document.createElement("span");

        gota.className = "gota-lluvia";
        gota.setAttribute("aria-hidden", "true");
        gota.style.left = `${Math.random() * window.innerWidth}px`;
        gota.style.top = `${-40 - Math.random() * window.innerHeight * 0.35}px`;
        gota.style.animationDuration = `${0.9 + Math.random() * 0.9}s`;
        gota.style.animationDelay = `${Math.random() * 0.25}s`;
        gota.style.opacity = `${0.35 + Math.random() * 0.6}`;
        gota.style.setProperty("--lluvia-deriva", `${Math.random() * 140 - 70}px`);
        gota.style.setProperty("--lluvia-caida", `${window.innerHeight + 140}px`);
        gota.addEventListener("animationend", () => gota.remove(), { once: true });
        document.body.appendChild(gota);
    }
}


function comprobarRespuesta(indice) {

    const datos = juegos[juegoActual].preguntas[preguntaActual];

    const botones = document.querySelectorAll("#opciones button");

    botones.forEach(boton => {
        boton.disabled = true;
    });

    if (indice === datos.respuesta) {

        botones[indice].classList.add("correcta");

        rachaActual++;
        const puntosGanados = 10 + Math.min((rachaActual - 1) * 5, 15);
        puntos += puntosGanados;

        document.getElementById("puntos").textContent = puntos;

        const textoMensaje =
            rachaActual > 1
                ? `🔥 ¡Racha de ${rachaActual}! +${puntosGanados} puntos.`
                : `🎉 ¡Excelente! +${puntosGanados} puntos.`;
        const emoji = reaccionesAcierto[Math.floor(Math.random() * reaccionesAcierto.length)];

        mostrarMensajeReaccion(emoji, textoMensaje);
        lanzarConfeti();

    } else {

        botones[indice].classList.add("incorrecta");
        botones[datos.respuesta].classList.add("correcta");

        rachaActual = 0;

        if (dificultadActual === "facil") {
            estrellas = Math.max(0, estrellas - 1);
        } else if (dificultadActual === "medio") {
            estrellas = Math.max(0, estrellas - 1);
        } else if (dificultadActual === "dificil") {
            estrellas = Math.max(0, estrellas - 2);
        }

        actualizarEstrellas();

        const emoji = reaccionesError[Math.floor(Math.random() * reaccionesError.length)];

        mostrarMensajeReaccion(emoji, "Respuesta incorrecta. ¡Sigue intentando!");
        lanzarLluvia();

        if (estrellas <= 0) {
            setTimeout(() => {
                finalizarJuego();
            }, 1500);

            return;
        }
    }

    document.getElementById("siguiente").style.display =
        "inline-block";
}


function siguientePregunta() {

    preguntaActual++;

    if (preguntaActual >= juegos[juegoActual].preguntas.length) {
        finalizarJuego();
    } else {
        mostrarPregunta();
    }
}


function actualizarEstrellas() {

    let resultado = "";

    for (let i = 0; i < estrellas; i++) {
        resultado += "⭐ ";
    }

    for (let i = estrellas; i < 3; i++) {
        resultado += "☆ ";
    }

    document.getElementById("estrellas").textContent =
        resultado.trim();
}


function finalizarJuego() {

    document.getElementById("puntosFinales").textContent = puntos;

    document.getElementById("estrellasFinales").textContent =
        estrellas;

    const diploma = document.getElementById("diploma");
    const diplomaTexto = document.getElementById("diplomaTexto");
    const diplomaTitulo = document.getElementById("diplomaTitulo");

    if (juegosConDiploma.includes(juegoActual) && estrellas === 3) {
        const nombreCertificado = (nombreJugador || "Estudiante").trim();
        diplomaTitulo.textContent = `Certificado de reconocimiento a ${nombreCertificado}`;
        diplomaTexto.textContent = `¡Felicidades, ${nombreCertificado}! Has terminado con éxito este juego y obtuviste las 3 estrellas. ¡Sigue aprendiendo y brillando!`;
        diploma.style.display = "block";
    } else {
        diploma.style.display = "none";
    }

    let mensaje;

    if (estrellas === 3) {
        mensaje = "🌟 ¡Perfecto! Eres un campeón de la ortografía.";
    } else if (estrellas === 2) {
        mensaje = "👏 ¡Muy bien! Sigue practicando para mejorar.";
    } else if (estrellas === 1) {
        mensaje = "💪 ¡Buen esfuerzo! Puedes intentarlo nuevamente.";
    } else {
        mensaje = "📚 Sigue practicando y lo conseguirás.";
    }

    document.getElementById("mensajeFinal").textContent =
        mensaje;

    mostrarPantalla("resultados");
}


function volverMenu() {

    if (temporizadorMemoria !== null) {
        clearTimeout(temporizadorMemoria);
        temporizadorMemoria = null;
    }

    memoriaBloqueada = false;
    mostrarPantalla("menu");
}


function volverInicio() {

    document.getElementById("nombre").value = "";
    document.getElementById("institucion").value = "";
    document.getElementById("grado").value = "";
    document.getElementById("dificultad").value = "";

    mostrarPantalla("inicio");
}


function iniciarJuegoMemoria() {
    mostrarPantalla("memoria");
    iniciarMemoria();
}


function iniciarMemoria() {
    if (temporizadorMemoria !== null) {
        clearTimeout(temporizadorMemoria);
        temporizadorMemoria = null;
    }

    cartasVolteadas = [];
    intentosMemoria = 0;
    parejasMemoriaEncontradas = 0;
    memoriaBloqueada = false;

    const contenidoCartas = [];
    emojisMemoria.forEach((emoji, pareja) => {
        contenidoCartas.push({ emoji, pareja });
        contenidoCartas.push({ emoji, pareja });
    });

    for (let indice = contenidoCartas.length - 1; indice > 0; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * (indice + 1));
        [contenidoCartas[indice], contenidoCartas[indiceAleatorio]] =
            [contenidoCartas[indiceAleatorio], contenidoCartas[indice]];
    }

    cartasMemoria = contenidoCartas;
    document.getElementById("parejasEncontradas").textContent = "0";
    document.getElementById("intentosMemoria").textContent = "0";
    document.getElementById("estadoMemoria").textContent = "¡Encuentra las parejas!";

    const tablero = document.getElementById("tableroMemoria");
    tablero.replaceChildren();

    cartasMemoria.forEach((carta, indice) => {
        const boton = document.createElement("button");
        const interior = document.createElement("span");
        const reverso = document.createElement("span");
        const frente = document.createElement("span");

        boton.type = "button";
        boton.className = "carta-memoria";
        boton.setAttribute("aria-label", `Carta ${indice + 1}, sin voltear`);
        boton.setAttribute("aria-pressed", "false");
        interior.className = "interior-carta-memoria";
        reverso.className = "cara-carta-memoria reverso-carta-memoria";
        reverso.textContent = "?";
        reverso.setAttribute("aria-hidden", "true");
        frente.className = "cara-carta-memoria frente-carta-memoria";
        frente.textContent = carta.emoji;
        frente.setAttribute("aria-hidden", "true");

        interior.append(reverso, frente);
        boton.appendChild(interior);
        boton.addEventListener("click", () => voltearCartaMemoria(indice, boton));
        tablero.appendChild(boton);
    });
}


function voltearCartaMemoria(indice, boton) {
    const carta = cartasMemoria[indice];

    if (memoriaBloqueada || carta.encontrada || carta.volteada) {
        return;
    }

    carta.volteada = true;
    boton.classList.add("volteada");
    boton.setAttribute("aria-pressed", "true");
    boton.setAttribute("aria-label", `Carta ${indice + 1}: ${carta.emoji}`);
    cartasVolteadas.push({ carta, boton, indice });

    if (cartasVolteadas.length < 2) {
        document.getElementById("estadoMemoria").textContent = "Busca la pareja de esta carta.";
        return;
    }

    intentosMemoria++;
    document.getElementById("intentosMemoria").textContent = intentosMemoria;

    const [primera, segunda] = cartasVolteadas;
    if (primera.carta.pareja === segunda.carta.pareja) {
        primera.carta.encontrada = true;
        segunda.carta.encontrada = true;
        primera.boton.classList.add("encontrada");
        segunda.boton.classList.add("encontrada");
        primera.boton.disabled = true;
        segunda.boton.disabled = true;
        primera.boton.setAttribute("aria-label", `Carta ${primera.indice + 1}: ${primera.carta.emoji}, pareja encontrada`);
        segunda.boton.setAttribute("aria-label", `Carta ${segunda.indice + 1}: ${segunda.carta.emoji}, pareja encontrada`);
        parejasMemoriaEncontradas++;
        document.getElementById("parejasEncontradas").textContent = parejasMemoriaEncontradas;
        document.getElementById("estadoMemoria").textContent = `¡Pareja encontrada! Llevas ${parejasMemoriaEncontradas} de 8.`;
        cartasVolteadas = [];

        if (parejasMemoriaEncontradas === emojisMemoria.length) {
            document.getElementById("estadoMemoria").textContent = `¡Lo lograste! Encontraste las 8 parejas en ${intentosMemoria} intentos. 🏆`;
        }
        return;
    }

    memoriaBloqueada = true;
    document.getElementById("estadoMemoria").textContent = "No son pareja. ¡Intenta recordar dónde estaban!";
    temporizadorMemoria = setTimeout(() => {
        cartasVolteadas.forEach(({ carta: cartaVolteada, boton: botonVolteado, indice: indiceVolteado }) => {
            cartaVolteada.volteada = false;
            botonVolteado.classList.remove("volteada");
            botonVolteado.setAttribute("aria-pressed", "false");
            botonVolteado.setAttribute("aria-label", `Carta ${indiceVolteado + 1}, sin voltear`);
        });
        cartasVolteadas = [];
        memoriaBloqueada = false;
        temporizadorMemoria = null;
        document.getElementById("estadoMemoria").textContent = "Sigue buscando las parejas.";
    }, 850);
}