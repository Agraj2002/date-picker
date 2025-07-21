// src/utils/generateRecurrence.js

export function generateRecurringDates({
  type,
  interval,
  daysOfWeek,
  startDate,
  endDate,
}) {
  if (!startDate) return [];

  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date(start);
  if (!endDate) end.setMonth(end.getMonth() + 3); // default range if end date is not provided

  const results = [];

  // For weekly recurrence, convert day names to numbers once
  const dayMap = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
  };
  const dayNumbers = (daysOfWeek || []).map((day) =>
    typeof day === 'string' ? dayMap[day.toLowerCase()] : day
  );

  let current = new Date(start);

  while (current <= end) {
    switch (type) {
      case 'daily':
        results.push(new Date(current));
        current.setDate(current.getDate() + interval);
        break;

      case 'weekly':
        // Add this day if it matches selected weekdays
        if (dayNumbers.includes(current.getDay())) {
          results.push(new Date(current));
        }
        current.setDate(current.getDate() + 1);
        break;

      case 'monthly':
        results.push(new Date(current));
        current.setMonth(current.getMonth() + interval);
        break;

      case 'yearly':
        results.push(new Date(current));
        current.setFullYear(current.getFullYear() + interval);
        break;

      default:
        break;
    }
  }

  return results;
}
