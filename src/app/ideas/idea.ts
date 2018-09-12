import { Reto } from '../retos/reto';
import { User } from '../users/user';

export class Idea {
  id: number;
  name: string;
  description: string;

  votes: number;

  // reto: Reto;
  // user: User;
  // reto_id: number;
  user_id: number;

    constructor(){
        this.votes = 0;
    }

    // setReto(Reto: reto) {
        // this.reto = reto;
    // }
}
