/* Los patrones de diseño son soluciones probadas para problemas comunes en el diseño de software.
En JavaScript, debido a su naturaleza flexible y orientada a objetos, se pueden aplicar varios patrones.
Aquí te proporcionaré una breve descripción de algunos patrones comunes */

/* ### 1. **Módulo JavaScript (Module Pattern):** */
  //Este patrón utiliza funciones autoinvocadas para crear privacidad y encapsulamiento.
  var module = (function() {
    var privateVar = 0;
    function privateFunction() {
      // lógica privada
    }
    return {
      publicVar: 42,
      publicFunction: function() {
        // lógica pública
      }
    };
  })();
  console.log();

/* ### 2. **Módulo JavaScript" o (Module Revealing):** */
  //Este patrón permite crear un encapsulamiento y privacidad de variables utilizando funciones autoinvocadas y closures en JavaScript.
  var doStuff = (function () {
    var privateInformationForDoStuff = 0; // Esta variable está encapsulada y es privada para la función doStuff -- es una variable declarada dentro de la función autoinvocada.
    function doStuff() { // Esta es la función que será asignada a la variable doStuff
        // Dentro de esta función, puedes acceder a la variable privada
        console.log(++privateInformationForDoStuff);
    }
    return doStuff; // Retorna la función interna, lo que la asigna a la variable doStuff
  }());
  doStuff(); //Output: 1

/* ### 3. **Constructor y Prototipo (Constructor and Prototype Pattern):** */
  //Utiliza funciones constructoras y prototipos para crear instancias de objetos con métodos compartidos.   
  function Car(model) { //debe pasarse a clase
    this.model = model;
  }
  Car.prototype.drive = function() { // Prototype se utiliza para agregar un método llamado drive a todas las instancias de la clase Car.
    console.log('Driving a', this.model);
  };
  var myCar = new Car('Toyota');
  
/* ### 4. **Observador (Observer Pattern):** */
  //Permite que un objeto (sujeto) notifique a otros objetos (observadores) sobre cambios en su estado.
  function Subject() {
    this.observers = []; //Matriz para almacenar los observadores que estarán pendientes de los cambios en el estado del sujeto.
    this.addObserver = function(observer) { //Permite agregar un observador a la lista de observadores.
      this.observers.push(observer);
    };
    this.notifyObservers = function() { //Recorre la lista de observadores y llama al método update de cada observador.
      this.observers.forEach(observer => observer.update());
    };
  }
  function Observer(name) { //Función constructora que crea objetos que actuarán como observadores.
    this.name = name;
    this.update = function() { //Se llama cuando el sujeto notifica a los observadores. En este caso, simplemente imprime un mensaje indicando que el observador ha sido actualizado.
      console.log(this.name + ' updated');
    };
  }
  var subject = new Subject(); //Se crea una instancia del sujeto llamada subject.
  var observer1 = new Observer('Observer 1'); //Se crean dos instancias de observadores llamadas observer1 y observer2.
  var observer2 = new Observer('Observer 2');
  subject.addObserver(observer1); //Los observadores se agregan al sujeto utilizando el método addObserver.
  subject.addObserver(observer2);
  subject.notifyObservers(); //Cuando se llama al método notifyObservers del sujeto, todos los observadores registrados son notificados y sus métodos update son ejecutados.
  /* En resumen, este patrón permite una comunicación eficiente entre objetos, donde el sujeto no necesita conocer los detalles específicos de cada observador, y los observadores pueden reaccionar a los cambios en el sujeto de manera independiente. Es útil en situaciones en las que hay dependencias entre objetos y se desea desacoplar el sujeto de sus observadores. */

  /* ### 5. **Singleton (Singleton Pattern):** */
  //Garantiza que una clase tenga una única instancia y proporciona un punto de acceso global a esa instancia.
  var Singleton = (function() {
    var instance;
    function createInstance() {
      // lógica de creación de instancia
      return {};
    }
    return {
      getInstance: function() {
        if (!instance) {
          instance = createInstance();
        }
        return instance;
      }
    };
  })();
  var singletonInstance1 = Singleton.getInstance();
  var singletonInstance2 = Singleton.getInstance();

/* ### 6. **Fábrica (Factory Pattern):** */
  //Define una interfaz para crear objetos, pero permite a las clases derivadas alterar el tipo de objetos que se crearán.
  function Circle(radius) {
    this.radius = radius;
  }
  function Square(side) {
    this.side = side;
  }
  function ShapeFactory() {}
  ShapeFactory.prototype.createShape = function(type, value) {
    switch (type) {
      case 'circle':
        return new Circle(value);
      case 'square':
        return new Square(value);
      default:
        throw new Error('Invalid shape type');
    }
  };
  var factory = new ShapeFactory();
  var myCircle = factory.createShape('circle', 5);
  console.log(myCircle); //Output: Circle { radius: 5 }
