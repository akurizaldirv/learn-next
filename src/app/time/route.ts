// the code below is automatically cached in build mode.
// in dev mode, the response is always changed
// in build mode, the response is cached and return the same response
// to ignore caching, use one of 4:
// - dynamic mode
// - employing headers() and cookies()
// - using HTTP method other than GET()
// - using Request object with GET() method

// DYNAMIC MODE
export const dynamic = "force-dynamic";

export const GET = async () => {
    return Response.json({
        time: new Date().toISOString(),
    })
}