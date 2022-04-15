import * as fs from 'fs';
export default async function handler(req, res) {
    if (req.method === 'POST') {
        let data = await fs.promises.readdir('contactdata');

        fs.promises.writeFile(`contactdata/${data.length + 1}.json`, JSON.stringify(req.body), (err) => {
            console.log(err);
        });
        res.status(200).json('success');
    } else {
        res.status(200).json('hello world');
    }
}