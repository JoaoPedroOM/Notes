import { Container, Form } from "./styles";

import { Link } from "react-router-dom"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { NoteItem } from "../../components/NoteItem"
import { Button } from "../../components/Button"

export function New(){
    return(
        <Container>
            <Header />
            
            <main>
              <Form>
                <header>
                    <h1>Criar nota</h1>
                    <Link to="/">Voltar</Link>
                </header>

                <Input placeholder="Título" />

                <Textarea placeholder="Observações"/>

                <Section title="Links úteis">
                    <NoteItem value="https://github.com.br" />
                    <NoteItem isNew placeholder="Novo link" />
                </Section>

                <Section title="Marcadores">
                    <div className="tags">
                    <NoteItem value="React" />
                    <NoteItem isNew placeholder="Novo tag" />
                    </div>
                </Section>

                <Button title="Salvar" />
              </Form>
            </main>
        </Container>
    )
}