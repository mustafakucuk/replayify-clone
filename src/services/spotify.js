import SpotifyWebApi from "spotify-web-api-js";
const spotifyApi = new SpotifyWebApi();

if (localStorage.getItem("access_token")) {
  spotifyApi.setAccessToken(localStorage.getItem("access_token"));
}

export const getMe = () => {
  return spotifyApi.getMe();
};

export const createPlaylist = (options) => {
  return getMe().then((res) => {
    return spotifyApi.createPlaylist(res.id, options);
  });
};

export const getMyRecentlyPlayedTracks = () => {
  return spotifyApi.getMyRecentlyPlayedTracks();
};

export const getUserPlaylists = () => {
  return spotifyApi.getUserPlaylists();
};

export const getMyTopTracks = (time) => {
  return spotifyApi.getMyTopTracks({
    time_range: time,
  });
};

export const getMyTopArtists = (time) => {
  return spotifyApi.getMyTopArtists({
    time_range: time,
  });
};

export const getMyCurrentPlayingTrack = () => {
  return spotifyApi.getMyCurrentPlayingTrack();
};

export const pause = () => {
  return spotifyApi.pause();
};

export const play = () => {
  return spotifyApi.play();
};

export const skipToPrevious = () => {
  return spotifyApi.skipToPrevious();
};

export const skipToNext = () => {
  return spotifyApi.skipToNext();
};
