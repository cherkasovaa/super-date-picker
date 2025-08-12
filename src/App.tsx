import type { DateRange } from '@/shared/types/date';
import { Icon, Panel } from '@/shared/ui';
import { formatDateToISO } from '@/shared/utils/formatDateToISO';
import { SuperDatePicker } from '@/widgets/super-date-picker';
import { useState } from 'react';
import styles from './App.module.css';

function App() {
  const [range, setRange] = useState<DateRange>({ from: null, to: null });
  const [stagedRange, setStagedRange] = useState<DateRange>(range);

  const handleUpdateRange = () => {
    const newRange = { ...stagedRange };

    if (!newRange.from) {
      newRange.from = new Date();
    }
    if (!newRange.to) {
      newRange.to = new Date();
    }

    setRange(newRange);
    setStagedRange(newRange);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Panel>{String(formatDateToISO(range.from) ?? 'now')}</Panel>
        <div className={styles.text}>
          <Icon name="chevronRight" />
        </div>
        <Panel>{String(formatDateToISO(range.to) ?? 'now')}</Panel>
      </div>
      <SuperDatePicker
        value={stagedRange}
        onChange={setStagedRange}
        onUpdate={handleUpdateRange}
        appliedValue={range}
      />
    </div>
  );
}

export default App;
