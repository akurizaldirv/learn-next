"use client";
import React, {useState} from 'react';
import Link from "next/link";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    return (
        <div className={"flex flex-col gap-8"}>
            <h1 className={"font-bold text-4xl font-head"}>Register to Begin</h1>
            <div className="flex flex-col gap-3">
                <input type="email" name={"email"} placeholder="Email" value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       className={"w-full rounded-lg p-2 border-2 border-black"}
                       required={true}
                />
                <input type="password" name={"password"} placeholder="Password" value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       className={"w-full rounded-lg p-2 border-2 border-black"}
                       required={true}
                />
                <input type="password" name={"conf-password"} placeholder="Confirm Password" value={confPassword}
                       onChange={(e) => setConfPassword(e.target.value)}
                       className={"w-full rounded-lg p-2 border-2 border-black"}
                       required={true}
                />

                <div className="flex gap-3">
                    <Link href={"/"} className={"py-2 px-4 border-2 border-black rounded-lg"}>-</Link>
                    <button type={"submit"}
                            className={"w-full rounded-lg p-2 border-2 border-black bg-black text-white font-bold"}>Register
                    </button>
                </div>
            </div>
            <div className={"w-full flex flex-col justify-between"}>
                <p>Already have account? <Link href={"/auth/login"} className={"font-semibold"}>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;