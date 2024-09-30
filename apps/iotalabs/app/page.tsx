import { VerticalTitle, VerticalTitleTextSize } from 'react-ui-kit';
import { Hero, TwoColumnsImageTemplate } from './components';

export default function Home() {
    return (
        <>
            <Hero />
            <div className="container py-20">
                <TwoColumnsImageTemplate reverse image="/next.svg">
                    <VerticalTitle
                        title="Title"
                        size={VerticalTitleTextSize.Small}
                        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
                    />
                </TwoColumnsImageTemplate>
            </div>
            <div className="container py-20">
                <TwoColumnsImageTemplate image="/next.svg">
                    <VerticalTitle
                        title="Title"
                        size={VerticalTitleTextSize.Small}
                        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
                    />
                </TwoColumnsImageTemplate>
            </div>
        </>
    );
}
