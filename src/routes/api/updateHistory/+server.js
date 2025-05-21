import StudentPsBox from '$lib/components/StudentPSBox.svelte';
import { supabase } from '$lib/supabaseClient';

export const POST = async (event) => {
    
    const body = await event.request.json()
    const { data, error } = await supabase
        .from('Session')
        .upsert({
            student_email: body.student_email,
            problem_id: body.id,
            history: body.history,
            last_state: body.last_state,
        });
    
    if (error) {
        return new Response(JSON.stringify(error), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    } else {
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });
    }
}