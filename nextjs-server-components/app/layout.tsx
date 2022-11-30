import Link from 'next/link'
// import './globals.css';
import "./styles/output.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />

      <body>
        <main className="space-y-4">
          <nav className="text-xl font-semibold">
            <div className="space-x-8 border border-green-500 p-4 rounded">
              <Link href="/">Home</Link>
              <Link href="/fines">Fines</Link>
            </div>
          </nav>

          {children}
        </main>
      </body>
    </html>
  )
}
