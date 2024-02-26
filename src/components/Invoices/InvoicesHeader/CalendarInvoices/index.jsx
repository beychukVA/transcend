import React, { useState } from "react";
import styles from "./styles.module.scss";
import Calendar from "../../../Icons/Calendar";
import Filter from "../../../Icons/Filter";
import Period from "./Period";

const CalendarInvoices = () => {
  const [isSelectedPeriod, setIsSelectedPeriod] = useState("Week");

  return (
    <div className={styles.calendarInvoicesContainer}>
      <div className={styles.filterIconContainer}>
        <Filter />
      </div>

      <div className={styles.periodContainer}>
        <Period
          isSelected={isSelectedPeriod}
          setIsSelected={setIsSelectedPeriod}
          text={"Week"}
        />
        <Period
          isSelected={isSelectedPeriod}
          setIsSelected={setIsSelectedPeriod}
          text={"30d"}
        />
        <Period
          isSelected={isSelectedPeriod}
          setIsSelected={setIsSelectedPeriod}
          text={"1y"}
        />
      </div>

      <div className={styles.monthContainer}>
        <div className={styles.calendarIconContainer}>
          <Calendar />
        </div>

        <span>June-August</span>
      </div>
    </div>
  );
};

export default CalendarInvoices;
