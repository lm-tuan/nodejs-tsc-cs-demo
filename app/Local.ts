import { server } from "./lib/infrastructure/webserver/Server";

const appPort = 8080;
console.log('run here');
server.listen(appPort, () => {
  console.log(`Service is running on ${appPort}`)
})