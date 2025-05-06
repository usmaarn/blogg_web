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


const schema = z.object({
    name: z.string().min(7),
    email: z.string().email(),
    password: z.string().min(8),
    terms: z.literal<boolean>(true),
})

const RegisterPage = () => {

    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            terms: true,
        }
    })

    function onSubmit(values: z.infer<typeof schema>) {
        console.log(values);
    }

    return (
        <div className="flex flex-col gap-8 items-center justify-center w-screen md:h-screen py-8">
            <AppLogo to="/" />
            <div className="w-full max-w-[350px] px-1">
                <Card>
                    <CardHeader>
                        <CardTitle>Register</CardTitle>
                        <CardDescription className="text-xs">Create an account with us to get you started.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Full Name</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
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
                                    name="terms"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Label>
                                                    <Checkbox checked={field.value} onCheckedChange={v => field.onChange(v)} />
                                                    <span>Accept <Link to="/terms" className="text-blue-500 hover:underline">Terms & Conditions</Link></span>
                                                </Label>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button className="w-full">Register</Button>
                            </form>
                        </Form>
                    </CardContent>
                    <Separator className="relative">
                        <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 px-4 font-medium bg-white text-center py-1 text-xs rounded-full border">
                            Or Sign up with
                        </div>
                    </Separator>
                    <CardFooter className="flex-col gap-2">
                        <Button variant="destructive" className="w-full"><FaGoogle /> Google</Button>
                        <Button className="w-full bg-blue-600 hover:bg-blue-500"><FaFacebookF /> Facebook</Button>
                    </CardFooter>
                </Card>

                <div className="mt-3">
                    <p className="text-xs text-gray-600 text-center">Already have an account? <Link className="text-blue-600 hover:underline" to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage