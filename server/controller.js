module.exports = {
    createBin: (req,res,next) => {
        const db = req.app.get('db');
        const {name , price} = req.body;

        db.createBin([name, price]).then(bin => res.status(200).send()).catch(err => console.error(err))
    },
    readShelves: (req,res,next) => {
        const db = req.app.get('db');

        
    },
    readBin: (req,res,next) => {
        const db = req.app.get('db');

        db.readBin([req.params.id]).then(bin => res.status(200).send(bin)).catch(() => res.status(500).send())
    },
    updateBin: (req,res,next) => {
        const db = req.app.get('db');

        
    },
    deleteBin: (req,res,next) => {
        const db = req.app.get('db');

        db.deleteBin([req.params.id]).then(bin => res.status(200).send(bin)).catch(() => res.status(500).send())
    },
}