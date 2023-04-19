
function cliente(nombre, ident, password, saldo){
    this.nombre=nombre
    this.ident=ident
    this.password=password
    this.saldo=saldo
}

var c0011 = new cliente("Jorge Salinas", "c0011", "123asd", 100)
var c0012 = new cliente("Claudia Morales", "c0012", "112233", 300)
var c0013 = new cliente("Laura Pérez", "c0013", "123123", 280)
var c0014 = new cliente("Horacio Salazar", "c0014", "aassdd", 250)
var listaC = [c0011, c0012, c0013, c0014]

alert("Bienvenid@ a Banca en línea")

var valida=""
while (valida=="") {
    
    var ident_cliente=prompt("Por favor, ingrese su identificador:")
    var pass_cliente=prompt("Ingrese su contraseña:")
    for (let i = 0; i < listaC.length; i++) {

        if (ident_cliente==listaC[i].ident && pass_cliente==listaC[i].password) {
            valida=window[listaC[i].ident]
            bienvenida(valida)
            break
        }
    }
    
    if (valida=="") {
        alert("Identificador o contraseña incorrectos. Vuelva a intentarlo.")
    }
}

do {
    var ingresado = prompt("Seleccione qué desea hacer:\n1.-Depósito\n2.-Giro\n3-.Ver su saldo\n4.-Salir\n")

    switch(ingresado){
        case "1":
            deposito(valida)
            break
        case "2":
            giro(valida)
            break
        case "3":
            saldo(valida)
            break
        case "4":
            salir()
            break
        default:
            alert("Elección incorrecta.")
    }

} while (ingresado!="4");


function bienvenida(ident_cliente) {
    alert("Bienvenid@ "+ ident_cliente.nombre)
}

function deposito(ident_cliente) {
    abono=(prompt("Su saldo actual es: "+ident_cliente.saldo+"\nIngrese el monto que desea depositar:"))
    
    while (isNaN(abono)==true) {
        alert("Valor ingresado es incorrecto. Vuelva a intentarlo")
        abono=(prompt("Su saldo actual es: "+ident_cliente.saldo+"\nIngrese el monto que desea depositar:"))
    }
    
    ident_cliente.saldo+=(parseInt(abono))
    alert("Depósito realizado. Su nuevo saldo es: "+ident_cliente.saldo)
}

function giro(ident_cliente) {
    retirado=false
    while(retirado==false){
        
        retiro=(prompt("Su saldo actual es: "+ident_cliente.saldo+"\nIngrese el monto que desea girar:"))

        while (isNaN(retiro)==true) {
            alert("Valor ingresado es incorrecto. Vuelva a intentarlo")
            retiro=(prompt("Su saldo actual es: "+ident_cliente.saldo+"\nIngrese el monto que desea girar:"))
        }

        if(parseInt(retiro)>ident_cliente.saldo){
            alert("El monto ingresado excede su saldo disponible")
        }else{
            ident_cliente.saldo-=(parseInt(retiro))
            alert("Giro realizado. Su nuevo saldo es: "+ident_cliente.saldo)
            retirado=true
        }
    }
}

function saldo(ident_cliente) {
    alert("Su saldo actual dispnible es: "+ident_cliente.saldo)
}

function salir() {
    alert("Gracias por preferirnos.")
}