import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";
import { data } from "../data/data";

const CustomersPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="flex justify-between p-4 text-gray-600">
                <h2>Customers</h2>
                <h2>Welcome Back, Clint</h2>
            </div>
            <div className="p-4">
                <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto text-gray-500">
                    <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
                        <span>Name</span>
                        <span className="sm:text-left text-right">Email</span>
                        <span className="hidden md:grid">Last Order</span>
                        <span className="hidden sm:grid">Method</span>
                    </div>
                    <ul>
                        {data.map((order, id) => (
                            <li key={id} className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grids-col-3 grid-cols-2 items-center justify-between cursor-pointer">
                                <div className="flex items-center">
                                    <div className="bg-purple-100 p-3 rounded-lg">
                                        <BsPersonFill className="text-purple-800" />
                                    </div>
                                    <p className="pl-4">{order.name.first + ' ' + order.name.last}</p>
                                </div>
                                <p className="text-gray-600 sm:text-left text-right">{order.email}</p>
                                <p className="hhidden md:flex text-gray-600">{order.date}</p>
                                <div className="sm:flex hidden justify-between items-center">
                                    <p>{order.method}</p>
                                    <BsThreeDotsVertical />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CustomersPage