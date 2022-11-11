import * as fs from "fs";
export default class GestorDeArchivos{
    
    private arregloString : string[];

    constructor(txtfilelocation : string){
        let archivoTxt: string = fs.readFileSync(txtfilelocation, "utf-8");
        this.arregloString = archivoTxt.split(";");
    }

    public mostrarArreglo(): void{
        console.log(this.arregloString);
    }

    public getArregloString(): string[]{
        return this.arregloString;
    }
}