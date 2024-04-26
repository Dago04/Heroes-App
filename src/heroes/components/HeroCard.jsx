
export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {

    const heroImageUrl = `/assets/heroes/${id}.jpg`

    return (
        <div className="flex flex-col bg-white border shadow-lg rounded-x rounded hover:scale-100 ">
            <img className="w-full h-80 object-top rounded" src={heroImageUrl} alt={superhero} />
            <div className="p-4 md:p-5">
                <h3 className="text-lg font-bold text-gray-800">
                    {superhero}
                </h3>
                <p className="mt-1">
                    {alter_ego}
                </p>
                <p>{characters}</p>
                <a className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
                    Go somewhere
                </a>
            </div>
        </div>
    )
}
