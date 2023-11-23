import { type FC } from 'react'
import { type Metadata } from 'next'
import { ColorSchemeScript, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'

import { mantineThemeObject } from '@core/constants/configs/mantine'

import '@styles/globals.css'

export const metadata: Metadata = {
    title: 'Atomic Design Folder Structure',
}

const RootLayout: FC<{ children: JSX.Element }> = ({ children }) => {
    return (
        <html>
            <head>
                <ColorSchemeScript />
            </head>
            <body>
                <MantineProvider theme={mantineThemeObject}>{children}</MantineProvider>
            </body>
        </html>
    )
}

export default RootLayout
