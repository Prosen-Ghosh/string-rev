# string-rev
Reverse a string

![npm](https://img.shields.io/npm/v/string-rev.svg) ![license](https://img.shields.io/npm/l/string-rev.svg) ![github-issues](https://img.shields.io/github/issues/Prosen-Ghosh/string-rev.svg)  


![travis-status](https://img.shields.io/travis/Prosen-Ghosh/string-rev.svg)
![stars](https://img.shields.io/github/stars/Prosen-Ghosh/string-rev.svg)
![forks](https://img.shields.io/github/forks/Prosen-Ghosh/string-rev.svg)
## Features


## Install

`npm install --save string-rev`

## Usage

```js
const sReverse = require('string-rev');

sReverse('123');
//=>'321'

sReverse('abcdef');
//=> 'fedcba'

sReverse('madam');
//=> 'madam'

sReverse(); // without parametr this function will throw a type error.
//=> TypeError: expects a string got undefined

```

## Author

Prosen Ghosh <prosenghosh25@gmail.com>

## License

 - **MIT**