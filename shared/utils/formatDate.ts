export function formatDate(start?: string, end?: string): string {
    if (!start || !end) return '';

    const startDate = new Date(start);
    const endDate = new Date(end);

    // Avoid invalid dates
    if (endDate < startDate) return '';

    const sameDay = startDate.toDateString() === endDate.toDateString();
    const sameMonth = startDate.getMonth() === endDate.getMonth();
    const sameYear = startDate.getFullYear() === endDate.getFullYear();

    const startDay = startDate.getDate();
    const endDay = endDate.getDate();
    const startMonth = startDate.toLocaleString('en-US', { month: 'long' });
    const endMonth = endDate.toLocaleString('en-US', { month: 'long' });
    const startYear = startDate.getFullYear();
    const endYear = endDate.getFullYear();

    if (sameDay) {
        return `${startDay} ${startMonth} ${startYear}`;
    }

    if (sameMonth && sameYear) {
        return `${startDay}-${endDay} ${startMonth} ${startYear}`;
    }

    if (sameYear) {
        return `${startDay} ${startMonth} - ${endDay} ${endMonth} ${startYear}`;
    }

    // Different year
    return `${startDay} ${startMonth} ${startYear} - ${endDay} ${endMonth} ${endYear}`;
}
