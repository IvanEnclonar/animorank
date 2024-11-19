import StudentPsBox from '$lib/components/StudentPSBox.svelte';
import { supabase } from '$lib/supabaseClient';
import { json } from '@sveltejs/kit';

export const POST = async ({ request }) => {

    const body = await request.json();

    const { data, error } = await supabase
        .from('Subscription')
        .insert([
            {
                student_email: body.student_email,
                problem_set: body.problem_set,
                status: 'pending',
            }
        ]);

    return json({
        data: data,
        error: error
    });
};  