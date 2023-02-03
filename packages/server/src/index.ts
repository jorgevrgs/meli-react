import 'reflect-metadata';
import server from './adapters/server.adapter';

const PORT = process.env.VITE_SERVER_PORT
  ? Number(process.env.VITE_SERVER_PORT)
  : 8080;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
