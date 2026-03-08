import TaskPageGetTaskList from "./TaskPageGetTaskList";
import TaskPageRenderTasks from "./TaskPageRenderTasks"
import { useState, useEffect } from "react";

export default function TaskPageContent() {

    const url = 'http://localhost:8080/tasks';
    const response_data = TaskPageGetTaskList(url);

    const [tasks, setTasks] = useState([]);
    const [renderedTasks, setRenderedTasks] = useState(null);

    useEffect(() => {

        response_data.then((data) => {
            console.log(data[3]);
            const response_data = data;
            setTasks(data);
            setRenderedTasks(TaskPageRenderTasks(data));
        });
    }, []);

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="box-content size-400 p-4 bg-linear-to-r/srgb from-indigo-500 to-teal-400 flex items-center justify-center-safe">
                <div>
                    <div className="w-97 h-5 bg-green-700 rounded-full border border-green-700 border-dashed divide-x-3 divide-dotted divide-green-800 grid grid-cols-3">
                            <div className="text-[12px] underline text-center">ID</div>
                            <div className="text-[8px] text-center">TITLE</div>
                            <div className="text-[8px] text-ellipsis text-left">DESCRIPTION</div>
                        </div>
                    <div className="overflow-y-scroll size-100">
                        {renderedTasks}
                    </div>
                </div>
            </div>
        </div>
    );
};
