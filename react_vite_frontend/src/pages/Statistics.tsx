import BarUsagePlot from '../components/BarUsagePlot.tsx'
type StatisticsProps = {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Statistics({isDark, setIsDark}: StatisticsProps) {
    return (
        <div className="static">
            <div className="fixed top-30 left-20 size-100">
                <BarUsagePlot/>
            </div>
        </div>
    );
}
