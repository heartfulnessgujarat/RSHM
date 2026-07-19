/**
 * Calls the RSHM Backend API.
 */
async function callApi() {

    console.log("Calling RSHM Backend...");

    try {

        const response = await fetch(CONFIG.API_URL);

        const text = await response.text();

        console.log(text);

    }
    catch (error) {

        console.error(error);

    }

}
