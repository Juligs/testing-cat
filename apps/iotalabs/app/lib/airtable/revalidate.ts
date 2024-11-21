'use server';
import { revalidatePath } from 'next/cache';

export async function revalidateInfraAPI() {
    return revalidatePath('/api/dataInfraSlider');
}

export async function revalidateGrantsAPI() {
    return revalidatePath('/api/dataGrantsSlider');
}
