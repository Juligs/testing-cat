import { NextRequest, NextResponse } from 'next/server';
import { getIotaTVL } from '@lib/utils';

export const revalidate = 600;

export async function GET(req: NextRequest) {
    try {
        const iotaTVL = await getIotaTVL();
        return NextResponse.json(iotaTVL);
    } catch (error) {
        console.error('Error in evm-stats API route:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
