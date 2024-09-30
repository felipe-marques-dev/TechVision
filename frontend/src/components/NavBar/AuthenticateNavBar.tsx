import  { Div,  A } from "../../styles/NavBar/navbar"


type LoginProps = {

    userName: [];
    loggedIn: boolean;
}

type MinhaContaProps = {
    loggedIn: boolean;
}

export const LoginNavBar = (props: LoginProps) => {
    return(
    <A href="/login" ><Div 
    className="nav-link" 
    style={{
        fontSize: '28px'
    }}
    >
    {
        props.loggedIn ? `Olá, ${props.userName}!` : `Login`

    }
    </Div></A>
    )
}

export const MinhaContaNavBar = (props: MinhaContaProps) => {
    return (
            <A href="/"><Div className="nav-link">
                {
                    props.loggedIn ? `Minha conta` : <></>
                }
            </Div></A>
    )
}