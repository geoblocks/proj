# Geoblocks projections

## Publish a new version to npm

```bash
rm -rf dist
npm ci
npm run build
npm test
```

then:
```bash
npm version patch
npm publish
git push --tags origin master
```
