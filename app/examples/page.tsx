import Link from "next/link";
import { Button } from "@/components/ui/button";

const examples = [
  {
    name: "HEX",
    path: "/examples/hex",
    description: "HEX token example"
  },
  {
    name: "HEX Stake",
    path: "/examples/hex-stake",
    description: "HEX staking example"
  },
  {
    name: "Hedron",
    path: "/examples/hedron",
    description: "Hedron NFT example"
  },
  {
    name: "Liquid Loans",
    path: "/examples/liquid-loans",
    description: "Liquid Loans borrowing example"
  },
  {
    name: "Liquidity Pair",
    path: "/examples/liquidity-pair", 
    description: "Liquidity pair example"
  },
  {
    name: "Maximus DAO",
    path: "/examples/maximus-dao",
    description: "Maximus DAO staking example"
  },
  {
    name: "Phiat",
    path: "/examples/phiat",
    description: "Phiat collateral example"
  },
  {
    name: "Phux",
    path: "/examples/phux",
    description: "Phux collateral example"
  },
  {
    name: "PulseChain",
    path: "/examples/pulsechain",
    description: "PulseChain token example"
  },
  {
    name: "PulseX",
    path: "/examples/pulsex",
    description: "PulseX token example"
  },
  {
    name: "Yield Farm",
    path: "/examples/yield-farm",
    description: "Yield farming example"
  }
];

export default function ExamplesPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Token Set Examples</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {examples.map((example) => (
          <div key={example.path} className="border rounded-lg p-4">
            <h2 className="font-semibold mb-2">{example.name}</h2>
            <p className="text-sm text-muted-foreground mb-4">{example.description}</p>
            <Link href={example.path}>
              <Button variant="outline" className="w-full">
                View Example
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
} 