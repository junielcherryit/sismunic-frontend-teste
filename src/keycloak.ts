import Keycloak from "keycloak-js";

// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'
const keycloak = Keycloak({
  url: "https://staging.sso.mj.gov.br/auth",
  //   url: "http://localhost:8080/auth",
  realm: "MJ",
  clientId: "sismunic-frontend",
});

export default keycloak;
