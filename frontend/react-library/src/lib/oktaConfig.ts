export const oktaConfig = {
  clientId: "0oag1c4z5lgDrPpIp5d7",
  issuer: "https://dev-91945220.okta.com/oauth2/default",
  redirectUri: "http://localhost:3000/login/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: true,
};
