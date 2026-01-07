import {createClient} from '@supabase/supabase-js';


const supabaseUrl="https://luybcxomsywkpltxjvne.supabase.co";
const supabaseAnonKey="sb_publishable_ZAEcA6rOMt1HmnYRIK3CXA_10obK0Z_";

export const supabase= createClient(supabaseUrl,supabaseAnonKey);
