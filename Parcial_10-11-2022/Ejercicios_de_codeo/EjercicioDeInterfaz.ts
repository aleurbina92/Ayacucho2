
interface Heladera{

    congela(): void;
    getEnfria():boolean;

}

class HeladeraGrande implements Heladera{

    private enfria : boolean;

    constructor() {

        this.enfria = true;
        
    }

    public congela(): void{
        this.congela

    }

    public getEnfria(): boolean {
        return this.enfria;
    }



}

let heladera : HeladeraGrande = new HeladeraGrande();
console.log(heladera);