### Nodejs literal templating for node native require module.

### Usage

```
npm i literal-require --save
```

```js
require('literal-require')
```


### Add namespace to your application `package.json`

```json
{
  ...

  -> "namespace": {
    "@application": "${ process.cwd() }/application"
  }
}
```


### Then use in your require's as follows

`require('@application/config.json')`

`require('@application/example-module')`


### require('path').literal('@application')

#### Will resolve the path with pre-evaluated literal key/value.
