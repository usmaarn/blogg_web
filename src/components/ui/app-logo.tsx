import { cn } from "@/lib/utils"
import { Link, type LinkProps } from "react-router"

const AppLogo = ({ className, ...props }: LinkProps) => {
    return (
        <Link className={cn("text-xl font-black uppercase", className)} {...props}>Blogg</Link>
    )
}

export default AppLogo