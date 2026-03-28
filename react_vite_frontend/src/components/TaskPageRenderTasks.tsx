export default async function TaskPageRenderTasks(data, isDark) {
    const elements: JSX.Element[] = [];

    for (let i=0; i< data.length; i++) {
        elements.push(
        <div key={data[i].id} className={`w-97 h-10 rounded-full border border-green-700 border-dashed divide-x-3 divide-dotted divide-green-800 grid grid-cols-5
                                         ${isDark
                                         ? "bg-green-600"
                                         : "bg-green-200"}`}>
            <div className="text-[12px] underline text-center">{data[i].id}</div>
            <div className="text-[8px] text-center">{data[i].title}</div>
            <div className="text-[8px] text-ellipsis text-left break-words">{data[i].description}</div>
            <div className="text-[8px] text-ellipsis text-left">{data[i].date}</div>
            <div className="text-[8px] text-ellipsis text-left">{data[i].priority}</div>
        </div>
    );
    }

    return elements;
};
