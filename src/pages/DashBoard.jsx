import Header from "../components/Header";
import logs from "../data/logs";

function DashBoard() {
  return <>
    <Header title="Dashboard"></Header>
    <div>
      <h2>Total Carbon Emissions:{logs.reduce((accumulator, currentValue) => accumulator + currentValue.carbon, 0)} kg CO2</h2>
    </div>
    <div>
        <ul>
        {logs.map(log => (
            <li key = {log.id}>
                {log.activity}: {log.carbon} kg CO2
            </li>
        ))}
        </ul>
    </div>
  </>;
}
export default DashBoard;