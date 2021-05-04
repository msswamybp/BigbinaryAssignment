
import ApiConstants from "./ApiConstants";

export default function api(path, params, method, token, props) {
    let options;
    let headerVal = new Headers({
        "Content-Type": "application/json",
        "token": token
    });

    let headerValAuthenticate = new Headers({
        "Content-Type": "application/json"
    });

    options = Object.assign(
        { headers: token ? headerVal : headerValAuthenticate },
        //  { headers: headerValAuthenticate },
        { method: method },
        params
            ? {
                body: JSON.stringify(params)
            }
            : null
    );

  

    return fetch(path, options)
        .then(resp => resp.json())
        .then(json => {

            if (
                json

            ) {
                return json;
            }

        })
        .catch(error => {
            if (
                error !== null &&
                error.toString() === "TypeError: Network request failed"
            ) {

            }
            return error;
        });
}
