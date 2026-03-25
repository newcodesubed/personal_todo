
import { createDay, getDays } from "./repositories/day.repository";

const start = async () => {
  const newDay = await createDay('2026-03-24', 'red');
  console.log("Inserted", newDay);
  const days = await getDays();
  console.log("All days", days);

};

start();