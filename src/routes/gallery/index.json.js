import admin from 'firebase-admin';

export async function get(req, res) {
    admin.firestore().collection('galleries')
        .get()
        .then(snaps => {
            console.log(snaps);
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });

            res.end(JSON.stringify({
                galleries:
                    snaps.docs.map(item => ({
                        id: item.id,
                        ...item.data()
                    }))
                }
            ));
        })
        .catch(error => {
            res.writeHead(500, {
                'Content-Type': 'application/json'
            });
            res.end(JSON.stringify({error: error.toString()}))
        })
}