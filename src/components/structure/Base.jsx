import Container from "./Container"
import SideBar from "./SideBar"
import Main from "./Main"
import Header from "./Header"
import Content from "./Content"


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