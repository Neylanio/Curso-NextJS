import SEO from '@/components/Seo';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router'

interface IProduct {
  id: string;
  title: string;
}

interface ICategoryProps {
  products: IProduct[];
}

export default function Category({ products }: ICategoryProps) {
  const router = useRouter();

  if(router.isFallback) {
    return <p>Carregando...</p>
  }

  return (
    <div>
      <SEO title="categories"/>
      <h1>{router.query.slug}</h1>
      <ol>
        {products.map(item => (
          <li key={item.id}>
            {item.title}
          </li>
        ))
        }
      </ol>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
  const categories = await response.json();

  const paths = categories.map(category => {
    return {
      params: { slug: category.id }
    }
  })

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<ICategoryProps> = async (context) => {
  const { slug } = context.params;

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products?category_id=${slug}`);
  const products = await response.json();

  return {
    props: {
      products
    },
    revalidate: 60
  }
}