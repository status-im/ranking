const Controlled = require('Embark/contracts/Ranking');

let accounts;

config({
  contracts: {
    "Ranking": {
    }
  }
}, (_err, web3_accounts) => {
  accounts = web3_accounts;
});

describe("Controlled", function() {
    this.timeout(0);
    
    it("should start with msg.sender as controller", async function() {
        var controller = await Controlled.methods.controller().call();
        assert(controller, accounts[0]);
    });

    it("should allow controller to set new controller", async function() {
        await Controlled.methods.changeController(accounts[1]).send({from: accounts[0]});
        var controller = await Controlled.methods.controller().call();
        assert(controller, accounts[1]);
    });
    
    it("should set back to original controller", async function() {
        await Controlled.methods.changeController(accounts[0]).send({from: accounts[1]});
        var controller = await Controlled.methods.controller().call();
        assert(controller, accounts[0]);
    });
}); 