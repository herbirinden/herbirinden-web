// Bu kod, veritabanındaki kategorilerini sitenin ana sayfasına bağlar.
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

export default async function Page() {
  const { data: categories } = await supabase
    .from('categories')
    .select('*')
    .order('category_order', { ascending: true });

  return (
    <div>
      <h1>Kategoriler</h1>
      <ul>
        {categories?.map((cat) => (
          <li key={cat.id}>{cat.title}</li>
        ))}
      </ul>
    </div>
  );
}
