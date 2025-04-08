import { NextRequest, NextResponse } from 'next/server';
import { getCommitteeMembers } from '@lib/utils';

export const revalidate = 600;

export async function GET(req: NextRequest) {
    try {
        const commitedMembers = await getCommitteeMembers();
        return NextResponse.json(commitedMembers);
    } catch (error) {
        console.error('Error in ConsensusStats API route:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
