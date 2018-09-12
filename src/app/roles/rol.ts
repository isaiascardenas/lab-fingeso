export class Rol {
  
  id: number;
  description: string;
  
  constructor(id: number){
    this.id = id;

    if (id == 1) {
      this.description = "Participante";
    } else {
      this.description = "Evaluador";
    }
  }
}

