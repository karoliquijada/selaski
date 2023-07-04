/* Prueba rápida Saleski, Karoli Quijada.

El approach fue utilizar fuerza bruta ya que al ser al azar había que probar todos los casos.
Además tomé en cuenta que los datos fueran números y comenzara en 0, de ser no ser indicado
se hubieran hecho las validaciones respectivas.

Otra cosa es que asumí que los dígitos no se repetían (1222), en este caso
el algoritmo sigue avanzando y se devuelve. Para este caso, haría la comprobación
 de que el tiempo (time) aumente solo si el dígito no es igual anterior.

*/
const countTime = (num: number, keyboard: number[]): number => {
    let number = String(num)
      .split("")
      .map((num) => Number(num));
  
    let time = 0;
    let cont = 0;

    const keyboardLength = keyboard.length;
  
    //Recorro el teclado para encontrar el primer dígito
    for (let i = 0; i < keyboardLength; i++) {
      //Si lo encuentro aumento el contador para buscar el segundo dígito y así sucesivamente.
      //De esta manera no tengo que iterar también sobre el dígito.
      if (keyboard[i] === number[cont]) {
        if (cont < number.length)
          cont++;
      }
      
      //Si llego a la ultima posicion del teclado y no he encontrado todos los digitos
      //comienzo a contar en reversa.
      if (i === keyboardLength - 1 && cont < number.length) {
        for (let j = keyboardLength - 1; j >= 0; j--) {
          if (keyboard[j] === number[cont]) {
            cont++;
          }
  
          
          //Verifico que haya encontrado todos los digitos para salir
          if (cont === number.length) {
            return time;
          }
  
          time++;
        }
      }
  
      //Verifico que haya encontrado todos los digitos para salir
      if (cont === number.length) {
        return time;
      }
  
      time++;
    }
  
    return time;
  };
  
  export { countTime };