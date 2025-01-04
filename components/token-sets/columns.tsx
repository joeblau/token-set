import { ColumnDef } from "@tanstack/react-table";
import { formatUnits } from "viem";
import { z } from "zod";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { usePrivacyMode } from "@/lib/hooks/use-privacy-mode";
import { formatUSD } from "@/lib/format-usd";
import { Token,TokenSetRecord } from "@/lib/schema";
import { cn, getChangeColor } from "@/lib/utils";

import { ColumnHeader } from "./column-header";
import { TokenActions } from "./token-actions";

export const TokenDisplay = ({ token }: { token: z.infer<typeof Token> }) => (
  <div className="flex items-center h-12">
    <Avatar className="size-12 rounded-full outline outline-2 outline-background">
      <AvatarImage
        src={`https://ocfs.superdapp.com/${token.chainId}/${token.address}.svg`}
        alt="Token Image"
      />
      <AvatarFallback>{token.symbol.toUpperCase()}</AvatarFallback>
    </Avatar>
    <div className="ml-4 text-left">
      <div className="text-md font-semibold max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap">
        {token.name}
      </div>
      <div className="text-sm text-muted-foreground flex items-center gap-1">
        {token.symbol}
        {token.note && (
          <Badge variant="secondary" className="text-xs text-muted-foreground">
            {token.note}
          </Badge>
        )}
      </div>
    </div>
  </div>
);

export const TokenValue = ({
  token,
  isPrivacyMode,
}: {
  token: z.infer<typeof Token>;
  isPrivacyMode: boolean;
}) => (
  <div className="ml-auto text-right h-12 flex flex-col justify-center">
    <div className="text-md font-mono font-semibold">
      {formatUSD(isPrivacyMode ? token.balance.price : token.balance.value)}
    </div>
    <div className="text-sm font-mono text-muted-foreground">
      {isPrivacyMode
        ? "1.00"
        : Number(
            formatUnits(token.balance.units, token.decimals)
          ).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
    </div>
  </div>
);

const TokenSetSection = ({ tokens }: { tokens: z.infer<typeof Token>[] }) => (
  <div>
    {tokens?.map((token, index) => (
      <TokenDisplay key={"set" + index + token.publicKey} token={token} />
    ))}
  </div>
);

const TokenSetValueSection = ({
  tokens,
}: {
  tokens: z.infer<typeof Token>[];
}) => {
  const { isPrivacyMode } = usePrivacyMode();
  return (
    <div>
      {tokens?.map((token, index) => (
        <TokenValue
          key={"value" + index + token.publicKey}
          token={token}
          isPrivacyMode={isPrivacyMode}
        />
      ))}
    </div>
  );
};

export const TokenChangeSection = ({
  token,
}: {
  token: z.infer<typeof Token>;
}) => {
  const currentValue = token.balance.value;
  const previousValue = token.balance.valueTs.h24;
  const change = currentValue - previousValue;
  const percentChange =
    previousValue !== 0 ? (change / previousValue) * 100 : 0;
  const changeColor = getChangeColor(percentChange);

  return (
    <div className="flex flex-col items-end gap-1 h-12 justify-center">
      <div className="font-mono text-sm">
        {change >= 0 ? "+" : ""}
        {formatUSD(change)}
      </div>
      <Badge
        variant="secondary"
        className={cn("font-mono text-xs", changeColor)}
      >
        {percentChange >= 0 ? "+" : ""}
        {percentChange.toFixed(2)}%
      </Badge>
    </div>
  );
};

export const columns: ColumnDef<z.infer<typeof TokenSetRecord>>[] = [
  {
    accessorKey: "token-set",
    enableHiding: false,
    header: ({ column }) => <ColumnHeader column={column} title="Token Sets" />,
    accessorFn: (row) => {
      const tokenSetRecord = row as z.infer<typeof TokenSetRecord>;
      return tokenSetRecord.tokenSet.in[0].name;
    },
    cell: ({ row }) => {
      const tokenSetRecord = row.original as z.infer<typeof TokenSetRecord>;
      return (
        <div className="flex flex-col gap-4">
          <TokenSetSection tokens={tokenSetRecord.tokenSet.in} />
          {tokenSetRecord.tokenSet.out &&
            tokenSetRecord.tokenSet.out.length > 0 && (
              <TokenSetSection tokens={tokenSetRecord.tokenSet.out} />
            )}
        </div>
      );
    },
  },
  {
    accessorKey: "value-change",
    enableHiding: false,
    header: ({ column }) => (
      <ColumnHeader
        className="flex justify-end"
        column={column}
        title="24h Change"
      />
    ),
    accessorFn: (row) => {
      const tokenSetRecord = row as z.infer<typeof TokenSetRecord>;
      const currentValue = tokenSetRecord.tokenSet.totalValue;
      const previousValue = tokenSetRecord.tokenSet.totalValueTs.h24;
      const change = currentValue - previousValue;
      const percentChange =
        previousValue !== 0 ? (change / previousValue) * 100 : 0;
      return percentChange; // For sorting purposes
    },
    cell: ({ row }) => {
      const tokenSetRecord = row.original as z.infer<typeof TokenSetRecord>;
      return (
        <div className="flex flex-col gap-4">
          <div>
            {tokenSetRecord.tokenSet.in.map((token, index) => (
              <TokenChangeSection key={"change-in-" + index} token={token} />
            ))}
          </div>
          {tokenSetRecord.tokenSet.out &&
            tokenSetRecord.tokenSet.out.length > 0 && (
              <div>
                {tokenSetRecord.tokenSet.out.map((token, index) => (
                  <TokenChangeSection
                    key={"change-out-" + index}
                    token={token}
                  />
                ))}
              </div>
            )}
        </div>
      );
    },
  },
  {
    accessorKey: "total-value",
    enableHiding: false,
    header: ({ column }) => (
      <ColumnHeader
        className="flex justify-end"
        column={column}
        title="Total Value"
      />
    ),
    accessorFn: (row) => {
      const tokenSetRecord = row as z.infer<typeof TokenSetRecord>;
      return tokenSetRecord.tokenSet.totalValue;
    },
    cell: ({ row }) => {
      const tokenSetRecord = row.original as z.infer<typeof TokenSetRecord>;
      return (
        <div className="flex flex-col gap-4">
          <TokenSetValueSection tokens={tokenSetRecord.tokenSet.in} />
          {tokenSetRecord.tokenSet.out &&
            tokenSetRecord.tokenSet.out.length > 0 && (
              <TokenSetValueSection tokens={tokenSetRecord.tokenSet.out} />
            )}
        </div>
      );
    },
  },
  {
    id: "token-actions",
    enableHiding: false,
    cell: ({ row }) => {
      const tokenSetRecord = row.original as z.infer<typeof TokenSetRecord>;
      return (
        <TokenActions
          tokenSetRecord={tokenSetRecord}
          key={tokenSetRecord.tokenSet.publicKey}
        />
      );
    },
  },
];
