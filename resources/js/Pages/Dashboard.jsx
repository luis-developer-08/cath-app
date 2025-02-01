import InsertForm from "@/Components/Daisy/InsertForm";
import TransactionTable from "@/Components/Daisy/TransactionTable";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function Dashboard() {
    const [file, setFile] = useState(null);

    const { url } = usePage();
    const urlParams = new URLSearchParams(url.split("?")[1]);
    const initialQuery = urlParams.get("query") || "";

    const [query, setQuery] = useState(initialQuery);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleFilter = () => {
        const params = new URLSearchParams();
        if (query) params.append("query", query);

        router.visit(`?${params.toString()}`);
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
            alert(response.data.message);
        } catch (error) {
            alert(
                "Error uploading file: " + error.response?.data?.error ||
                    "Unknown error"
            );
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto sm:px-6 lg:px-20">
                    <div className="overflow-hidden bg-base-100 shadow-sm sm:rounded-lg px-10">
                        <div className="flex gap-10">
                            <div className="flex-1 w-full">
                                <div className="p-6 text-gray-900 w-full">
                                    <div className="flex justify-between items-center pb-5">
                                        <h1>All Transaction</h1>

                                        <input
                                            type="text"
                                            className="input input-bordered input-sm rounded-sm text-base-content"
                                            placeholder="Search..."
                                            value={query}
                                            onChange={(e) =>
                                                setQuery(e.target.value)
                                            }
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter") {
                                                    handleFilter();
                                                }
                                            }}
                                        />
                                        {/* <div className="flex gap-2">
                                            <input
                                                type="file"
                                                accept=".csv"
                                                onChange={handleFileChange}
                                            />
                                            <button
                                                className="btn btn-primary"
                                                onClick={handleUpload}
                                            >
                                                Upload CSV
                                            </button>
                                        </div> */}
                                    </div>
                                    <TransactionTable />
                                </div>
                            </div>
                            <div className="divider divider-horizontal m-0"></div>
                            <div className="w-2/5">
                                <div className="py-5 text-gray-900 w-full">
                                    <div className="flex pb-5">
                                        <h1>Create New Transaction</h1>
                                    </div>
                                    <InsertForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
