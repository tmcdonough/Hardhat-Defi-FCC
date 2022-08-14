const { ethers } = require("hardhat")

const developmentChains = ["hardhat", "localhost"]

const tokenAddresses = {
    weth: {
        hardhat: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        kovan: "0xd0A1E359811322d97991E03f863a0C30C2cF029C",
        rinkeby: "0xc778417E063141139Fce010982780140Aa0cD5Ab",
    },
    dai: {
        hardhat: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        kovan: "0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa",
        rinkeby: "0x4aAded56bd7c69861E8654719195fCA9C670EB45",
    },
}

const priceFeedAddresses = {
    daiEth: {
        hardhat: "0x773616E4d11A78F511299002da57A0a94577F1f4",
        kovan: "0x22B58f1EbEDfCA50feF632bD73368b2FdA96D541",
    },
}

const lendingPoolProviderAddresses = {
    hardhat: "0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5",
    kovan: "0x88757f2f99175387aB4C6a4b3067c77A695b0349",
}

module.exports = {
    developmentChains,
    tokenAddresses,
    priceFeedAddresses,
    lendingPoolProviderAddresses,
}
