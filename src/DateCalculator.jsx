import  { useState } from 'react';

function DateCalculator() {
  const [startMonthYear, setStartMonthYear] = useState('');
  const [endMonthYear, setEndMonthYear] = useState('');
  const [result, setResult] = useState(null);

  const calculateDateDifference = () => {
    const [startYear, startMonth] = startMonthYear.split('-');
    const [endYear, endMonth] = endMonthYear.split('-');

    const startDate = new Date(parseInt(startYear), parseInt(startMonth) - 1, 1);
    const endDate = new Date(parseInt(endYear), parseInt(endMonth), 1);

    const years = endDate.getFullYear() - startDate.getFullYear();
    const months = endDate.getMonth() - startDate.getMonth();
    
    const startDateCopy = new Date(startDate);
    const days = Math.floor((endDate - startDateCopy) / (1000 * 60 * 60 * 24));

    setResult({ years, months, days });
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
