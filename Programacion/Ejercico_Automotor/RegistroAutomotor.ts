import * as fs from 'fs';
import { Readline } from 'node:readline/promises';
class Auto {

    private marca: string;

    private modelo: number;

    private color: string;

    public constructor (marca: string, modelo: number, color: string){

        this.marca = marca;

        this.modelo = modelo;

        this.color = color;

    }

}

class RegistroAutomotor {

    private listaAutos : Array<Auto>;

    public constructor (listaAutos: Array<Auto>){

        this.listaAutos = listaAutos;

    }

    public getListaAutos(){

        return this.listaAutos;

    }

}

class GestorDeArchivos {

    private arregloString: string[];

    constructor(txtFileLocation: string) {

        let archivoTxt: string = fs.readFileSync(txtFileLocation, 'utf-8');

        this.arregloString = archivoTxt.split(';');

    }

    public mostrarArreglo(): void {

        console.log(this.arregloString);

    }

    public getArregloString(): string[] {

        return this.arregloString;

    }

}

//Funcion para agregar un nuevo Auto

function agregarAuto (auto: string, arrayAutos: Array<Auto>): void {

    let propiedadAuto : string [] = auto.split(',');

    let marca : string = propiedadAuto [0];

    let modelo : number = Number(propiedadAuto[1]);

    let color : string = propiedadAuto [2]

    let nuevoAuto : Auto = new Auto (marca, modelo, color);

    arrayAutos.push (nuevoAuto)

}

function borrarAuto (arrayAutos : Array<Auto>, position: number){

    let readlineSync = require('readline-sync')

    let marca : string = readlineSync.question("Ingrese la marca: ");

    let modelo: number = Number(readlineSync.question("Ingrese el modelo: "));

    let color: string = readlineSync.question("Ingrese el color: ");

    let nuevoAuto: Auto = new Auto (marca, modelo, color);

    delete arrayAutos [position];

    arrayAutos[position] = nuevoAuto;

}

//Inicio programa

let datos: GestorDeArchivos = new GestorDeArchivos ('./txt/autos.txt');

let arrayAutos: Array<Auto> = [];

for (let i: number = 0; i < datos.getArregloString().length; i++) {

    agregarAuto (datos.getArregloString()[i], arrayAutos);

}

console.log(arrayAutos);

console.log(borrarAuto(arrayAutos,2));