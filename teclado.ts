const calcularTiempo = (num: number, keyboard: number[]): number => {
    let number = String(num)
      .split("")
      .map((num) => Number(num));
  
    let time = 0;
    let cont = 0;
  
    //Recorro el teclado para encontrar el primer dígito
    for (let i = 0; i < keyboard.length; i++) {
      //Si lo encuentro aumento el contador para buscar el segundo dígito y así sucesivamente.
      //De esta manera no tengo que iterar también sobre el dígito.
      if (keyboard[i] === number[cont]) {
        if (cont < number.length)
          cont++;
      }
      
      //Si llego a la ultima posicion del teclado y no he encontrado todos los digitos
      //comienzo a contar en reversa.
      if (i === keyboard.length - 1 && cont < number.length) {
        for (let j = keyboard.length - 1; j >= 0; j--) {
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
  
  export { calcularTiempo };