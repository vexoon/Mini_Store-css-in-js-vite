import { useState } from "react";
import { thedata } from "../../data";
import ProductList from "./ProductList";
import Dropdown from "./Dropdown";
import { Container, Box, Typography } from "@mui/material";


function Products({search}) {
    const [selectedCategory, setSelectedCategory] = useState("all");
    
    const categories = ["all", ...new Set(thedata.map((item) => (item.category)))];
    
    const filteredProducts =
    selectedCategory === "all"
        ? thedata
        : thedata.filter(item => item.category === selectedCategory);

    function filterSearch() {
      return filteredProducts.filter(item => 
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 4,
          mb: 4
        }}
      >
        <Typography variant="h5" fontWeight={600}>
          Products
        </Typography>

        <Dropdown
          categories={categories}
          selected={selectedCategory}
          onChange={setSelectedCategory}
        />
      </Box>

      <ProductList product={filterSearch()} />
    </Container>
    )
}

export default Products;