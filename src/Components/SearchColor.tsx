import FilterColor from "./Filtercolor";
import Filterstatus from "./Filterstatus";





const SearchColor: React.FC = () => {

    return (
        <div className=' flex pt-[2rem] pl-[5rem]'>
            <FilterColor />
            <Filterstatus />
        </div>
    )
}

export default SearchColor;