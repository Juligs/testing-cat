import PrivacyPolicy from './policy.mdx';

const TITLE = 'Privacy Policy';

export default function Page() {
    return (
        <div className="flex flex-col items-center gap-y-20 pt-10">
            <h1 className="text-center text-headline-lg font-semibold">{TITLE}</h1>
            <div className="prose prose-labs max-w-none">
                <PrivacyPolicy />
            </div>
        </div>
    );
}
