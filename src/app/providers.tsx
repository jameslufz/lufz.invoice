'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export function Providers({ children }: { children: React.ReactNode })
{
    return (
        <ChakraProvider>
            {children}
            <ProgressBar color='#0abde3' />
        </ChakraProvider>
    )
}