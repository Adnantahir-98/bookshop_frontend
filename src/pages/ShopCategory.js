import styled from "styled-components"
import Products from "../components/Products"
import { useLocation } from 'react-router-dom'
import { useState } from "react";
import { Container, Row } from 'react-bootstrap'


const Shop = () => {

  const location = useLocation()
  const cat = location.pathname.split("/")[2]
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState("newest")


  const handleFilter = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value
    })
  }
  console.log(filters)

  return (
    <Container>
      <Row>
        <Title className="text-capitalize text-danger"></Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select name="color" onChange={handleFilter}>
              <Option disabled>
                Color
              </Option>
              <Option>white</Option>
              <Option>black</Option>
              <Option>red</Option>
              <Option>blue</Option>
              <Option>yellow</Option>
              <Option>green</Option>
            </Select>
            <Select name="size" onChange={handleFilter}>
              <Option disabled>
                Size
              </Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </Select>
            <Select name="Cat" onChange={handleFilter}>
              <Option disabled>
                Category
              </Option>
              <Option>All</Option>
              <Option>Register</Option>
              <Option>Notebook</Option>
              <Option>Paper Products</Option>
              <Option>Answer Sheets</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select onChange={(e) => setSort(e.target.value)}>
              <Option value="newest">Newest</Option>
              <Option value="asc">Price (asc)</Option>
              <Option value="dsc">Price (desc)</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Row>
          <Products cat={cat} filters={filters} sort={sort} />
        </Row>

      </Row>
    </Container>
  );
};

export default Shop;


const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;
