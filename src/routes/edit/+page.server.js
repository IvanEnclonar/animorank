import { supabase } from '$lib/supabaseClient';

export const actions = {
    createProblem: async ({ request }) => {
        const formData = await request.formData();

        const input = {
            problem_name: formData.get('title'),
            body: formData.get('description'),
            goal_output: formData.get('requiredOutput'),
            starter_code: formData.get('starterCode'),
        };

        // insert into supabase
        const { data, error } = await supabase
            .from('Problem')
            .insert([
                input
            ]);

            

        return {
            data: 'success',
            error: null
        }
    },
};