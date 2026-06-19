import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL?.trim();
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY?.trim();

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseKey);

const missingConfigError = new Error(
  'Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in Netlify environment variables.'
);

function createDisabledSupabaseClient() {
  const query = {
    select: () => query,
    order: () => query,
    eq: () => query,
    single: () => query,
    upsert: () => query,
    insert: () => query,
    delete: () => query,
    update: () => query,
    then: (resolve) => resolve({ data: null, error: missingConfigError }),
  };

  return {
    from: () => query,
  };
}

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseKey)
  : createDisabledSupabaseClient();
