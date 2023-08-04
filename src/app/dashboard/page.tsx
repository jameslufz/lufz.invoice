"use client"

import Content from "@/app/components/layouts/content"
import { Heading } from "@chakra-ui/react"

export default function Dashboard ()
{
    return  (
        <Content topic="Overview">
            <Heading as="h1" textAlign="center">LUFZ Billing V.0.1.0</Heading>
        </Content>
    )
}