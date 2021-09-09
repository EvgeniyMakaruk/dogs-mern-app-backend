const express = require('express')
var http = require('http');
const axios = require('axios')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Breeds = require('./breeds')
const Dogs = require('./dogs')
const { Router } = require('express')
require('dotenv').config()
const cors =require('cors')


const app = express()
app.use('/api/getdogs', require('./route'))
const router = Router()
app.use(express.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ extended: true }))
const PORT = process.env.PORT || 5000
app.use(cors())



const getBreeds = async () => {
   try {
      return await axios({
         url: 'https://dog.ceo/api/breeds/image/random/100'
      })
   } catch (e) {
      console.log(e);
   }
}
const start = async () => {


   (async () => {
      const breedOfDog = await getBreeds()
      let dogName = []
      let Title = []
      breedOfDog.data.message.forEach(el => {
         dogName.push(el.split('/')[4])
         Title.push(el.split('/')[5].split('.')[0])
      })
      // for (let i = 0; i < dogName.length&&i<100; i++) { 
      //    const breeds = new Breeds({ breed: dogName[i], title: Title[i] })
      //    await breeds.save()
      //    const dogs = new Dogs({ breedId: breeds._id })
      //    await dogs.save()
      // }   
   })()

   try {
      await mongoose.connect('mongodb+srv://MakarukEv:makaruk526@cluster0.s7cmo.mongodb.net/app-dogs', {
         //   useNewUrlParser: true,
         //   useFindAndModify: false
      })
      app.listen(PORT, () => {
         console.log('server has been started')
      })
   } catch (e) {
      console.log(`where were an error ${e}`)
   }
}

start()
