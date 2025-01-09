export const POST = async (event) => {

    const body = await event.request.json()

    const response = {
        "language": "c",
        "version": "10.2.0",
        "files": [
            {
                "content": body
            }
        ],
    }

    const res = await fetch("https://emkc.org/api/v2/piston/execute", {method: "POST", headers:{ "Content-Type": "application/json"}, body: JSON.stringify(response)})

    const print = await res.json()

    

    //compile code


    //if compile error return error code

    //if runtime error return runtime error 

    //if code compiles, return result

    return new Response(JSON.stringify(print), {
        status: 200,
        headers: { "Content-Type": "application/json" }
    });

}