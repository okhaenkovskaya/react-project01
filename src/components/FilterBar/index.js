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
  return (
    <FilterWrap>
      <SortSelects onFilter={onFilter} />

      <SearchForm onSearchBeer={onSearchBeer} />
    </FilterWrap>
  );
};

export default FilterBar;
