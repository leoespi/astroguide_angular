export class Logros {
    id?: number;
    Nombre_del_Logro: string |null | undefined;
    Rareza?: string | null | undefined;
    user_id?: number;
    
    constructor(id: number, Nombre_del_Logro: string, Rareza: string, user_id: number) {
        this.id = id;
        this.Nombre_del_Logro = Nombre_del_Logro;
        this.Rareza = Rareza;
        this.user_id = user_id;
    }

}
