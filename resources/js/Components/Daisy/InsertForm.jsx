import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";

const InsertForm = () => {
    const queryClient = useQueryClient();

    const [formData, setFormData] = useState({
        studentNumber: "",
        fname: "",
        mname: "",
        lname: "",
        suffix: "",
        year: "",
        bachelor: "",
        contact_number: "",
        email: "",
        sem_eff_loa: "",
        year_eff_loa: "",
        sem_re: "",
        year_re: "",
        reason: "",
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;

        if (id === "studentNumber") {
            const cleanedValue = value.replace(/\D/g, "");
            let formattedValue = cleanedValue;

            if (cleanedValue.length > 2) {
                formattedValue = `${cleanedValue.slice(
                    0,
                    2
                )}-${cleanedValue.slice(2, 7)}`;
            }

            if (cleanedValue.length <= 7) {
                setFormData((prev) => ({
                    ...prev,
                    [id]: formattedValue,
                }));
            }
        } else {
            setFormData((prev) => ({
                ...prev,
                [id]: value,
            }));
        }
    };

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(formData);

        let errors = [];

        if (!formData.studentNumber) errors.push("Student Number is required.");
        if (!formData.fname) errors.push("First Name is required.");
        // if (!middleName) errors.push("Middle Name is required.");
        if (!formData.lname) errors.push("Last Name is required.");
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

        const finalData = {
            ...formData,
            studentNumber: formData.studentNumber.padEnd(8, "-").slice(0, 8),
        };

        try {
            const { data } = await axios.post("/api/transactions", finalData);
            if (data) {
                toast.success(data.message);

                queryClient.invalidateQueries({
                    predicate: (query) =>
                        ["getAllTransactions"].includes(query.queryKey[0]),
                });
                // Reset form after successful submission
                setFormData({
                    studentNumber: "",
                    fname: "",
                    mname: "",
                    lname: "",
                    suffix: "",
                    year: "",
                    bachelor: "",
                    contact_number: "",
                    email: "",
                    sem_eff_loa: "",
                    year_eff_loa: "",
                    sem_re: "",
                    year_re: "",
                    reason: "",
                });
            }
        } catch (error) {
            console.error("Submission error:", error);
            toast.error("Failed to submit form");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="overflow-y-auto h-[61vh] px-2">
                <div className="space-y-2 w-full mb-10">
                    <div className="flex gap-2 w-full items-center">
                        <label
                            htmlFor="studentNumber"
                            className="label w-2/5 text-nowrap label-xs"
                        >
                            Student #:
                        </label>
                        <div className="w-3/5 flex justify-end">
                            <input
                                id="studentNumber"
                                type="text"
                                className="input input-bordered w-full input-sm"
                                maxLength="8" // Limit input length to 8 characters (including the hyphen)
                                value={formData.studentNumber}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-2 w-full mb-10">
                    <div className="flex gap-2 w-full items-center">
                        <label
                            htmlFor="fname"
                            className="label w-2/5 text-nowrap label-xs"
                        >
                            First Name:
                        </label>
                        <div className="w-3/5 flex justify-end">
                            <input
                                id="fname"
                                type="text"
                                className="input input-bordered w-full input-sm"
                                value={formData.fname}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="flex gap-2 w-full items-center">
                        <label
                            htmlFor="mname"
                            className="label w-2/5 text-nowrap"
                        >
                            Middle Initial:
                        </label>
                        <div className="w-3/5 flex justify-end">
                            <input
                                id="mname"
                                type="text"
                                className="input input-bordered w-full input-sm"
                                value={formData.mname}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="flex gap-2 w-full items-center">
                        <label
                            htmlFor="lname"
                            className="label w-2/5 text-nowrap"
                        >
                            Last Name:
                        </label>
                        <div className="w-3/5 flex justify-end">
                            <input
                                id="lname"
                                type="text"
                                className="input input-bordered w-full input-sm"
                                value={formData.lname}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="flex gap-2 w-full items-center">
                        <label
                            htmlFor="suffix"
                            className="label w-2/5 text-nowrap"
                        >
                            Suffix:
                        </label>
                        <div className="w-3/5 flex justify-end">
                            <input
                                id="suffix"
                                type="text"
                                className="input input-bordered w-full input-sm"
                                value={formData.suffix}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-2 w-full mb-10">
                    <div className="flex gap-10">
                        <div className="flex gap-2 w-1/5 items-center flex-1">
                            <label
                                htmlFor="year"
                                className="label text-nowrap label-xs"
                            >
                                Year:
                            </label>
                            <div className="w-full justify-end">
                                <select
                                    id="year"
                                    className="select select-bordered w-full select-sm text-xs"
                                    value={formData.year}
                                    onChange={handleInputChange}
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
                        </div>
                        <div className="flex gap-3 w-3/5 items-center">
                            <label
                                htmlFor="bachelor"
                                className="label w-1/5 text-nowrap label-xs"
                            >
                                Bachelor:
                            </label>
                            <div className="w-4/5 flex justify-end">
                                <select
                                    name=""
                                    id="bachelor"
                                    className="select select-bordered w-full select-sm text-xs"
                                    value={formData.bachelor}
                                    onChange={handleInputChange}
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
                    </div>
                </div>

                <div className="space-y-2 w-full mb-10">
                    <div className="flex gap-2 w-full items-center">
                        <label
                            htmlFor="contact_number"
                            className="label w-2/5 text-nowrap label-xs"
                        >
                            Contact Number:
                        </label>
                        <div className="w-3/5 flex justify-end">
                            <input
                                id="contact_number"
                                type="text"
                                className="input input-bordered w-full input-sm"
                                value={formData.contact_number}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="flex gap-2 w-full items-center">
                        <label
                            htmlFor="email"
                            className="label w-2/5 text-nowrap"
                        >
                            Email:
                        </label>
                        <div className="w-3/5 flex justify-end">
                            <input
                                id="email"
                                type="text"
                                className="input input-bordered w-full input-sm"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>

                <div className="divider"></div>

                <div className="space-y-2 w-full mb-10">
                    <div className="mb-4">
                        <h1>Effectivity of LOA</h1>

                        <div className="flex gap-10">
                            <div className="flex gap-2 w-1/5 items-center flex-1">
                                <label
                                    htmlFor="sem_eff_loa"
                                    className="label text-nowrap label-xs"
                                >
                                    LOA Sem:
                                </label>
                                <div className="w-full justify-end">
                                    <select
                                        name=""
                                        id="sem_eff_loa"
                                        className="select select-bordered w-full select-sm text-xs"
                                        value={formData.sem_eff_loa}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">--Sem--</option>
                                        {LOA_RE_sems.map((sem) => (
                                            <option
                                                key={`${sem}-loa-sem`}
                                                value={sem}
                                            >
                                                {sem}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="flex gap-3 w-3/5 items-center">
                                <label
                                    htmlFor="year_eff_loa"
                                    className="label w-1/5 text-nowrap label-xs"
                                >
                                    LOA Year:
                                </label>
                                <div className="w-4/5 flex justify-end">
                                    <select
                                        name=""
                                        id="year_eff_loa"
                                        className="select select-bordered w-full select-sm text-xs"
                                        value={formData.year_eff_loa}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">
                                            --Select Bachelor--
                                        </option>
                                        {LOA_RE_years.map((year) => (
                                            <option
                                                value={year}
                                                key={`${year}-loa-year`}
                                            >
                                                {year}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <h1>Returning Academic Year</h1>

                        <div className="flex gap-10">
                            <div className="flex gap-2 w-1/5 items-center flex-1">
                                <label
                                    htmlFor="sem_re"
                                    className="label text-nowrap label-xs"
                                >
                                    RE. Sem:
                                </label>
                                <div className="w-full justify-end">
                                    <select
                                        name=""
                                        id="sem_re"
                                        className="select select-bordered w-full select-sm text-xs"
                                        value={formData.sem_re}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">--Sem--</option>
                                        {LOA_RE_sems.map((sem) => (
                                            <option
                                                value={sem}
                                                key={`${sem}-re-sem`}
                                            >
                                                {sem}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="flex gap-3 w-3/5 items-center">
                                <label
                                    htmlFor="year_re"
                                    className="label w-1/5 text-nowrap label-xs"
                                >
                                    RE. Year:
                                </label>
                                <div className="w-4/5 flex justify-end">
                                    <select
                                        name=""
                                        id="year_re"
                                        className="select select-bordered w-full select-sm text-xs"
                                        value={formData.year_re}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">
                                            --Select Bachelor--
                                        </option>
                                        {LOA_RE_years.map((year) => (
                                            <option
                                                value={year}
                                                key={`${year}-re-year`}
                                            >
                                                {year}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="divider"></div>

                <div className="space-y-2 w-full mb-10">
                    <div className="mb-4">
                        <h1>Reason:</h1>

                        <div className="flex gap-10">
                            <textarea
                                className="textarea textarea-bordered w-full"
                                id="reason"
                                value={formData.reason}
                                onChange={handleInputChange}
                            ></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-2 py-5">
                <button
                    className="btn bg-base-300 w-full rounded-sm btn-sm"
                    type="submit"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default InsertForm;
