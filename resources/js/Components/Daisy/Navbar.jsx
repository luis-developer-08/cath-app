import { Link, useForm, usePage } from "@inertiajs/react";
import React from "react";

const Navbar = () => {
    const user = usePage().props.auth.user;
    const { post } = useForm();

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
            <div className="navbar-end">
                {user ? (
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle avatar bg-base-100"
                        >
                            {user.name.slice(0, 1)}
                            {/* <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                />
                            </div> */}
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
