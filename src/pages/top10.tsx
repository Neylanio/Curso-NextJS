import SEO from "@/components/Seo";
import { GetStaticProps } from "next"

interface iProduct {
  id: string;
  title: string;
}

interface ITop10Props {
  products: iProduct[];
}

export default function top10({ products }: ITop10Props) {
  return (
    <div>
      <SEO
        title="Top 10"
        shouldIndexPage={false}
      />
      <h1>Top 10</h1>
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

export const getStaticProps: GetStaticProps<ITop10Props> = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
  const products = await response.json();

  return {
    props: {
      products
    },
    revalidate: 5
  }
}