import BarUsagePlot from '../components/BarUsagePlot.tsx'
type StatisticsProps = {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Statistics({isDark, setIsDark}: StatisticsProps) {
    return (
        <div className="static">

            <button
                className="
                py-2
                px-4
                rounded-md
                transition
                "
                style={{
                    backgroundColor: "var(--button-bg)",
                    color: "var(--text-color)"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--button-hover)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--button-bg)")}
                onClick={() => setIsDark(v => !v)}
            >
                Change theme
            </button>

            <div className="fixed top-30 left-20 size-100">
                <BarUsagePlot isDark={isDark} setIsDark={setIsDark}/>
            </div>
        </div>
    );
}
