/*1. Pila básica (LIFO)
Una pila tiene tres operaciones básicas:

push: Agregar un elemento a la pila.
pop: Sacar el último elemento agregado de la pila.
size: Consultar la cantidad de elementos en la pila.*/

/*Los genéricos ofrecen una forma de crear componentes reutilizables
▶ Además proporcionan una manera de hacer que los componentes funcionen con
cualquier tipo de datos y no se restrinjan a un tipo de datos particular
▶ Por lo tanto, los componentes se pueden llamar o usar con una variedad de tipos
de datos*/

class Pila<T> {
    public elementos: T[] = [];
  
    push(elemento: T): void {
      this.elementos.push(elemento);
    }
  
    pop(): T | undefined {
      return this.elementos.pop();
    }
  
    size(): number {
      return this.elementos.length;
    }

    peek(): T | undefined {
      return this.elementos[this.elementos.length - 1];
    }
  }
  
  class PilaSinRepetidos<T> extends Pila<T> {
    push(elemento: T): void {

        if (this.elementos.some((el) => el === elemento)) 
            {
        console.log(`El elemento ${elemento} ya está en la pila. No se puede agregar.`);
      } else {
        super.push(elemento); 
      }
    }
  }
  

  const pilaNumeros = new Pila<number>();
  pilaNumeros.push(10);
  pilaNumeros.push(20);
  console.log(pilaNumeros.size()); 
  console.log(pilaNumeros.pop());  
  console.log(pilaNumeros.size()); 
  

  const pilaUnica = new PilaSinRepetidos<string>();
  pilaUnica.push("apple");
  pilaUnica.push("banana");
  pilaUnica.push("apple"); 
  console.log(pilaUnica.size());
  console.log(pilaUnica.pop());  
  