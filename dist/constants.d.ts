import JSBI from 'jsbi';
export declare type BigintIsh = JSBI | number | string;
export declare enum ChainId {
    ETHEREUM = 1,
    BSC = 56,
    BSC_TESTNET = 97,
    ROBURNA = 158,
    ROBURNA_TESTNET = 159
}
export declare enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export declare enum PairType {
    INTERNAL = 0,
    EXTERNAL = 1
}
export declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
export declare const FACTORY_ADDRESS = "0x0438309c81376d90D191Ab2Cdd464716B3c69B54";
export declare const FACTORY_ADDRESS_ETHEREUM = "0xff68DFd7230a098C10D02c043B6eb8A6400aE64F";
export declare const FACTORY_ADDRESS_ETHEREUM_EXTERNAL = "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f";
export declare const FACTORY_ADDRESS_EXTERNAL = "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73";
export declare const FACTORY_ADDRESS_ROBURNA = "0xC0f0F040C03fA3e4E3C9511Ad2539526f986dF69";
export declare const FACTORY_ADDRESS_ROBURNA_TESTNET = "0xa9c35896A518ce1DA9Bbe22cd2a71057E9D0cAA1";
export declare const FACTORY_ADDRESS_BSC_TESTNET = "0xBb956718461Fbf21D026375Dba659d330e2e897f";
export declare const FACTORY_ADDRESS_BSC_TESTNET_EXTERNAL = "0x6725F303b657a9451d8BA641348b6761A6CC7a17";
export declare const FACTORY_ADDRESS_MAP: {
    1: string;
    56: string;
    97: string;
    158: string;
    159: string;
};
export declare const EXTERNAL_FACTORY_ADDRESS_MAP: {
    1: string;
    56: string;
    97: string;
    158: string;
    159: string;
};
export declare const INIT_CODE_HASH = "0x2e26c6a371cb994ce7b30f334480a5782dff687140d5608ced830fc138a0ed7b";
export declare const INIT_CODE_HASH_ETHEREUM = "0x568d807ff31b5c3ec99125e4aeff3b02ee98c66ff603152daee8b2e7d279b83b";
export declare const INIT_CODE_HASH_ETHEREUM_EXTERNAL = "0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f";
export declare const INIT_CODE_HASH_EXTERNAL = "0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5";
export declare const INIT_CODE_HASH_ROBURNA = "0x568d807ff31b5c3ec99125e4aeff3b02ee98c66ff603152daee8b2e7d279b83b";
export declare const INIT_CODE_HASH_ROBURNA_TESTNET = "0x568d807ff31b5c3ec99125e4aeff3b02ee98c66ff603152daee8b2e7d279b83b";
export declare const INIT_CODE_HASH_BSC_TESTNET = "0xd0d4c4cd0848c93cb4fd1f498d7013ee6bfb25783ea21593d5834f5d250ece66";
export declare const INIT_CODE_HASH_MAP: {
    1: string;
    56: string;
    97: string;
    158: string;
    159: string;
};
export declare const EXTERNAL_CODE_HASH_MAP: {
    1: string;
    56: string;
    97: string;
    158: string;
    159: string;
};
export declare const MINIMUM_LIQUIDITY: JSBI;
export declare const ZERO: JSBI;
export declare const ONE: JSBI;
export declare const TWO: JSBI;
export declare const THREE: JSBI;
export declare const FIVE: JSBI;
export declare const TEN: JSBI;
export declare const _100: JSBI;
export declare const FEES_NUMERATOR: JSBI;
export declare const FEES_DENOMINATOR: JSBI;
export declare enum SolidityType {
    uint8 = "uint8",
    uint256 = "uint256"
}
export declare const SOLIDITY_TYPE_MAXIMA: {
    uint8: JSBI;
    uint256: JSBI;
};
