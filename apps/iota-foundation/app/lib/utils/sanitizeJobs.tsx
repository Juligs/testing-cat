export interface JobData {
    id: number;
    name: string;
    department: string;
}

export interface SanitizedJobData extends JobData {
    link: string;
}

export function sanitizeJobs(jobs: JobData[]): SanitizedJobData[] {
    return jobs.map((job) => ({
        ...job,
        link: `https://iota-foundation.jobs.personio.com/job/${job.id}`,
    }));
}
