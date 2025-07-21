import { useDispatch, useSelector } from 'react-redux';
import { setDaysOfWeek } from '../redux/recurrenceSlice';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function DaySelector() {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.recurrence.daysOfWeek);

  const toggleDay = (day) => {
    const updated = selected.includes(day)
      ? selected.filter((d) => d !== day)
      : [...selected, day];
    dispatch(setDaysOfWeek(updated));
  };

  return (
    <div className="flex flex-wrap gap-2">
      {days.map((day) => (
        <button
          key={day}
          onClick={() => toggleDay(day)}
          className={`px-3 py-1 rounded-full border ${
            selected.includes(day)
              ? 'bg-blue-600 text-white'
              : 'bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700'
          }`}
        >
          {day}
        </button>
      ))}
    </div>
  );
}
