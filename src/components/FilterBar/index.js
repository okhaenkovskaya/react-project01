import SearchForm from "../SearchForm";
import styled from "styled-components";
import SelectTag from "../SelectTag";

const FilterWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin:0 0 48px;
`;

const SortWrap = styled.div`
  width: 40%;
  display: flex;
  flex-wrap: wrap;
  
  > div {
    width: 40%;
    margin:0 37px 0 0;
  }
`;

const FilterBar = () => {
  let options = [{label: "One", value: "one"}, {label: "Two", value: "two"}, {label: "Three", value: "three"}]

  return (
    <FilterWrap>
      <SortWrap>
        <SelectTag options={options} defaultValue={{label: "Categories", value: ""}} />

        <SelectTag options={options} defaultValue={{label: "Tags", value: ""}} />
      </SortWrap>

      <SearchForm />
    </FilterWrap>
  );
};

export default FilterBar;
