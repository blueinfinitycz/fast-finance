/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import StatusCard from './components/StatusCard';

const App = () => {
  const [loadData, setLoadData] = useState<boolean>(false);
  return (
    <section>
      <button type="button" onClick={() => setLoadData(true)}>
        load data
      </button>
      {loadData && <StatusCard onClick={() => setLoadData(false)} url="https://dev.client.ff-testing.com/v1/orders/770" />}
    </section>
  );
};

export default App;
