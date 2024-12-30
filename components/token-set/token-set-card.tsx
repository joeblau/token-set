"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { z } from "zod";
import { Action, Token, TokenSetRecord } from "@/lib/schema";
import { createElement, useRef } from "react";
import Image from "next/image";
import { cn, getChangeColor, uuidToken } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { formatUSD } from "@/lib/format-usd";
import { ChevronDown, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { actionMap } from "@/lib/token-action-map";

export const TokenSetCard = ({
  tokenSetRecord,
}: {
  tokenSetRecord: z.infer<typeof TokenSetRecord>;
}) => {
  const tokenSet = tokenSetRecord.tokenSet;

  const TokenRow = ({ token }: { token: z.infer<typeof Token> }) => {
    const currentValue = token.balance.value;
    const previousValue = token.balance.valueTs.h24;
    const change = currentValue - previousValue;
    const percentChange =
      previousValue !== 0 ? (change / previousValue) * 100 : 0;
    const changeColor = getChangeColor(percentChange);


    return (
      <div className="flex flex-row gap-2 items-center justify-between w-full">
        <div className="flex flex-row gap-2 items-center">
          <Image
            src={`https://ocfs.superdapp.com/${token.chainId}/${token.address}.svg`}
            alt={token.name}
            className="size-12 rounded-full outline outline-2 outline-background"
            width={512}
            height={512}
            priority
            loading="eager"
          />
          <div className="flex flex-col items-start">
            <div className="text-md text-foreground truncate">{token.name}</div>
            <div className="text-sm text-muted-foreground truncate flex flex-row gap-2">
              {token.symbol}
              {token.note && (
                <Badge
                  variant="secondary"
                  className="text-xs text-muted-foreground"
                >
                  {token.note}
                </Badge>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end text-right">
          <div className="text-sm font-mono text-foreground font-semibold">
            {formatUSD(token.balance.price)}
          </div>
          <Badge
            variant="secondary"
            className={cn("font-mono text-xs", changeColor)}
          >
            {percentChange >= 0 ? "+" : ""}
            {percentChange.toFixed(2)}%
          </Badge>
        </div>
      </div>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <div className="flex justify-between items-center w-full">
            {tokenSet.name}
            {tokenSet.actions.length > 0 && (

              <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button variant="outline" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" side="bottom">
                    <DropdownMenuLabel>Token Actions</DropdownMenuLabel>
                  {tokenSet.actions.map((action) => (
                    <DropdownMenuItem key={action}>
                      {createElement(
                        actionMap[action as z.infer<typeof Action>].icon,
                        {
                          className: "mr-2 h-4 w-4",
                        }
                      )}
                      <span>
                        {actionMap[action as z.infer<typeof Action>].title}
                      </span>
                    </DropdownMenuItem>
                 
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="isolate flex flex-col items-center -space-y-1 overflow-hidden w-full">
          {tokenSet.in.map((token) => (
            <TokenRow key={uuidToken({ token })} token={token} />
          ))}

          {tokenSet.out && (
            <div className="w-full h-12 flex items-center justify-center">
              <ChevronDown className="size-6 text-muted-foreground" />
            </div>
          )}

          {tokenSet.out?.map((token) => (
            <TokenRow key={uuidToken({ token })} token={token} />
          ))}
        </div>
      </CardContent>
      {/* <CardFooter>
          <div className="text-sm text-muted-foreground text-center w-full">
            Powered by superdapp.com
          </div>
        </CardFooter> */}
    </Card>
  );
};
