/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://acrtracking.stealthagents.us; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https:; connect-src 'self' https://leads.stealthagents.com https://acrtracking.stealthagents.us; frame-src https://go.oncehub.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests" },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },
];
const nextConfig = {
  outputFileTracingRoot: process.cwd(),
  async redirects(){return [
    {source:'/:path*',has:[{type:'header',key:'cf-visitor',value:'.*"scheme":"http".*'}],destination:'https://outsourceaccountspayable.com/:path*',permanent:true},
    {source:'/:path*',has:[{type:'header',key:'x-forwarded-proto',value:'http'}],destination:'https://outsourceaccountspayable.com/:path*',permanent:true},
    {source:'/contact',destination:'/contact-us',permanent:true},
    {source:'/cancellation',destination:'/cancellation-policy',permanent:true},
    {source:'/research/page/12',destination:'/research',permanent:true},
  ]},
  async headers(){return [{source:'/(.*)',headers:securityHeaders}]},
};
export default nextConfig;
