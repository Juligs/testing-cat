import { VerticalTitle, VerticalTitleTextSize } from 'react-ui-kit';
import { Hero, TwoColumnsImageTemplate } from './components';

export default function Home() {
    return (
        <>
            <Hero id="hero-inverted" />
            <section
                id="first inverted"
                className="flex items-center justify-center w-full h-screen bg-darkest text-labs-neutral-100"
            >
                <div className="container py-20">
                    <TwoColumnsImageTemplate reverse image="/next.svg">
                        <VerticalTitle
                            inverted
                            title="Title"
                            size={VerticalTitleTextSize.Small}
                            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
                        />
                    </TwoColumnsImageTemplate>
                </div>
            </section>
            <section
                id="second"
                className="flex items-center justify-center w-full bg-labs-neutral-100 h-screen"
            >
                <div className="container py-20">
                    <TwoColumnsImageTemplate image="/next.svg">
                        <VerticalTitle
                            title="Title"
                            size={VerticalTitleTextSize.Small}
                            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
                        />
                    </TwoColumnsImageTemplate>
                </div>
            </section>
        </>
    );
}
