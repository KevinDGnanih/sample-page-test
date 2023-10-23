import '../globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from '@/components/Navbar';
import Script from 'next/script';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
import Bottombar from '@/components/Bottombar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
title: "Sample Page",
description: "A sample page for coding test purposes",
}

export default function RootLayout({
children,
}: {
children: React.ReactNode
}) {
return (
<html lang="en">

<head>
  <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></Script>
</head>

<body className='overflow-hidden'>
  <Navbar />
  <main className='d-flex bg-body-tertiary'>
    <Sidebar />
    <section>
      {children}
    </section>
  </main>
  <Bottombar />
</body>

</html>

)
}