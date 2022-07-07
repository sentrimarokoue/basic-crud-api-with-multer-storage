import dotenv from 'dotenv';
import path from 'path';


var config = {
  jwt_secret: process.env.JWT_SECRET || 'MimbulusMimbletonia',
  mongoose: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost/neu',
    imgBucket: "photos"
  },
}
export default config;
