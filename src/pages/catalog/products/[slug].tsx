import SEO from '@/components/Seo';
import { useRouter } from 'next/router';

export default function Product() {
  const router = useRouter();

  return (
    <div>
      <SEO title="products"/>
      <h1>{router.query.slug}</h1>
    </div>
  )
}