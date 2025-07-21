import { useDispatch, useSelector } from 'react-redux';
import { setType } from '../redux/recurrenceSlice';

const options = ['daily', 'weekly', 'monthly', 'yearly'];

export default function RecurrenceOptions() {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.recurrence.type);

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => dispatch(setType(opt))}
          className={`px-4 py-2 rounded-full border transition-colors ${
            selected === opt
              ? 'bg-blue-600 text-white'
              : 'bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700'
          }`}
        >
          {opt.charAt(0).toUpperCase() + opt.slice(1)}
        </button>
      ))}
    </div>
  );
}
