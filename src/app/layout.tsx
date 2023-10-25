import { type FC } from 'react'
import { type Metadata } from 'next'

import '@styles/globals.css'

export const metadata: Metadata = {
    title: 'Atomic Design Folder Structure',
}

const RootLayout: FC<{ children: JSX.Element }> = ({ children }) => {
    return (
        <html>
            <body>{children}</body>
        </html>
    )
}

export default RootLayout