
let { MongoClient, ObjectID } = require('mongodb');
const connectionString = 'mongodb://localhost:27017';


(async () => {
    let client = await MongoClient.connect(connectionString,
        { useNewUrlParser: true });
    let db = client.db('TodoApp');
    try {
        const res = await db
            .collection("Users")
            .findOneAndUpdate({
                _id: new ObjectID("5bdffa7fa4ca511ce828f12d")
            },
                {
                    $inc: {
                        age:15
                    }
                },
                {
                    returnOriginal: false
                });
        console.log(` result: ${JSON.stringify(res)}`);
    }
    finally {
        db.close();
    }
})().catch(err => console.log(`errors : ${err}`))
