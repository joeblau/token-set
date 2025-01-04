"use client"

import { useToPng } from "@hugocxl/react-to-image";
import { useTheme } from 'next-themes'
import { Button } from "@/components/ui/button"
import { useRef, useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { useSkeleton } from "@/lib/hooks/use-sekeleton";
import Link from "next/link"

const ExampleLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname()
    const [screenshotName, setScreenshotName] = useState("")
    const { isLoading, startLoading, stopLoading } = useSkeleton();
    useEffect(() => {
        const name = pathname.split("/").pop() || "screenshot"
        setScreenshotName(name)
    }, [pathname])
    
    const { theme, setTheme } = useTheme()
    const [{}, convert, ref] = useToPng<HTMLDivElement>({
        quality: 1,
        cacheBust: true,
        onSuccess: async (data) => {
          const link = document.createElement("a");
          link.download = `${screenshotName}${isLoading ? '-skeleton' : ''}.png`;
          link.href = data;
          link.click();
        },
      });

    return <div className="flex flex-col justify-center mx-auto">
        <div className="flex justify-center gap-4 p-4">
            <Link href="/examples">
                <Button variant="outline">
                    Back to Examples
                </Button>
            </Link>

            <Button 
                variant="outline"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
                {theme === 'dark' ? 'Light' : 'Dark'} Mode
            </Button>
            <Button
                variant="outline"
                onClick={convert}
            >
                Screenshot
            </Button>

            <div className="flex items-center justify-center space-x-2">
                <Switch id="loading" onCheckedChange={(checked) => checked ? startLoading() : stopLoading()} />
                <Label htmlFor="loading">Skeleton</Label>
            </div>
        </div>
        
        <div className="flex items-center mx-auto ">
            <div ref={ref} className="flex items-center w-[512px] h-[768px] bg-transparent p-4">
                <div className="w-full">{children}</div>
            </div>
        </div>
    </div>;
};

export default ExampleLayout;
