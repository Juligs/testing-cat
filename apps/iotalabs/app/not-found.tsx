import Link from 'next/link';
import { Button } from 'react-ui-kit';

export default function NotFound() {
    return (
        <div className="hero-height w-full flex flex-col items-center justify-center gap-6">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-display-lg">404</h1>
                <h2 className="text-title-lg">Not Found</h2>
            </div>
            <Link href="/">
                <Button>Return Home</Button>
            </Link>
        </div>
    );
}
