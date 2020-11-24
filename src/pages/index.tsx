import { useEffect, useState } from 'react';
import { Container, Title } from '../styles/pages/Home';

interface IProduct {
  id: string;
  title: string;
}

export default function Home() {

  const [recommendedProducts, setRecommendedProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch('http://localhost:3333/recommended').then(response => {
      response.json().then(data => {
        setRecommendedProducts(data);
      })
    })
  }, [])

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
