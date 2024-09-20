"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  email: z.string(),
  message: z.any()
})
 
 
export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  })

  function onSubmit() {
    
  }

 
  return (
    <Form {...form}>
      <form className="space-y-12" action="http://localhost:5000/send_message" method="POST">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-body text-xl">Email</FormLabel>
              <FormControl className="text-base">
                <Input placeholder="email" {...field} type="email" name="email" id="email" />
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-body text-xl">Message</FormLabel>
              <FormControl className="text-base">
                <Textarea placeholder="message" {...field} name="message" id="message"/>
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
        />
        <Button type="submit" className="bg-secondary-background font-body text-lg p-5 ">Submit</Button>
      </form>
    </Form>
  )
}