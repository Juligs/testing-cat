import { revalidatePath } from 'next/cache';

export async function revalidateGrantsAPI() {
    return revalidatePath('/api/grants');
}
