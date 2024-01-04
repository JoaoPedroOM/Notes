import { Container, Links, Content } from "./styles";

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';
import { Tag } from '../../components/Tag';

export function Details() {
  return(
    <Container>
      <Header />

    <main>
      <Content>

      <ButtonText title="Excluir nota"/>

      <h1>Introdução ao React</h1>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nesciunt nam, porro eveniet nisi natus minus. Voluptates temporibus rem voluptas tempore explicabo aspernatur, dolores corporis, nisi a ab officia non.</p>

        <Section title="Links úteis">
          <Links>
            <li><a href="https://github.com/JoaoPedroOM">GitHub</a></li>
            <li>Item 2</li>
            <li>Item 3</li>
          </Links>
        </Section>

        <Section title="Marcadores">
            <Tag title="Node" />
            <Tag title="Express" />
        </Section>

        <Button title= "Voltar"/>
      </Content>
    </main>

    </Container>
  )
}