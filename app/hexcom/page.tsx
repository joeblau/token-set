import { Suspense } from "react";
import { Separator } from "@/components/ui/separator";
import { TokenSetRecord } from "@/lib/schema";

import { z } from "zod";
import { TokenSetList } from "@/components/token-sets/token-set-list";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { shortAddress } from "@/lib/utils";


async function StakeList() {

    const response = await fetch("http://localhost:3000/sample/hex-stakes.json", { cache: 'no-store' })
    const tokenSetRecords = await response.json() as z.infer<typeof TokenSetRecord>[]  
  return (
    <div className="space-y-8">
        <div className="space-y-2">
          <div className="rounded-xl border">
          <TokenSetList tokenSetRecords={tokenSetRecords} />
        </div>
        </div>
    </div>
  );
}

export default function HexcomPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div className="ml-auto">
          <Button variant="default" className="flex font-mono">
            <Image src="https://avatar.superdapp.com/beam/0x0000000000000000000000000000000000000000.svg" alt="Wallet" width={24} height={24} className="rounded-full" />
            {shortAddress("0x0000000000000000000000000000000000000000")}
          </Button>
        </div>
      </div>

      <Suspense fallback={<div>Loading stakes...</div>}>
        <StakeList />
      </Suspense>
    </div>
  );
}