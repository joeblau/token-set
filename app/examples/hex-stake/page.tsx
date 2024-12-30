import { Balance, Name, Token, TokenSet, TokenSetRecord ,Standard, TimeSeriesMetrics, Action } from "@/lib/schema";
import { TokenSetCard } from "@/components/token-set/token-set-card";

export default function HexStakePage() {
	const tokenSetRecord = TokenSetRecord.parse({
		id: "1",
		tokenSet: TokenSet.parse({
			name: Name.enum.STAKE,
			chainId: 369,
			publicKey: "0x0000000000000000000000000000000000000000",
			note: null,
			in: [Token.parse({
				standard: Standard.enum.ERC_20,
				chainId: 369,
				publicKey: "0x0000000000000000000000000000000000000000",
				address: "0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39",
				name: "HEX",
				symbol: "HEX",
				decimals: 8,
				balance: Balance.parse({ units: 0n, value: 0, valueTs: TimeSeriesMetrics.default({ h1: 0, h24: 0, d7: 0, d30: 0 }) }),
				tokenId: 0n,
			})],
			out: [Token.parse({
				standard: Standard.enum.ERC_20,
				chainId: 369,
				publicKey: "0x0000000000000000000000000000000000000000",
				address: "0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39",
				name: "HEX",
				symbol: "HEX",
				decimals: 8,
				balance: Balance.parse({ units: 0n, value: 0, valueTs: TimeSeriesMetrics.default({ h1: 0, h24: 0, d7: 0, d30: 0 }) }),
				tokenId: 0n,
			}),
			Token.parse({
				standard: Standard.enum.ERC_20,
				chainId: 369,
				publicKey: "0x0000000000000000000000000000000000000000",
				address: "0x3819f64f282bf135d62168C1e513280dAF905e06",
				name: "HEDRON",
				symbol: "HDRN",
				decimals: 18,
				balance: Balance.parse({ units: 0n, value: 0, valueTs: TimeSeriesMetrics.default({ h1: 0, h24: 0, d7: 0, d30: 0 }) }),
				tokenId: 0n,
			}),
			Token.parse({
				standard: Standard.enum.ERC_20,
				chainId: 369,
				publicKey: "0x0000000000000000000000000000000000000000",
				address: "0x5A9780Bfe63f3ec57f01b087cD65BD656C9034A8",
				name: "Communis",
				symbol: "COM",
				decimals: 18,
				balance: Balance.parse({ units: 0n, value: 0, valueTs: TimeSeriesMetrics.default({ h1: 0, h24: 0, d7: 0, d30: 0 }) }),
				tokenId: 0n,
			}),
		],
		actions: [Action.enum.MINT, Action.enum.CLAIM, Action.enum.WITHDRAW_STAKE, Action.enum.PAUSE_STAKE],
		totalValue: 0,
			totalValueTs: TimeSeriesMetrics.default({ h1: 0, h24: 0, d7: 0, d30: 0 }),
		}),
	});

	return <div>
		<TokenSetCard tokenSetRecord={tokenSetRecord} />
	</div>;	
}
