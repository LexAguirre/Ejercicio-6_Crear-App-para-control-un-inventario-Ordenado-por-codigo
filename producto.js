"use strict";

export default class Product{
    
    constructor(codigo, nombre, cantidad, costo){
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.costo = costo;
    }

    info(){
        return "Codigo: " + this.codigo;
    }

    infoHtml(){
        return `Producto ${this.codigo}: ${(this.nombre).toUpperCase()} (Cantidad: ${this.cantidad} Costo: $${this.costo} Total: $${this.cantidad * this.costo})`;
    }

    get_Codigo(){
        return Number(this.codigo);
    }

}