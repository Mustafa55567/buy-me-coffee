// SPDX-License-Identifier: UNLICENSED
 pragma solidity ^0.8.9;

contract BuyMeACoffee {

    event NewMemo(
     address indexed from,
        uint256 timestamp,
        string name,
        string message

    );
    
    struct Memo {
        address from;
        uint256 timestamp;
        string name;
        string message;
    }

 // List of all memos received and stored in this array
   Memo[] memos;

    address payable owner;

    constructor () {
        owner = payable(msg.sender);
    }

function buyCoffee(string memory _name, string memory _message) public payable  {  // Imagine transfer ownership function
    require(msg.value>0 , "Can't Buy");

    memos.push(Memo(
        msg.sender,
        block.timestamp,
        _name,
        _message
    ));

    emit NewMemo(msg.sender, block.timestamp, _name, _message);
} 

function withdrawTips() public {
    require(owner.send(address(this).balance));
    // address(this).balance means all the money store in this contracts deployed address
}

function getMemos() public view returns(Memo[] memory)  {
    return memos;
}
   
}

// 0x12CC020314cA0d2218c33721C437C7BaFeF5CdA6
