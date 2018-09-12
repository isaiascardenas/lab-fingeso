import { Rol } from '../roles/rol';

export class User {
  id: number;
  name: string;
  rol: Rol;

  constructor(id: number, name: string, rol_id: number) {
    this.id = id;
    this.name = name;
    this.rol = new Rol(rol_id);
  }

  getRol(): Rol {
    return this.rol;
  }

  isEvaluator(): boolean {
    return this.rol.id == 2;
  }
}

