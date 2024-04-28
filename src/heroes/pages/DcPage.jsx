import { HeroList } from "../components"

export const DcPage = () => {
    return (
        <>
            <h1 className="text-2xl font-bold text-slate-800/95 underline lg:text-4xl animate__animated animate__bounce">DC Page</h1>

            <HeroList publisher="DC Comics" />
        </>

    )
}
