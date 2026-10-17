import Container from "./structure/Container"
import SideBar from "./structure/SideBar"
import Main from "./structure/Main"
import Header from "./structure/Header"
import Content from "./structure/Content"


export default function Base({children}) {
    return (
        <Container>
            <SideBar/>
            <Main>
                <Header/>
                <Content>{children}</Content>
            </Main>
        </Container>
    )
}