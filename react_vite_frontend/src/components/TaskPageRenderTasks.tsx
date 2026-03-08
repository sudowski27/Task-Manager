export default async function TaskPageRenderTasks(data) {
    const elements: JSX.Element[] = [];

    console.log("TaskPageRenderTasks");
    // console.log(data);

    for (let i=0; i< data.length; i++) {
        elements.push(
        <div key={data[i].id} className="p-2 border">
            {data[i].title}
        </div>
    );
    }

    console.log(elements);
    return <div>{elements}</div>;
};
