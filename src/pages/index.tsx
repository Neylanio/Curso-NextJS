import { GetServerSideProps } from 'next';
import { useCallback } from 'react';
import { Container, Title } from '../styles/pages/Home';

interface IProduct {
  id: string;
  title: string;
}

interface IHomeProps {
  recommendedProducts: IProduct[];
}

export default function Home({ recommendedProducts }: IHomeProps) {

  const handleSum = useCallback(async () => {

    // Lib so sera carregada quando o usuario clicar no botao e chegar nessa funcao callback
    // Essa lib so precisará ser carregada uma vez e quando o usuario for utiliza-la
    const math = (await import('../lib/math')).default;
    alert(math.sum(3,4))
  }, []);

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
      <button onClick={handleSum}>Somar</button>
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