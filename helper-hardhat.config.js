const { ethers } = require("hardhat")

const networkConfig = {
    31337: {
        name: "localhost",
    },
}

const developmentChains = ["hardhat", "localhost"]
const INITIAL_SUPPLY = "1000000000000000000000000"

module.exports = {
    networkConfig,
    developmentChains,
    INITIAL_SUPPLY,
}