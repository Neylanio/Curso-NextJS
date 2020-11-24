import { GetServerSideProps } from 'next';
import { Container, Title } from '../styles/pages/Home';

interface IProduct {
  id: string;
  title: string;
}

interface IHomeProps {
  recommendedProducts: IProduct[];
}

export default function Home({ recommendedProducts }: IHomeProps) {

  return (
    <Container>
      <Title>Hello World</Title>
      <section>
        <h2>Products</h2>
        <ol>
          { recommendedProducts.map(item => (
            <li key={item.id}>
             {item.title}   
            </li>
            )) 
          }
        </ol>
      </section>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps<IHomeProps> = async () => {
  const response = await fetch('http://localhost:3333/recommended');
  const recommendedProducts = await response.json();

  return {
    props: {
      recommendedProducts
    }
  }

}