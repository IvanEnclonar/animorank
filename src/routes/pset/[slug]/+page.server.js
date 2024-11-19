import { supabase } from "$lib/supabaseClient";

export const load = async ({ params }) => {
    const { slug } = params;

    const pset = await supabase
        .from('Problem_set')
        .select('*')
        .eq('id', slug);

    const problems = await supabase
        .from('Problem')
        .select('problem_name, lang')
        .eq('problem_set', slug);

    return {
        pset: pset.data,
        problems: problems.data
    };
}