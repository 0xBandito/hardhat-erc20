const assert = require("assert");
const { ethers, getNamedAccounts, deployments, network } = require("hardhat");
const { INITIAL_SUPPLY } = require("../../helper-hardhat.config");

describe("MacToken Unit Test",() => {
    let macToken, deployer

    beforeEach(async () => {
        const accounts = await getNamedAccounts()
        deployer = accounts.deployer;
        await deployments.fixture("all")
        macToken = await ethers.getContract("MacToken", deployer)
    })

    it("token was deployed", async () => {
        assert(macToken.address);
    })

    describe("constructor", () => {
        it("should have correct initial suppy", async () => {
            const tokenSupply = await macToken.totalSupply();
            assert.equal(tokenSupply.toString(), INITIAL_SUPPLY)
        })
        it("initializes the token with the correct name and symbol ", async () => {
            const name = await macToken.name()
            const symbol = await macToken.symbol()
            assert.equal(name, "MACON")
            assert.equal(symbol, "MAC")
        })
    })
})