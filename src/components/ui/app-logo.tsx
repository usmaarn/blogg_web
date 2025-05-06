import { cn } from "@/lib/utils"
import { Link, type LinkProps } from "react-router"

const AppLogo = ({ className, ...props }: LinkProps) => {
    return (
        <Link className={cn("text-xl font-black", className)} {...props}>Sub.Telzz</Link>
    )
}

export default AppLogo