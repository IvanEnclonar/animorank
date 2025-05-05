
export const POST = async (/** @type {{ request: { json: () => any; }; }} */ event) => {

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
    const test_failed = []
    const test_passed = []

    // parse the output of the run
    if (print.run.code !== 0) {
        const console_output = print.run.output.split("\n")
        // find the "START TEST OUTPUT" line
        const start_index = console_output.findIndex((/** @type {string | string[]} */ line) => line.includes("START TEST OUTPUT"))
        const end_index = console_output.findIndex((/** @type {string | string[]} */ line) => line.includes("END TEST OUTPUT"))
        for (let i = start_index + 1; i < end_index; i++) {
            // check if the string starts with TEST PASSED or TEST FAILED
            if (console_output[i].startsWith("TEST_PASSED")) {
                let temp = console_output[i].replace("TEST_PASSED:", "")
                test_passed.push(temp)
            } else if (console_output[i].startsWith("TEST_FAILED")) {
                // remove the TEST_FAILED prefix
                let temp = console_output[i].replace("TEST_FAILED:", "")
                test_failed.push(temp)
            }
        }
    }

    print.run.test_failed = test_failed
    print.run.test_passed = test_passed

    return new Response(JSON.stringify(print), {
        status: 200,
        headers: { "Content-Type": "application/json" }
    });

}