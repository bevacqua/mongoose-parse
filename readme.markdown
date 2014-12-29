# mongoose-parse

> Parse `mongoose` errors for validation messages

## Install

```shell
npm install mongoose-parse --save
```

## Usage

```js
var parse = require('mongoose-parse');

new User({ email: 'ponyfoo@ad.ventures' }).save();
new User({ email: 'ponyfoo@ad.ventures' }).save(function saved (err) {
  console.log(parse(err));
});
```

Parsing the error with `mongoose-parse` will yield the following.

```json
{
  "code": 11000,
  "path": "email"
}
```

If a duplicate key error isn't detected, the original error object will be returned.

## License

MIT
