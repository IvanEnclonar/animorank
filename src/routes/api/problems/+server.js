import { supabase } from '$lib/supabaseClient';
import { json, text } from '@sveltejs/kit';

export const POST = async ({ request }) => {

    const body = await request.json();

    if (body.action=='getPSETProblems') {
        const { data, error } = await supabase
            .from('Problem')
            .select('id, problem_name, lang, visible')
            .eq('problem_set', body.psetId);

        return json({
            data: data,
            error: error
        });
    }
    else if(body.action=='updateProblemVisibility') {
        const { data, error } = await supabase
            .from('Problem')
            .update({ visible: body.visible })
            .eq('id', body.id);

        return json({
            data: data,
            error: error
        });
    }
};