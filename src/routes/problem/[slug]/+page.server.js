import { supabase } from "$lib/supabaseClient";

export async function load({ params }) {
    console.log(params.slug); // Use params instead of page store
    let { data: Problem, error } = await supabase
    .from('Problem')
    .select("*")
    .eq("id", Number(params.slug))

    return {
        Problem: Problem,
        error: error
    }
}