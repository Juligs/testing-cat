import type { Metadata } from 'next';
import './globals.css';
import 'react-ui-kit/style.css';

export const metadata: Metadata = {
    title: 'IOTA Labs',
    description: 'IOTA Labs',
};

interface RootLayoutProps {
    children: React.ReactNode;
}
export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" className="labs">
            <body>{children}</body>
        </html>
    );
}
