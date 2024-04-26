import { HeroCard } from "./";
import { getHeroesByPublisher } from "../helpers";

export const HeroList = ({ publisher }) => {
    const heroes = getHeroesByPublisher(publisher);
    return (
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
            {
                heroes.map(hero => (
                    <HeroCard key={hero.id} {...hero} />
                ))
            }
        </div >
    )
}
