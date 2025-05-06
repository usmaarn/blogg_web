import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Link } from "react-router"
import { z } from "zod"
import { FaFacebookF, FaGoogle } from "react-icons/fa6";
import AppLogo from "@/components/ui/app-logo"


const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    remember: z.boolean().optional()
})

const LoginPage = () => {

    const form = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
            remember: false,
        }
    })

    function onSubmit(values: z.infer<typeof loginSchema>) {
        console.log(values);
    }

    return (
        <div className="flex flex-col gap-8 items-center justify-center w-screen md:h-screen py-8">
            <AppLogo to="/" />
            <div className="w-full max-w-[350px] px-1">
                <Card>
                    <CardHeader>
                        <CardTitle>Login</CardTitle>
                        <CardDescription>Enter your credentials to sign you in</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email Address</FormLabel>
                                            <FormControl>
                                                <Input type="email" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input type="password" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="remember"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <div className="flex items-center justify-between">
                                                    <Label>
                                                        <Checkbox checked={field.value} onCheckedChange={v => field.onChange(v)} />
                                                        <span>Remember Me</span>
                                                    </Label>
                                                    <Link className="text-sm font-medium hover:underline" to="/forgot-password">Forgot Password?</Link>
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button className="w-full">Login</Button>
                            </form>
                        </Form>
                    </CardContent>
                    <Separator className="relative">
                        <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 px-4 font-medium bg-white text-center py-1 text-xs rounded-full border">
                            Or Sign in With
                        </div>
                    </Separator>
                    <CardFooter className="flex-col gap-2">
                        <Button variant="destructive" className="w-full"><FaGoogle /> Google</Button>
                        <Button className="w-full bg-blue-600 hover:bg-blue-500"><FaFacebookF /> Facebook</Button>
                    </CardFooter>
                </Card>

                <div className="mt-3">
                    <p className="text-xs text-gray-600 text-center">Don't have an account? <Link className="text-blue-600 hover:underline" to="/register">Register</Link></p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage