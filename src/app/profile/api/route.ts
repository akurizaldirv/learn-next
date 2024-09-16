import {NextRequest} from "next/server";
import {cookies} from "next/headers";

export async function GET(req: NextRequest) {
    console.log("search Params : " + req.nextUrl.searchParams);
    console.log("Headers : " + req.headers);

    // SET COOKIES
    cookies().delete("theme"); // DELETE COOKIES
    cookies().set("resultPerPage", "20");

    // GET COOKIES
    console.log("Cookie : " + req.cookies);
    console.log("Theme Name : " + req.cookies?.get("theme")?.name);
    console.log("Theme Value : " + req.cookies?.get("theme")?.value);

    return new Response("Profile API", {
         headers: {
             ...req.headers,
             "content-type": "text/html; charset=utf-8",
             // "set-cookie": "theme=dark", // SET COOKIES
         }
    });
}