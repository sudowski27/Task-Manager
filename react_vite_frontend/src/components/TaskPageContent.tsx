import TaskPageGetTaskList from "./TaskPageGetTaskList";
import TaskPageRenderTasks from "./TaskPageRenderTasks"
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

type TaskPageContentProps = {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function TaskPageContent({ isDark, setIsDark }: TaskPageContentProps) {

    const url = 'http://localhost:8080/tasks';
    const response_data = TaskPageGetTaskList(url);

    const [tasks, setTasks] = useState([]);
    const [renderedTasks, setRenderedTasks] = useState(null);

    useEffect(() => {

        response_data.then((data) => {
            console.log(data[3]);
            const response_data = data;
            setTasks(data);
            setRenderedTasks(TaskPageRenderTasks(data, isDark));
        });
    }, [isDark]);
    const navigate = useNavigate()

    return (
        <div className="flex items-center justify-center h-screen">
            <div className={`box-content size-400 p-4 flex items-center justify-center-safe ${
                isDark
                  ? "bg-gradient-to-r from-gray-900 to-gray-700"
                  : "bg-gradient-to-r from-indigo-500 to-teal-400"
                }`}
            >
                <div>
                    <div className="columns-2">
                        <button className={`pr-8 py-2 bg-green-300 rounded-xl hover:bg-sky-700 text-[12px] tracking-tighter text-center hover:bg-gray-800
                            ${isDark
                              ? "bg-green-900"
                              : "bg-green-300"
                            }`}
                        id="back_to_home_button"
                        onClick={() => navigate("/")}
                        >
                            Back to Home
                        </button>
                        <button className={`pr-8 py-2 bg-green-300 rounded-xl hover:bg-sky-700 text-[12px] tracking-tighter text-center 
                            ${isDark
                            ? "bg-green-900"
                            : "bg-green-300"
                            }`}
                        id="change_theme_button"
                        onClick={() => setIsDark(v => !v)}>
                            Change theme
                        </button>
                    </div>
                    <div className={`w-97 h-5 rounded-full border border-green-700 border-dashed divide-x-3 divide-dotted divide-green-800 grid grid-cols-5
                        ${isDark
                        ?  "bg-blue-500"
                        :  "bg-green-700"}`}
                    >
                            <div className="text-[12px] underline text-center">ID</div>
                            <div className="text-[8px] text-center">TITLE</div>
                            <div className="text-[8px] text-ellipsis text-left">DESCRIPTION</div>
                            <div className="text-[8px] text-ellipsis text-left">DATE</div>
                            <div className="text-[8px] text-ellipsis text-left">PRIORITY</div>
                        </div>
                    <div className="overflow-y-scroll size-100">
                        {renderedTasks}
                    </div>
                </div>
            </div>
        </div>
    );
};
