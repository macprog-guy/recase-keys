# Introduction

Simple functions that recursively change the case of keys in plain objects. Practical when exposing camel-case names in an API with a snake-cased database backend. This module builds on the excellent [Case](http://github.com/nbubna/Case) to perform the actual case conversion. So any conversion supported by Case is supported by recase-keys.


# Installation

	$ npm install recase-keys

# Usage

```js

var recase = require('recase-keys')

console.log(
	recase.toCamel({
		hello_world: ['hello_world','FOO_BAR'],
		foo_bar: [{tic_tac_toe: 9}]
	})
)

// Outputs 
// {
// 	helloWorld: ['hello_world', 'FOO_BAR'],
//	fooBar: [{ticTacToe:9}]
// }

```

