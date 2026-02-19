import { getMicaData, MicaDataType } from '@lib/utils/getMicaDataTypes';
import { NextRequest, NextResponse } from 'next/server';

export const revalidate = 14400;
export async function GET(req: NextRequest) {
    try {
        const dataType = req.nextUrl.searchParams.get('type');

        if (!dataType) {
            return NextResponse.json({ error: 'Unsupported data type' }, { status: 400 });
        }

        const admittedTypes = Object.values(MicaDataType);

        if (!admittedTypes.includes(dataType as MicaDataType)) {
            return NextResponse.json({ error: 'Unsupported data type' }, { status: 400 });
        }

        const micaData = await getMicaData(dataType as MicaDataType);
        return NextResponse.json(micaData);
    } catch (error) {
        console.error('Error in MiCA API route:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
