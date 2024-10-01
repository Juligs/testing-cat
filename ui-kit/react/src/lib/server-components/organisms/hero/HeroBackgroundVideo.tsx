import { Video } from '@lib/server-components/molecules';

export function HeroBackgroundVideo({ ...videoProps }: React.ComponentProps<typeof Video>) {
    return (
        <div className="absolute top-0 left-0 right-0 bottom-0 object-cover w-full h-full z-[-1]">
            <Video
                className="max-h-full w-full h-full object-cover object-center"
                {...videoProps}
            />
        </div>
    );
}
