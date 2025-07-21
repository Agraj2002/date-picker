import RecurrenceOptions from './components/RecurrenceOptions';
import IntervalInput from './components/IntervalInput';
import DaySelector from './components/DaySelector';
import PatternSelector from './components/PatternSelector';
import DateRangePicker from './components/DateRangePicker';
import CalenderPreview from './components/CalenderPreview';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center text-white">Recurring Date Picker</h1>
        <RecurrenceOptions />
        <IntervalInput />
        <DaySelector />
        <PatternSelector />
        <DateRangePicker />
        <CalenderPreview />
      </div>
    </div>
  );
}
