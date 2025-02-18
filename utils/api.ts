import axios from "axios";

export const DownloadTrack = (videoId: string) => {
  return axios.post(`/api/download-track`, {
    videoId,
  });
};
