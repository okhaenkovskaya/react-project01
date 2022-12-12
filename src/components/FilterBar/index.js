import SearchForm from "../SearchForm";
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

const SortWrap = styled.div`
  width: 40%;
  display: flex;
  flex-wrap: wrap;
  
  > div {
    width: 40%;
    margin:0 37px 0 0;
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
      <SortWrap  onChange={handleChange}>
        <select data-name='hops'>
          <option value="all">hops</option>
          <option value="all">all hops</option>
          <option value="Fuggles">Fuggles</option>
          <option value="Nelson Sauvin">Nelson Sauvin</option>
          <option value="Dana">Dana</option>
        </select>

        <select data-name='yeast'>
          <option value="all">yeast</option>
          <option value="all">all yeast</option>
          <option value="Wyeast 3522 - Belgian Ardennes">Wyeast 3522 - Belgian Ardennes</option>
          <option value="Wyeast 2126 - Bohemian Lager">Wyeast 2126 - Bohemian Lager</option>
          <option value="Wyeast 3711 - French Saison">Wyeast 3711 - French Saison</option>
        </select>
      </SortWrap>

      <SearchForm onSearchBeer={onSearchBeer} />
    </FilterWrap>
  );
};

export default FilterBar;
