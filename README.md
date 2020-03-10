# Drona Site
Powered by worldflow.ie
### Running locally
```
npm install

npm start
```

### Test a production build locally
```
npm run dist
```

Site will be served locally from `localhost:3000`

Note SITE_ROOT is set with an env variable made available by Netlify, need to set this if deploying somewhere else.
Also will need to set SITE_RECAPTCHA_KEY for recaptcha to work.
