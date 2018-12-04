Nodejs literal templating for node native require module.

# Usage

`npm i literal-require --save`

`require('literal-require')`

Add namespace to be replaced from `package.json`

```json
{
  "name": "literal-require",
  "version": "1.0.0",
  "description": "A literal templating for Node require",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/przemyslawwalczak/literal-require.git"
  },
  "author": "Przemyslaw Walczak",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/przemyslawwalczak/literal-require/issues"
  },
  "homepage": "https://github.com/przemyslawwalczak/literal-require#readme",

  
  -> "namespace": {
    "@application": "${ process.cwd() }/application"
  }
}
```

Then use your require as follows

`require('@application/config.json')`
