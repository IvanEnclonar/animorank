
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
    /**
     * @type {string[]}
     */
    const test_failed = []
    /**
     * @type {string[]}
     */
    const test_passed = []

    // parse the output of the run
    if (print.compile.code == 0) {
        const console_output = print.run.output.split("\n")

        // check if the output contains any test cases
        console_output.forEach((/** @type {string} */ line) => {
            if (line.startsWith('TEST_PASSED:')) {
                test_passed.push(line)
            } else if (line.startsWith('TEST_FAILED:')) {
                test_failed.push(line)
            }
        });

        // remove the test cases from the output
        print.run.output = print.run.output.split('\n')
            .filter((/** @type {string} */ line) =>
                !line.startsWith('TEST_PASSED') && 
                !line.startsWith('TEST_FAILED'))
            .join('\n')
    
    }

    print.run.test_failed = test_failed
    print.run.test_passed = test_passed

    return new Response(JSON.stringify(print), {
        status: 200,
        headers: { "Content-Type": "application/json" }
    });

}