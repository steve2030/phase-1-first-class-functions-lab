const returnFirstTwoDrivers = function (drivers = []) {
    let newDrivers = drivers.slice(0, 2);
    return newDrivers;
  }


  const returnLastTwoDrivers = (drivers = []) => {
    let LastTwoDrivers = drivers.slice(-2);
    return LastTwoDrivers;
  }

  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

  const createFareMultiplier = function (integer) {
    return function (fare) {
      return fare * integer;
    }
  }

  const fareDoubler = createFareMultiplier(2);

  const fareTripler = createFareMultiplier(3);

  const selectDifferentDrivers = (arrayOfDrivers = [], functionName) => {
    if (functionName === returnFirstTwoDrivers) {
      return returnFirstTwoDrivers(arrayOfDrivers);
    } else if (functionName === returnLastTwoDrivers) {
      return returnLastTwoDrivers(arrayOfDrivers);
    }
  }
