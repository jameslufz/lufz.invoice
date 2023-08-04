import { Sarabun } from 'next/font/google'
import { Providers } from './providers'

const inter = Sarabun({ subsets: ['thai'], weight: '400' })

export default function RootLayout({ children }: { children: React.ReactNode })
{
    return (
        <html lang="en">
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <body className={inter.className}>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    )
}
