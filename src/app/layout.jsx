import '@/globals/globals.css'

export const metadata = {
  title: 'Conlang Tools',
  description: 'This is Reproka\'s Conlang Tools section. Here we offer many tools to make your conlanging experience as enjoyable as possible.'
}

export const viewport = {
  themeColor: '#06105a'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
