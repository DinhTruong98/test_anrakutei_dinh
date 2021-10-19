import { Search } from "@mui/icons-material";
import { Button, Input, InputAdornment, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { getData } from "../../general/api";

export default function Index() {
  const [pageIndex, setPageIndex] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [searchString, setSearchString] = useState("");
  const [unies, setUnies] = useState([]);

  useEffect(() => {
    getData(`/getUniversity?page=${pageIndex}`, (data) => {
      setUnies(data.data);
      setTotalPage(data.totalPages);
    });
  }, [pageIndex]);

//   useEffect(() => {
//     getData(`/searchUniversityByName?string=${searchString}`, (data) => {
//       setUnies(data.data);
//       setTotalPage(data.totalPages);
//     });
//   }, [searchString]);

  function onChange(e) {
    setSearchString(e.target.value);
  }
  return (
    <Box sx={{ bgcolor: "cardground.main", p: 1 }}>
      <Box sx={{ width: "300px" }}>
        <TextField
          label="Search"
          type="text"
          variant="filled"
          fullWidth
          value={searchString}
          onChange={onChange}
          placeholder="University name..."
        />
      </Box>
      {unies.map((u) => (
        <p>{u.name}</p>
      ))}
      <Button
        onClick={() => {
          if (pageIndex - 1 >= 0) setPageIndex(pageIndex - 1);
        }}
      >
        Back
      </Button>
      <span>
        {pageIndex} / {totalPage}
      </span>
      <Button onClick={() => setPageIndex(pageIndex + 1)}>Next</Button>
    </Box>
  );
}
