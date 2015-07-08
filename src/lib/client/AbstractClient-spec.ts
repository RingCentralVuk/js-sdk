/// <reference path="../../typings/externals.d.ts" />

export import mocha = require('../../test/mocha');
var expect = mocha.chai.expect;
var spy = mocha.sinon.spy;
var mock = mocha.mock;
var rcsdk = mocha.rcsdk;

describe('RCSDK.client.AbstractClient', function() {

    'use strict';

    var client = rcsdk.getClient();

    mock.registerHooks(this);

    describe('extendOptionsWithQuery', function() {

        it('extends Options with Query', function() {

            expect(client.extendOptionsWithQuery({
                query: {
                    foo: 'foo',
                    baz: 'baz'
                }
            }, {
                bar: 'bar',
                baz: 'baz2'
            })).to.deep.equal({
                    query: {
                        foo: 'foo',
                        bar: 'bar',
                        baz: 'baz2'
                    }
                });

        });

    });

    describe('getResourceUrl', function() {

        it('provides URL based on conditions', function() {

            expect(client.getResourceUrl()).to.equal('');
            expect(client.getResourceUrl('bar')).to.equal('/bar');
            expect(client.getResourceUrl(['bar'])).to.equal('/bar');
            expect(client.getResourceUrl(['bar', 'baz'])).to.equal('/bar,baz');

        });

    });

    describe('get', function() {

        it('makes a GET request', function(done) {

            rcsdk.getXhrResponse().add({
                path: '/restapi/v1.0',
                /**
                 * @param {XhrMock} transport
                 * @returns {Object}
                 */
                response: (transport) => { return {foo: 'bar'}; }
            });

            client.get().then((res)=> {
                expect(res.json).to.deep.equal({foo: 'bar'});
                done();
            }).catch(done);

        });

        it('makes a GET request with query params', function(done) {

            rcsdk.getXhrResponse().add({
                path: '/restapi/v1.0?baz=qux&foo=bar',
                /**
                 * @param {XhrMock} transport
                 * @returns {Object}
                 */
                response: (transport) => { return {foo: 'bar'}; }
            });

            client.get({foo: 'bar'}, {query: {baz: 'qux'}}).then((res)=> {
                expect(res.json).to.deep.equal({foo: 'bar'});
                done();
            }).catch(done);

        });

    });

});
