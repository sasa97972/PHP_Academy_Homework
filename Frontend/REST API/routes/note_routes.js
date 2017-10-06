var express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
    app.post('/notes', function(req, res) {
        var note = { text: req.body.description, title: req.body.title};
        db.collection('notes').insert(note, function(err, result) {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(result.ops[0]);
            }
        });
    });
    app.get('/notes/view/:id', function(req, res) {
        var id = req.params.id;
        var details = { '_id': new ObjectID(id) };
        db.collection('notes').findOne(details, function(err, item) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send(item);
            }
        });
    });
    app.get('/notes/all', function(req, res) {
        db.collection("notes").find().toArray(function(err, results){
            if (err) return false;
            res.send(results);
        });
    });
    app.get('/notes/delete/:id', function(req, res) {
        console.log('deleted');
        var id = req.params.id;
        var details = { '_id': new ObjectID(id) };
        db.collection('notes').remove(details, function(err, item) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send('Note ' + id + ' deleted!');
            }
        });
    });
    app.put ('/notes/update/:id', function(req, res) {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        const note = { text: req.body.description, title: req.body.title };
        db.collection('notes').update(details, note, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send(note);
            }
        });
    });
};

router.get('/', function(req, res, next) {
    res.render('notes', { title: 'Notes'});
});

module.exports.noteDefaultRoute = router;




