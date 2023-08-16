import { useState } from 'react';

function DateCalculator() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [result, setResult] = useState(null);

  const calculateDateDifference = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const timeDifference = end - start;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    const years = Math.floor(days / 365);
    const remainingDaysAfterYears = days % 365;

    const months = Math.floor(remainingDaysAfterYears / 30);
    const remainingDays = remainingDaysAfterYears % 30;

    setResult({ years, months, days: remainingDays });
  };

  return (
    <div>
      <h2>Date Calculator</h2>
      <div>
        <label>Start Date: </label>
        <input type="month" value={startDate} onChange={(e) => setStartDate(e.target.value)} style={{ marginTop: '20px'}}/>
      </div>
      <div>
        <label>End Date: </label>
        <input type="month" value={endDate} onChange={(e) => setEndDate(e.target.value)} style={{ marginTop: '20px' }}/>
      </div>
      <button onClick={calculateDateDifference} style={{ marginTop: '20px' }}>Calculate</button>
      {result && (
        <div>
          <p>Years: {result.years}</p>
          <p>Months: {result.months}</p>
          <p>Days: {result.days}</p>
        </div>
      )}
      <div style={{ position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)' }}>
        Develop by Yeelang Yang (Full-Stack Developer)
      </div>
    </div>
  );
}

export default DateCalculator;
