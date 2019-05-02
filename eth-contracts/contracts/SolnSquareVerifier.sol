pragma solidity >=0.4.21 <0.6.0;


import './verifier.sol';
import './ERC721Mintable.sol';


// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>

//Interface
 contract Verfier {
   function verifyTx(
           uint[2] memory a,
           uint[2] memory a_p,
           uint[2][2] memory b,
           uint[2] memory b_p,
           uint[2] memory c,
           uint[2] memory c_p,
           uint[2] memory h,
           uint[2] memory k,
           uint[2] memory input
       ) public returns (bool r) ;
 }

// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class

contract SolnSquareVerifier is MyContract {

    Verifier verifier;

    constructor
                (
                  address verifierAddress
                )
                MyContract()
                public
    {
        verifier = Verifier(verifierAddress);
    }

    // TODO define a solutions struct that can hold an index & an address

    struct solutions {
      uint256 index;
      address solutionsAddress;
    }

    // TODO define an array of the above struct
    solutions[] solutionsList;

    // TODO define a mapping to store unique solutions submitted
    mapping(bytes32 => solutions) private solutionsMap;


    // TODO Create an event to emit when a solution is added
    event SolutionAdded(address);


    // TODO Create a function to add the solutions to the array and emit the event
    function addSolution
                      (
                        uint256 _index,
                        address _solutionAddress
                      )
                      public
                      returns (bool)
    {
      solutions memory solution = solutions({
        index: _index,
        solutionsAddress: _solutionAddress
      });
      solutionsList.push(solution);
      emit SolutionAdded(_solutionAddress);
      return true;
    }


    // TODO Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSuplly

    function preMint
                  (
                    address to,
                    uint256 tokenId,
                    uint[2] memory a,
                    uint[2] memory a_p,
                    uint[2][2] memory b,
                    uint[2] memory b_p,
                    uint[2] memory c,
                    uint[2] memory c_p,
                    uint[2] memory h,
                    uint[2] memory k,
                    uint[2] memory input
                  )
                  public
                  returns (bool)
      {
          bool status = verifier.verifyTx
                                          (
                                            a,
                                            a_p,
                                            b,
                                            b_p,
                                            c,
                                            c_p,
                                            h,
                                            k,
                                            input
                                          );

          // Require solution is true
          require(status, "Solution not true");

          // Require unique
          require(solutionsMap[keccak256(abi.encodePacked(  a, a_p, b, b_p, c, c_p, h, k, input))].solutionsAddress == address(0), "Solution already exists" );

          return mint(to, tokenId);
      }
}
