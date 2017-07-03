var Foundation = artifacts.require("./Foundation.sol");

contract('Foundation', function(accounts) {

    it("should send coin correctly", function() {
        var foundation;

        var account_one = accounts[0];

        return Foundation.deployed().then(function(instance) {
            foundation = instance;
            return foundation.collect({from: account_one, value: 1});
        }).then(function() {
            return foundation.balanceOf.call(account_one);
        }).then(function(balance) {
            assert.equal(balance.toNumber(), 1000, "");
        });
    });

    it("should approve foundation to send token", function() {
        var foundation;
        var account_one = accounts[0];
        var account_two = accounts[1];

        return Foundation.new().then(function(instance) {
            foundation = instance;
            return foundation.collect({from: account_one, value: 1});
        }).then(function() {
            return foundation.approveFoundation(1000, {from: account_one});
        }).then(function() {
            return foundation.transferByFoundation(account_one, account_two, 100);
        }).then(function() {
            return foundation.balanceOf.call(account_one);
        }).then(function(balance) {
            assert.equal(balance.toNumber(), 900, "");
            return foundation.balanceOf.call(account_two);
        }).then(function(balance) {
            assert.equal(balance.toNumber(), 100, "");
        });
    });

    it("should withdraw coin back with token", function() {
        var foundation;
        var account_one = accounts[0];
        var account_two = accounts[1];

       return Foundation.new().then(function(instance) {
            foundation = instance;
            return foundation.collect({from: account_one, value: 100});
        }).then(function() {
            return foundation.approveFoundation(10000, {from: account_one});
        }).then(function() {
            return foundation.transferByFoundation(account_one, account_two, 10000);
        }).then(function() {
            return foundation.withdraw({from: account_two});
        }).then(function() {
            return foundation.getFoundationBalance.call(account_two);
        }).then(function(balance) {
            assert.equal(balance.toNumber(), 91, "");
        });
    });
});
