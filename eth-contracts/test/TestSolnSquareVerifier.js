// Test if a new solution can be added for contract - SolnSquareVerifier

// Test if an ERC721 token can be minted for contract - SolnSquareVerifier

var SolnSquareVerifier = artifacts.require('SolnSquareVerifier');

contract('', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    const index_1 = 1;
    const index_2 = 2;

    describe('match erc721 spec', function () {
        beforeEach(async function () {
            this.contract = await SolnSquareVerifier.new({from: account_one});
        })

        it('Can be added for Cotnract', async function () {
            await this.contract.addSolution(1, account_one);
        })

        it('Can be minted for Contract', async function () {

        })


    });

})
