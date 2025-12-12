import { EventsCards, formatDate, getPlatformFromUrl } from '.';

export function sortEventsByDate(events: EventsCards[]) {
    return [...events].sort(
        (a, b) => new Date(a.startDate ?? 0).getTime() - new Date(b.startDate ?? 0).getTime(),
    );
}

export function getFeaturedEvents(data: EventsCards[]) {
    const sortedByDate = sortEventsByDate(data);

    const foundationEvent = sortedByDate.find((e) =>
        Array.isArray(e.category)
            ? e.category.includes('IOTA Foundation')
            : e.category === 'IOTA Foundation',
    );

    const hackathonEvent = sortedByDate.find((e) =>
        Array.isArray(e.category) ? e.category.includes('Hackathon') : e.category === 'Hackathon',
    );

    const result: EventsCards[] = [];

    if (foundationEvent) result.push(foundationEvent);
    if (hackathonEvent) result.push(hackathonEvent);

    if (result.length < 2) {
        for (const ev of sortedByDate) {
            if (!result.includes(ev)) {
                result.push(ev);
                if (result.length === 2) break;
            }
        }
    }

    return result.slice(0, 2);
}

export function buildOverlineText(data: EventsCards) {
    const date = formatDate(data.startDate, data.endDate);
    const location = data.location ? ` (${getPlatformFromUrl(data.location)})` : '';
    return `${date}${location}`;
}
