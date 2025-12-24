import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  // Only create the client if we're in the browser
  if (typeof window !== 'undefined') {
    return createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
  }
  
  // If we're on the server (during build), return a mock client
  // that mimics the structure of the real Supabase client
  console.warn('Supabase client accessed on server - this should not happen in a "use client" component')
  
  // Create a mock Supabase client that matches the real API structure
  const mockAuth = {
    signInWithPassword: async () => ({ data: { user: null, session: null }, error: null }),
    signUp: async () => ({ data: { user: null, session: null }, error: null }),
    signOut: async () => ({ error: null }),
    getUser: async () => ({ data: { user: null }, error: null }),
    onAuthStateChange: () => ({ data: { subscription: null } })
  }
  
  // Create a mock query builder that allows method chaining
  const mockQueryBuilder = {
    select: () => mockQueryBuilder,
    insert: () => mockQueryBuilder,
    update: () => mockQueryBuilder,
    delete: () => mockQueryBuilder,
    eq: () => mockQueryBuilder,
    neq: () => mockQueryBuilder,
    gt: () => mockQueryBuilder,
    gte: () => mockQueryBuilder,
    lt: () => mockQueryBuilder,
    lte: () => mockQueryBuilder,
    like: () => mockQueryBuilder,
    ilike: () => mockQueryBuilder,
    is: () => mockQueryBuilder,
    in: () => mockQueryBuilder,
    contains: () => mockQueryBuilder,
    range: () => mockQueryBuilder,
    textSearch: () => mockQueryBuilder,
    filter: () => mockQueryBuilder,
    match: () => mockQueryBuilder,
    order: () => mockQueryBuilder,
    then: (resolve: (value: any) => any) => resolve({ data: null, error: null }),
    catch: () => ({ data: null, error: null })
  }
  
  const mockFrom = () => mockQueryBuilder
  
  const mockStorage = {
    from: () => ({
      upload: () => ({ data: null, error: null }),
      getPublicUrl: () => ({ data: { publicUrl: '' } }),
    }),
  }
  
  return {
    auth: mockAuth,
    from: mockFrom,
    storage: mockStorage
  }
}