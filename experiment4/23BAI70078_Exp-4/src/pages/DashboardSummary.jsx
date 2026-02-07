import StatCard from "../components/StatCard";



const DashboardSummary = () => {
    return (
        <div>
            <StatCard title="Total Emission" value={125} unit="kg CO₂" />
            <StatCard title="Today's Emission" value={12} unit="kg CO₂" />

            <h3 style={{color: "skyblue"}}>This is a Summary</h3>
        </div>
    )
}

export default DashboardSummary;