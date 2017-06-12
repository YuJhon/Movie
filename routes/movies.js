var Movie = require("../models/movie");
var express = require("express");
var router = express.Router();

router.get('/list',function(req,res){
    console.info("list method enter")
    Movie.find(function(err,movies){
        if(err){
            console.info(err)
            return res.send(err);
        }
        console.info(movies)
        res.json(movies);
    });
});

router.post("/create",function(req,res){
    console.info("create method enter")
    var movie = new Movie(req.body);
    movie.save(function(err){
        if(err){
            return res.send(err);
        }
        res.send({message:'add a movie'});
    });
});

router.put('/update',function(req,res){
    console.info("update method enter")
    Movie.findOne({_id:req.params.id},function(err,movie){
        if(err){
            return res.send(err);
        }
        for(prop in req.body){
            movie[prop] = req.body[prop];
        }

        movie.save(function(err){
            if(err){
                return res.send(err);
            }
            res.json({message:'update a movie'});
        });
    });
});

router.get('/delete',function(req,res){
    console.info("delete method enter")
    Movie.remove({_id:req.params.id},function(err){
        if(err){
            return res.send(err);
        }
        res.json({message:'delete a movie'})
    });
});



module.exports = router;