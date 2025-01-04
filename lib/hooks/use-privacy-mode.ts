import { atom, useAtom } from "jotai";
import { useLocalStorage } from "usehooks-ts";

export function usePrivacyMode() {
  const [isPrivacyMode, setIsPrivacyMode] = useLocalStorage<boolean>(
    "privacy-mode",
    false
  );

  return {
    isPrivacyMode,
    setIsPrivacyMode,
    togglePrivacyMode: () => setIsPrivacyMode((prev) => !prev),
  };
}
