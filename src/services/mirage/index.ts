import { createServer, Factory, Model, Server } from 'miragejs';
import faker from '@withshepherd/faker';

type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer(): Server {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },
    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`;
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        },
      }),
    },
    // eslint-disable-next-line no-shadow
    seeds(server) {
      server.createList('user', 200);
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750; // 750ms
      this.get('/users');
      this.post('/users');

      this.namespace = '';
      this.passthrough();
    },
  });
  return server;
}
