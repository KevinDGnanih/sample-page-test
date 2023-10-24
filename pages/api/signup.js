import dbConnect from '../../utils/dbConnect'; // Import your MongoDB connection
import User from '../../models/User'; // Import your Mongoose user model

export default async function handler(req, res) {
  // Connect to the MongoDB database
  await dbConnect();

  if (req.method === 'POST') {
    try {
      // Parse the user data from the request body
      const { username, email, password } = req.body;

      // Check if the user already exists
      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(400).json({ success: false, error: 'User already exists.' });
      }

      // Create a new user instance
      const newUser = new User({
        username,
        email,
        password, // Make sure to hash the password before saving it (e.g., using bcrypt)
      });

      // Save the user to the database
      const savedUser = await newUser.save();

      res.status(201).json({ success: true, data: savedUser });
    } catch (error) {
      res.status(400).json({ success: false, error: 'Signup failed.' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method not allowed' });
  }
}
