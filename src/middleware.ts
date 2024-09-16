import {NextRequest, NextResponse} from "next/server";
// import header from "@/shared/components/header/Header";
// import {headers} from "next/headers";

/* MIDDLEWARE
    - middleware is a code that executed before request processed by app/
    - there is two types of using middleware to intercepting request:
    --- conditional rendering
    --- config matcher
    - cannot used both in a file
 */

export const middleware = (req: NextRequest) => {
    // using headers and cookies in middleware
    const res = NextResponse.next();

    const themeCookies = req.cookies.get("theme");
    if (!themeCookies) {
        res.cookies.set("theme", "dark");
    }

    res.headers.set("custom-header", "custom-value");

    if (req.nextUrl.pathname === "/profile") {
        // conditional rendering
        // redirect: to redirecting -> the URL path changed
        return NextResponse.redirect(new URL("/hello", req.url));
    }

    return res;
    // this will automatically using config matcher
    // rewrite: to redirecting without change the URL
    // return NextResponse.rewrite(new URL("/time", req.url));
}

// core of config matcher
// export const config = {
//     matcher: "/dashboard/users"
// }