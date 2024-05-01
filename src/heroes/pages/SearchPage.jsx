import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components/HeroCard'
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { getHeroByName } from '../helpers';
export const SearchPage = () => {
    const navigate = useNavigate(); // hook to navigate
    const location = useLocation(); // hook to get location

    const { q = '' } = queryString.parse(location.search); // get query string

    const heroes = getHeroByName(q); // get heroes by name  
    const showSearch = (q.length === 0);
    const showError = (q.length > 0) && heroes.length === 0;
    const { searchText, onInputChange } = useForm({
        searchText: q
    })
    const onSearchSubmit = (e) => {
        e.preventDefault();
        // if (searchText.trim().length <= 1) return;

        navigate(`?q=${searchText}`);
    }
    return (
        <>

            <div className="mx-auto flex justify-center flex-col gap-5 lg:flex-row">
                <form className="w-full lg:w-2/6" onSubmit={onSearchSubmit}>
                    <h2 className='text-lg'>Search</h2>
                    <label
                        htmlFor="default-search"
                        className="mb-2 text-sm font-medium text-gray-900 sr-only"
                    >
                        Search
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg
                                className="w-4 h-4 text-gray-500 "
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>
                        <input
                            type="text"
                            name="searchText"
                            autoComplete="off"
                            className="  w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Search Heroes"
                            value={searchText}
                            onChange={onInputChange}
                        />
                        <button

                            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Search
                        </button>
                    </div>
                </form>

                <div className="w-full lg:w-2/6 flex flex-col ">
                    <h4 className="text-lg">Results</h4>
                    <div className=" p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 animate__animated animate__fadeIn" role=" alert" style={{ display: showSearch ? '' : 'none' }}>
                        <span className="font-medium">Search a hero</span>
                    </div>
                    <div className=" w-full  p-4 mb-3  text-sm text-red-800 rounded-lg bg-red-50 animate__animated animate__fadeIn" role="alert" style={{ display: showError ? '' : 'none' }}>
                        <span className="font-medium">No hero with {q}</span>
                    </div>

                    <div className='w-full '>
                        {
                            heroes.map(hero => (
                                <HeroCard key={hero.id} {...hero} />
                            ))
                        }
                    </div>

                    {/* <HeroCard /> */}
                </div>

            </div >
        </>
    );
};
