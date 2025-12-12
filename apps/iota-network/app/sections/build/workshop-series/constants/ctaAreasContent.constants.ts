import { CtaCard } from 'react-ui-kit';

type CtaAreasProps = React.ComponentProps<typeof CtaCard> & {
    links: {
        text: string;
        link: string;
    }[];
};

export const CTA_AREAS_CONTENT: CtaAreasProps[] = [
    {
        title: 'Are you building on IOTA?',
        subtitle: 'Register your application and get featured on the official website',
        image: '/build/workshop-series/cta-areas/building_iota.png',
        links: [
            {
                text: 'Register now',
                link: 'https://airtable.com/appQqzg74YoTqK3Ht/pagAntotjuYq5XNlT/form',
            },
        ],
    },
    {
        title: 'Join Us in Building on the IOTA Mainnet',
        subtitle: 'We invite innovators to showcase real-world impact with IOTA',
        body: 'With technical resources, community support, and funding, you’ll gain the tools to bring your vision to life.',
        image: '/build/workshop-series/cta-areas/join_us.png',
        links: [
            {
                text: 'Apply now',
                link: 'https://airtable.com/appoUvqpIo5bkDoSO/pag16jQChVVMh3zyh/form?ref=blog.iota.org',
            },
            {
                text: 'Email us',
                link: 'maiilto:partnerships@iota.org',
            },
        ],
    },
];
