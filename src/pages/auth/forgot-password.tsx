import AppLogo from "@/components/ui/app-logo"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Link } from "react-router"
import { z } from "zod"


const schema = z.object({
    email: z.string().email(),
})

const ForgotPasswordPage = () => {

    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            email: "",
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
                        <CardTitle>Forgot Password</CardTitle>
                        <CardDescription>Gain back you access to our platform</CardDescription>
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
                                                <Input placeholder="Enter email address.." type="email" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button className="w-full">Send Reset Link</Button>
                            </form>
                        </Form>
                    </CardContent>
                    <CardFooter className="flex-col gap-2">

                    </CardFooter>
                </Card>

                <div className="mt-3">
                    <p className="text-xs text-gray-600 text-center">Remembered your password? <Link className="text-blue-600 hover:underline" to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    )
}

export default ForgotPasswordPage