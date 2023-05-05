export const getLocation = async () => {
    console.log("API Key:", process.env.APIKEY_OPENWEATHER);
    return process.env.APIKEY_OPENWEATHER;
}