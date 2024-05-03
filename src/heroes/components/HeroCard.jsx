import { Link } from "react-router-dom";

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {
    const heroImageUrl = `/heroes/${id}.jpg`;

    return (
        <div className="w-full flex flex-col lg:flex-row  bg-white border shadow-lg rounded-x rounded hover:scale-100  animate__animated animate__fadeIn mb-2  ">
            <img
                className="w-full lg:w-52 h-80 object-top object-cover rounded"
                src={heroImageUrl}
                alt={superhero}
            />
            <div className="p-4 md:p-5 flex-1 ">
                <h3 className="text-lg font-bold text-gray-800">{superhero}</h3>
                <p className="mt-1">{alter_ego}</p>
                <p className="">{alter_ego !== characters ? characters : ""}</p>
                <p>
                    <small className="text-slate-500/80">{first_appearance}</small>
                </p>
                <Link
                    className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    to={`/hero/${id}`}
                >
                    More...
                </Link>
            </div>
        </div>
    );
};
