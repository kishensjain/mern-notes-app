import { Link } from "react-router"
import {PlusIcon} from 'lucide-react'
const Navbar = () => {
  return (
    <nav className="bg-violet-300 shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">My Notes App</h1>
      <div>
        <Link to={"/create"} className="text-blue-500 hover:underline flex gap-2 mr-4 items-center">
           <PlusIcon className="size-5" />
           <span className="hidden sm:inline">New Note</span>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
