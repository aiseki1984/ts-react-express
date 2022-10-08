import path from 'path';
import express from 'express';
import { router as authRoutes } from './routes/auth';
import { router as postRoutes } from './routes/posts';
import { router as userRoutes } from './routes/users';
import cookieParser from 'cookie-parser';
import multer from 'multer';

const app = express();
const port = 8800;

app.use(express.json());
app.use(cookieParser());
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, path.resolve(__dirname, '../../client/public/upload'));
  },
  filename: function (req, file, callback) {
    const uniqueSuffix = Math.random().toString(26).substring(4, 10);
    callback(null, `${Date.now()}-${uniqueSuffix}-${file.originalname}`);
    // callback(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage,
  fileFilter(req, file, callback) {
    console.log(file.mimetype);
    if (
      ['video/mp4', 'image/png', 'image/jpeg', 'audio/mpeg'].includes(
        file.mimetype,
      )
    ) {
      callback(null, true);
      return;
    }
    callback(new TypeError('Invalid File Type'));
  },
});

app.post('/api/upload', upload.single('file'), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
