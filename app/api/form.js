import dbConnect from '../../../utils/dbConnect';
import FormData from '../../lib/models/User';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const { email, password } = req.body;

      const formData = new FormData({
        email,
        password,
      });

      const savedFormData = await formData.save();

      res.status(201).json({ success: true, data: savedFormData });
    } catch (error) {
      res.status(400).json({ success: false, error: 'Form submission failed.' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method not allowed' });
  }
}