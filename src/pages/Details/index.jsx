import { Container, Links } from "./styles";

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';
import { Tag } from '../../components/Tag';

export function Details() {
  return(
    <Container>
      <Header />

    <ButtonText title="Excluir nota"/>

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

      <Button title= "Login"/>
    </Container>
  )
}