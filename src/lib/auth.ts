import { createClient } from './supabase/server';

export interface UserProfile {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  role: 'admin' | 'teacher' | 'student' | 'parent' | 'unknown';
  status: string;
  avatar_url?: string | null;
}

export async function getUserAndProfile() {
  const supabase = await createClient();
  const { data: { user }, error: authError } = await supabase.auth.getUser();

  if (authError || !user) {
    return { user: null, profile: null };
  }

  // Attempt to fetch profile
  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  if (profileError || !profile) {
    // User exists but profile doesn't. Return gracefully.
    return { 
      user, 
      profile: {
        id: user.id,
        first_name: 'New',
        last_name: 'User',
        email: user.email || '',
        role: 'unknown',
        status: 'pending'
      } as UserProfile 
    };
  }

  return { user, profile: profile as UserProfile };
}
