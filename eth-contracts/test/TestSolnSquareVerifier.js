// Test if a new solution can be added for contract - SolnSquareVerifier

// Test if an ERC721 token can be minted for contract - SolnSquareVerifier

var SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
var Verifier = artifacts.require('Verifier');
const proof = require('./proof.json');

contract('', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    const index_1 = 1;
    const index_2 = 2;

    describe('SolnSquareVerifer Test',  function () {
        beforeEach(async function () {
            let verifier = await Verifier.new({from: account_one});
            this.contract = await SolnSquareVerifier.new(verifier.address, {from: account_one});
        })

        it('if a new solution can be added for contract - SolnSquareVerifier', async function () {


          let status1 = false;

          try {
             status1 = await this.contract.addSolution.call(1, account_two, {from: account_one});
          }
          catch(e) {
            console.log(e);
          }

          assert.equal(status1, true, "New solution could not be added");
        })

        it('if an ERC721 token can be minted for contract - SolnSquareVerifier', async function () {
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

            assert.equal(status, true, "The solution exist and minted");
        })


    });

})
