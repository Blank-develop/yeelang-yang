import { useState } from 'react';
import { differenceInMonths, format, parse } from 'date-fns';

function DateCalculator() {
  const [startMonthYear, setStartMonthYear] = useState('');
  const [endMonthYear, setEndMonthYear] = useState('');
  const [result, setResult] = useState(null);

  const calculateDateDifference = () => {
    const start = parse(startMonthYear, 'yyyy-MM', new Date());
    const end = parse(endMonthYear, 'yyyy-MM', new Date());

    const months = differenceInMonths(end, start);
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    setResult({ years, months: remainingMonths });
  };

  return (
    <div>
      <h2>Date Calculator</h2>
      <div>
        <label>Start Month and Year: </label>
        <input
          type="month"
          value={startMonthYear}
          onChange={(e) => setStartMonthYear(e.target.value)}
        />
      </div>
      <div>
        <label>End Month and Year: </label>
        <input
          type="month"
          value={endMonthYear}
          onChange={(e) => setEndMonthYear(e.target.value)}
        />
      </div>
      <button onClick={calculateDateDifference} style={{ marginTop: '10px' }}>
        Calculate
      </button>
      {result && (
        <div>
          <p>Years: {result.years}</p>
          <p>Months: {result.months}</p>
        </div>
      )}
    </div>
  );
}

export default DateCalculator;
