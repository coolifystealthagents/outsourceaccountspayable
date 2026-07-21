import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { metadataBase: new URL('https://outsourceaccountspayable.com'), title: { default: 'Outsource Accounts Payable | Managed AP Support', template: '%s | Outsource Accounts Payable' }, description: 'Plan outsourced accounts payable support for invoice intake, vendor follow-up, approval tracking, reporting, and finance controls.', openGraph: { title: 'Outsource Accounts Payable', description: 'Practical accounts payable staffing, task, control, and onboarding guides.', url: 'https://outsourceaccountspayable.com', siteName: 'Outsource Accounts Payable', type:'website' } };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='en'><body>{children}</body></html>}
