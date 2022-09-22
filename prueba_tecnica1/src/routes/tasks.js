const { Router, request } = require('express');
const router = Router();
const _ = require('underscore');
const DB = require('../sample.json');
const { saveToDatabase } = require('../utils.js');

const boards = require('../sample.json');

router.get('/',(req, res) => {
    res.json(boards);
});

router.post('/',(req, res) => {
    const{title}=req.body;
    if (title){
        const id = boards.length +1;
        const stage = 1;
        const newTask = {id,stage,...req.body};
        boards.push(newTask);
        saveToDatabase(DB);
        res.status(201).json(boards);
    } else {
        res.send('Wrong Request');
    }
});

router.put('/:id', (req, res) => {
    const{id}=req.params;
    const{title,stage}=req.body;
    if (title && stage) {
        _.each(boards, (board, i) => {
            if (board.id == id) {
                board.title = title;
                board.stage = stage;
            }
            saveToDatabase(DB);
        });
        res.json(boards);
    } else{
        res.status(500).json({error:'There was an error'});
    }
});

router.delete('/:id',(req, res) => {
    const { id } = req.params;
    _.each(boards,(task,i) => {
        if (task.id == id){
            boards.splice(i, 1);
        }
    });
    res.send(boards);
});

module.exports = router;