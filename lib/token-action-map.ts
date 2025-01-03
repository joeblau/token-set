import { z } from "zod";
import { Action } from "@/lib/schema";

import {
  HandCoins,
  Send,
  Download,
  Sprout,
  Flame,
  Vote,
  UserPlus,
  Gift,
  Check,
  XCircle,
  RefreshCw,
  Hand,
  Undo2,
  Banknote,
  PauseCircle,
  Lock,
  Droplet,
  Hammer,
  ImageDown,
  VaultIcon,
  PiggyBankIcon,
  Unlock,
  UnlockIcon,
  TractorIcon,
} from "lucide-react";
import { AtmMachineCreditCard, HandDroppingCoin, HandHoldingCoin } from "@/components/icons";
import { createElement } from "react";

interface IconActionMap {
  icon: React.ElementType; // Changed from React.ReactNode to React.ElementType
  title: string;
}

export const actionMap: Record<z.infer<typeof Action>, IconActionMap> = {
  SCREENSHOT: {
    icon: ImageDown,
    title: "Screenshot",
  },
  BUY: {
    icon: HandHoldingCoin,
    title: "Buy",
  },
  SELL: {
    icon: HandDroppingCoin,
    title: "Sell",
  },
  CLAIM: {
    icon: HandCoins,
    title: "Claim",
  },
  SEND: {
    icon: Send,
    title: "Send",
  },
  RECEIVE: {
    icon: Download,
    title: "Receive",
  },
  MINT: {
    icon: Sprout,
    title: "Mint",
  },
  BURN: {
    icon: Flame,
    title: "Burn",
  },
  VOTE: {
    icon: Vote,
    title: "Vote",
  },
  DELEGATE: {
    icon: UserPlus,
    title: "Delegate",
  },
  COLLECT: {
    icon: Gift,
    title: "Collect",
  },
  APPROVE: {
    icon: Check,
    title: "Approve",
  },
  REVOKE: {
    icon: XCircle,
    title: "Revoke",
  },
  SWAP: {
    icon: RefreshCw,
    title: "Swap",
  },
  BORROW: {
    icon: Hand,
    title: "Borrow",
  },
  REPAY: {
    icon: Undo2,
    title: "Repay",
  },
  DEPOSIT_FIAT: {
    icon: VaultIcon,
    title: "Deposit Fiat",
  },
  PAUSE_FIAT: {
    icon: PauseCircle,
    title: "Pause Fiat",
  },
  WITHDRAW_FIAT: {
    icon: Banknote,
    title: "Withdraw Fiat",
  },
  DEPOSIT_CREDIT: {
    icon: Banknote,
    title: "Deposit Credit",
  },
  PAUSE_CREDIT: {
    icon: PauseCircle,
    title: "Pause Credit",
  },
  WITHDRAW_CREDIT: {
    icon: Banknote,
    title: "Withdraw Credit",
  },
  DEPOSIT_STAKE: {
    icon: Lock,
    title: "Deposit Stake",
  },
  PAUSE_STAKE: {
    icon: PauseCircle,
    title: "Pause Stake",
  },
  WITHDRAW_STAKE: {
    icon: UnlockIcon,
    title: "Withdraw Stake",
  },
  DEPOSIT_COLLATERAL: {
    icon: VaultIcon,
    title: "Deposit Collateral",
  },
  PAUSE_COLLATERAL: {
    icon: PauseCircle,
    title: "Pause Collateral",
  },
  WITHDRAW_COLLATERAL: {
    icon: AtmMachineCreditCard,
    title: "Withdraw Collateral",
  },
  DEPOSIT_LIQUIDITY: {
    icon: Droplet,
    title: "Deposit Liquidity",
  },
  PAUSE_LIQUIDITY: {
    icon: PauseCircle,
    title: "Pause Liquidity",
  },
  WITHDRAW_LIQUIDITY: {
    icon: Droplet,
    title: "Withdraw Liquidity",
  },
  DEPOSIT_FARM: {
    icon: PiggyBankIcon,
    title: "Deposit Farm",
  },
  PAUSE_FARM: {
    icon: PauseCircle,
    title: "Pause Farm",
  },
  WITHDRAW_FARM: {
    icon: TractorIcon,
    title: "Withdraw Farm",
  },
};
