import express from 'express';
import { MongoClient, ObjectId } from 'mongodb'; 
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const mongoClient = new MongoClient(process.env.MONGO_DB_CONNECTION);

app.use(cors());
app.use(express.json());

async function connectToDb() {
  await mongoClient.connect();
  console.log('Connected to MongoDB');
  const db = mongoClient.db('Portfolio');
  return db;
}

/** Puissance4 Collection */
app.get('/puissance4/show', async (req, res) => {
  const db = await connectToDb();
  const collection = db.collection('Puissance4');
  const data = await collection.find({}).toArray();
  res.json(data);
});

app.post('/puissance4/insert', async (req, res) => {
  const db = await connectToDb();
  const collection = db.collection('Puissance4');
  const comment = {
      pseudo: req.body.pseudo,
      comment: req.body.comment,
      like: 0,
      dislike: 0,
      likes: [],        // Ajout du tableau pour les IPs des likes
  };
  const result = await collection.insertOne(comment);
  res.json(result);
});


app.post('/puissance4/like', async (req, res) => {
  const db = await connectToDb();
  const collection = db.collection('Puissance4');
  const { id, userIp } = req.body;

  const comment = await collection.findOne({ _id: new ObjectId(id) });

  if (!comment.likes) {
      comment.likes = [];
  }

  if (comment.likes.includes(userIp)) {
      return res.status(403).send('Vous avez déjà liké ce commentaire.');
  }

  const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $inc: { like: 1 }, $push: { likes: userIp } }  // Ajoute l'IP à la liste des likes
  );

  res.json(result);
});

/** Twitter Collection */
app.get('/twitter/show', async (req, res) => {
  const db = await connectToDb();
  const collection = db.collection('Twitter');
  const data = await collection.find({}).toArray();
  res.json(data);
});

app.post('/twitter/insert', async (req, res) => {
  const db = await connectToDb();
  const collection = db.collection('Twitter');
  const comment = {
      pseudo: req.body.pseudo,
      comment: req.body.comment,
      like: 0,
      dislike: 0,
      likes: [],        // Ajout du tableau pour les IPs des likes
  };
  const result = await collection.insertOne(comment);
  res.json(result);
});


app.post('/twitter/like', async (req, res) => {
  const db = await connectToDb();
  const collection = db.collection('Twitter');
  const { id, userIp } = req.body;

  const comment = await collection.findOne({ _id: new ObjectId(id) });

  if (!comment.likes) {
      comment.likes = [];
  }

  if (comment.likes.includes(userIp)) {
      return res.status(403).send('Vous avez déjà liké ce commentaire.');
  }

  const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $inc: { like: 1 }, $push: { likes: userIp } }  // Ajoute l'IP à la liste des likes
  );

  res.json(result);
});

/** TCG Collection */
app.get('/tcg/show', async (req, res) => {
  const db = await connectToDb();
  const collection = db.collection('TCG');
  const data = await collection.find({}).toArray();
  res.json(data);
});

app.post('/tcg/insert', async (req, res) => {
  console.log('Request received:', req.body);
  const db = await connectToDb();
  const collection = db.collection('TCG');
  const comment = {
      pseudo: req.body.pseudo,
      comment: req.body.comment,
      like: 0,
      dislike: 0,
      likes: [],
  };
  const result = await collection.insertOne(comment);
  console.log('Insert result:', result);
  res.json(result);
});



app.post('/tcg/like', async (req, res) => {
  const db = await connectToDb();
  const collection = db.collection('TCG');
  const { id, userIp } = req.body;

  const comment = await collection.findOne({ _id: new ObjectId(id) });

  if (!comment.likes) {
      comment.likes = [];
  }

  if (comment.likes.includes(userIp)) {
      return res.status(403).send('Vous avez déjà liké ce commentaire.');
  }

  const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $inc: { like: 1 }, $push: { likes: userIp } }  // Ajoute l'IP à la liste des likes
  );

  res.json(result);
});

/** NewsFeed Collection */
app.get('/newsfeed/show', async (req, res) => {
  const db = await connectToDb();
  const collection = db.collection('NewsFeed');
  const data = await collection.find({}).toArray();
  res.json(data);
});

app.post('/newsfeed/insert', async (req, res) => {
  const db = await connectToDb();
  const collection = db.collection('NewsFeed');
  const comment = {
      pseudo: req.body.pseudo,
      comment: req.body.comment,
      like: 0,
      dislike: 0,
      likes: [],        // Ajout du tableau pour les IPs des likes
  };
  const result = await collection.insertOne(comment);
  res.json(result);
});


app.post('/newsfeed/like', async (req, res) => {
  const db = await connectToDb();
  const collection = db.collection('NewsFeed');
  const { id, userIp } = req.body;

  const comment = await collection.findOne({ _id: new ObjectId(id) });

  if (!comment.likes) {
      comment.likes = [];
  }

  if (comment.likes.includes(userIp)) {
      return res.status(403).send('Vous avez déjà liké ce commentaire.');
  }

  const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $inc: { like: 1 }, $push: { likes: userIp } }  // Ajoute l'IP à la liste des likes
  );

  res.json(result);
});

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
