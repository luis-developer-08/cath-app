import { MdDelete } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import useEditModalStore from "@/Stores/useEditModal";
import EditModal from "./EditModal";
import toast from "react-hot-toast";
import { router, usePage } from "@inertiajs/react";

const TransactionTable = () => {
    const queryClient = useQueryClient();

    const parseQueryParams = () => {
        const searchParams = new URLSearchParams(window.location.search);
        return {
            query: searchParams.get("query"),
            page: searchParams.get("page"),
        };
    };

    const { openEditModal } = useEditModalStore();

    const getAllTransactions = async () => {
        const { query, page } = parseQueryParams();

        try {
            const { data } = await axios.get("/api/transactions", {
                params: {
                    query,
                    page,
                },
            });
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
        queryKey: ["getAllTransactions", usePage().url],
        queryFn: getAllTransactions,
    });

    const routerVisit = (filter, value) => {
        if (filter == "page") {
            const params = new URLSearchParams(value.split("?")[1]);
            const currentParams = new URLSearchParams(window.location.search);
            if (Array.from(currentParams).length === 0) {
                router.visit(`?page=${params.get("page")}`);
            } else {
                currentParams.set("page", params.get("page"));
                router.visit(`?${currentParams.toString()}`);
            }
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="overflow-y-auto h-[60vh] px-2">
                <table className="table table-xs text-sm w-full">
                    <thead className="sticky top-0 w-full bg-base-100 z-10">
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
                                <td>{`${transaction.student.first_name} ${
                                    transaction.student.middle_name
                                        ? transaction.student.middle_name
                                        : ""
                                } ${transaction.student.last_name} ${
                                    transaction.student.suffix
                                        ? transaction.student.suffix
                                        : ""
                                }`}</td>
                                {/* <td>{transaction.student.year.name}</td> */}
                                {/* <td>{transaction.student.bachelor.name}</td> */}
                                {/* <td>{transaction.student.contact_number}</td> */}
                                {/* <td>{transaction.reason}</td> */}
                                <td>{`${
                                    transaction.loa_semester
                                        ? transaction.loa_semester + " Sem,"
                                        : ""
                                } ${
                                    transaction.loa_year
                                        ? transaction.loa_year
                                        : ""
                                }`}</td>
                                <td>{`${
                                    transaction.re_semester
                                        ? transaction.re_semester + " Sem,"
                                        : ""
                                } ${
                                    transaction.re_year
                                        ? transaction.re_year
                                        : ""
                                }`}</td>
                                <td>
                                    <div className="flex items-center justify-end me-2 gap-1">
                                        <div
                                            className="tooltip tooltip-bottom"
                                            data-tip="Edit"
                                        >
                                            <button
                                                className="btn bg-base-300 btn-xs rounded-sm"
                                                onClick={() =>
                                                    openEditModal(
                                                        transaction.id
                                                    )
                                                }
                                            >
                                                <BiEdit
                                                    color="green"
                                                    size={20}
                                                />
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
                                                <MdDelete
                                                    color="red"
                                                    size={20}
                                                />
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
            <div className="flex justify-between mt-4">
                <div className="flex gap-5">
                    <div className="flex gap-1">
                        <a
                            className="btn bg-base-300 btn-sm rounded-sm"
                            href="/api/generateCsv"
                        >
                            CSV
                        </a>
                        <a
                            className="btn bg-base-300 btn-sm rounded-sm"
                            href="/api/generateExcel"
                        >
                            EXCEL
                        </a>
                    </div>
                </div>
                <div className="join">
                    {transactions.links.map((link, index) => (
                        <div
                            key={index}
                            className={`join-item btn  btn-sm ${
                                link.active ? "bg-base-100" : "bg-base-300"
                            }`}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            onClick={() => routerVisit("page", link.url)}
                        ></div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default TransactionTable;
