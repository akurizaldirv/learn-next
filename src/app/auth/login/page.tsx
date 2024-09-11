"use client";
import React, {useState} from 'react';
import Link from "next/link";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className={"flex flex-col gap-8"}>
            <h1 className={"font-bold text-4xl"}>Login to Continue</h1>
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
                <div className="flex gap-3">
                    <Link href={"/"} className={"py-2 px-4 border-2 border-black rounded-lg"}>-</Link>
                    <button type={"submit"}
                            className={"w-full rounded-lg p-2 border-2 border-black bg-black text-white font-bold"}>Login
                    </button>
                </div>
                <Link href={"auth/forgot-password"} className={"self-end text-sm italic"}>Forget Password?</Link>
            </div>
            <div className={"w-full flex flex-col justify-between"}>
                <p>Don&apos;t have any account? <Link href={"/auth/register"} className={"font-semibold"} >Register</Link></p>
            </div>
        </div>
    );
};

export default Login;