Nodejs literal templating for node native require module.

# Usage

`npm i literal-require --save`

`require('literal-require')`

Add namespace to your application `package.json`

```json
{
  ...
  
  -> "namespace": {
    "@application": "${ process.cwd() }/application"
  }
}
```

Then use your require as follows

`require('@application/config.json')`
