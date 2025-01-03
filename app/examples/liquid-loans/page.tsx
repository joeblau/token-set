import { Action, Balance, Name, Standard, TimeSeriesMetrics, Token, TokenSetRecord, TokenSet } from "@/lib/schema";
import { TokenSetCard } from "@/components/token-set/token-set-card";

export default function LiquidLoansPage() {
	const tokenSetRecord = TokenSetRecord.parse({
		id: "1",
		tokenSet: TokenSet.parse({
			name: Name.enum.BORROW,
			chainId: 369,
			publicKey: "0x0000000000000000000000000000000000000000",
			note: null,
			in: [Token.parse({
				standard: Standard.enum.ERC_20,
				chainId: 369,
				publicKey: "0x0000000000000000000000000000000000000000",
				address: "0xA1077a294dDE1B09bB078844df40758a5D0f9a27",
				name: "Wrapped Pulse",
				symbol: "WPLS",
				decimals: 18,
				balance: Balance.parse({ units: 0n, value: 0, valueTs: TimeSeriesMetrics.default({ h1: 0, h24: 0, d7: 0, d30: 0 }) }),
				tokenId: 0n,
			})],
			out: [Token.parse({
				standard: Standard.enum.ERC_20,
				chainId: 369,
				publicKey: "0x0000000000000000000000000000000000000000",
				address: "0x0dEEd1486bc52aA0d3E6f8849cEC5adD6598A162",
				name: "USDL",
				symbol: "USDL",
				decimals: 18,
				balance: Balance.parse({ units: 0n, value: 0, valueTs: TimeSeriesMetrics.default({ h1: 0, h24: 0, d7: 0, d30: 0 }) }),
				tokenId: 0n,
			})],
			actions: [Action.enum.CLAIM, Action.enum.REPAY, Action.enum.DEPOSIT_COLLATERAL, Action.enum.WITHDRAW_COLLATERAL],
			totalValue: 0,
			totalValueTs: TimeSeriesMetrics.default({ h1: 0, h24: 0, d7: 0, d30: 0 }),
		}),
	});
	return <TokenSetCard tokenSetRecord={tokenSetRecord} />;	
}
