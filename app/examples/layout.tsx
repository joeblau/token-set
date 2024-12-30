"use client"

import { useToPng } from "@hugocxl/react-to-image";
import { useTheme } from 'next-themes'
import { Button } from "@/components/ui/button"
import { useRef, useEffect, useState } from "react"
import { usePathname } from "next/navigation"

const ExampleLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname()
    const [screenshotName, setScreenshotName] = useState("")
    
    useEffect(() => {
        const name = pathname.split("/").pop() || "screenshot"
        setScreenshotName(name)
    }, [pathname])
    
    const { theme, setTheme } = useTheme()
    const [{}, convert, ref] = useToPng<HTMLDivElement>({
        quality: 1,
        cacheBust: true,
        onSuccess: (data) => {
          const link = document.createElement("a");
          link.download = `${screenshotName}.png`;
          link.href = data;
          link.click();
        },
      });

    return <div  className="flex flex-col justify-center mx-auto">
        <div className="flex justify-center gap-4 p-4">
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
        </div>
        
        <div ref={ref}>
            <div  className="flex items-center mx-auto w-[512px] h-[768px] bg-transparent p-4">
                <div className="w-full">{children}</div>
            </div>
        </div>
    </div>;
};

export default ExampleLayout;
