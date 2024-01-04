import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote} from './styles' 

import { Header } from '../../components/Header'
import { Note } from '../../components/Note'
import { ButtonText } from '../../components/ButtonText'
import { Section } from '../../components/Section'
import { Input } from '../../components/Input'

export function Home(){
    return(
        <Container>
            <Brand>
                <h1>Notes</h1>
            </Brand>

            <Header />

            <Menu>
                <li><ButtonText  title="Todos" isActive/></li>
                <li><ButtonText  title="Node"/></li>
                <li><ButtonText  title="React"/></li> 
            </Menu>

            <Search>
                <Input placeholder="Pesquisar por nota"/>
            </Search>

            <Content>
                <Section title="Minhas notas">
                        <Note data={{
                            title: 'React Modal', 
                            tags: [
                                {id: '1', name: 'React'}, 
                                {id: '2', name: 'Node'} ]
                        }} />
                </Section>
            </Content>

            <NewNote>
                <FiPlus />
                Criar nota
            </NewNote>

        </Container>
    )
}