const apiSecret = '4b19f5c73be1430dbd444346198abc82';
const clientID = '28adf6a9ddc44165bef6d067ef9ec4dc';
const redirectURI = 'http://localhost:3000/';

const url = window.location.href;
let userAccessToken = url.match(/access_token=([^&]*)/);
let expiresIn = url.match(/expires_in=([^&]*)/);


const Spotify = {
    getAccessToken() {
        if(!this.userAccessToken === '') {
            console.log('already had a token: ' + userAccessToken);
            return userAccessToken
        } else if (!userAccessToken && expiresIn === '') {
            window.setTimeout(() => userAccessToken = null, expiresIn = 3600);
            window.history.pushState('Access Token', null, '/')
            console.log('just aquired a token' + userAccessToken);
            return userAccessToken
        } else {
            window.location = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
            console.log('going to get a token: ' + userAccessToken);
        }
    },
    search(term) {
        //this.getAccessToken();
        console.log('after search token' + userAccessToken);
        console.log('search term: ' + term)
        return fetch(`https://api.spotify.com/v1/search?type=track&limit=20&q=${term}`, {
            headers: { Authorization: `Bearer ${userAccessToken}` }
        }).then(response => {
            if(response.ok) {
                console.log(response.json);
                return response.json;
            }
            throw new Error('Request Failed!');
        }, networkError => console.log(networkError.message)
        ).then(jsonResponse => {
            if (jsonResponse.tracks) {
                return jsonResponse.tracks.items.map(track => ({
                    id: track.id,
                    title: track.name,
                    artist: track.artists[0].name,
                    album: track.album.name,
                    uri: track.uri
                }))
            } else {
                //return [];
            }
        })
    }

}

export default Spotify; 