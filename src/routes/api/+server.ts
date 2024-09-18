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

    console.log(response)

    const res = await fetch("http://localhost:2000/api/v2/execute", {method: "POST", headers:{ "Content-Type": "application/json"}, body: JSON.stringify(response)})

    const print = await res.json()

    console.log(print)

    //compile code


    //if compile error return error code

    //if runtime error return runtime error 

    //if code compiles, return result

    return new Response('Success')

}