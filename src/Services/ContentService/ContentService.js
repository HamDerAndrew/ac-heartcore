const heartcoreClient = require('./Client');

async function main() {
    const contentResult = await heartcoreClient.delivery.content.root()
    const mediaResult = await heartcoreClient.delivery.media.byId('1922e957-ec86-427e-8785-fbd9a6ce77a8')

    console.log(JSON.stringify(contentResult,null,2))
    console.log(JSON.stringify(mediaResult,null,2))
}

export default main;