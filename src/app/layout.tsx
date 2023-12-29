import '@/styles/index.scss'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'LoopPlay',
	description: 'LoopPlay description',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	)
}
