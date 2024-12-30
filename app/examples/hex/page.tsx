import { Balance, Name, Standard, TimeSeriesMetrics, Token, TokenSet, TokenSetRecord } from "@/lib/schema";
import { TokenSetCard } from "@/components/token-set/token-set-card";

export default function HexPage() {
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
				address: "0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39",
				name: "HEX",
				symbol: "HEX",
				decimals: 8,
				balance: Balance.parse({ units: 0n, value: 0, valueTs: TimeSeriesMetrics.default({ h1: 0, h24: 0, d7: 0, d30: 0 }) }),
				tokenId: 0n,
			})],
			out: null,
			actions: [],
			totalValue: 0,
			totalValueTs: TimeSeriesMetrics.default({ h1: 0, h24: 0, d7: 0, d30: 0 }),
		}),
	});

	return <div>
		<TokenSetCard tokenSetRecord={tokenSetRecord} />
	</div>;
}
