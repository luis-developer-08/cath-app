import InsertForm from "@/Components/Daisy/InsertForm";
import TransactionTable from "@/Components/Daisy/TransactionTable";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";

export default function Dashboard() {
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
