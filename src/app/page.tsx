import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '', 
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

export default async function Page() {
  const { data: categories } = await supabase
    .from('categories')
    .select('*')
    .order('category_order', { ascending: true });

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>Kategoriler</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {categories?.map((cat: any) => (
          <li key={cat.id} style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
            {cat.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
