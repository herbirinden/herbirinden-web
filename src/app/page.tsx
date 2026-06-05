import { createClient } from '@supabase/supabase-js';

// Supabase bağlantı ayarları
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '', 
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

export default async function Page() {
  // Veritabanından kategorileri çekiyoruz
  const { data: categories } = await supabase
    .from('categories')
    .select('*')
    .order('category_order', { ascending: true });

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>Kategoriler</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {categories?.map((cat) => (
          <li key={cat.id} style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
            {cat.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
