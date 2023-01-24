import styles from "@/styles/Table.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

const url = "https://standings.vercel.app/api/pl-table";

const pl = () => {
  const [data, setData] = useState([{}]);
  const fetchApi = async () => {
    const result = await axios.get(url);
    setData(result.data);
  };

  console.log(data);

  fetchApi();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <table>
          <caption>Premier League 2022/23</caption>
          <thead>
            <tr>
              <th>#</th>
              <th className={styles.team__col}>Team</th>
              <th>MP</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>GF</th>
              <th>GA</th>
              <th>GD</th>
              <th>Pts</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className={`${styles[`rank${index + 1}`]}`}>
                <td className={styles.standing__row}>{item.rank}</td>
                <td className={styles.team__name}>{item.name}</td>
                <td className={styles.standing__row}>{item.matchPlayed}</td>
                <td className={styles.standing__row}>{item.win}</td>
                <td className={styles.standing__row}>{item.draw}</td>
                <td className={styles.standing__row}>{item.lost}</td>
                <td className={styles.standing__row}>{item.gf}</td>
                <td className={styles.standing__row}>{item.ga}</td>
                <td className={styles.standing__row}>{item.gd}</td>
                <td className={styles.standing__row}>{item.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default pl;
