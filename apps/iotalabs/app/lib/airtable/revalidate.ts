'use server';
import { revalidatePath } from 'next/cache';

export async function revalidateInfraAPI() {
    return revalidatePath('/api/infra');
}

export async function revalidateGrantsAPI() {
    return revalidatePath('/api/grants');
}
