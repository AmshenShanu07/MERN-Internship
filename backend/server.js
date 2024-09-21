const express  = require('express');
const app = express();
const { MongoClient } = require('mongodb');

let db

const client = new MongoClient('');

const main = async () => {
  await client.connect();
  console.log("Connected To Database!");
  db = client.db('Intership');
}



app.get('/',(req,res) => {
  res.json({ data: 'Server Up and running' })
})




app.listen(4000, () => {
  main()
  console.log('Backend Started!')
})