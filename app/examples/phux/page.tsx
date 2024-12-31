import { Action, Balance, Name, Standard, TimeSeriesMetrics, Token, TokenSet, TokenSetRecord } from "@/lib/schema";
import { TokenSetCard } from "@/components/token-set/token-set-card";

export default function PhuxPage() {
	const tokenSetRecord = TokenSetRecord.parse({
		id: "1",
		tokenSet: TokenSet.parse({
			name: Name.enum.COLLATERAL,
			chainId: 369,
			publicKey: "0x0000000000000000000000000000000000000000",
			note: null,
			in: [
				Token.parse({
				standard: Standard.enum.ERC_20,
				chainId: 369,
				publicKey: "0x0000000000000000000000000000000000000000",
				address: "0x0Cb6F5a34ad42ec934882A05265A7d5F59b51A2f",
				name: "USDT from Ethereum",
				symbol: "USDT",
				decimals: 18,
				balance: Balance.parse({ units: 0n, value: 0, valueTs: TimeSeriesMetrics.default({ h1: 0, h24: 0, d7: 0, d30: 0 }) }),
				tokenId: 0n,
			}),
			Token.parse({
				standard: Standard.enum.ERC_20,
				chainId: 369,
				publicKey: "0x0000000000000000000000000000000000000000",
				address: "0x15D38573d2feeb82e7ad5187aB8c1D52810B1f07",
				name: "USD Coin from Ethereum",
				symbol: "USDC",
				decimals: 18,
				balance: Balance.parse({ units: 0n, value: 0, valueTs: TimeSeriesMetrics.default({ h1: 0, h24: 0, d7: 0, d30: 0 }) }),
				tokenId: 0n,
			}),
			Token.parse({
				standard: Standard.enum.ERC_20,
				chainId: 369,
				publicKey: "0x0000000000000000000000000000000000000000",
				address: "0xefD766cCb38EaF1dfd701853BFCe31359239F305",
				name: "DAI from Ethereum",
				symbol: "DAI",
				decimals: 18,
				balance: Balance.parse({ units: 0n, value: 0, valueTs: TimeSeriesMetrics.default({ h1: 0, h24: 0, d7: 0, d30: 0 }) }),
				tokenId: 0n,
			})
		],
			out: [
				Token.parse({
					standard: Standard.enum.ERC_20,
					chainId: 369,
					publicKey: "0x0000000000000000000000000000000000000000",
					address: "0x0Cb6F5a34ad42ec934882A05265A7d5F59b51A2f",
					name: "USDT from Ethereum",
					symbol: "USDT",
					decimals: 18,
					balance: Balance.parse({ units: 0n, value: 0, valueTs: TimeSeriesMetrics.default({ h1: 0, h24: 0, d7: 0, d30: 0 }) }),
					tokenId: 0n,
				}),
				Token.parse({
					standard: Standard.enum.ERC_20,
					chainId: 369,
					publicKey: "0x0000000000000000000000000000000000000000",
					address: "0x15D38573d2feeb82e7ad5187aB8c1D52810B1f07",
					name: "USD Coin from Ethereum",
					symbol: "USDC",
					decimals: 18,
					balance: Balance.parse({ units: 0n, value: 0, valueTs: TimeSeriesMetrics.default({ h1: 0, h24: 0, d7: 0, d30: 0 }) }),
					tokenId: 0n,
				}),
				Token.parse({
					standard: Standard.enum.ERC_20,
					chainId: 369,
					publicKey: "0x0000000000000000000000000000000000000000",
					address: "0xefD766cCb38EaF1dfd701853BFCe31359239F305",
					name: "DAI from Ethereum",
					symbol: "DAI",
					decimals: 18,
					balance: Balance.parse({ units: 0n, value: 0, valueTs: TimeSeriesMetrics.default({ h1: 0, h24: 0, d7: 0, d30: 0 }) }),
					tokenId: 0n,
				})
		],
			actions: [Action.enum.CLAIM, Action.enum.DEPOSIT_COLLATERAL, Action.enum.WITHDRAW_COLLATERAL],
			totalValue: 0,
			totalValueTs: TimeSeriesMetrics.default({ h1: 0, h24: 0, d7: 0, d30: 0 }),
		}),
	});

	return <TokenSetCard tokenSetRecord={tokenSetRecord} />;
}
