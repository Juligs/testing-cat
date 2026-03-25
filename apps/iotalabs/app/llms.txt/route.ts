export const dynamic = 'force-static';

const LLMS_TXT = `# iotalabs

> iotalabs accelerates growth in the IOTA ecosystem through grants, builder support, growth initiatives, and strategic partnerships.

## Notes

- iotalabs is a separate entity from IOTA Foundation, focused on ecosystem growth.
- All funded projects must build on or connect to IOTA Mainnet (Layer 1, MoveVM).
- iotalabs is not the primary network provider — that is the IOTA Foundation and IOTA Mainnet.
- Three grant tiers: Tier 1 (up to $10k), Tier 2 (up to $50k), Tier 3 ($50k+).

## Build

- [iotalabs Overview](/llms/index.md): What iotalabs does — grants, builder support, ecosystem projects
- [IOTA Grants](/llms/grants.md): Funding tiers, eligibility, guidelines, and how to apply
- [Projects](/llms/projects.md): Ecosystem projects building on IOTA Mainnet
`;

export function GET() {
    return new Response(LLMS_TXT, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
        },
    });
}
