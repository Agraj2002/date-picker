import { useDispatch, useSelector } from 'react-redux';
import { setPattern } from '../redux/recurrenceSlice';

export default function PatternSelector() {
  const dispatch = useDispatch();
  const pattern = useSelector((state) => state.recurrence.pattern);

  return (
    <div>
      <label className="block text-gray-300 mb-1">Pattern (e.g., Second Tuesday)</label>
      <input
        type="text"
        value={pattern}
        onChange={(e) => dispatch(setPattern(e.target.value))}
        placeholder="e.g., Second Tuesday"
        className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-800 text-white focus:outline-none focus:ring focus:ring-blue-500"
      />
    </div>
  );
}
