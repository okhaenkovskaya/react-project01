import { ReactComponent as IconSearch } from '../../assets/icons/search.svg';
import styled from "styled-components";

const FilterWrap = styled.div`
  width: 48%;
  background: #303033;
  border-radius: 10px;
  padding: 0 10px 0 60px;
  position: relative;
  
  button {
    position: absolute;
    top: 0;
    left: 0;
    width: 56px;
    height: 56px;
    padding: 0;
    margin: 0;
    border: 0;
    color: #fff;
    background: none;
    
    svg {
      display: inline-block;
      vertical-align: top;
      margin:2px 0 0 -4px;
    }
  }
  
  input {
    width: 100%;
    height: 56px;
    margin: 0;
    border: 0;
    padding: 0 10px;
    color: #fff;
    background: none;
  }
`;

const SearchForm = () => {
  return (
    <FilterWrap>
      <button type="button">
        <IconSearch/>
      </button>
      <input type="text" placeholder="Search Article" />
    </FilterWrap>
  );
};

export default SearchForm;
