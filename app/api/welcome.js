export default function handler(req, res) {
    const jsonData = {
      message: 'Welcome to our API!',
      version: '1.0',
    };
  
    res.status(200).json(jsonData);
  }
  