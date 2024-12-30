import { z } from 'zod';
import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';

extendZodWithOpenApi(z);

export const Network = z.enum(['MAINNET', 'TESTNET']);

export const Standard = z.enum(['ERC_20', 'ERC_721', 'ERC_1155', 'SPL']);

export const Name = z.enum([
	'COIN',
	'NFT',
	'MINE',
	'STAKE',
	'COLLATERAL',
	'LOAN',
	'CREDIT',
	'BORROW',
	'LIQUIDITY',
	'FARM',
	'BETTING_MARKET',
	'CLAIM',
]);

export const Action = z.enum([
	'SCREENSHOT',
	'BUY',
	'SELL',
	'CLAIM',
	'SEND',
	'RECEIVE',
	'MINT',
	'BURN',
	'VOTE',
	'DELEGATE',
	'COLLECT',
	'APPROVE',
	'REVOKE',
	'SWAP',
	'BORROW',
	'REPAY',
	'DEPOSIT_FIAT',
	'PAUSE_FIAT',
	'WITHDRAW_FIAT',
	'DEPOSIT_CREDIT',
	'PAUSE_CREDIT',
	'WITHDRAW_CREDIT',
	'DEPOSIT_STAKE',
	'PAUSE_STAKE',
	'WITHDRAW_STAKE',
	'DEPOSIT_COLLATERAL',
	'PAUSE_COLLATERAL',
	'WITHDRAW_COLLATERAL',
	'DEPOSIT_LIQUIDITY',
	'PAUSE_LIQUIDITY',
	'WITHDRAW_LIQUIDITY',
	'DEPOSIT_FARM',
	'PAUSE_FARM',
	'WITHDRAW_FARM',
]);

export const TimeSeriesMetrics = z.object({
	h1: z.number().default(0),
	h24: z.number().default(0),
	d7: z.number().default(0),
	d30: z.number().default(0),
});

export const Balance = z.object({
	units: z.bigint(),
	price: z.number().default(0),
	value: z.number().default(0),
	priceChangeTs: TimeSeriesMetrics.default({ h1: 0, h24: 0, d7: 0, d30: 0 }),
	valueTs: TimeSeriesMetrics.default({ h1: 0, h24: 0, d7: 0, d30: 0 }),
});

export const Token = z.object({
	standard: Standard,
	note: z.string().nullable().default(null),
	chainId: z.number().int(),
	publicKey: z.string(),
	address: z.string().nullable().default(null),
	name: z.string(),
	symbol: z.string(),
	decimals: z.number().int(),
	balance: Balance,
	tokenId: z.bigint().default(0n),
});

export const TokenSet = z.object({
	name: Name,
	chainId: z.number().int(),
	publicKey: z.string(),
	note: z.string().nullable().default(null),
	in: z.array(Token),
	out: z.array(Token).nullable().default(null),
	actions: z.array(Action),
	totalValue: z.number().default(0),
	totalValueTs: TimeSeriesMetrics.default({ h1: 0, h24: 0, d7: 0, d30: 0 }),
});

export const TokenSetRecord = z.object({
	id: z.string(),
	tokenSet: TokenSet,
});

// Define the GetTokenSetRequest schema
export const TokenSetRequest = z.object({
	network: Network,
	publicKeys: z.array(z.string()),
});

// Define the TokenSetResponse schema
export const TokenSetResponse = z.object({
	tokenSetRecords: z.array(TokenSetRecord),
});

export const VersionSchema = z.object({
	major: z.number(),
	minor: z.number(),
	patch: z.number(),
});

export const TokenSchema = z.object({
	chainId: z.number(),
	address: z.string(),
	name: z.string(),
	symbol: z.string(),
	decimals: z.number(),
});

export const TokenListSchema = z.object({
	name: z.string(),
	timestamp: z.number(),
	version: VersionSchema,
	keywords: z.array(z.string()).default([]),
	tokens: z.array(TokenSchema).default([]),
	tokenMap: z.record(TokenSchema).default({}),
});

export const ProtocolSchema = z.object({
	name: z.string(),
	address: z.string(),
});

export const ProtocolListSchema = z.object({
	name: z.string(),
	timestamp: z.number(),
	version: VersionSchema,
	keywords: z.array(z.string()).default([]),
	protocols: z.array(ProtocolSchema).default([]),
	protocolMap: z.record(ProtocolSchema).default({}),
});

export const StakeNote = z.object({
	status: z.enum(['ACTIVE', 'MATURE']),
	progress: z.number(),
	endTs: z.string().datetime(),
	signature: z.string().nullable().default(null),
});
