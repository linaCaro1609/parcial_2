class Empleado{
	//atributos

	//Constructor

		//contructor vacío - En la nueva versión no es necesario...
	//constructor(){}

	constructor(cc,nombresyApellidos,direccion,email,telefono,sueldoBase,
		tipoEmpleado,tipoBonificacion){
		this.cc = cc;
		this.nombresyApellidos = nombresyApellidos;
		this.direccion=direccion;
		this.email=email;
		this.telefono=telefono;
		this.sueldoBase=sueldoBase;
		this.tipoEmpleado=tipoEmpleado;
		this.tipoBonificacion=tipoBonificacion;
		this.adicion = this.calcularAdicion();
		this.sueldoTotal=this.sueldoBase + this.adicion;

	}

	//Métodos

	calcularAdicion() {
    let adicion = 0;

    if (this.tipoBonificacion == "A") {
      adicion = 200000;
    } else if (this.tipoBonificacion == "B") {
      adicion = 150000;
    } else if (this.tipoBonificacion == "C") {
      adicion = 100000;
    } else if (this.tipoBonificacion == "D") {
      adicion = 50000;
    }

    return adicion;
  }
}

