import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"

interface ScreenshotProps extends React.HTMLAttributes<HTMLDivElement> {
  imageName: string;
}

const Screenshot = React.forwardRef<HTMLDivElement, ScreenshotProps>(
  ({ className, imageName, ...props }, ref) => (
    <Card className="bg-black border-black">
      <CardContent className="p-3">
        <div className="aspect-[10/19.5] bg-zinc-800 rounded-[2.5rem] p-4 relative border-1 border-gray-500">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-900 rounded-b-3xl"></div>
          <div className="w-full h-full bg-zinc-700 rounded-[2rem] flex items-center justify-center">
            <img 
              src={imageName} 
              alt="IPhone Screenshot of HueTrek UI" 
              className="w-full h-full "
            />
          </div>
        </div>
      </CardContent>
    </Card>
))
Screenshot.displayName = "Screenshot"

export { Screenshot }
