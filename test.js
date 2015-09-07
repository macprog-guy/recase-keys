/**

recase-keys

Unit tests for the src/lib/recase-keys.

*/

chai   = require('chai')
recase = require('.')
should = chai.should()

describe('recase-keys', function(){

	// ------------------------------------------------------------------------
	// Camel Case
	// ------------------------------------------------------------------------

	it('should return an object with camel case keys including nested objects', function(done){

		value = recase.toCamel([{a_b:1, b_c:2, c_d:{d_e:[{e_f:4}]}}])
		value.should.eql([{aB:1, bC:2, cD:{dE:[{eF:4}]}}])
		done()
	})

	it('should return the value unchanged', function(done){

		value = recase.toCamel('hello_world')
		value.should.equal('hello_world')

		value = recase.toCamel(123)
		value.should.equal(123)

		d = new Date()
		value = recase.toCamel(d)
		value.should.equal(d)

		f = function(x){return x}
		value = recase.toCamel(f)
		value.should.equal(f)

		value = recase.toCamel(['a_b','b_c','c_d'])
		value.should.eql(['a_b','b_c','c_d'])

		done()
	})



	// ------------------------------------------------------------------------
	// Snake Case
	// ------------------------------------------------------------------------

	it('should return an object with snake case keys including nested objects', function(done){

		value = recase.toSnake([{aB:1, bC:2, cD:{dE:[{eF:4}]}}])
		value.should.eql([{a_b:1, b_c:2, c_d:{d_e:[{e_f:4}]}}])
		done()
	})

	it('should return the value unchanged', function(done){

		value = recase.toSnake('helloWorld')
		value.should.equal('helloWorld')

		value = recase.toSnake(123)
		value.should.equal(123)

		d = new Date()
		value = recase.toSnake(d)
		value.should.equal(d)

		f = function(x){return x}
		value = recase.toSnake(f)
		value.should.equal(f)

		value = recase.toSnake(['aB','bC','cD'])
		value.should.eql(['aB','bC','cD'])

		done()
	})
})