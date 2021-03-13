// Import third-party dependencies
import undici from "undici";

// CONSTANTS
const kRootURL = "https://yoda.myunisoft.fr:1367/api/v1/";

async function parseRequestBody(body) {
    const response = [];
    for await (const data of body) {
        response.push(data);
    }

    return JSON.parse(
        Buffer.concat(response).toString("utf-8")
    );
}

export async function request(path, options) {
    const { payload = null, headers = {}, method = "GET", token = null } = options;
    const extendedHeaders = token === null ?
        headers :
        Object.assign(headers, { Authorization: `Bearer ${token}` });
    if (payload !== null) {
        headers["content-type"]  = "application/json";
    }

    const { body, statusCode } = await undici.request(new URL(path, kRootURL), {
        method,
        headers: extendedHeaders,
        body: payload === null ? void 0 : JSON.stringify(payload)
    });

    const response = await parseRequestBody(body);
    if (statusCode >= 400) {
        if (response.error) {
            throw new Error(`${response.error.code} - ${response.error.message}`);
        }
        if (response.code) {
            throw new Error(`${response.code} - ${response.message}`);
        }

        throw new Error(String(response));
    }

    return response;
}

export const GET = (path, options = {}) => request(path, { method: "GET", ...options });
export const POST = (path, options = {}) => request(path, { method: "POST", ...options });
export const PUT = (path, options = {}) => request(path, { method: "PUT", ...options });
