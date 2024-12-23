import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CiEdit } from "react-icons/ci";
import { FaRegTrashCan } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Loading from '../../components/Loading.jsx';
import useAuth from '../../hooks/useAuth.jsx';

const MyItems = () => {
    const { loading, setLoading, user } = useAuth()
    const [items, setItems] = useState([])
    const fetchItems = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/myItems/${user.email}`)
            setItems(res.data)
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchItems()
    }, [user.email])

    // delete an item
    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'cancel',
        });

        if (result.isConfirmed) {
            try {
                await axios.delete(`${import.meta.env.VITE_API_URL}/item/${id}`);
                setItems(items.filter((item) => item._id !== id));
                Swal.fire(
                    'Deleted!',
                    'Your item has been deleted.',
                    'success'
                )
            } catch (err) {
                Swal.fire(
                    'Error!',
                    'Failed to delete item.',
                    'error'
                )
            }
        }
    }

    return (
        <div className="max-w-5xl mx-auto mt-8">
            <h1 className="text-3xl font-bold text-center">Manage My Items</h1>

            {loading ? (
                <Loading />
            ) : (items.length) === 0 ? (
                <p className="mt-4 text-center text-gray-500">No items found. Add some items to manage them here.</p>
            ) : (
                <div className="px-4 mt-8 overflow-x-auto">
                    <table className="table table-zebra">
                        <thead>
                            <tr>
                                <th className="p-4 text-left border border-gray-300">Title</th>
                                <th className="p-4 text-left border border-gray-300">Category</th>
                                <th className="p-4 text-left border border-gray-300">Status</th>
                                <th className="p-4 text-left border border-gray-300">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item) => (
                                <tr key={item._id} className="hover:bg-gray-50">
                                    <td className="p-4 border border-gray-300">{item.title}</td>
                                    <td className="p-4 border border-gray-300">{item.category}</td>
                                    <td className="p-4 border border-gray-300">
                                        <span
                                            className={`px-2 py-1 rounded ${item.status === 'Pending'
                                                ? 'bg-yellow-200 text-yellow-800'
                                                : 'bg-green-200 text-green-800'
                                                }`}
                                        >
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="p-4 border border-gray-300">
                                        <div className="flex space-x-2">
                                            <Link
                                                to={`/updateItem/${item._id}`}
                                                title="Update Item"
                                            >
                                                <CiEdit />
                                            </Link>

                                            <button
                                                onClick={() => handleDelete(item._id)}
                                            >
                                                <FaRegTrashCan />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default MyItems;