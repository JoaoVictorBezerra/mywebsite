import Links from '../src/Components/Links'

function Title({ children }) {
    return (
        <h1>{children}</h1>
    )
}

export default function ErrorPage() {
    return (
        <div>
            <Title>Você se perdeu e acabou tropeçando no erro 404.</Title>
            <Links href="/">Voltar para a página principal</Links>
        </div>
    )
}