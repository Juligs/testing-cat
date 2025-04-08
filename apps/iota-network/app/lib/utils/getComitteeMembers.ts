import { getIotaClient } from './getIotaClient';

export interface CommitteeMembersProps {
    committeeMembers: number | null;
}

export async function getCommitteeMembers(): Promise<CommitteeMembersProps> {
    const client = getIotaClient();
    let committeeMembers: number | null = null;
    try {
        const systemState = await client.getLatestIotaSystemStateV2();
        if ('V2' in systemState) {
            committeeMembers = systemState.V2.committeeMembers.length;
        } else if ('V1' in systemState) {
            committeeMembers = systemState.V1.activeValidators.length;
        } else {
            console.error('No V1 or V2 found in SystemState');
        }
    } catch (error) {
        console.error('Error fetching committee members:', error);
    }
    return {
        committeeMembers,
    };
}
