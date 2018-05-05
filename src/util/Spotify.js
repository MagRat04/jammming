const apiKey = '28adf6a9ddc44165bef6d067ef9ec4dc';
const apiSecret = '4b19f5c73be1430dbd444346198abc82';

const userAccessToken = '';

const Spotify = {
    getAccessToken() {
        const url = window.location.href;
        const token = url.match(/access_token=([^&]*)/);
        const time = url.match(/expires_in=([^&]*)/);
        if(!this.userAccessToken === '') {
            return userAccessToken;
        } else if(!token && time === '') {
           
        }
    }
}

export default Spotify; 