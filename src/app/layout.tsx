import { NotificationsProvider } from '@/components/NotificationsProvider'
import '@/styles/index.scss'
import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
	title: 'LoopPlay',
	description: 'LoopPlay description',
}

export interface IRootLayout {
	children: ReactNode
}

export default function RootLayout({ children }: IRootLayout) {
	return (
		<html lang="en">
			<body>
				<NotificationsProvider>{children}</NotificationsProvider>
			</body>
		</html>
	)
}
