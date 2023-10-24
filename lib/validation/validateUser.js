import mongoose from 'mongoose';

const dbUri = MONGODB_URL;

mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a schema and model for users data
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

export default async function handler(req, res) {
    if (req.method === 'POST') {
      const data = JSON.parse(req.body);
  
      // Create a new user document and save it to MongoDB
      const newUser = new User(data);
  
      try {
        client = await mongoose.connect(MONGODB_URL)
        await newUser.save();
        res.status(200).json({ message: 'User data saved successfully' });
      } catch (error) {
        res.status(500).json({ message: 'Error saving user data' });
      }
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }