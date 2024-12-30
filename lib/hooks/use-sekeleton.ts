import { atom, useAtom } from "jotai";

const skeletonAtom = atom(false);

export function useSkeleton() {
  const [isLoading, setIsLoading] = useAtom(skeletonAtom);

  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);

  return {
    isLoading,
    startLoading,
    stopLoading
  };
}
