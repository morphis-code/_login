"use client"

import { useState } from "react"

import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"



const sex = [
    {
      value: "male",
      label: "Male",
    },
    {
      value: "female",
      label: "Female",
    },
    {
      value: "others",
      label: "Others",
    }
  ]



export default function Register(){

    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")


    return(
        <form className="w-full max-w-[400px]">
            <Card className="w-full border-0 shadow-none lg:border-1 lg:shadow ">
            <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>Um login comum com um estilo comum...</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-2 mb-5">
                    <Label>Name</Label>
                    <Input/>
                </div>
                <div className="flex flex-col gap-2 mb-5">
                    <Label>Email</Label>
                    <Input/>
                </div>
                <div className="flex flex-col gap-2 mb-5">
                    <Label>Sex</Label>
                    <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-[200px] justify-between"
                        >
                        {value
                            ? sex.find((sex) => sex.value === value)?.label
                            : "Select Sex"}
                        <ChevronsUpDown className="opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                        <Command>
                        <CommandInput placeholder="Search Sex..." className="h-9" />
                        <CommandList>
                            <CommandEmpty>No sex found.</CommandEmpty>
                            <CommandGroup>
                            {sex.map((sex) => (
                                <CommandItem
                                key={sex.value}
                                value={sex.value}
                                onSelect={(currentValue) => {
                                    setValue(currentValue === value ? "" : currentValue)
                                    setOpen(false)
                                }}
                                >
                                {sex.label}
                                <Check
                                    className={cn(
                                    "ml-auto",
                                    value === sex.value ? "opacity-100" : "opacity-0"
                                    )}
                                />
                                </CommandItem>
                            ))}
                            </CommandGroup>
                        </CommandList>
                        </Command>
                    </PopoverContent>
                    </Popover>                
                </div>

                <div className="flex flex-col gap-2 mb-7">
                    <Label>Password</Label>
                    <Input/>
                </div>
                <div className="flex flex-col gap-2 mb-7">
                    <Label>Confirm Password</Label>
                    <Input/>
                </div>
                <Button className="w-full cursor-pointer" type="submit">Enviar</Button>
            </CardContent>
            </Card>            
        </form>
    )
}