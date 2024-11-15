import { Router } from 'express';
import { getTorrentInfo, streamTorrent } from '../controllers/videoController';

const router = Router();

router.post('/upload', getTorrentInfo);
router.get('/stream/:infoHash', streamTorrent);

export default router;
