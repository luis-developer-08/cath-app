import { MdDelete } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { BsEyeFill } from "react-icons/bs";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import useEditModalStore from "@/Stores/useEditModal";
import EditModal from "./EditModal";
import toast from "react-hot-toast";

const TransactionTable = () => {
    const queryClient = useQueryClient();
    const { openEditModal } = useEditModalStore();

    const getAllTransactions = async () => {
        try {
            const { data } = await axios.get("/api/transactions");
            return data;
        } catch (error) {
            console.error(error);
        }
    };

    const deleteTransaction = async (id) => {
        try {
            await axios.delete(`/api/transactions/${id}`);
            queryClient.invalidateQueries("getAllTransactions");

            toast.success("Transaction deleted successfully!");
        } catch (error) {
            console.error(error);
        }
    };

    const { data: transactions, isLoading } = useQuery({
        queryKey: ["getAllTransactions"],
        queryFn: getAllTransactions,
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="overflow-y-auto h-[60vh]">
            <table className="table table-xs">
                <thead className="sticky top-0">
                    <tr>
                        <th>Student #</th>
                        <th>Full Name</th>
                        {/* <th>Year</th> */}
                        {/* <th>Degree</th> */}
                        {/* <th>Contact Number</th> */}
                        {/* <th>Reason</th> */}
                        <th>Effectivity of LOA</th>
                        <th>Returning Academic Year</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.data.map((transaction, index) => (
                        <tr key={index} className="hover">
                            <td>{transaction.student.student_number}</td>
                            <td>{`${transaction.student.first_name} ${transaction.student.middle_name} ${transaction.student.last_name}`}</td>
                            {/* <td>{transaction.student.year.name}</td> */}
                            {/* <td>{transaction.student.bachelor.name}</td> */}
                            {/* <td>{transaction.student.contact_number}</td> */}
                            {/* <td>{transaction.reason}</td> */}
                            <td>{`${transaction.loa_semester} ${transaction.loa_year}`}</td>
                            <td>{`${transaction.re_semester} ${transaction.re_year}`}</td>
                            <td>
                                <div className="flex items-center justify-end me-2 gap-1">
                                    <div
                                        className="tooltip tooltip-bottom"
                                        data-tip="Edit"
                                    >
                                        <button
                                            className="btn bg-base-300 btn-xs rounded-sm"
                                            onClick={() =>
                                                openEditModal(transaction.id)
                                            }
                                        >
                                            <BiEdit color="green" size={20} />
                                        </button>
                                    </div>
                                    <div
                                        className="tooltip tooltip-bottom"
                                        data-tip="Delete"
                                    >
                                        <button
                                            className="btn bg-base-300 btn-xs rounded-sm"
                                            onClick={() =>
                                                deleteTransaction(
                                                    transaction.id
                                                )
                                            }
                                        >
                                            <MdDelete color="red" size={20} />
                                        </button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <EditModal />
        </div>
    );
};

export default TransactionTable;
