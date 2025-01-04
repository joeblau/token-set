"use client";

import { MoreHorizontal } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { getAddress } from "viem";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {  TokenSetRecord } from "@/lib/schema";
import { shortAddress } from "@/lib/utils";

export function TokenActions({
  tokenSetRecord,
}: {
  tokenSetRecord: z.infer<typeof TokenSetRecord>;
}) {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {/* <DropdownMenuLabel className="flex items-center gap-2">
          <Image
            src={`https://ocfs.superdapp.com/${tokenSetRecord.tokenSet.chainId}.svg`}
            alt={tokenSetRecord.tokenSet.name}
            className="size-8 rounded-full"
            width={32}
            height={32}
          />
          {account && (
            <>
              <Image
                src={`https://avatar.superdapp.com/beam/${account.publicKey}.svg`}
                alt={account.publicKey}
                className="-ml-3 size-8 rounded-full"
                width={32}
                height={32}
              />
              <div className="flex flex-col">
                <div>{account.name}</div>
                <div className="text-muted-foreground">
                  {shortAddress(account.publicKey)}
                </div>
              </div>
            </>
          )}
        </DropdownMenuLabel> */}
        {/* <DropdownMenuSeparator /> */}
        <DropdownMenuLabel>Token Actions</DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
