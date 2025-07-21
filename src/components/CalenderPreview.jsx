import { useSelector } from 'react-redux';
import { generateRecurringDates } from '../utils/generateRecurrence';

export default function CalenderPreview() {
  const recurrence = useSelector((state) => state.recurrence);
  const dates = generateRecurringDates(recurrence);

  return (
    <div className="bg-gray-800 rounded-md p-4 border border-gray-600">
      <h2 className="text-lg font-semibold mb-2 text-white">Generated Dates:</h2>
      {dates.length === 0 ? (
        <p className="text-gray-400">No dates to display.</p>
      ) : (
        <ul className="list-disc pl-5 space-y-1 text-gray-300">
          {dates.map((date, i) => (
            <li key={i}>
              {date.toLocaleDateString('en-US', {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
