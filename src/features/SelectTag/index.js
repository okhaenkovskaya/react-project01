import Select from 'react-select';

const SelectTag = ({options, defaultValue}) => {

  return (
      <Select options={options}
              defaultValue={defaultValue}></Select>
  );
};

export default SelectTag;
