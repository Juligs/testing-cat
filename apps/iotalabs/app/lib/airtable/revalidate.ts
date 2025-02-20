'use server';
import { revalidatePath } from 'next/cache';

export async function revalidateGrantsAPI() {
    return revalidatePath('/api/grants');
}

export async function revalidateProjectsAPI() {
    return revalidatePath('/api/dataProjects');
}
