import { createClient } from '@supabase/supabase-js'
import { createAuth } from '@redwoodjs/auth-supabase-web'



const supabaseClient = createClient(
  process.env.REDWOOD_ENV_SUPABASE_URL || '',
  process.env.REDWOOD_ENV_SUPABASE_KEY || ''
)

export const { AuthProvider, useAuth } = createAuth(supabaseClient)
