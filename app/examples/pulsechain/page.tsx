import { Action, Balance, Name, Standard, TimeSeriesMetrics, Token, TokenSetRecord, TokenSet } from "@/lib/schema";
import { TokenSetCard } from "@/components/token-set/token-set-card";

export default function PulseChainPage() {
	const tokenSetRecord = TokenSetRecord.parse({
		id: "1",
		tokenSet: TokenSet.parse({
			name: Name.enum.COIN,
			chainId: 369,
			publicKey: "0x0000000000000000000000000000000000000000",
			note: null,
			in: [Token.parse({
				standard: Standard.enum.ERC_20,
				chainId: 369,
				publicKey: "0x0000000000000000000000000000000000000000",
				address: null,
				name: "Pulse",
				symbol: "PLS",
				decimals: 18,
				balance: Balance.parse({ units: 0n, value: 0, valueTs: TimeSeriesMetrics.default({ h1: 0, h24: 0, d7: 0, d30: 0 }) }),
				tokenId: 0n,
			})],
			out: null,
			actions: [Action.enum.BUY, Action.enum.SELL, Action.enum.SEND, Action.enum.RECEIVE, Action.enum.DEPOSIT_STAKE, Action.enum.DEPOSIT_CREDIT, Action.enum.DEPOSIT_LIQUIDITY],
			totalValue: 0,
			totalValueTs: TimeSeriesMetrics.default({ h1: 0, h24: 0, d7: 0, d30: 0 }),
		}),
	});
	return <TokenSetCard tokenSetRecord={tokenSetRecord} />;	
}
