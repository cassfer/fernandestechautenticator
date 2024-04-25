
import { AddressInfo } from "net";
import expressServer from "./server";

const debug = require('debug')('my express app');

const server = expressServer.listen(expressServer.get('port'), function () {
    console.log(`Servidor rodando na porta ${(server.address() as AddressInfo).port}`)
    debug(`Express server listening on port ${(server.address() as AddressInfo).port}`);
});