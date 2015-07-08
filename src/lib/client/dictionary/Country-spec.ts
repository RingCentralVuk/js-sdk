/// <reference path="../../../typings/externals.d.ts" />

export import mocha = require('../../../test/mocha');
var expect = mocha.chai.expect;
var spy = mocha.sinon.spy;
var mock = mocha.mock;
var rcsdk = mocha.rcsdk;

describe('RCSDK.client.dictionary.Country', function() {

    'use strict';

    var client = rcsdk.getClient();

    describe('getResourceUrl', function() {

        it('returns resource URL based on conditions', function() {

            expect(client.dictionary().country().getResourceUrl()).to.equal('/dictionary/country');

        });

    });

});
