"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1704], {
        70524: function(e, t, a) {
            let n;
            a.d(t, {
                stakeConfig: function() {
                    return n
                }
            });
            var s = JSON.parse('{"mainnetEthereum":{"eigenPodManagerAddress":"0x91E677b07F7AF907ec9a428aafA9fc14a0d3A338","strategyManagerAddress":"0x858646372CC42E1A627fcE94aa7A7033e7CF075A","delayedWithdrawalRouterAddress":"0x7Fe7E9CC0F274d2435AD5d56D5fa73E47F6A23D8","delegationManagerAddress":"0x39053D51B77DC0d36036Fc1fCc8Cb819df8Ef37A","eigendaServiceManagerAddress":"0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0","stakingTokenList":[{"name":"EIGEN","symbol":"EIGEN","decimals":18,"apiID":null,"group":"EIGEN","rebasing":false,"address":"0xec53bf9167f50cdeb3ae105f56099aaab9061f83","strategyAddress":"0xaCB55C530Acdb2849e6d4f36992Cd8c9D50ED8F7","usedForPoints":false,"about":"EIGEN is the universal intersubjective work token that significantly expands the types of credible commitments that any staker can make with cryptoeconomic security. This massively expands the surface area of digital tasks that can be secured on Ethereum beyond just tasks of type \\"objectively attributable\\" that was offered by simple restaking. Now, oracles, DA, off-chain VM such as AI or gaming engines, censorship-resistance module, etc., can be secured via EIGEN. The intersubjective nature of EIGEN enables raising challenges against malicious EIGEN stakers/operators that can trigger intersubjective forking of the token. Please see the whitepaper for detailed overview of the risks associated with such intersubjective forking."},{"name":"Rocket Pool Ether","symbol":"rETH","decimals":18,"apiID":"rocket-pool-eth","group":"lst","rebasing":false,"address":"0xae78736Cd615f374D3085123A210448E74Fc6393","strategyAddress":"0x1BeE69b7dFFfA4E2d53C2a2Df135C388AD25dCD2","usedForPoints":true,"about":"Rocket Pool is a decentralized staking pool protocol for Ethereum. The Rocket Pool ETH (rETH) token is a liquid staking token within the Rocket Pool protocol. The rETH token represents an amount of ETH that is being staked and rewarded within the Ethereum Proof-of-Stake consensus mechanism. When rewards are earned, the amount due to each token increases. rETH had 2224 node operators running 6 validators each on average, as of Q1 2023. To restake rETH, deposit the tokens in the EigenLayer contract.","twitter":"https://twitter.com/rocket_pool","website":"https://rocketpool.net"},{"name":"Lido Staked Ether","symbol":"stETH","decimals":18,"apiID":"staked-ether","group":"lst","rebasing":true,"address":"0xae7ab96520de3a18e5e111b5eaab095312d7fe84","strategyAddress":"0x93c4b944D05dfe6df7645A86cd2206016c51564D","usedForPoints":true,"about":"stETH is a token that represents staked Ether in the Lido staking pool protocol. stETH tokens are issued 1:1 to staked Ether. When token rewards are earned from the Ethereum Proof-of-Stake consensus mechanism, stETH token balances increase for each holder. stETH had 30 node operators running 5885 validators each on average, as of Q1 2023. To restake stETH, deposit the tokens in the EigenLayer contract.","twitter":"https://twitter.com/LidoFinance","website":"https://lido.fi/"},{"name":"Coinbase Staked Ether","symbol":"cbETH","decimals":18,"apiID":"coinbase-wrapped-staked-eth","group":"lst","rebasing":false,"address":"0xBe9895146f7AF43049ca1c1AE358B0541Ea49704","strategyAddress":"0x54945180dB7943c0ed0FEE7EdaB2Bd24620256bc","usedForPoints":true,"about":"Coinbase Wrapped Staked ETH (cbETH) is an ERC20 utility token, which is a liquid representation of their staked ETH on Coinbase. The number of cbETH units you receive upon wrapping is based on the ETH to cbETH conversion rate. The conversion rate will change over time as rewards are earned on the underlying staked ETH. To restake cbETH, deposit the tokens in the EigenLayer contract.","twitter":"https://twitter.com/coinbase","website":"https://www.coinbase.com/cbeth"},{"name":"StakeWise Staked Ether","symbol":"osETH","decimals":18,"apiID":"stakewise-v3-oseth","group":"lst","rebasing":false,"address":"0xf1C9acDc66974dFB6dEcB12aA385b9cD01190E38","strategyAddress":"0x57ba429517c3473B6d34CA9aCd56c0e735b94c02","usedForPoints":true,"about":"osETH is the slashing-protected liquid staking token representing capital staked on StakeWise, a staking marketplace that allows anyone to stake on their own terms. The osETH conversion rate changes over time based on the underlying staked ETH rewards and penalties. To restake osETH, deposit the tokens in the EigenLayer contract.","twitter":"https://twitter.com/stakewise_io","website":"https://stakewise.io"},{"name":"Swell Staked Ether","symbol":"swETH","decimals":18,"apiID":"sweth","group":"lst","rebasing":false,"address":"0xf951e335afb289353dc249e82926178eac7ded78","strategyAddress":"0x0Fe4F44beE93503346A3Ac9EE5A26b130a5796d6","usedForPoints":true,"about":"Swell Ether (swETH) is an Ethereum liquid staking token (LST) by Swell protocol. It represents ETH staked on Ethereum, with the underlying ETH being verified by Chainlink Proof of Reserves. swETH is a repricing token that appreciates over time as staking rewards are earned.","twitter":"https://twitter.com/swellnetworkio","website":"https://swellnetwork.io"},{"name":"Origin Staked Ether","symbol":"oETH","decimals":18,"apiID":"origin-ether","group":"lst","rebasing":true,"address":"0x856c4Efb76C1D1AE02e20CEB03A2A6a08b0b8dC3","strategyAddress":"0xa4C637e0F704745D182e4D38cAb7E7485321d059","usedForPoints":true,"about":"Origin Ether (OETH) is a liquid staking yield aggregator on Ethereum. OETH combines the yield-generating functions of the largest LSTs into one single token. OETH is permissionless, fully collateralized, self-custodial, passive, and fully transparent. There are no lock-ups or conditions required to earn yield, yield is distributed daily and automatically directly into users\' wallets. To restake OETH, deposit the tokens in the EigenLayer contract.","twitter":"https://twitter.com/originprotocol","website":"https://oeth.com"},{"name":"Binance Staked Ether","symbol":"wBETH","decimals":18,"apiID":"wrapped-beacon-eth","group":"lst","rebasing":false,"address":"0xa2e3356610840701bdf5611a53974510ae27e2e1","strategyAddress":"0x7CA911E83dabf90C90dD3De5411a10F1A6112184","usedForPoints":true,"about":"Wrapped Beacon ETH (WBETH) is a value-accruing liquid staking token, where 1 WBETH represents 1 staked ETH, along with the staking rewards accrued on ETH Staking. You can use WBETH to interact with products on Binance and DeFi protocols, while still receiving the corresponding ETH Staking rewards accrued. You can stake ETH to WBETH or redeem your WBETH to ETH on the Binance ETH Staking page at zero fees.","twitter":"https://twitter.com/binance","website":"https://www.binance.com/en/ethereum-staking"},{"name":"Ankr Staked Ether","symbol":"ankrETH","decimals":18,"apiID":"ankreth","group":"lst","rebasing":false,"address":"0xE95A203B1a91a908F9B9CE46459d101078c2c3cb","strategyAddress":"0x13760F50a9d7377e4F20CB8CF9e4c26586c658ff","usedForPoints":true,"about":"Ankr Staking is a pioneer in liquid staking, having launched the first ETH Liquid Staking Token (LST) in December 2020. The Ankr Staked ETH (ankrETH) token is a liquid staking token within Ankr Staking Protocol. The ankrETH token represents an amount of ETH that is being staked and rewarded within the Ethereum Proof-of-Stake consensus mechanism. When rewards are earned, the amount due to each token increases.","twitter":"https://twitter.com/ankr","website":"https://www.ankr.com/staking-crypto"},{"name":"Stader Staked Ether","symbol":"ETHx","decimals":18,"apiID":"stader-ethx","group":"lst","rebasing":false,"address":"0xA35b1B31Ce002FBF2058D22F30f95D405200A15b","strategyAddress":"0x9d7eD45EE2E8FC5482fa2428f15C971e6369011d","usedForPoints":true,"about":"Stader\'s ETHx is a liquid staking token on Ethereum, offering users the ability to earn staking rewards. The ETHx token represents an amount of ETH that is being staked and rewarded within the Ethereum Proof-of-Stake consensus mechanism. It employs a multi-pool architecture, dividing staked Ethereum between Permissionless and Permissioned node operator pools, ensuring scalability and decentralization.","twitter":"https://twitter.com/staderlabs_eth","website":"https://staderlabs.com/eth"},{"name":"Staked Frax Ether","symbol":"sfrxETH","decimals":18,"apiID":"staked-frax-ether","group":"lst","rebasing":false,"address":"0xac3E018457B222d93114458476f3E3416Abbe38F","strategyAddress":"0x8CA7A5d6f3acd3A7A8bC468a8CD0FB14B6BD28b6","usedForPoints":true,"about":"Frax Ether is a decentralized liquid staking derivative designed to uniquely leverage the Frax Finance ecosystem. It is issued and created by the Frax Protocol and has a unique two token system with all validator income going to sfrxETH token holders. The sfrxETH token slowly increases in price over time as a function of validator income of the protocol and is always redeemable for the underlying ETH that backs it.","twitter":"https://twitter.com/fraxfinance","website":"https://frax.finance"},{"name":"Liquid Staked Ether","symbol":"lsETH","decimals":18,"apiID":"liquid-staked-ethereum","group":"lst","rebasing":false,"address":"0x8c1bed5b9a0928467c9b1341da1d7bd5e10b6549","strategyAddress":"0xAe60d8180437b5C34bB956822ac2710972584473","usedForPoints":true,"about":"LsETH is the LST of Liquid Collective, a decentralized liquid staking protocol. Each LsETH token represents your ownership of staked ETH plus network and MEV rewards accrued. Supported across a broad ecosystem of leading platforms and custodians, LsETH features automatic reward restaking, enterprise-grade security, Node Operator performance agreements, and built-in slashing coverage.","twitter":"https://twitter.com/liquid_col","website":"https://liquidcollective.io"},{"name":"Mantle Staked Ether","symbol":"mETH","decimals":18,"apiID":"mantle-staked-ether","group":"lst","rebasing":false,"address":"0xd5F7838F5C461fefF7FE49ea5ebaF7728bB0ADfa","strategyAddress":"0x298aFB19A105D59E74658C4C334Ff360BadE6dd2","usedForPoints":true,"about":"Mantle LSP is a permissionless and non-custodial ETH liquid staking protocol deployed on Ethereum L1 and governed by Mantle. Mantle LSP combines simple and modern design with robust risk management, and leverages extensive Mantle Ecosystem resources to deliver a highly rewarding experience and supercharges Mantle’s status as a yield powerhouse. Mantle Staked Ether ($mETH) serves as the value-accumulating receipt token of Mantle LSP.","twitter":"https://twitter.com/0xMantle","website":"https://www.mantle.xyz/meth"}],"nativeToken":{"name":"Beacon Ether","symbol":"ETH","decimals":18,"apiID":"ethereum","group":"native","rebasing":false,"address":"0x0000000000000000000000000000000000000000","strategyAddress":"0xbeaC0eeEeeeeEEeEeEEEEeeEEeEeeeEeeEEBEaC0","usedForPoints":true,"about":"Staking Beacon Chain ETH is the act of depositing 32 ETH to activate Ethereum validator software. Validators are responsible for storing data, processing transactions, and adding new blocks to the blockchain. Validators receive a reward denominated in ETH for their active participation in the network. Currently, the Ethereum beacon chain boasts a diverse group of participants, including native stakers, liquid staking pools, centralized exchanges, and other operators. To restake Beacon Chain ETH, one can create their own EigenPod and update their validator withdrawal credentials to the EigenPod address."}},"testnetHolesky":{"eigenPodManagerAddress":"0x30770d7E3e71112d7A6b7259542D1f680a70e315","strategyManagerAddress":"0xdfB5f6CE42aAA7830E94ECFCcAd411beF4d4D5b6","delayedWithdrawalRouterAddress":"0x642c646053eaf2254f088e9019ACD73d9AE0FA32","delegationManagerAddress":"0xA44151489861Fe9e3055d95adC98FbD462B948e7","eigendaServiceManagerAddress":"0xD4A7E1Bd8015057293f0D0A557088c286942e84b","stakingTokenList":[{"name":"EIGEN","symbol":"EIGEN","decimals":18,"apiID":null,"group":"EIGEN","rebasing":false,"address":"0x3B78576F7D6837500bA3De27A60c7f594934027E","strategyAddress":"0x43252609bff8a13dFe5e057097f2f45A24387a84","usedForPoints":false,"about":"EIGEN is the universal intersubjective work token that significantly expands the types of credible commitments that any staker can make with cryptoeconomic security. This massively expands the surface area of digital tasks that can be secured on Ethereum beyond just tasks of type \\"objectively attributable\\" that was offered by simple restaking. Now, oracles, DA, off-chain VM such as AI or gaming engines, censorship-resistance module, etc., can be secured via EIGEN. The intersubjective nature of EIGEN enables raising challenges against malicious EIGEN stakers/operators that can trigger intersubjective forking of the token. Please see the whitepaper for detailed overview of the risks associated with such intersubjective forking."},{"name":"Rocket Pool Ether","symbol":"rETH","decimals":18,"apiID":"rocket-pool-eth","group":"lst","rebasing":false,"address":"0x7322c24752f79c05FFD1E2a6FCB97020C1C264F1","strategyAddress":"0x3A8fBdf9e77DFc25d09741f51d3E181b25d0c4E0","usedForPoints":true,"about":"Rocket Pool is a decentralized staking pool protocol for Ethereum. The Rocket Pool ETH (rETH) token is a liquid staking token within the Rocket Pool protocol. The rETH token represents an amount of ETH that is being staked and rewarded within the Ethereum Proof-of-Stake consensus mechanism. When rewards are earned, the amount due to each token increases. rETH had 2224 node operators running 6 validators each on average, as of Q1 2023. To restake rETH, deposit the tokens in the EigenLayer contract.","twitter":"https://twitter.com/rocket_pool","website":"https://rocketpool.net"},{"name":"Lido Staked Ether","symbol":"stETH","decimals":18,"apiID":"staked-ether","group":"lst","rebasing":true,"address":"0x3F1c547b21f65e10480dE3ad8E19fAAC46C95034","strategyAddress":"0x7D704507b76571a51d9caE8AdDAbBFd0ba0e63d3","usedForPoints":true,"about":"stETH is a token that represents staked Ether in the Lido staking pool protocol. stETH tokens are issued 1:1 to staked Ether. When token rewards are earned from the Ethereum Proof-of-Stake consensus mechanism, stETH token balances increase for each holder. stETH had 30 node operators running 5885 validators each on average, as of Q1 2023. To restake stETH, deposit the tokens in the EigenLayer contract.","twitter":"https://twitter.com/LidoFinance","website":"https://lido.fi/"},{"name":"Wrapped Ether","symbol":"WETH","decimals":18,"apiID":"weth","group":"WETH","rebasing":false,"address":"0x94373a4919B3240D86eA41593D5eBa789FEF3848","strategyAddress":"0x80528D6e9A2BAbFc766965E0E26d5aB08D9CFaF9","usedForPoints":false,"about":"WETH is an ERC-20 token on Ethereum that represents 1 Ether (ETH). ETH is used to pay for transactions on the Ethereum blockchain. For example, swapping between cryptoassets on an Ethereum-based DEX will cost some small amount of ETH"},{"name":"Liquid Staked Ether","symbol":"LsETH","decimals":18,"apiID":"liquid-staked-ethereum","group":"lst","rebasing":false,"address":"0x1d8b30cC38Dba8aBce1ac29Ea27d9cFd05379A09","strategyAddress":"0x05037A81BD7B4C9E0F7B430f1F2A22c31a2FD943","usedForPoints":true,"about":"LsETH is the LST of Liquid Collective, a decentralized liquid staking protocol. Each LsETH token represents your ownership of staked ETH plus network and MEV rewards accrued. Supported across a broad ecosystem of leading platforms and custodians, LsETH features automatic reward restaking, enterprise-grade security, Node Operator performance agreements, and built-in slashing coverage.","twitter":"https://twitter.com/liquid_col","website":"https://liquidcollective.io"},{"name":"Stader Staked Ether","symbol":"ETHx","decimals":18,"apiID":"stader-ethx","group":"lst","rebasing":false,"address":"0xB4F5fc289a778B80392b86fa70A7111E5bE0F859","strategyAddress":"0x31B6F59e1627cEfC9fA174aD03859fC337666af7","usedForPoints":true,"about":"Stader\'s ETHx is a liquid staking token on Ethereum, offering users the ability to earn staking rewards. The ETHx token represents an amount of ETH that is being staked and rewarded within the Ethereum Proof-of-Stake consensus mechanism. It employs a multi-pool architecture, dividing staked Ethereum between Permissionless and Permissioned node operator pools, ensuring scalability and decentralization.","twitter":"https://twitter.com/staderlabs_eth","website":"https://staderlabs.com/eth"},{"name":"StakeWise Staked Ether","symbol":"osETH","decimals":18,"apiID":"stakewise-v3-oseth","group":"lst","rebasing":false,"address":"0xF603c5A3F774F05d4D848A9bB139809790890864","strategyAddress":"0x46281E3B7fDcACdBa44CADf069a94a588Fd4C6Ef","usedForPoints":true,"about":"osETH is the slashing-protected liquid staking token representing capital staked on StakeWise, a staking marketplace that allows anyone to stake on their own terms. The osETH conversion rate changes over time based on the underlying staked ETH rewards and penalties. To restake osETH, deposit the tokens in the EigenLayer contract.","twitter":"https://twitter.com/stakewise_io","website":"https://stakewise.io"},{"name":"Coinbase Staked Ether","symbol":"cbETH","decimals":18,"apiID":"coinbase-wrapped-staked-eth","group":"lst","rebasing":false,"address":"0x8720095Fa5739Ab051799211B146a2EEE4Dd8B37","strategyAddress":"0x70EB4D3c164a6B4A5f908D4FBb5a9cAfFb66bAB6","usedForPoints":true,"about":"Coinbase Wrapped Staked ETH (cbETH) is an ERC20 utility token, which is a liquid representation of their staked ETH on Coinbase. The number of cbETH units you receive upon wrapping is based on the ETH to cbETH conversion rate. The conversion rate will change over time as rewards are earned on the underlying staked ETH. To restake cbETH, deposit the tokens in the EigenLayer contract.","twitter":"https://twitter.com/coinbase","website":"https://www.coinbase.com/cbeth"},{"name":"Mantle Staked Ether","symbol":"mETH","decimals":18,"apiID":"mantle-staked-ether","group":"lst","rebasing":false,"address":"0xe3C063B1BEe9de02eb28352b55D49D85514C67FF","strategyAddress":"0xaccc5A86732BE85b5012e8614AF237801636F8e5","usedForPoints":true,"about":"Mantle LSP is a permissionless and non-custodial ETH liquid staking protocol deployed on Ethereum L1 and governed by Mantle. Mantle LSP combines simple and modern design with robust risk management, and leverages extensive Mantle Ecosystem resources to deliver a highly rewarding experience and supercharges Mantle’s status as a yield powerhouse. Mantle Staked Ether ($mETH) serves as the value-accumulating receipt token of Mantle LSP.","twitter":"https://twitter.com/0xMantle","website":"https://www.mantle.xyz/meth"},{"name":"Ankr Staked Ether","symbol":"ankrETH","decimals":18,"apiID":"ankreth","group":"lst","rebasing":false,"address":"0x8783c9c904e1bdc87d9168ae703c8481e8a477fd","strategyAddress":"0x7673a47463F80c6a3553Db9E54c8cDcd5313d0ac","usedForPoints":true,"about":"Ankr Staking is a pioneer in liquid staking, having launched the first ETH Liquid Staking Token (LST) in December 2020. The Ankr Staked ETH (ankrETH) token is a liquid staking token within Ankr Staking Protocol. The ankrETH token represents an amount of ETH that is being staked and rewarded within the Ethereum Proof-of-Stake consensus mechanism. When rewards are earned, the amount due to each token increases.","twitter":"https://twitter.com/ankr","website":"https://www.ankr.com/staking-crypto"},{"name":"Staked Frax Ether","symbol":"sfrxETH","decimals":18,"apiID":"staked-frax-ether","group":"lst","rebasing":false,"address":"0xa63f56985F9C7F3bc9fFc5685535649e0C1a55f3","strategyAddress":"0x9281ff96637710Cd9A5CAcce9c6FAD8C9F54631c","usedForPoints":true,"about":"Frax Ether is a decentralized liquid staking derivative designed to uniquely leverage the Frax Finance ecosystem. It is issued and created by the Frax Protocol and has a unique two token system with all validator income going to sfrxETH token holders. The sfrxETH token slowly increases in price over time as a function of validator income of the protocol and is always redeemable for the underlying ETH that backs it.","twitter":"https://twitter.com/fraxfinance","website":"https://frax.finance"}],"nativeToken":{"name":"Beacon Ether","symbol":"ETH","decimals":18,"apiID":"ethereum","group":"native","rebasing":false,"address":"0x0000000000000000000000000000000000000000","strategyAddress":"0xbeaC0eeEeeeeEEeEeEEEEeeEEeEeeeEeeEEBEaC0","usedForPoints":true,"about":"Staking Beacon Chain ETH is the act of depositing 32 ETH to activate Ethereum validator software. Validators are responsible for storing data, processing transactions, and adding new blocks to the blockchain. Validators receive a reward denominated in ETH for their active participation in the network. Currently, the Ethereum beacon chain boasts a diverse group of participants, including native stakers, liquid staking pools, centralized exchanges, and other operators. To restake Beacon Chain ETH, one can create their own EigenPod and update their validator withdrawal credentials to the EigenPod address."}},"preprodHolesky":{"eigenPodManagerAddress":"0xB8d8952f572e67B11e43bC21250967772fa883Ff","strategyManagerAddress":"0xF9fbF2e35D8803273E214c99BF15174139f4E67a","delayedWithdrawalRouterAddress":"0xC4BC46a87A67a531eCF7f74338E1FA79533334Fa","delegationManagerAddress":"0x75dfE5B44C2E530568001400D3f704bC8AE350CC","eigendaServiceManagerAddress":"0x54A03db2784E3D0aCC08344D05385d0b62d4F432","stakingTokenList":[{"name":"EIGEN","symbol":"EIGEN","decimals":18,"apiID":null,"group":"EIGEN","rebasing":false,"address":"0xD58f6844f79eB1fbd9f7091d05f7cb30d3363926","strategyAddress":"0xdcCF401fD121d8C542E96BC1d0078884422aFAD2","usedForPoints":false,"about":"EIGEN is the universal intersubjective work token that significantly expands the types of credible commitments that any staker can make with cryptoeconomic security. This massively expands the surface area of digital tasks that can be secured on Ethereum beyond just tasks of type \\"objectively attributable\\" that was offered by simple restaking. Now, oracles, DA, off-chain VM such as AI or gaming engines, censorship-resistance module, etc., can be secured via EIGEN. The intersubjective nature of EIGEN enables raising challenges against malicious EIGEN stakers/operators that can trigger intersubjective forking of the token. Please see the whitepaper for detailed overview of the risks associated with such intersubjective forking."},{"name":"Rocket Pool Ether","symbol":"rETH","decimals":18,"apiID":"rocket-pool-eth","group":"lst","rebasing":false,"address":"0x7322c24752f79c05FFD1E2a6FCB97020C1C264F1","strategyAddress":"0x87f6C7d24b109919eB38295e3F8298425e6331D9","usedForPoints":true,"about":"Rocket Pool is a decentralized staking pool protocol for Ethereum. The Rocket Pool ETH (rETH) token is a liquid staking token within the Rocket Pool protocol. The rETH token represents an amount of ETH that is being staked and rewarded within the Ethereum Proof-of-Stake consensus mechanism. When rewards are earned, the amount due to each token increases. rETH had 2224 node operators running 6 validators each on average, as of Q1 2023. To restake rETH, deposit the tokens in the EigenLayer contract.","twitter":"https://twitter.com/rocket_pool","website":"https://rocketpool.net"},{"name":"Lido Staked Ether","symbol":"stETH","decimals":18,"apiID":"staked-ether","group":"lst","rebasing":true,"address":"0x3F1c547b21f65e10480dE3ad8E19fAAC46C95034","strategyAddress":"0x5C8b55722f421556a2AAfb7A3EA63d4c3e514312","usedForPoints":true,"about":"stETH is a token that represents staked Ether in the Lido staking pool protocol. stETH tokens are issued 1:1 to staked Ether. When token rewards are earned from the Ethereum Proof-of-Stake consensus mechanism, stETH token balances increase for each holder. stETH had 30 node operators running 5885 validators each on average, as of Q1 2023. To restake stETH, deposit the tokens in the EigenLayer contract.","twitter":"https://twitter.com/LidoFinance","website":"https://lido.fi/"},{"name":"Wrapped Ether","symbol":"WETH","decimals":18,"apiID":"weth","group":"WETH","rebasing":false,"address":"0x94373a4919B3240D86eA41593D5eBa789FEF3848","strategyAddress":"0xD523267698C81a372191136e477fdebFa33D9FB4","usedForPoints":false,"about":"WETH is an ERC-20 token on Ethereum that represents 1 Ether (ETH). ETH is used to pay for transactions on the Ethereum blockchain. For example, swapping between cryptoassets on an Ethereum-based DEX will cost some small amount of ETH"},{"name":"Liquid Staked Ether","symbol":"LsETH","decimals":18,"apiID":"liquid-staked-ethereum","group":"lst","rebasing":false,"address":"0x1d8b30cC38Dba8aBce1ac29Ea27d9cFd05379A09","strategyAddress":"0x3c28437E610fB099Cc3d6De4D9c707DFACD308AE","usedForPoints":true,"about":"LsETH is the LST of Liquid Collective, a decentralized liquid staking protocol. Each LsETH token represents your ownership of staked ETH plus network and MEV rewards accrued. Supported across a broad ecosystem of leading platforms and custodians, LsETH features automatic reward restaking, enterprise-grade security, Node Operator performance agreements, and built-in slashing coverage.","twitter":"https://twitter.com/liquid_col","website":"https://liquidcollective.io"},{"name":"Stader Staked Ether","symbol":"ETHx","decimals":18,"apiID":"stader-ethx","group":"lst","rebasing":false,"address":"0xB4F5fc289a778B80392b86fa70A7111E5bE0F859","strategyAddress":"0x3cb1fD19CFb178C1098f2fc1e11090A0642B2314","usedForPoints":true,"about":"Stader\'s ETHx is a liquid staking token on Ethereum, offering users the ability to earn staking rewards. The ETHx token represents an amount of ETH that is being staked and rewarded within the Ethereum Proof-of-Stake consensus mechanism. It employs a multi-pool architecture, dividing staked Ethereum between Permissionless and Permissioned node operator pools, ensuring scalability and decentralization.","twitter":"https://twitter.com/staderlabs_eth","website":"https://staderlabs.com/eth"},{"name":"StakeWise Staked Ether","symbol":"osETH","decimals":18,"apiID":"stakewise-v3-oseth","group":"lst","rebasing":false,"address":"0xF603c5A3F774F05d4D848A9bB139809790890864","strategyAddress":"0x6dC6cE589F852F96ac86cB160AB0B15b9f56DeDd","usedForPoints":true,"about":"osETH is the slashing-protected liquid staking token representing capital staked on StakeWise, a staking marketplace that allows anyone to stake on their own terms. The osETH conversion rate changes over time based on the underlying staked ETH rewards and penalties. To restake osETH, deposit the tokens in the EigenLayer contract.","twitter":"https://twitter.com/stakewise_io","website":"https://stakewise.io"},{"name":"Coinbase Staked Ether","symbol":"cbETH","decimals":18,"apiID":"coinbase-wrapped-staked-eth","group":"lst","rebasing":false,"address":"0x8720095Fa5739Ab051799211B146a2EEE4Dd8B37","strategyAddress":"0xC86382179500e8Ed3e686fC4A99eD9EC72df3f56","usedForPoints":true,"about":"Coinbase Wrapped Staked ETH (cbETH) is an ERC20 utility token, which is a liquid representation of their staked ETH on Coinbase. The number of cbETH units you receive upon wrapping is based on the ETH to cbETH conversion rate. The conversion rate will change over time as rewards are earned on the underlying staked ETH. To restake cbETH, deposit the tokens in the EigenLayer contract.","twitter":"https://twitter.com/coinbase","website":"https://www.coinbase.com/cbeth"},{"name":"Mantle Staked Ether","symbol":"mETH","decimals":18,"apiID":"mantle-staked-ether","group":"lst","rebasing":false,"address":"0xe3C063B1BEe9de02eb28352b55D49D85514C67FF","strategyAddress":"0x24DA526F9e465c4fb6BAe41E226Df8aA5b34eAc7","usedForPoints":true,"about":"Mantle LSP is a permissionless and non-custodial ETH liquid staking protocol deployed on Ethereum L1 and governed by Mantle. Mantle LSP combines simple and modern design with robust risk management, and leverages extensive Mantle Ecosystem resources to deliver a highly rewarding experience and supercharges Mantle’s status as a yield powerhouse. Mantle Staked Ether ($mETH) serves as the value-accumulating receipt token of Mantle LSP.","twitter":"https://twitter.com/0xMantle","website":"https://www.mantle.xyz/meth"},{"name":"Ankr Staked Ether","symbol":"ankrETH","decimals":18,"apiID":"ankreth","group":"lst","rebasing":false,"address":"0x8783c9c904e1bdc87d9168ae703c8481e8a477fd","strategyAddress":"0x7fA77c321bf66e42eaBC9b10129304F7f90c5585","usedForPoints":true,"about":"Ankr Staking is a pioneer in liquid staking, having launched the first ETH Liquid Staking Token (LST) in December 2020. The Ankr Staked ETH (ankrETH) token is a liquid staking token within Ankr Staking Protocol. The ankrETH token represents an amount of ETH that is being staked and rewarded within the Ethereum Proof-of-Stake consensus mechanism. When rewards are earned, the amount due to each token increases.","twitter":"https://twitter.com/ankr","website":"https://www.ankr.com/staking-crypto"},{"name":"Staked Frax Ether","symbol":"sfrxETH","decimals":18,"apiID":"staked-frax-ether","group":"lst","rebasing":false,"address":"0xa63f56985F9C7F3bc9fFc5685535649e0C1a55f3","strategyAddress":"0xf6a09ae03D7760aEcf1626Ce7Df0F113BEC2d9bD","usedForPoints":true,"about":"Frax Ether is a decentralized liquid staking derivative designed to uniquely leverage the Frax Finance ecosystem. It is issued and created by the Frax Protocol and has a unique two token system with all validator income going to sfrxETH token holders. The sfrxETH token slowly increases in price over time as a function of validator income of the protocol and is always redeemable for the underlying ETH that backs it.","twitter":"https://twitter.com/fraxfinance","website":"https://frax.finance"}],"nativeToken":{"name":"Beacon Ether","symbol":"ETH","decimals":18,"apiID":"ethereum","group":"native","rebasing":false,"address":"0x0000000000000000000000000000000000000000","strategyAddress":"0xbeaC0eeEeeeeEEeEeEEEEeeEEeEeeeEeeEEBEaC0","usedForPoints":true,"about":"Staking Beacon Chain ETH is the act of depositing 32 ETH to activate Ethereum validator software. Validators are responsible for storing data, processing transactions, and adding new blocks to the blockchain. Validators receive a reward denominated in ETH for their active participation in the network. Currently, the Ethereum beacon chain boasts a diverse group of participants, including native stakers, liquid staking pools, centralized exchanges, and other operators. To restake Beacon Chain ETH, one can create their own EigenPod and update their validator withdrawal credentials to the EigenPod address."}},"test":{"eigenPodManagerAddress":"0x33e42d539abFe9b387B27b0e467374Bbb76cf925","strategyManagerAddress":"0xD309ADd2B269d522112DcEe0dCf0b0f04a09C29e","delayedWithdrawalRouterAddress":"0x9572e46797B7A07257314e587061dC46c4dfCE0E","delegationManagerAddress":"0x45b4c4DAE69393f62e1d14C5fe375792DF4E6332","eigendaServiceManagerAddress":"0xa3b1689ab85409b15e07d2ed50a6ea9905074ee5","stakingTokenList":[{"name":"Rocket Pool Ether","symbol":"rETH","decimals":18,"apiID":"rocket-pool-eth","group":"lst","rebasing":false,"address":"0x17e8d81701556f0d27bE2617E47A8FE15682A6a5","strategyAddress":"0xE2a9d81701556f0d27Be2617E47a8FE15682a6a5","about":"Rocket Pool is a decentralized staking pool protocol for Ethereum. The Rocket Pool ETH (rETH) token is a liquid staking token within the Rocket Pool protocol. The rETH token represents an amount of ETH that is being staked and rewarded within the Ethereum Proof-of-Stake consensus mechanism. When rewards are earned, the amount due to each token increases. rETH had 2224 node operators running 6 validators each on average, as of Q1 2023. To restake rETH, deposit the tokens in the EigenLayer contract.","usedForPoints":true,"twitter":"https://twitter.com/rocket_pool","website":"https://rocketpool.net"},{"name":"Lido Staked Ether","symbol":"stETH","decimals":18,"apiID":"staked-ether","group":"lst","rebasing":true,"address":"0xA7f31604Ad319973f9ee6a1E14d0410989868f1c","strategyAddress":"0x87f31604aD319973f9EE6A1e14d0410989868F1c","about":"stETH is a token that represents staked Ether in the Lido staking pool protocol. stETH tokens are issued 1:1 to staked Ether. When token rewards are earned from the Ethereum Proof-of-Stake consensus mechanism, stETH token balances increase for each holder. stETH had 30 node operators running 5885 validators each on average, as of Q1 2023. To restake stETH, deposit the tokens in the EigenLayer contract.","usedForPoints":true,"twitter":"https://twitter.com/LidoFinance","website":"https://lido.fi/"},{"name":"Binance Staked Ether","symbol":"wBETH","decimals":18,"apiID":"wrapped-beacon-eth","group":"lst","rebasing":false,"address":"0x34F31604AD319973f9eE6A1e14D0410989868f1c","strategyAddress":"0x44F31604AD319973f9Ee6a1E14D0410989868F1c","about":"Wrapped Beacon ETH (WBETH) is a value-accruing liquid staking token, where 1 WBETH represents 1 staked ETH, along with the staking rewards accrued on ETH Staking. You can use WBETH to interact with products on Binance and DeFi protocols, while still receiving the corresponding ETH Staking rewards accrued. You can stake ETH to WBETH or redeem your WBETH to ETH on the Binance ETH Staking page at zero fees.","usedForPoints":true,"twitter":"https://twitter.com/binance","website":"https://www.binance.com/en/ethereum-staking"},{"name":"Mantle Staked Ether","symbol":"mETH","decimals":18,"apiID":"mantle-staked-ether","group":"lst","rebasing":false,"address":"0x5CF31604aD319973F9ee6a1e14d0410989868f1c","strategyAddress":"0xccF31604AD319973F9ee6A1E14D0410989868F1c","about":"Mantle LSP is a permissionless and non-custodial ETH liquid staking protocol deployed on Ethereum L1 and governed by Mantle. Mantle LSP combines simple and modern design with robust risk management, and leverages extensive Mantle Ecosystem resources to deliver a highly rewarding experience and supercharges Mantle’s status as a yield powerhouse. Mantle Staked Ether ($mETH) serves as the value-accumulating receipt token of Mantle LSP.","usedForPoints":false,"twitter":"https://twitter.com/0xMantle","website":"https://www.mantle.xyz/meth"}],"nativeToken":{"name":"Beacon Ether","symbol":"ETH","decimals":18,"apiID":"ethereum","group":"lst","rebasing":false,"address":"0x0000000000000000000000000000000000000000","strategyAddress":"0xbeaC0eeEeeeeEEeEeEEEEeeEEeEeeeEeeEEBEaC0","about":"Staking Beacon Chain ETH is the act of depositing 32 ETH to activate Ethereum validator software. Validators are responsible for storing data, processing transactions, and adding new blocks to the blockchain. Validators receive a reward denominated in ETH for their active participation in the network. Currently, the Ethereum beacon chain boasts a diverse group of participants, including native stakers, liquid staking pools, centralized exchanges, and other operators. To restake Beacon Chain ETH, one can create their own EigenPod and update their validator withdrawal credentials to the EigenPod address.","usedForPoints":false}}}');
            let r = {
                    reth: "tokenIcon/rETH.svg",
                    steth: "tokenIcon/stETH.svg",
                    cbeth: "tokenIcon/cbETH.svg",
                    oseth: "tokenIcon/osETH.webp",
                    sweth: "tokenIcon/swETH.webp",
                    oeth: "tokenIcon/oETH.webp",
                    wbeth: "tokenIcon/wbETH.webp",
                    ankreth: "tokenIcon/ankrETH.webp",
                    ethx: "tokenIcon/staderx.webp",
                    sfrxeth: "tokenIcon/sfrxeth.webp",
                    lseth: "tokenIcon/lsETH.webp",
                    meth: "tokenIcon/mETH.png",
                    eth: "tokenIcon/ETH.svg",
                    weth: "tokenIcon/WETH.svg",
                    eigen: "tokenIcon/EIGEN.webp"
                },
                i = { ...s.mainnetEthereum,
                    stakingTokenList: s.mainnetEthereum.stakingTokenList.map(e => ({ ...e,
                        icon: r[e.symbol.toLowerCase()]
                    })),
                    nativeToken: { ...s.mainnetEthereum.nativeToken,
                        icon: r[s.mainnetEthereum.nativeToken.symbol.toLowerCase()]
                    }
                };
            s.testnetHolesky, s.testnetHolesky.stakingTokenList.map(e => ({ ...e,
                icon: r[e.symbol.toLowerCase()]
            })), s.testnetHolesky.nativeToken, r[s.testnetHolesky.nativeToken.symbol.toLowerCase()], s.preprodHolesky, s.preprodHolesky.stakingTokenList.map(e => ({ ...e,
                icon: r[e.symbol.toLowerCase()]
            })), s.preprodHolesky.nativeToken, r[s.preprodHolesky.nativeToken.symbol.toLowerCase()], n = i
        },
        66177: function(e, t, a) {
            a.d(t, {
                h: function() {
                    return o
                }
            });
            var n = a(10185),
                s = a(21319),
                r = a(49763);
            a(32608);
            let i = () => "",
                o = (0, s.t)({
                    config: () => ({
                        transformer: r.ZP,
                        links: [(0, n.gb)({
                            enabled: e => "down" === e.direction && e.result instanceof Error
                        }), (0, n.u_)({
                            condition: e => !0 === e.context.skipBatch,
                            true: (0, n.ch)({
                                url: "".concat(i(), "/api/trpc")
                            }),
                            false: (0, n.N8)({
                                url: "".concat(i(), "/api/trpc")
                            })
                        })]
                    }),
                    ssr: !1
                })
        },
        38875: function(e, t) {
            t.Z = [{
                inputs: [{
                    internalType: "contract IStrategyManager",
                    name: "_strategyManager",
                    type: "address"
                }, {
                    internalType: "contract ISlasher",
                    name: "_slasher",
                    type: "address"
                }, {
                    internalType: "contract IEigenPodManager",
                    name: "_eigenPodManager",
                    type: "address"
                }],
                stateMutability: "nonpayable",
                type: "constructor"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !1,
                    internalType: "uint8",
                    name: "version",
                    type: "uint8"
                }],
                name: "Initialized",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !1,
                    internalType: "uint256",
                    name: "previousValue",
                    type: "uint256"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "newValue",
                    type: "uint256"
                }],
                name: "MinWithdrawalDelayBlocksSet",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "operator",
                    type: "address"
                }, {
                    components: [{
                        internalType: "address",
                        name: "earningsReceiver",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "delegationApprover",
                        type: "address"
                    }, {
                        internalType: "uint32",
                        name: "stakerOptOutWindowBlocks",
                        type: "uint32"
                    }],
                    indexed: !1,
                    internalType: "struct IDelegationManager.OperatorDetails",
                    name: "newOperatorDetails",
                    type: "tuple"
                }],
                name: "OperatorDetailsModified",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "operator",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "string",
                    name: "metadataURI",
                    type: "string"
                }],
                name: "OperatorMetadataURIUpdated",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "operator",
                    type: "address"
                }, {
                    components: [{
                        internalType: "address",
                        name: "earningsReceiver",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "delegationApprover",
                        type: "address"
                    }, {
                        internalType: "uint32",
                        name: "stakerOptOutWindowBlocks",
                        type: "uint32"
                    }],
                    indexed: !1,
                    internalType: "struct IDelegationManager.OperatorDetails",
                    name: "operatorDetails",
                    type: "tuple"
                }],
                name: "OperatorRegistered",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "operator",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "address",
                    name: "staker",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "contract IStrategy",
                    name: "strategy",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "shares",
                    type: "uint256"
                }],
                name: "OperatorSharesDecreased",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "operator",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "address",
                    name: "staker",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "contract IStrategy",
                    name: "strategy",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "shares",
                    type: "uint256"
                }],
                name: "OperatorSharesIncreased",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "previousOwner",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "newOwner",
                    type: "address"
                }],
                name: "OwnershipTransferred",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "account",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "newPausedStatus",
                    type: "uint256"
                }],
                name: "Paused",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !1,
                    internalType: "contract IPauserRegistry",
                    name: "pauserRegistry",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "contract IPauserRegistry",
                    name: "newPauserRegistry",
                    type: "address"
                }],
                name: "PauserRegistrySet",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "staker",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "operator",
                    type: "address"
                }],
                name: "StakerDelegated",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "staker",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "operator",
                    type: "address"
                }],
                name: "StakerForceUndelegated",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "staker",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "operator",
                    type: "address"
                }],
                name: "StakerUndelegated",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !1,
                    internalType: "contract IStrategy",
                    name: "strategy",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "previousValue",
                    type: "uint256"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "newValue",
                    type: "uint256"
                }],
                name: "StrategyWithdrawalDelayBlocksSet",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "account",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "newPausedStatus",
                    type: "uint256"
                }],
                name: "Unpaused",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !1,
                    internalType: "bytes32",
                    name: "withdrawalRoot",
                    type: "bytes32"
                }],
                name: "WithdrawalCompleted",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !1,
                    internalType: "bytes32",
                    name: "oldWithdrawalRoot",
                    type: "bytes32"
                }, {
                    indexed: !1,
                    internalType: "bytes32",
                    name: "newWithdrawalRoot",
                    type: "bytes32"
                }],
                name: "WithdrawalMigrated",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !1,
                    internalType: "bytes32",
                    name: "withdrawalRoot",
                    type: "bytes32"
                }, {
                    components: [{
                        internalType: "address",
                        name: "staker",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "delegatedTo",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "withdrawer",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256"
                    }, {
                        internalType: "uint32",
                        name: "startBlock",
                        type: "uint32"
                    }, {
                        internalType: "contract IStrategy[]",
                        name: "strategies",
                        type: "address[]"
                    }, {
                        internalType: "uint256[]",
                        name: "shares",
                        type: "uint256[]"
                    }],
                    indexed: !1,
                    internalType: "struct IDelegationManager.Withdrawal",
                    name: "withdrawal",
                    type: "tuple"
                }],
                name: "WithdrawalQueued",
                type: "event"
            }, {
                inputs: [],
                name: "DELEGATION_APPROVAL_TYPEHASH",
                outputs: [{
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "DOMAIN_TYPEHASH",
                outputs: [{
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "MAX_STAKER_OPT_OUT_WINDOW_BLOCKS",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "MAX_WITHDRAWAL_DELAY_BLOCKS",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "STAKER_DELEGATION_TYPEHASH",
                outputs: [{
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "beaconChainETHStrategy",
                outputs: [{
                    internalType: "contract IStrategy",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "staker",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "operator",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "expiry",
                    type: "uint256"
                }],
                name: "calculateCurrentStakerDelegationDigestHash",
                outputs: [{
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "staker",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "operator",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_delegationApprover",
                    type: "address"
                }, {
                    internalType: "bytes32",
                    name: "approverSalt",
                    type: "bytes32"
                }, {
                    internalType: "uint256",
                    name: "expiry",
                    type: "uint256"
                }],
                name: "calculateDelegationApprovalDigestHash",
                outputs: [{
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "staker",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "_stakerNonce",
                    type: "uint256"
                }, {
                    internalType: "address",
                    name: "operator",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "expiry",
                    type: "uint256"
                }],
                name: "calculateStakerDelegationDigestHash",
                outputs: [{
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    components: [{
                        internalType: "address",
                        name: "staker",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "delegatedTo",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "withdrawer",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256"
                    }, {
                        internalType: "uint32",
                        name: "startBlock",
                        type: "uint32"
                    }, {
                        internalType: "contract IStrategy[]",
                        name: "strategies",
                        type: "address[]"
                    }, {
                        internalType: "uint256[]",
                        name: "shares",
                        type: "uint256[]"
                    }],
                    internalType: "struct IDelegationManager.Withdrawal",
                    name: "withdrawal",
                    type: "tuple"
                }],
                name: "calculateWithdrawalRoot",
                outputs: [{
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32"
                }],
                stateMutability: "pure",
                type: "function"
            }, {
                inputs: [{
                    components: [{
                        internalType: "address",
                        name: "staker",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "delegatedTo",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "withdrawer",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256"
                    }, {
                        internalType: "uint32",
                        name: "startBlock",
                        type: "uint32"
                    }, {
                        internalType: "contract IStrategy[]",
                        name: "strategies",
                        type: "address[]"
                    }, {
                        internalType: "uint256[]",
                        name: "shares",
                        type: "uint256[]"
                    }],
                    internalType: "struct IDelegationManager.Withdrawal",
                    name: "withdrawal",
                    type: "tuple"
                }, {
                    internalType: "contract IERC20[]",
                    name: "tokens",
                    type: "address[]"
                }, {
                    internalType: "uint256",
                    name: "middlewareTimesIndex",
                    type: "uint256"
                }, {
                    internalType: "bool",
                    name: "receiveAsTokens",
                    type: "bool"
                }],
                name: "completeQueuedWithdrawal",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    components: [{
                        internalType: "address",
                        name: "staker",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "delegatedTo",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "withdrawer",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256"
                    }, {
                        internalType: "uint32",
                        name: "startBlock",
                        type: "uint32"
                    }, {
                        internalType: "contract IStrategy[]",
                        name: "strategies",
                        type: "address[]"
                    }, {
                        internalType: "uint256[]",
                        name: "shares",
                        type: "uint256[]"
                    }],
                    internalType: "struct IDelegationManager.Withdrawal[]",
                    name: "withdrawals",
                    type: "tuple[]"
                }, {
                    internalType: "contract IERC20[][]",
                    name: "tokens",
                    type: "address[][]"
                }, {
                    internalType: "uint256[]",
                    name: "middlewareTimesIndexes",
                    type: "uint256[]"
                }, {
                    internalType: "bool[]",
                    name: "receiveAsTokens",
                    type: "bool[]"
                }],
                name: "completeQueuedWithdrawals",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                name: "cumulativeWithdrawalsQueued",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "staker",
                    type: "address"
                }, {
                    internalType: "contract IStrategy",
                    name: "strategy",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "shares",
                    type: "uint256"
                }],
                name: "decreaseDelegatedShares",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "operator",
                    type: "address"
                }, {
                    components: [{
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    }, {
                        internalType: "uint256",
                        name: "expiry",
                        type: "uint256"
                    }],
                    internalType: "struct ISignatureUtils.SignatureWithExpiry",
                    name: "approverSignatureAndExpiry",
                    type: "tuple"
                }, {
                    internalType: "bytes32",
                    name: "approverSalt",
                    type: "bytes32"
                }],
                name: "delegateTo",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "staker",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "operator",
                    type: "address"
                }, {
                    components: [{
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    }, {
                        internalType: "uint256",
                        name: "expiry",
                        type: "uint256"
                    }],
                    internalType: "struct ISignatureUtils.SignatureWithExpiry",
                    name: "stakerSignatureAndExpiry",
                    type: "tuple"
                }, {
                    components: [{
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    }, {
                        internalType: "uint256",
                        name: "expiry",
                        type: "uint256"
                    }],
                    internalType: "struct ISignatureUtils.SignatureWithExpiry",
                    name: "approverSignatureAndExpiry",
                    type: "tuple"
                }, {
                    internalType: "bytes32",
                    name: "approverSalt",
                    type: "bytes32"
                }],
                name: "delegateToBySignature",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                name: "delegatedTo",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "operator",
                    type: "address"
                }],
                name: "delegationApprover",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }, {
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32"
                }],
                name: "delegationApproverSaltIsSpent",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "domainSeparator",
                outputs: [{
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "operator",
                    type: "address"
                }],
                name: "earningsReceiver",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "eigenPodManager",
                outputs: [{
                    internalType: "contract IEigenPodManager",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "staker",
                    type: "address"
                }],
                name: "getDelegatableShares",
                outputs: [{
                    internalType: "contract IStrategy[]",
                    name: "",
                    type: "address[]"
                }, {
                    internalType: "uint256[]",
                    name: "",
                    type: "uint256[]"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "operator",
                    type: "address"
                }, {
                    internalType: "contract IStrategy[]",
                    name: "strategies",
                    type: "address[]"
                }],
                name: "getOperatorShares",
                outputs: [{
                    internalType: "uint256[]",
                    name: "",
                    type: "uint256[]"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "contract IStrategy[]",
                    name: "strategies",
                    type: "address[]"
                }],
                name: "getWithdrawalDelay",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "staker",
                    type: "address"
                }, {
                    internalType: "contract IStrategy",
                    name: "strategy",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "shares",
                    type: "uint256"
                }],
                name: "increaseDelegatedShares",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "initialOwner",
                    type: "address"
                }, {
                    internalType: "contract IPauserRegistry",
                    name: "_pauserRegistry",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "initialPausedStatus",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "_minWithdrawalDelayBlocks",
                    type: "uint256"
                }, {
                    internalType: "contract IStrategy[]",
                    name: "_strategies",
                    type: "address[]"
                }, {
                    internalType: "uint256[]",
                    name: "_withdrawalDelayBlocks",
                    type: "uint256[]"
                }],
                name: "initialize",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "staker",
                    type: "address"
                }],
                name: "isDelegated",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "operator",
                    type: "address"
                }],
                name: "isOperator",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    components: [{
                        internalType: "contract IStrategy[]",
                        name: "strategies",
                        type: "address[]"
                    }, {
                        internalType: "uint256[]",
                        name: "shares",
                        type: "uint256[]"
                    }, {
                        internalType: "address",
                        name: "staker",
                        type: "address"
                    }, {
                        components: [{
                            internalType: "address",
                            name: "withdrawer",
                            type: "address"
                        }, {
                            internalType: "uint96",
                            name: "nonce",
                            type: "uint96"
                        }],
                        internalType: "struct IStrategyManager.DeprecatedStruct_WithdrawerAndNonce",
                        name: "withdrawerAndNonce",
                        type: "tuple"
                    }, {
                        internalType: "uint32",
                        name: "withdrawalStartBlock",
                        type: "uint32"
                    }, {
                        internalType: "address",
                        name: "delegatedAddress",
                        type: "address"
                    }],
                    internalType: "struct IStrategyManager.DeprecatedStruct_QueuedWithdrawal[]",
                    name: "withdrawalsToMigrate",
                    type: "tuple[]"
                }],
                name: "migrateQueuedWithdrawals",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [],
                name: "minWithdrawalDelayBlocks",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    components: [{
                        internalType: "address",
                        name: "earningsReceiver",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "delegationApprover",
                        type: "address"
                    }, {
                        internalType: "uint32",
                        name: "stakerOptOutWindowBlocks",
                        type: "uint32"
                    }],
                    internalType: "struct IDelegationManager.OperatorDetails",
                    name: "newOperatorDetails",
                    type: "tuple"
                }],
                name: "modifyOperatorDetails",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "operator",
                    type: "address"
                }],
                name: "operatorDetails",
                outputs: [{
                    components: [{
                        internalType: "address",
                        name: "earningsReceiver",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "delegationApprover",
                        type: "address"
                    }, {
                        internalType: "uint32",
                        name: "stakerOptOutWindowBlocks",
                        type: "uint32"
                    }],
                    internalType: "struct IDelegationManager.OperatorDetails",
                    name: "",
                    type: "tuple"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }, {
                    internalType: "contract IStrategy",
                    name: "",
                    type: "address"
                }],
                name: "operatorShares",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "owner",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "newPausedStatus",
                    type: "uint256"
                }],
                name: "pause",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [],
                name: "pauseAll",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint8",
                    name: "index",
                    type: "uint8"
                }],
                name: "paused",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "paused",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "pauserRegistry",
                outputs: [{
                    internalType: "contract IPauserRegistry",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32"
                }],
                name: "pendingWithdrawals",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    components: [{
                        internalType: "contract IStrategy[]",
                        name: "strategies",
                        type: "address[]"
                    }, {
                        internalType: "uint256[]",
                        name: "shares",
                        type: "uint256[]"
                    }, {
                        internalType: "address",
                        name: "withdrawer",
                        type: "address"
                    }],
                    internalType: "struct IDelegationManager.QueuedWithdrawalParams[]",
                    name: "queuedWithdrawalParams",
                    type: "tuple[]"
                }],
                name: "queueWithdrawals",
                outputs: [{
                    internalType: "bytes32[]",
                    name: "",
                    type: "bytes32[]"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    components: [{
                        internalType: "address",
                        name: "earningsReceiver",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "delegationApprover",
                        type: "address"
                    }, {
                        internalType: "uint32",
                        name: "stakerOptOutWindowBlocks",
                        type: "uint32"
                    }],
                    internalType: "struct IDelegationManager.OperatorDetails",
                    name: "registeringOperatorDetails",
                    type: "tuple"
                }, {
                    internalType: "string",
                    name: "metadataURI",
                    type: "string"
                }],
                name: "registerAsOperator",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [],
                name: "renounceOwnership",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "contract IPauserRegistry",
                    name: "newPauserRegistry",
                    type: "address"
                }],
                name: "setPauserRegistry",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "contract IStrategy[]",
                    name: "strategies",
                    type: "address[]"
                }, {
                    internalType: "uint256[]",
                    name: "withdrawalDelayBlocks",
                    type: "uint256[]"
                }],
                name: "setStrategyWithdrawalDelayBlocks",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [],
                name: "slasher",
                outputs: [{
                    internalType: "contract ISlasher",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                name: "stakerNonce",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "operator",
                    type: "address"
                }],
                name: "stakerOptOutWindowBlocks",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "strategyManager",
                outputs: [{
                    internalType: "contract IStrategyManager",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "contract IStrategy",
                    name: "",
                    type: "address"
                }],
                name: "strategyWithdrawalDelayBlocks",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "newOwner",
                    type: "address"
                }],
                name: "transferOwnership",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "staker",
                    type: "address"
                }],
                name: "undelegate",
                outputs: [{
                    internalType: "bytes32[]",
                    name: "withdrawalRoots",
                    type: "bytes32[]"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "newPausedStatus",
                    type: "uint256"
                }],
                name: "unpause",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "string",
                    name: "metadataURI",
                    type: "string"
                }],
                name: "updateOperatorMetadataURI",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }]
        }
    }
]);