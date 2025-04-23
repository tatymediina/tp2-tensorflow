
 async function calcular() {
    const filas = parseInt(document.getElementById("filas").value);
    const columnas = parseInt(document.getElementById("columnas").value);

    // ! Generar matrices aleatorias
    const A = tf.randomUniform([filas, columnas], 1, 21, 'int32');
    const B = tf.randomUniform([filas, columnas], 1, 21, 'int32');

    // !  Operaciones con TF
    const suma = tf.add(A, B);
    const multiplicacion = tf.mul(A, B);

    // ! Convertí los tensores a arrays normales
    const a = await A.array();
    const b = await B.array();
    const s = await suma.array();
    const m = await multiplicacion.array();

    // ! Creo una función para mostrar matrices
    const mostrar = (titulo, matriz) =>
      `${titulo}:\n${matriz.map(fila => fila.join(" ")).join("\n")}\n\n`;


    document.getElementById("resultado").textContent =
      mostrar("Matriz A", a) +
      mostrar("Matriz B", b) +
      mostrar("Suma A + B", s) +
      mostrar("Multiplicación A * B (elemento a elemento)", m);
}