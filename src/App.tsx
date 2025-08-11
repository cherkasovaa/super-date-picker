import type { DateRange } from '@/shared/types/date';
import { SuperDatePicker } from '@/widgets/super-date-picker';
import { useState } from 'react';
import styles from './App.module.css';

function App() {
  const [range, setRange] = useState<DateRange>({ from: 'now', to: 'now' });

  return (
    <div className={styles.wrapper}>
      <SuperDatePicker value={range} onChange={setRange} />
    </div>
  );
}

export default App;
