import { Link, useForm, usePage } from "@inertiajs/react";
import { useQueryClient } from "@tanstack/react-query";
import React, { useState, useRef } from "react";
import toast from "react-hot-toast";

const Navbar = () => {
    const queryClient = useQueryClient();
    const fileInputRef = useRef(null);
    const user = usePage().props.auth.user;
    const { post } = useForm();
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            alert("Please select a CSV file first.");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await axios.post("/api/importCsv", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            queryClient.invalidateQueries("getAllTransactions");
            toast.success(response.data.message);
            setFile(null);
            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }
        } catch (error) {
            alert(
                "Error uploading file: " +
                    (error.response?.data?.error || "Unknown error")
            );
        }
    };

    return (
        <div className="navbar bg-base-300 px-20 sticky top-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        <li>
                            <Link href={route("dashboard")}>Homepage</Link>
                        </li>
                        <li>
                            <a>About</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link
                    className="btn btn-ghost text-xl"
                    href={route("dashboard")}
                >
                    CathCutie
                </Link>
            </div>
            <div className="navbar-end gap-5">
                <div className="join">
                    <input
                        type="file"
                        accept=".csv"
                        onChange={handleFileChange}
                        ref={fileInputRef}
                        className="file-input file-input-bordered file-input-sm file-input-info rounded-sm join-item"
                    />
                    <button
                        className="btn bg-info btn-sm rounded-sm join-item border-none"
                        onClick={handleUpload}
                    >
                        Upload CSV
                    </button>
                </div>
                {user ? (
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle avatar bg-base-100"
                        >
                            {user.name.slice(0, 1)}
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <Link href={route("profile.edit")}>
                                    Profile
                                </Link>
                            </li>
                            <li>
                                <a onClick={() => post(route("logout"))}>
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default Navbar;
