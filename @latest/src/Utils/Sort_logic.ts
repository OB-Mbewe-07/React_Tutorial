import type { AnimeItem } from "../data/data";
import type { Mode } from "../data/data";

 enum Day{
    Sunday = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6
} 

export function sortByNextMovie(items: AnimeItem[], isClosestorFurthest: boolean): AnimeItem[] {
   
    const now = new Date();

    const getClosestDate = (showtimes: string[]): Date => {
        const futureDates = showtimes.map(time => {
            const [dayStr, timeStr] = time.split(' ');
            const [hours, minutes] = timeStr.split(':').map(Number);

            const date = new Date(now);
            const targetDay = Day[dayStr as keyof typeof Day];
            const currentDay = date.getDay();

            let dayUntil = targetDay - currentDay;
            if (dayUntil < 0) dayUntil += 7; // Wrap around to next week

            date.setDate(now.getDate() + dayUntil);
            date.setHours(hours, minutes, 0, 0);

            if(date < now) date.setDate(date.getDate() + 7); // Ensure it's in the future
            
            return date;
        });

        return futureDates.sort((a, b) => {
           return isClosestorFurthest ? a.getTime() - b.getTime() : b.getTime() - a.getTime();
        })[0]; 
    };

    return [...items].sort((a, b) => {
        const dateA = getClosestDate(a.showtimes);
        const dateB = getClosestDate(b.showtimes);
        return isClosestorFurthest ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
    });   
}

export function sortByPrice(items: AnimeItem[], ascending: boolean = true): AnimeItem[] {
  return items.sort((a, b) => ascending ? a.price - b.price : b.price - a.price);
}

export function sortByRating(items: AnimeItem[], ascending: boolean = true): AnimeItem[]{
    return items.sort((a,b) => ascending ? a.stars - b.stars : b.stars - a.stars);
}

export function searchByTitle(items: AnimeItem[], query: string): AnimeItem[] {
    const lowerQuery = query.toLowerCase();
    return items.filter(item => item.title.toLowerCase().includes(lowerQuery));
}

export default function sortItems(items: AnimeItem[], mode: Mode, searchQuery?: string): AnimeItem[] {
    switch(mode) {
        case "closest":
            return sortByNextMovie(items, true);
        case "furthest":
            return sortByNextMovie(items, false);
        case "price-asc":
            return sortByPrice(items, true);
        case "price-desc":
            return sortByPrice(items, false);
        case "rating-asc":
            return sortByRating(items, true);
        case "rating-desc":
            return sortByRating(items, false);
        case "search":
            return searchByTitle(items, searchQuery || "");
        default:
            return items;
    };
};
