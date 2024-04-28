import { Navigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

export const HeroPage = () => {
    const { id, } = useParams();
    const navigate = useNavigate();
    const hero = useMemo(() => getHeroById(id), [id]);
    const heroImageUrl = `/assets/heroes/${hero.id}.jpg`;

    const onReturn = () => {
        navigate(-1);
    }
    if (!hero) {
        return <Navigate to="/" />;
    }
    return (
        <div className="flex justify-center items-center min-h-screen animate__animated animate__fadeInLeft">
            <div className="max-w-[800px] bg-white border rounded-xl shadow-sm sm:flex">
                <div className="w-full rounded-lg overflow-hidden  sm:rounded-s-xl sm:max-w-60 md:rounded-se-none md:max-w-xs">
                    <img className="h-full" src={heroImageUrl} alt="Image Description" />
                </div>
                <div className="flex flex-wrap ">
                    <div className="p-4 flex flex-col h-full sm:p-7 ">
                        <h3 className="text-2xl font-bold text-gray-800 ">
                            {hero.superhero}
                        </h3>
                        <ul className="max-w-xs flex flex-col divide-y divide-gray-200">
                            <li className="inline-flex items-center gap-x-2 py-3  ">
                                Publisher: {hero.publisher}
                            </li>
                            <li className="inline-flex items-center gap-x-2 py-3  ">
                                Alter ego: {hero.alter_ego}
                            </li>
                            <li className="inline-flex items-center gap-x-2 py-3 ">
                                Name: {hero.first_appearance}
                            </li>
                            <li className="inline-flex items-center gap-x-2 py-3 ">
                                Characters: {hero.characters}
                            </li>
                        </ul>
                        <button className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none
                    "
                            onClick={onReturn}>
                            Go Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
