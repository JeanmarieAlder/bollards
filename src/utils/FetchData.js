import Config from "../Config";

export async function fetchDataApi(endpoint, setData) {
    let h = new Headers();
    h.append('Accept', 'application/json');
    var res = await fetch(`${Config.API_URL}/api/v1/${endpoint}`, {headers: h});
    var resJson = await res.json();
    setData(resJson);
};