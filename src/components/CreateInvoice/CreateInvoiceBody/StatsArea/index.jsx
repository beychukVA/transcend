import React from "react";
import StatsCard from "./StatsCard";
import styles from "./styles.module.scss";
import Pending from "../../../Icons/Pending";
import Processed from "../../../Icons/Processed";
import Dollar from "../../../Icons/Dollar";

const StatsArea = () => {
  return (
    <div className={styles.container}>
      <StatsCard
        icon={<Pending />}
        bgColor="#040707"
        count="52"
        text="Pending Processing Count"
        fontSize="50px"
        color="#E2A9AC"
      />
      <StatsCard
        icon={<Processed />}
        bgColor="#040707"
        count="150"
        text="Processed Invoices"
        fontSize="50px"
        color="#FFFFFF"
      />
      <StatsCard
        icon={<Dollar />}
        bgColor="#219653"
        count="$182,000"
        text="Weekly Invoice Total"
        fontSize="40px"
        color="#FFFFFF"
      />
    </div>
  );
};

export default StatsArea;
