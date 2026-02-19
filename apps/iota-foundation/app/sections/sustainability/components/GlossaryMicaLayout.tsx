import { Accordion } from '@repo/shared/components';
import { GLOSSARY_MICA_CONTENT } from '../constants';
import Link from 'next/link';

export function GlossaryMicaLayout() {
    return (
        <div className="flex flex-col ">
            {GLOSSARY_MICA_CONTENT.map((data, index) => (
                <Accordion key={data.title} title={data.title} defaultOpen={index === 0}>
                    <div className="flex flex-col gap-4 max-w-[708px] labs:text-labs-primary-30">
                        <p className="text-title-sm font-medium">{data.longName}</p>
                        <p className="text-body-lg text-medium">{data.definition}</p>

                        <Link
                            href={data.source}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-medium border-b border-transparency-black-16 pb-[2px] max-w-max text-label-md"
                        >
                            View source
                        </Link>
                    </div>
                </Accordion>
            ))}
        </div>
    );
}
