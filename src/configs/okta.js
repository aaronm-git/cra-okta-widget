const useEnv = false;

const oktaConfig = {
	issuer: useEnv ? process.env.REACT_APP_OKTA_ISSUER : 'https://trial-3753940.okta.com/oauth2/default',
	clientId: useEnv ? process.env.REACT_APP_OKTA_CLIENT_ID : '0oa497jqr3yg2Vpyi697',
	redirectUri: useEnv ? process.env.REACT_APP_OKTA_REDIRECT_URI : 'http://localhost:3000/login/callback',
	scopes: ['openid', 'profile', 'email'],
};

export default oktaConfig;
