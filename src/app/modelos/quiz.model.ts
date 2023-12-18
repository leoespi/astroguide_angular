export class Quiz {
    id?: number;
    Titulo :string | null | undefined;
    Duracion:number | null | undefined;
    Pregunta:string | null | undefined;
    Respuesta1:string | null | undefined;	
    Respuesta2:string | null | undefined;	
    Respuesta3:string | null | undefined;
    Respuesta4:string | null | undefined;

    constructor ( id: number, Titulo :string, Duracion:number, Pregunta:string, Respuesta1:string, Respuesta2:string, Respuesta3:string, Respuesta4:string) {
        this.id = id;
        this.Titulo = Titulo;
        this.Duracion = Duracion;
        this.Pregunta = Pregunta;
        this.Respuesta1 = Respuesta1;
        this.Respuesta2 = Respuesta2;
        this.Respuesta3 = Respuesta3;
        this.Respuesta4 = Respuesta4;
        
    }



}
