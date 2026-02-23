import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

function Dropdown({ categories, selected, onChange }) {
  return (
 
<FormControl
  size="small"
  sx={{
    minWidth: 220,
    bgcolor: "background.paper",
    borderRadius: 3
  }}
>
  <Select
    value={selected}
    onChange={(e) => onChange(e.target.value)}
    displayEmpty
    renderValue={(value) => {
      if (!value) {
        return <span style={{ opacity: 0.5 }}>Kategori</span>;
      }
      return value.toUpperCase();
    }}
  >

    {categories?.map((cat) => (
      <MenuItem key={cat} value={cat}>
        {cat.toUpperCase()}
      </MenuItem>
    ))}
  </Select>
</FormControl>
  );
}

export default Dropdown;

