/// <reference path="../../typings/externals.d.ts" />

export import mocha = require('../../test/mocha');
var expect = mocha.chai.expect;
var spy = mocha.sinon.spy;
var mock = mocha.mock;
var rcsdk = mocha.rcsdk;

import abstractClient = require('./AbstractClient');

describe('RCSDK.client.Client', function() {

    'use strict';

    var client = rcsdk.getClient();

    describe('account', function() {

        it('provides Account client', function() {

            expect(client.account('~').getResourceUrl()).to.equal('/account/~');

        });

    });

    describe('dictionary', function() {

        it('provides Dictionary client', function() {

            expect(client.dictionary().getResourceUrl()).to.equal('/dictionary');

        });

    });

});
