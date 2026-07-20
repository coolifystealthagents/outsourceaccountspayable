import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { metadataBase: new URL('https://outsourceaccountspayable.com'), title: { default: 'Outsource Accounts Payable | Offshore outsourcing guides', template: '%s | Outsource Accounts Payable' }, description: 'our staffing team-style guides for outsource accounts payable: services, onboarding, role scope, and provider questions.', openGraph: { title: 'Outsource Accounts Payable', description: 'Practical outsourcing guides for business teams.', url: 'https://outsourceaccountspayable.com', siteName: 'Outsource Accounts Payable', type:'website' } };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='en'><body>{children}</body></html>}
