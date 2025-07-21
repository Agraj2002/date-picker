import { useDispatch, useSelector } from 'react-redux';
import { setStartDate, setEndDate } from '../redux/recurrenceSlice';

export default function DateRangePicker() {
  const dispatch = useDispatch();
  const { startDate, endDate } = useSelector((state) => state.recurrence);

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center">
      <div className="flex flex-col">
        <label className="text-gray-300 mb-1">Start Date</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => dispatch(setStartDate(e.target.value))}
          className="px-3 py-2 border border-gray-600 rounded-md bg-gray-800 text-white"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-gray-300 mb-1">End Date (Optional)</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => dispatch(setEndDate(e.target.value))}
          className="px-3 py-2 border border-gray-600 rounded-md bg-gray-800 text-white"
        />
      </div>
    </div>
  );
}
