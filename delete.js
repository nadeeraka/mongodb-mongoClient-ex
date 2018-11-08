
let MongoClient = require('mongodb').MongoClient;
const connectionString = 'mongodb://localhost:27017';


(async () => {
    let client = await MongoClient.connect(connectionString,
        { useNewUrlParser: true });
    let db = client.db('TodoApp');
    try {
        const res = await db.collection('Todos')
            .deleteOne({ text:'something' })
        console.log(` result: ${JSON.stringify(res)}`);
    }
    finally {
        db.close();
    }
})().catch(err => console.log(`errors : ${err}`))
