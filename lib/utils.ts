import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Token } from "./schema";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getChangeColor = (percentChange: number) => {
  if (percentChange > 1) return "positive-change";
  if (percentChange < -1) return "negative-change";
  return "text-muted-foreground";
};

export const uuidToken = ({
  token,
}: {
  token: z.infer<typeof Token>;
}): string => {
  return [
    token.publicKey,
    token.address ?? "",
    token.chainId,
    token.tokenId.toString(),
  ].join("_");
};
