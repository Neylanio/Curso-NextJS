import { useRouter } from 'next/router';
import Image from 'next/image';
import { Container, Header, Row, Logo, Menu, Button, Content } from '../../styles/pages/Product';

export default function Product() {
  const router = useRouter();

  return (
    <Container>
      <Header>
        <Row>
          <Logo xs={6} md={4}>
            <Image src="/assets/logo.png" alt="Logo" width={60} height={35} />
          </Logo>

          <Menu xs={12} md={8}>
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">How we do</a></li>
              <li><a href="">Contact</a></li>
              <li><Button type="button" variant="primary" >Get Start</Button></li>
            </ul>
          </Menu>
        </Row>
      </Header>
      <Content>
        <h1>{router.query.slug}</h1>
      </Content>
    </Container>
  );
}