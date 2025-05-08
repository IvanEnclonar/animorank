import { supabase } from '$lib/supabaseClient';

export const actions = {
    createProblem: async ({ request, params }) => {
        const formData = await request.formData();
        const { slug } = params;
        const test_cases = formData.get('test_cases');
        const input = {
            problem_name: formData.get('title'),
            body: formData.get('description'),
            test_function: formData.get('test_function'),
            starter_code: formData.get('starterCode'),
            problem_set: slug,
            lang: "C",
        };

        // insert into supabase
        const { data, error } = await supabase
            .from('Problem')
            .insert([
                input
            ]);

        if (error) {
            return {
                data: null,
                error: error
            }
        }
        else {
            return {
                data: 'success',
                error: null
            }
        }
    },
};