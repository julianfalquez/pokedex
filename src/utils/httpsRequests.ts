interface fetchParams {
    url: string;
    data?: object
}

const getData = async ({ url = '' }: fetchParams) => {
    const response = await fetch(url);
    errorCheck(response.ok, response.status)
    const json = await response.json();
    return json
}

async function postData({ url = '', data = {} }: fetchParams) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    errorCheck(response.ok, response.status)
    return response.json(); // parses JSON response into native JavaScript objects
}

const errorCheck = (ok: boolean, status: number) => {
    if (!ok) {
        const message = `An error has occured: ${status}`;
        throw new Error(message);
    }
}

export { getData, postData }