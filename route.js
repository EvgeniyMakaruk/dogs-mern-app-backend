const { Router } = require('express')
const router = Router()
const Breeds = require('./breeds')
const Dogs = require('./dogs')
const mongoose = require('mongoose')
// /api/getdogs/dogs
router.get('/dogs',

   async (req, res) => {
      const dataBreeds = []

      try {
         Breeds.find({}, (err, data) => {
            res.status(200).json(data)
         });

      } catch (e) {
         console.log(e);
         res.status(500).json({ message: 'Что то пошло не так, попробуйте снова' })
      }
   })




module.exports = router