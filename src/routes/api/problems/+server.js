import { supabase } from '$lib/supabaseClient';
import { json, text } from '@sveltejs/kit';

export const POST = async ({ request }) => {

    const body = await request.json();

    const { data, error } = await supabase
        .from('Problem')
        .select('problem_name, lang')
        .eq('problem_set', body.psetId);


    return json({
        data: data,
        error: error
    });
};