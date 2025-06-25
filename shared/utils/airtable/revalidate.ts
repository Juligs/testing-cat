'use server';

import { revalidatePath } from 'next/cache';

export async function revalidateGrantsAPI() {
    return revalidatePath('/api/grants');
}

export async function revalidateInfraAPI() {
    return revalidatePath('/api/infra');
}

export async function revalidateProjectsAPI() {
    return revalidatePath('/api/projects');
}

export async function revalidateEventsAPI() {
    return revalidatePath('/api/events');
}
