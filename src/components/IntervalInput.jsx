import { useDispatch, useSelector } from 'react-redux';
import { setInterval } from '../redux/recurrenceSlice';

export default function IntervalInput() {
  const dispatch = useDispatch();
  const interval = useSelector((state) => state.recurrence.interval);

  return (
    <div className="flex items-center gap-2">
      <label className="text-gray-300">Every</label>
      <input
        type="number"
        value={interval}
        min={1}
        onChange={(e) => dispatch(setInterval(Number(e.target.value)))}
        className="w-20 px-3 py-2 border border-gray-600 rounded-md bg-gray-800 text-white focus:outline-none focus:ring focus:ring-blue-500"
      />
      <span className="text-gray-400">unit(s)</span>
    </div>
  );
}
