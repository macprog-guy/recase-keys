/*

recase-keys

Recursively changes the case of keys in plain objects.

*/

'use strict'

var Case = require('case')

// ----------------------------------------------------------------------------
// Utils
// ----------------------------------------------------------------------------

function isObject(value) {
	return !!value && typeof value === 'object'
}

function isDate(value) {
	return isObject(value) && Object.prototype.toString.call(value) === '[object Date]'
}

function isFunction(value) {
	return typeof value === 'function'
}


// ----------------------------------------------------------------------------
// recase-keys
// ----------------------------------------------------------------------------

module.exports = {

	to: function(kase, value) {
		let recase  = Case[kase] || (function(k){ return k }),
		    recurse = function(o) {
			if (Array.isArray(o))
				return o.map(recurse)
			else if (isObject(o) && !isDate(o) && !isFunction(o)) {
				let r = {}
				for (let k in o){ r[recase(k)] = recurse(o[k]) }
				return r
			}
			else
				return o
		}
		return recurse(value)
	},

	toCamel: function(value) { return module.exports.to('camel',value) },
	toSnake: function(value) { return module.exports.to('snake',value) },
	toConst: function(value) { return module.exports.to('constant',value) }
}
