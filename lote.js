"use strict";

export default class inventory{
    
    constructor(){
        this.inventario = new Array();
        this.posicion = 0
    }

    agregar(nuevo){
        if(this.inventario.length -1 === 20){
            return "lleno";
        } else if(this.inventario.length < 20){
            this.insertarEnPosicionOrdenada(nuevo);
            console.log(this.inventario);
        }
    }

    buscarPosicionOrdenada(codigo){
        for(let i = 0; i < this.inventario.length; i++) {
            if (codigo == this.inventario[i].codigo) {
                return "Codigo Existente";
            } else if (codigo < this.inventario[i].codigo) {
                return i;
            }
        }
    }
 
    insertarEnPosicionOrdenada(nuevo){
        let position = this.buscarPosicionOrdenada(nuevo.get_Codigo());
        console.log(position);
    
        if(position === "Codigo Existente"){
            return "igual";
        } else {
            this.inventario.push(nuevo);

            this.intercambioDeElementos(this.inventario, this.inventario.length-1, position);
                for (let i = this.inventario.length - 1, j = this.inventario.length - 2; i >= position + 1 && j >= position + 1; i--, j--) {
                    console.log(position)
                    this.intercambioDeElementos(this.inventario, j, i)
                }
        }
    }

    buscar(codigo){ 
        for (let i=0; i<this.inventario.length; i++){
            if (codigo == this.inventario[i].codigo){
                this.posicion = i;
                return this.inventario[i];
            }
        }
        
        return null;
    }

    eliminar() {
        let num = this.posicion
        this.intercambioDeElementos(this.inventario, num, this.inventario.length - 1);
        this.inventario.pop();

        for (let i = num, j = num + 1; i <= this.inventario.length - 1 && j <= this.inventario.length - 1; i++, j++) {
            console.log(this.inventario.length - 1, i, j);
            this.intercambioDeElementos(this.inventario, i, j)
        }

        console.log(this.inventario)
    }
//Gracias por la ayuda profe ^_^
    listar() {
        let datos = "";
        if(this.inventario.length === 0){
            return "vacio";
        } else {
            for(let i=0; i<this.inventario.length; i++){
                datos += `<p>Elemento Num.${i + 1}: Codigo ${this.inventario[i].codigo} Nombre ${this.inventario[i].nombre}<p>`;
            }

            return datos;
        }  
    }    

    listarReverso() {
        let datos = "";
        if(this.inventario.length === 0){
            return "vacio";
        } else {
            for(let i = this.inventario.length -1; i >= 0 ; i--){
                datos += `<p>Elemento Num.${i + 1}: Codigo ${this.inventario[i].codigo} Nombre ${this.inventario[i].nombre}<p>`
                
            }
            return datos;
        }  
    }    

    intercambioDeElementos(datos, i = 0, j = datos.length -1){
        [datos[i], datos[j]] = [datos[j], datos[i]];
    }
}