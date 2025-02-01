import { AiOutlineClose } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import useEditModalStore from "@/Stores/useEditModal";
import toast from "react-hot-toast";

const EditModal = () => {
    const { transactionId, editModalIsOpen, closeEditModal } =
        useEditModalStore();
    const [isUpdating, setIsUpdating] = useState(false);

    const queryClient = useQueryClient();

    // Separate state for each input field
    const [studentNumber, setStudentNumber] = useState("");
    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");
    const [suffix, setSuffix] = useState("");
    const [year, setYear] = useState("");
    const [degree, setDegree] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [email, setEmail] = useState("");
    const [loaSemester, setLoaSemester] = useState("");
    const [loaYear, setLoaYear] = useState("");
    const [reSemester, setReSemester] = useState("");
    const [reYear, setReYear] = useState("");
    const [reason, setReason] = useState("");

    const getAllYears = async () => {
        const { data } = await axios.get("/api/years");

        return data;
    };

    const { data: years, isLoading: yearsIsLoading } = useQuery({
        queryFn: getAllYears,
        queryKey: ["getAllYears"],
    });

    const getAllBachelors = async () => {
        const { data } = await axios.get("/api/bachelors");

        return data;
    };

    const { data: bachelors, isLoading: bachelorsIsLoading } = useQuery({
        queryFn: getAllBachelors,
        queryKey: ["getAllBachelors"],
    });

    const LOA_RE_sems = ["1st", "2nd"];
    const LOA_RE_years = [
        "2010-2011",
        "2011-2012",
        "2012-2013",
        "2013-2014",
        "2014-2015",
        "2015-2016",
        "2017-2018",
        "2018-2019",
        "2019-2020",
        "2020-2021",
        "2021-2022",
        "2022-2023",
        "2023-2024",
        "2024-2025",
        "2025-2026",
        "2026-2027",
    ];

    const getTransaction = async () => {
        if (!transactionId) return null;
        try {
            const { data } = await axios.get(
                `/api/transactions/${transactionId}`
            );
            return data;
        } catch (error) {
            console.error("Error fetching transaction:", error);
        }
    };

    const {
        data: transaction,
        isLoading,
        isSuccess,
    } = useQuery({
        queryKey: ["getTransaction", transactionId],
        queryFn: getTransaction,
        // enabled: !!transactionId,
    });

    const updateTransaction = async (updatedData) => {
        setIsUpdating(true);
        try {
            await axios.put(`/api/transactions/${transactionId}`, updatedData);
            queryClient.invalidateQueries("getAllTransactions");
            setIsUpdating(false);
            toast.success("Transaction updated successfully!");
            closeEditModal();
        } catch (error) {
            console.error("Error updating transaction:", error);
            setIsUpdating(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let errors = [];

        if (!studentNumber) errors.push("Student Number is required.");
        if (!firstName) errors.push("First Name is required.");
        // if (!middleName) errors.push("Middle Name is required.");
        if (!lastName) errors.push("Last Name is required.");
        // if (!year) errors.push("Year is required.");
        // if (!degree) errors.push("Degree is required.");
        // if (!contactNumber) errors.push("Contact Number is required.");
        // if (!loaSemester) errors.push("Leave of Absence Semester is required.");
        // if (!loaYear) errors.push("Leave of Absence Year is required.");
        // if (!reSemester) errors.push("Reinstatement Semester is required.");
        // if (!reYear) errors.push("Reinstatement Year is required.");
        // if (!reason) errors.push("Reason is required.");

        if (errors.length > 0) {
            toast.error(errors.join("\n"));
            return; // Stop form submission
        }

        const updatedData = {
            studentNumber: studentNumber,
            fname: firstName,
            mname: middleName,
            lname: lastName,
            suffix: suffix,
            year,
            bachelor: degree,
            contact_number: contactNumber,
            email,
            sem_eff_loa: loaSemester,
            year_eff_loa: loaYear,
            sem_re: reSemester,
            year_re: reYear,
            reason,
        };

        updateTransaction(updatedData);
    };

    useEffect(() => {
        if (isSuccess && transaction) {
            const studentData = transaction.student || {};
            setStudentNumber(studentData.student_number || "");
            setFirstName(studentData.first_name || "");
            setMiddleName(studentData.middle_name || "");
            setSuffix(studentData.suffix || "");
            setLastName(studentData.last_name || "");
            setYear(studentData.year?.name || "");
            setDegree(studentData.bachelor?.name || "");
            setContactNumber(studentData.contact_number || "");
            setEmail(studentData.email || "");
            setLoaSemester(transaction.loa_semester || "");
            setLoaYear(transaction.loa_year || "");
            setReSemester(transaction.re_semester || "");
            setReYear(transaction.re_year || "");
            setReason(transaction.reason || "");
        }
    }, [isSuccess, transaction]);

    return (
        <dialog className={`modal ${editModalIsOpen ? "modal-open" : ""}`}>
            <div className="modal-box w-11/12 max-w-7xl h-[90vh]">
                <div className="flex items-center justify-between mb-5">
                    <h3 className="font-bold text-lg">Edit Transaction</h3>
                    <button
                        className="btn bg-base-300"
                        onClick={closeEditModal}
                    >
                        <AiOutlineClose />
                    </button>
                </div>

                {transaction && (
                    <form
                        onSubmit={handleSubmit}
                        className="mt-4 flex flex-col gap-4"
                    >
                        <div className="overflow-y-auto h-[60vh] px-5">
                            {/* Student Number */}
                            <div>
                                <div>
                                    <label className="label">
                                        Student Number
                                    </label>
                                    <input
                                        type="text"
                                        value={studentNumber}
                                        onChange={(e) => {
                                            let value = e.target.value.replace(
                                                /\D/g,
                                                ""
                                            ); // Remove non-numeric characters

                                            if (value.length > 6)
                                                value = value.slice(0, 7); // Limit to 6 digits

                                            if (value.length > 2) {
                                                value =
                                                    value.slice(0, 2) +
                                                    "-" +
                                                    value.slice(2);
                                            }

                                            setStudentNumber(value);
                                        }}
                                        className="input input-bordered w-full"
                                        placeholder="XX-XXXX"
                                    />
                                </div>
                            </div>

                            {/* Names */}
                            <div className="grid grid-cols-4 gap-4">
                                <div>
                                    <label className="label">First Name</label>
                                    <input
                                        type="text"
                                        value={firstName}
                                        onChange={(e) =>
                                            setFirstName(e.target.value)
                                        }
                                        className="input input-bordered w-full"
                                    />
                                </div>
                                <div>
                                    <label className="label">Middle Name</label>
                                    <input
                                        type="text"
                                        value={middleName}
                                        onChange={(e) =>
                                            setMiddleName(e.target.value)
                                        }
                                        className="input input-bordered w-full"
                                    />
                                </div>
                                <div>
                                    <label className="label">Last Name</label>
                                    <input
                                        type="text"
                                        value={lastName}
                                        onChange={(e) =>
                                            setLastName(e.target.value)
                                        }
                                        className="input input-bordered w-full"
                                    />
                                </div>
                                <div>
                                    <label className="label">Suffix</label>
                                    <input
                                        type="text"
                                        value={suffix}
                                        onChange={(e) =>
                                            setSuffix(e.target.value)
                                        }
                                        className="input input-bordered w-full"
                                    />
                                </div>
                            </div>

                            {/* Year & Degree */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="label">Year</label>
                                    <select
                                        id="year"
                                        className="select select-bordered w-full"
                                        value={year}
                                        onChange={(e) =>
                                            setYear(e.target.value)
                                        }
                                    >
                                        <option value="">--Year--</option>
                                        {!yearsIsLoading
                                            ? years.map((year) => (
                                                  <option value={year.name}>
                                                      {year.name}
                                                  </option>
                                              ))
                                            : null}
                                    </select>
                                </div>
                                <div>
                                    <label className="label">Degree</label>
                                    <select
                                        name=""
                                        id="bachelor"
                                        className="select select-bordered w-full"
                                        value={degree}
                                        onChange={(e) =>
                                            setDegree(e.target.value)
                                        }
                                    >
                                        <option value="">--Bachelor--</option>
                                        {!bachelorsIsLoading
                                            ? bachelors.map((bachelor) => (
                                                  <option value={bachelor.name}>
                                                      {bachelor.name}
                                                  </option>
                                              ))
                                            : null}
                                    </select>
                                </div>
                            </div>

                            {/* Contact and Email */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="label">
                                        Contact Number
                                    </label>
                                    <input
                                        type="text"
                                        value={contactNumber}
                                        onChange={(e) =>
                                            setContactNumber(e.target.value)
                                        }
                                        className="input input-bordered w-full"
                                    />
                                </div>
                                <div>
                                    <label className="label">Email</label>
                                    <input
                                        type="text"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        className="input input-bordered w-full"
                                    />
                                </div>
                            </div>

                            {/* LOA Semester & Year */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="label">
                                        LOA Semester
                                    </label>
                                    <select
                                        value={loaSemester}
                                        onChange={(e) =>
                                            setLoaSemester(e.target.value)
                                        }
                                        className="select select-bordered w-full"
                                    >
                                        <option value="">
                                            Select LOA Semester
                                        </option>
                                        {LOA_RE_sems.map((sem) => (
                                            <option key={sem} value={sem}>
                                                {sem}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="label">LOA Year</label>
                                    <select
                                        value={loaYear}
                                        onChange={(e) =>
                                            setLoaYear(e.target.value)
                                        }
                                        className="select select-bordered w-full"
                                    >
                                        <option value="">
                                            Select LOA Year
                                        </option>
                                        {LOA_RE_years.map((year) => (
                                            <option key={year} value={year}>
                                                {year}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Returning Semester & Year */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="label">
                                        Returning Semester
                                    </label>
                                    <select
                                        value={reSemester}
                                        onChange={(e) =>
                                            setReSemester(e.target.value)
                                        }
                                        className="select select-bordered w-full"
                                    >
                                        <option value="">
                                            Select Returning Semester
                                        </option>
                                        {LOA_RE_sems.map((sem) => (
                                            <option key={sem} value={sem}>
                                                {sem}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="label">
                                        Returning Year
                                    </label>
                                    <select
                                        value={reYear}
                                        onChange={(e) =>
                                            setReYear(e.target.value)
                                        }
                                        className="select select-bordered w-full"
                                    >
                                        <option value="">
                                            Select Returning Year
                                        </option>
                                        {LOA_RE_years.map((year) => (
                                            <option key={year} value={year}>
                                                {year}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Reason */}
                            <div>
                                <label className="label">Reason</label>
                                <textarea
                                    value={reason}
                                    onChange={(e) => setReason(e.target.value)}
                                    className="textarea textarea-bordered w-full"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="mt-4 flex gap-2 justify-end">
                            {/* <button
                                className="btn bg-base-300 w-20"
                                onClick={closeEditModal}
                            >
                                Cancel
                            </button> */}
                            <button
                                className="btn btn-primary w-20"
                                type="submit"
                                disabled={isUpdating}
                            >
                                {isUpdating ? "Saving..." : "Save"}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </dialog>
    );
};

export default EditModal;
