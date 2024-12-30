import { TokenSetCard } from "@/components/token-set/token-set-card";
import { Action, Balance, Name, Standard, TimeSeriesMetrics, TokenSetRecord } from "@/lib/schema";

export default function MaximusPage() {
    const tokenSetRecord = TokenSetRecord.parse({
        id: "721e5412102fe31bf16d7f9f15574e14",
        tokenSet: {
          name: Name.enum.STAKE,
          chainId: 1,
          publicKey: "0x0000000000000000000000000000000000000000",
          note: "{\"status\":\"ACTIVE\",\"progress\":75.60975609756098,\"endTs\":\"2025-04-04T07:18:23.707Z\",\"signature\":null}",
          "in": [
            {
              standard: Standard.enum.ERC_20,
              note: null,
              chainId: 1,
              publicKey: "0x0000000000000000000000000000000000000000",
              address: "0x0d86EB9f43C57f6FF3BC9E23D8F9d82503f0e84b",
              name: "Maximus",
              symbol: "MAXI",
              decimals: 8,
              balance: Balance.parse({
                units: 100000000000000n,
                price: 0,
                value: 0,
                priceChangeTs: TimeSeriesMetrics.default({ h1: 0, h24: 0, d7: 0, d30: 0 }),
                valueTs: TimeSeriesMetrics.default({ h1: 0, h24: 0, d7: 0, d30: 0 }),
              }),
              tokenId: 0n,
            }
          ],
          out: [
            {
              standard: Standard.enum.ERC_20,
              note: null,
              chainId: 1,
              publicKey: "0x0000000000000000000000000000000000000000",
              address: "0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39",
              name: "HEX",
              symbol: "HEX",
              decimals: 8,
              balance: Balance.parse({
                units: 490387000000n,
                price: 0,
                value: 0,
                priceChangeTs: TimeSeriesMetrics.default({ h1: 0, h24: 0, d7: 0, d30: 0 }),
                valueTs: TimeSeriesMetrics.default({ h1: 0, h24: 0, d7: 0, d30: 0 }),
              }),
              tokenId: 0n,
            },
            {
              standard: Standard.enum.ERC_20,
              note: null,
              chainId: 1,
              publicKey: "0x0000000000000000000000000000000000000000",
              address: "0x0d86EB9f43C57f6FF3BC9E23D8F9d82503f0e84b",
              name: "Maximus",
              symbol: "MAXI",
              decimals: 8,
              balance: Balance.parse({
                units: 1816711000000n,
                price: 0,
                value: 0,
                priceChangeTs: TimeSeriesMetrics.default({ h1: 0, h24: 0, d7: 0, d30: 0 }),
                valueTs: TimeSeriesMetrics.default({ h1: 0, h24: 0, d7: 0, d30: 0 }),
              }),
              tokenId: 0n,
            },
            {
              standard: Standard.enum.ERC_20,
              note: null,
              chainId: 1,
              publicKey: "0x0000000000000000000000000000000000000000",
              address: "0x3819f64f282bf135d62168C1e513280dAF905e06",
              name: "Hedron",
              symbol: "HDRN",
              decimals: 9,
              balance: Balance.parse({
                units: 163474329094000000n,
                price: 0,
                value: 0,
                priceChangeTs: TimeSeriesMetrics.default({ h1: 0, h24: 0, d7: 0, d30: 0 }),
                valueTs: TimeSeriesMetrics.default({ h1: 0, h24: 0, d7: 0, d30: 0 }),
              }),
              tokenId: 0n,
            },
            {
              standard: Standard.enum.ERC_20,
              note: null,
              chainId: 1,
              publicKey: "0x0000000000000000000000000000000000000000",
              address: "0xe9f84d418B008888A992Ff8c6D22389C2C3504e0",
              name: "Maximus Base",
              symbol: "BASE",
              decimals: 8,
              balance: Balance.parse({
                units: 280000000n,
                price: 0,
                value: 0,
                priceChangeTs: TimeSeriesMetrics.default({ h1: 0, h24: 0, d7: 0, d30: 0 }),
                valueTs: TimeSeriesMetrics.default({ h1: 0, h24: 0, d7: 0, d30: 0 }),
              }),
              tokenId: 0n,
            },
            {
              standard: Standard.enum.ERC_20,
              note: null,
              chainId: 1,
              publicKey: "0x0000000000000000000000000000000000000000",
              address: "0xF55cD1e399e1cc3D95303048897a680be3313308",
              name: "Maximus Trio",
              symbol: "TRIO",
              decimals: 8,
              balance: Balance.parse({
                units: 214000000n,
                price: 0,
                value: 0,
                priceChangeTs: TimeSeriesMetrics.default({ h1: 0, h24: 0, d7: 0, d30: 0 }),
                valueTs: TimeSeriesMetrics.default({ h1: 0, h24: 0, d7: 0, d30: 0 }),
              }),
              tokenId: 0n,
            },
            {
              standard: Standard.enum.ERC_20,
              note: null,
              chainId: 1,
              publicKey: "0x0000000000000000000000000000000000000000",
              address: "0x6B0956258fF7bd7645aa35369B55B61b8e6d6140",
              name: "Maximus Lucky",
              symbol: "LUCKY",
              decimals: 8,
              balance: Balance.parse({
                units: 145000000n,
                price: 0,
                value: 0,
                priceChangeTs: TimeSeriesMetrics.default({ h1: 0, h24: 0, d7: 0, d30: 0 }),
                valueTs: TimeSeriesMetrics.default({ h1: 0, h24: 0, d7: 0, d30: 0 }),
              }),
              tokenId: 0n,
            },
            {
              standard: Standard.enum.ERC_20,
              note: null,
              chainId: 1,
              publicKey: "0x0000000000000000000000000000000000000000",
              address: "0x6b32022693210cD2Cfc466b9Ac0085DE8fC34eA6",
              name: "Maximus Decimus",
              symbol: "DECI",
              decimals: 8,
              balance: Balance.parse({
                units: 229000000n,
                price: 0,
                value: 0,
                priceChangeTs: TimeSeriesMetrics.default({ h1: 0, h24: 0, d7: 0, d30: 0 }),
                valueTs: TimeSeriesMetrics.default({ h1: 0, h24: 0, d7: 0, d30: 0 }),
              }),
              tokenId: 0n,
            },
            {
              standard: Standard.enum.ERC_20,
              note: null,
              chainId: 1,
              publicKey: "0x0000000000000000000000000000000000000000",
              address: "0xB7c9E99Da8A857cE576A830A9c19312114d9dE02",
              name: "Maximus Team",
              symbol: "TEAM",
              decimals: 8,
              balance: Balance.parse({
                units: 3760433000000n,
                price: 0,
                value: 0,
                priceChangeTs: TimeSeriesMetrics.default({ h1: 0, h24: 0, d7: 0, d30: 0 }),
                valueTs: TimeSeriesMetrics.default({ h1: 0, h24: 0, d7: 0, d30: 0 }),
              }),
              tokenId: 0n,
            }
          ],
          actions: [Action.enum.WITHDRAW_STAKE],
          totalValue: 0,
          totalValueTs: TimeSeriesMetrics.default({ h1: 0, h24: 0, d7: 0, d30: 0 }),
        },
    });

	return  <TokenSetCard tokenSetRecord={tokenSetRecord} />;
}