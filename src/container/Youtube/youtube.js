import axios from 'axios';
const KEY = 'AIzaSyCY7NmgK_iHSmzwFgtD36J4_i9hQB3guCc';
// 'cee3834336mshbb595358edfde54p1ee5b2jsn34370e747efb';
//   'AIzaSyAL9jCDWvRD2G5nUgBrLEgEhZTQsRvzt80';

export const baseParams = {
  part: 'snippet',
  maxResults: 8,
  key: KEY
};

export default axios.create({
  baseURL:
    // 'https://getvideo.p.rapidapi.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DnfWlot6h_JM'
    'https://www.googleapis.com/youtube/v3'
});
