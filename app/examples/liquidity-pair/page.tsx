import { Action, Balance, TokenSetRecord } from "@/lib/schema";
import { TokenSetCard } from "@/components/token-set/token-set-card";
import { TimeSeriesMetrics, TokenSet } from "@/lib/schema";
import { Name, Standard } from "@/lib/schema";
import { Token } from "@/lib/schema";

export default function LiquidiyPairPage() {
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
				address: "0xA1077a294dDE1B09bB078844df40758a5D0f9a27",
				name: "Wrapped Pulse",
				symbol: "WPLS",
				decimals: 18,
				balance: Balance.parse({ units: 0n, value: 0, valueTs: TimeSeriesMetrics.default({ h1: 0, h24: 0, d7: 0, d30: 0 }) }),
				tokenId: 0n,
			}),
			Token.parse({
				standard: Standard.enum.ERC_20,
				chainId: 369,
				publicKey: "0x0000000000000000000000000000000000000000",
				address: "0x95B303987A60C71504D99Aa1b13B4DA07b0790ab",
				name: "PulseX",
				symbol: "PLSX",
				decimals: 18,
				balance: Balance.parse({ units: 0n, value: 0, valueTs: TimeSeriesMetrics.default({ h1: 0, h24: 0, d7: 0, d30: 0 }) }),
				tokenId: 0n,
			})
		],
			out: [Token.parse({
				standard: Standard.enum.ERC_20,
				chainId: 369,
				publicKey: "0x0000000000000000000000000000000000000000",
				address: "0xA1077a294dDE1B09bB078844df40758a5D0f9a27",
				name: "WrappedPulse",
				symbol: "WPLS",
				decimals: 18,
				balance: Balance.parse({ units: 0n, value: 0, valueTs: TimeSeriesMetrics.default({ h1: 0, h24: 0, d7: 0, d30: 0 }) }),
				tokenId: 0n,
			}),
			Token.parse({
				standard: Standard.enum.ERC_20,
				chainId: 369,
				publicKey: "0x0000000000000000000000000000000000000000",
				address: "0x95B303987A60C71504D99Aa1b13B4DA07b0790ab",
				name: "PulseX",
				symbol: "PLSX",
				decimals: 18,
				balance: Balance.parse({ units: 0n, value: 0, valueTs: TimeSeriesMetrics.default({ h1: 0, h24: 0, d7: 0, d30: 0 }) }),
				tokenId: 0n,
			}),
		],
			actions: [Action.enum.SEND, Action.enum.RECEIVE, Action.enum.BURN, Action.enum.CLAIM, Action.enum.DEPOSIT_COLLATERAL, Action.enum.WITHDRAW_COLLATERAL, Action.enum.DEPOSIT_FARM],
			totalValue: 0,
			totalValueTs: TimeSeriesMetrics.default({ h1: 0, h24: 0, d7: 0, d30: 0 }),
		}),
	});

	return <TokenSetCard tokenSetRecord={tokenSetRecord} />;	
}
