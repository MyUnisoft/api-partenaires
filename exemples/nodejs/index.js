// Import internal dependencies
import { GET, POST } from "./helpers/request.js";

// CONSTANTS
const kUserToken = process.env.user_token;
const kThirdPartySecret = process.env.x_third_party_secret;

async function createAPIToken() {
    if (typeof process.env.api_token === "string") {
        return process.env.api_token;
    }

    const { grantedFor } = await POST("key/granted-for", {
        token: kUserToken,
        payload: { secret: kThirdPartySecret }
    });
    
    const { value: APIToken } = await POST("key/create", {
        token: kUserToken,
        payload: {
            grantedFor,
            target: process.env.society_id
        }
    });

    return APIToken;
}

const APIToken = await createAPIToken();
console.log({ APIToken });

const VATParams = await GET("vat_param", {
    token: APIToken,
    headers: {
        "X-Third-Party-Secret": kThirdPartySecret
    }
});
console.log(VATParams);
