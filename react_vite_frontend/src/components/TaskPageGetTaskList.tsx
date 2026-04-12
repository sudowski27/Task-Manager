export default async function TaskPageGetTaskList(url: string) {
    const response = await fetch (url);
    const data =  await response.json();
    console.log(data);
    console.log(data[0]);

    return count;
};
