import { BarChart, Bar, XAxis, YAxis } from "recharts";
import styles from "./index.module.scss";

const StatsChart = ({ stats }) => {
  if (!stats || stats.length === 0) {
    return <p>No stats available.</p>;
  }
  const data = stats.map((stat) => ({
    name: stat.stat.name,
    value: stat.base_stat,
  }));

  return (
    <BarChart
      className={styles.BarChart}
      data={data}
      layout="vertical"
      height={200}
      width={350}
    >
      <XAxis type="number" display="none" />
      <YAxis
        dataKey="name"
        type="category"
        width={160}
        style={{ fill: "black", fontSize: "11" }}
      />
      <Bar
        dataKey="value"
        fill="#006eff"
        width={170}
        label={{ fill: "black", fontSize: "11" }}
      />
    </BarChart>
  );
};

export default StatsChart;
