import { HeroList } from "../components"

export const MarvelPage = () => {
    return (
        <>
            <h1 className="text-2xl font-bold text-slate-800/95 underline lg:text-4xl">Marvel Page</h1>
            <HeroList publisher="Marvel Comics" />
        </>

    )
}
