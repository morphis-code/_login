"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import Link from "next/link"
import { useState } from "react"


export default function Login(){


    const [formData, setFormData] = useState({
        email:"",
        password:""
    })

    const handleChange = (e) => {
        setFormData({
            ...formData, 
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try{
            const response = await fetch("http://localhost:3333/api/login", {
                method:"POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(formData)
            })

            if(!response.ok){
                throw new Error("Login Error")
            }
            const data = await response.json()
            
            console.log("Login succes", data)
        }catch(error){
            console.error(error)
        }
    }

    return(
        <form className="w-full max-w-[400px]" onSubmit={handleSubmit}>
            <Card className="w-full border-0 shadow-none lg:border-1 lg:shadow ">
            <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>Um login comum com um estilo comum...</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-2 mb-5">
                    <Label>Email</Label>
                    <Input name="email" type="email" value={formData.email} onChange={handleChange}/>
                </div>
                <div className="flex flex-col gap-2 mb-7">
                    <Label>Password</Label>
                    <Input name="password" type="password" value={formData.password} onChange={handleChange}/>
                </div>
                <Button className="w-full cursor-pointer" type="submit">Enviar</Button>
            </CardContent>
            <CardFooter>
                <Link href="/register">Cadastra-se</Link>
            </CardFooter>
            </Card>            
        </form>
    )
}