import Zemu from "@zondax/zemu";
import CosmosApp from "ledger-cosmos-js";

const DEMO_APP_PATH = "../app/bin";

jest.setTimeout(20000);

describe('Basic checks', function () {
    it('can start and stop container', async function () {
        const sim = new Zemu(DEMO_APP_PATH);
        try {
            await sim.start();
        } finally {
            await sim.close();
        }
    });


    it('get app version', async function () {
        const sim = new Zemu(DEMO_APP_PATH);
        try {
            await sim.start();
            const app = new CosmosApp(sim.getTransport());
            const version = await app.getVersion();

            console.log(version)
        } finally {
            await sim.close();
        }
    });

    it('get app info', async function () {
        const sim = new Zemu(DEMO_APP_PATH);
        try {
            await sim.start();
            const app = new CosmosApp(sim.getTransport());
            const info = await app.appInfo();

            console.log(info)
        } finally {
            await sim.close();
        }
    });
});
