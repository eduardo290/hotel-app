import React, { useState } from 'react';
import RegistroCheckIn from '../RegistroCheckIn/'
import TablaCheckIn from '../TablaCheckIn/'

function PaginaCheckIn() {
  const [checkIns, setCheckIns] = useState([]);

  const handleCheckInSubmit = (checkInData) => {
    setCheckIns([...checkIns, checkInData]);
  };

  return (
    <div>
      <RegistroCheckIn onSubmit={handleCheckInSubmit} checkIns={checkIns} setCheckIns={setCheckIns} />
      <TablaCheckIn checkIns={checkIns} />
    </div>
  );
}

export default PaginaCheckIn;
