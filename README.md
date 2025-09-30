## Instructions

### Publish a new version

```
# update version numbers for each package in /packages via their `package.json` file

# pick patch
pnpm changeset

# applies version bumps
pnpm changeset version

# update lockfile
pnpm install

# add env var NODE_AUTH_TOKEN in a .env

# set env variables using a .env file
. .\load-env.ps1

# release a new version
pnpm release

# push tags to remote
git push origin --tags
```
