"use strict";

import Product from "./producto.js";
import inventory from "./lote.js";

let lote = new inventory();

let btnAdd = document.getElementById('btnAdd');

    btnAdd.addEventListener('click',()=>{
        let codigo = document.getElementById('txtCode').value;
        let nombre = document.getElementById('txtName').value;
        let cantidad = document.getElementById('txtQuantity').value;
        let costo = document.getElementById('txtCost').value;

        let producto = new Product(codigo, nombre,cantidad, costo);

        if(lote.agregar(producto) === "igual") {
            document.getElementById('detalles').innerHTML += `
            <p>Ya hay un producto con el codigo ${producto.codigo} por lo que no se agrego</p>

        `;
        } else {
            document.getElementById('detalles').innerHTML += `
            <p>Se agrego el producto ${producto.codigo} correctamente</p>

        `;
        }
        
    });

let btnSearch=document.getElementById('btnSearch');

    btnSearch.addEventListener('click',()=>{
        let codigo = document.getElementById('txtCode').value;
        let buscado = lote.buscar(codigo);
        let detalles = document.getElementById('detalles');
        if (buscado == null)
        detalles.innerHTML += '<p>No se encontro</p>';
        else
        detalles.innerHTML +=`${buscado.infoHtml()}`;
    });

let btnDelete=document.getElementById('btnDelete');

    btnDelete.addEventListener('click',()=>{
        let codigo = document.getElementById('txtCode').value;
        let buscado = lote.buscar(codigo);
        let detalles = document.getElementById('detalles');
        if (buscado == null){
            detalles.innerHTML += '<p>No se encontro</p>';
        } else { 
            detalles.innerHTML +=`<p>El producto ${codigo} ha sido eliminado</p>`;
            lote.eliminar();  
        }
        
    });

let btnList = document.getElementById('btnList');

    btnList.addEventListener('click',()=>{
        if(lote.listar() === "vacio"){
            detalles.innerHTML += '<p>No se encontro</p>';
        } else {
            detalles.innerHTML += `<p>${lote.listar()}</p>`;
        }
    });

let btnListReverse = document.getElementById('btnListReverse');

    btnListReverse.addEventListener('click',()=>{
        if(lote.listarReverso() === "vacio"){
            detalles.innerHTML += '<p>No se encontro</p>';
        } else {
            detalles.innerHTML += `<p>${lote.listar()}</p>`;
        };
    });