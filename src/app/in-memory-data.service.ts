import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const ideas = [
      {
        id: 1,
        name: 'ReciclApp',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem sapien, pretium at dignissim rhoncus, pellentesque a leo. Praesent vulputate ligula ac arcu eleifend posuere at quis leo. Sed id sem quis leo venenatis dictum. Suspendisse nec malesuada ante. In neque enim, consectetur sed nibh a, tristique ultrices justo. Vestibulum varius mauris et mattis scelerisque. Vestibulum fermentum libero nibh, quis gravida sapien consequat at. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
        owner_id: 1
      },
      {
        id: 2,
        name: 'USACH Movil',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem sapien, pretium at dignissim rhoncus, pellentesque a leo. Praesent vulputate ligula ac arcu eleifend posuere at quis leo. Sed id sem quis leo venenatis dictum. Suspendisse nec malesuada ante. In neque enim, consectetur sed nibh a, tristique ultrices justo. Vestibulum varius mauris et mattis scelerisque. Vestibulum fermentum libero nibh, quis gravida sapien consequat at. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
        owner_id: 1
      },
      {
        id: 3,
        name: 'CGL Movil',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem sapien, pretium at dignissim rhoncus, pellentesque a leo. Praesent vulputate ligula ac arcu eleifend posuere at quis leo. Sed id sem quis leo venenatis dictum. Suspendisse nec malesuada ante. In neque enim, consectetur sed nibh a, tristique ultrices justo. Vestibulum varius mauris et mattis scelerisque. Vestibulum fermentum libero nibh, quis gravida sapien consequat at. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
        owner_id: 1
      },
      {
        id: 4,
        name: 'USACH USACH',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem sapien, pretium at dignissim rhoncus, pellentesque a leo. Praesent vulputate ligula ac arcu eleifend posuere at quis leo. Sed id sem quis leo venenatis dictum. Suspendisse nec malesuada ante. In neque enim, consectetur sed nibh a, tristique ultrices justo. Vestibulum varius mauris et mattis scelerisque. Vestibulum fermentum libero nibh, quis gravida sapien consequat at. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
        owner_id: 1
      }
    ];

    const retos = [
      { id: 1, name: 'Libre',          description: '12345', creator_id: 1 },
      { id: 2, name: 'Innovacion',     description: '12345', creator_id: 1 },
      { id: 3, name: 'Medio Ambiente', description: '12345', creator_id: 1 },
      { id: 4, name: 'Automatización', description: '12345', creator_id: 1 }
    ];

    const users = [
      { id: 1,  name: 'Admin',     email: 'admin@ayala.cl',   password: '12345' },
      { id: 2,  name: 'Gabriel',   email: 'gabriel@ayala.cl', password: '12345' },
      { id: 3,  name: 'Big Vicho', email: 'big@ayala.cl',     password: '12345' },
      { id: 4,  name: 'Vicho',     email: 'vicho@ayala.cl',   password: '12345' },
      { id: 5,  name: 'Nicole',    email: 'nicole@ayala.cl',  password: '12345' },
      { id: 6,  name: 'Diego M',   email: 'diego@ayala.cl',   password: '12345' },
      { id: 7,  name: 'Isaias',    email: 'isaias@ayala.cl',  password: '12345' },
      { id: 8,  name: 'Diego S',   email: 'diego@ayala.cl',   password: '12345' },
      { id: 9,  name: 'Basti',     email: 'basti@ayala.cl',   password: '12345' },
      { id: 10, name: 'Leandro',   email: 'leandro@ayala.cl', password: '12345' }
    ];
    return {
      users: users,
      ideas: ideas,
      retos: retos
    };
  }
}