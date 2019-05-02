var ERC721MintableComplete = artifacts.require('MyContract');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    describe('match erc721 spec', function () {
        beforeEach(async function () {
            this.contract = await ERC721MintableComplete.new({from: account_one});

            // TODO: mint multiple tokens
            await  this.contract.mint(accounts[3], 3 );
            await  this.contract.mint(accounts[4], 4 );
            await  this.contract.mint(accounts[5], 5 );
        })

        it('should return total supply', async function () {
          let total_supply = await this.contract.totalSupply();
          //console.log(total_supply);
          assert.equal(total_supply, 3, "Total supply not correct");
        })

        it('should get token balance', async function () {
          let token_balance = await this.contract.balanceOf(accounts[3]);
        //  console.log("TOKEN BALANCE", token_balance);
          assert.equal(token_balance, 1, "Balance not correct");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () {
          let token_URI = await this.contract.tokenURI(3);
        //  console.log("token_URI", token_URI);
          assert.equal(token_URI, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/3", "Incorrect URI");
        })

        it('should transfer token from one owner to another', async function () {
            await this.contract.transferFrom(accounts[4], accounts[5], 4, {from: accounts[4]});

            let from_token_balance = await this.contract.balanceOf(accounts[4]);
            let to_token_balance = await this.contract.balanceOf(accounts[5]);

        //    console.log(from_token_balance, to_token_balance);

            assert.equal(from_token_balance, 0 );

        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () {
            this.contract = await ERC721MintableComplete.new({from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () {
          let status = true;
          try{
             status = await  this.contract.mint.call(accounts[3], 3, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/", {from: accounts[2]});
          }
          catch(e) {
            status = false;
            //console.log(e)
          }

          assert.equal(status, false, "Cannot mint when not contract owner");



        })

        it('should return contract owner', async function () {
          let contract_owner = await this.contract.getOwner.call({from: accounts[0]});
          assert.equal(contract_owner, accounts[0], "Wrong contract owner");
        })

    });
})
