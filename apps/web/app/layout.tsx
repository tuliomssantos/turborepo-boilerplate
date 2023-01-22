import { SessionProvider } from 'components/SessionProvider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  )
}
