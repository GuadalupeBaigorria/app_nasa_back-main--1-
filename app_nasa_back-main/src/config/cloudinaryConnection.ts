import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME || 'dtuo44q2s', 
    api_key: process.env.CLOUD_API_KEY || '487765846852841', 
    api_secret: process.env.CLOUD_API_SECRET || '<your_api_secret>' 
});

export default cloudinary;