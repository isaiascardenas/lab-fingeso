import { Idea } from '../ideas/idea';
import { User } from '../users/user';
import { ComentarioService } from './comentario.service';


export class Comentario {
  id: number;
  description: string;
  user: User;
  idea: Idea;

  constructor(
      description: string,
      private comentarioService: ComentarioService,
      private location: Location
    ){
    // this.description = description;
  }

  publish(): void {
    console.log(this);
    // validate
    if (this.description.length > 0) {
      // submit
      this.comentarioService.store(this);
    }
  }
}
