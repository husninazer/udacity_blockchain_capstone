// Test if a new solution can be added for contract - SolnSquareVerifier

// Test if an ERC721 token can be minted for contract - SolnSquareVerifier

var SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
var Verifier = artifacts.require('Verifier');
const proof = require('../../zokrates/code/square/proof.json');

contract('', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    const index_1 = 1;
    const index_2 = 2;

    describe('SolnSquareVerifer Test', function () {
        beforeEach(async function () {
            let verifier = await Verifier.new({from: account_one});
            this.contract = await SolnSquareVerifier.new(verifier.address, "PLOT", "MSQ", {from: account_one});
        })

        it('Can be added for Cotnract', async function () {
          let status = true;
          try {
            let status = await this.contract.addSolution.call(1, account_one,{from: account_one});
          }
          catch(e) {
            console.log(e);
          }

            assert.equal(status, true, "Can be added");
        })

        it('Can be minted for Contract', async function () {
          let status = await this.contract.preMint.call
                              (
                                accounts[5],
                                5,
                                proof.proof.A,
                                proof.proof.A_p,
                                proof.proof.B,
                                proof.proof.B_p,
                                proof.proof.C,
                                proof.proof.C_p,
                                proof.proof.H,
                                proof.proof.K,
                                proof.input,
                                {from: accounts[0], gas: 3000000}
                              );

            assert.equal(status, true, "The solution already exist");
        })


    });

})
