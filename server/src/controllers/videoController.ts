import { Request, Response } from 'express';
import WebTorrent from 'webtorrent';

const client = new WebTorrent();

export const getTorrentInfo = (req: Request, res: Response) => {
  const { torrentLink } = req.body;

  client.add(torrentLink, (torrent) => {
    const files = torrent.files.map(file => ({
      name: file.name,
      length: file.length,
      path: file.path,
    }));

    res.json({
      infoHash: torrent.infoHash,
      files,
    });
  });
};

export const streamTorrent = (req: Request, res: Response) => {
  const { infoHash } = req.params;

  const torrent = client.get(infoHash);
  if (!torrent) {
    return res.status(404).send('Torrent not found');
  }

  const file = torrent.files.find(file => file.name.endsWith('.mp4')); // Пример для видеофайлов
  if (!file) {
    return res.status(404).send('Video file not found');
  }

  res.setHeader('Content-Type', 'video/mp4');
  const stream = file.createReadStream();
  stream.pipe(res);
};
