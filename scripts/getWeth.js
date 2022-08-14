const { getNamedAccounts, ethers, network } = require("hardhat")

const { tokenAddresses } = require("../helper-hardhat-config")

const AMOUNT = ethers.utils.parseEther("0.02")

async function getWeth() {
    // get address
    const { deployer } = await getNamedAccounts()
    // call deposit function on weth contract.
    // need contract... to get contract you need abi and address
    // interface is just as good for getting the ABI.
    // add folder contracts>interfaces>
    // get IWeth.sol interface file from github repo for lesson 13
    // IWETH MAINNET: 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2
    // going to fork mainnet for this one.

    const iWeth = await ethers.getContractAt(
        "IWeth",
        tokenAddresses["weth"][network.name],
        deployer
    )
    const tx = await iWeth.deposit({ value: AMOUNT })
    await tx.wait(1)
    const wethBalance = await iWeth.balanceOf(deployer)
    console.log(`Got ${wethBalance.toString()} WETH`)
}

module.exports = { getWeth, AMOUNT }
