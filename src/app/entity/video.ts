export interface Video {
  id: number;
  index: number;
  title: string;
}
export interface VideoUploadSignature {
  policy: string;
  accessid: string;
  signature: string;
  dir: string;
  host: string;
  expire: number;
}

export const testVideos = [
  {
    id: 1,
    index: 1,
    title: 'first',
    url: 'https://f.video.weibocdn.com/o0/QuirbFtelx07V70Bun1e010412008CXB0E010.mp4?label=mp4_ld&template=360x636.24.0&media_id=4755946099114157&tp=8x8A3El:YTkl0eM8&us=0&ori=1&bf=4&ot=v&ps=3lckmu&uid=3ZoTIp&ab=3915-g1,7397-g1,3601-g23,6447-g1,1192-g0,1046-g2,1258-g0&Expires=1649499984&ssig=KeR8EpV2nB&KID=unistore,video',
  },
  {
    id: 2,
    index: 2,
    title: 'second',
    url: 'https://f.video.weibocdn.com/o0/QuirbFtelx07V70Bun1e010412008CXB0E010.mp4?label=mp4_ld&template=360x636.24.0&media_id=4755946099114157&tp=8x8A3El:YTkl0eM8&us=0&ori=1&bf=4&ot=v&ps=3lckmu&uid=3ZoTIp&ab=3915-g1,7397-g1,3601-g23,6447-g1,1192-g0,1046-g2,1258-g0&Expires=1649499984&ssig=KeR8EpV2nB&KID=unistore,video',
  },
  {
    id: 3,
    index: 3,
    title: 'third',
    url: 'https://f.video.weibocdn.com/o0/QuirbFtelx07V70Bun1e010412008CXB0E010.mp4?label=mp4_ld&template=360x636.24.0&media_id=4755946099114157&tp=8x8A3El:YTkl0eM8&us=0&ori=1&bf=4&ot=v&ps=3lckmu&uid=3ZoTIp&ab=3915-g1,7397-g1,3601-g23,6447-g1,1192-g0,1046-g2,1258-g0&Expires=1649499984&ssig=KeR8EpV2nB&KID=unistore,video',
  },
];
