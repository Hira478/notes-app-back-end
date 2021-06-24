const Hapi = require('@hapi/hapi');
const routes = require('./routes');

//server main body
const init = async () => {
  const server = Hapi.server({
    port: 5000, //change ENV between prod and local
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '172.31.32.66',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);
  
  //server starter
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
