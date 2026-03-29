import { useNavigate } from 'react-router-dom';

type NavbarProps = {
  onToggle: () => void;
};

const Navbar = ({ onToggle }: NavbarProps) => {
  const navigate = useNavigate()

  return (
    <div className='flex justify-between items-center px-4 
    sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20
    backdrop-blur-x1 font-medium bg-white/50 
    dark:bg-gray-900/70'>
    <span className="text-lg font-semibold">
    MyTaskManager
    </span>

    <button
    className="
    px-4 py-2 rounded-lg
    bg-blue-600 text-white
    hover:bg-blue-700
    transition
    "
    onClick={() => navigate("/add_new_task")}
    >
    Add new task
    </button>
    <button
    className="
    px-4 py-2 rounded-lg
    bg-blue-600 text-white
    hover:bg-blue-700
    transition
    "
    onClick={() => navigate("/view_my_tasks")}
    >
    View my tasks
    </button>
    <button
    className="
    px-4 py-2 rounded-lg
    bg-blue-600 text-white
    hover:bg-blue-700
    transition
    "
    onClick={() => navigate("/remove_task")}
    >
    Remove task
    </button>
    <button
    className="
    px-4 py-2 rounded-lg
    bg-blue-600 text-white
    hover:bg-blue-700
    transition
    "
    >
    Statistics
    </button>
    <button
    className="
    px-4 py-2 rounded-lg
    bg-blue-600 text-white
    hover:bg-blue-700
    transition
    "
    onClick={onToggle}
    >
    Change theme
    </button>
    </div>
  )
}

export default Navbar
