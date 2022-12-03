import express from "express";


export default function postRoutes() {
    const router = express.Router();
    router.get('/', (req, res) => {
        res.send('THIS WOKRS!')
    })


}