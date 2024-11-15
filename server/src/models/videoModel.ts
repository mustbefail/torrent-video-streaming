import { Schema, model, Document } from 'mongoose';

interface IVideo extends Document {
  title: string;
  description: string;
  torrentFile: string;
  user: Schema.Types.ObjectId;
}

const videoSchema = new Schema<IVideo>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  torrentFile: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
});

const Video = model<IVideo>('Video', videoSchema);

export default Video;
