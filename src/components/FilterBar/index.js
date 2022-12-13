import SearchForm from "../SearchForm";
import SortSelects from "../SortSelects";
import styled from "styled-components";

const FilterWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin:0 0 48px;
  
  
  select option:first-child {
    display:none;
  }
`;


const FilterBar = ({onSearchBeer, onFilter}) => {

  const handleChange = (e) => {
    const holder = e.target.closest('div');
    const selects = holder.querySelectorAll('select');
    let filterObj = {
      page: 1,
      per_page: 6,
    };

    selects.forEach(select => {
      const filter = select.dataset.name;
      const value = select.options[select.selectedIndex].value;
      if(value == 'all') return
      filterObj = {
        ...filterObj,
        [filter]: value
      }
    });

    onFilter(filterObj)
  }


  return (
    <FilterWrap>
      <SortSelects onFilter={onFilter} />

      <SearchForm onSearchBeer={onSearchBeer} />
    </FilterWrap>
  );
};

export default FilterBar;
