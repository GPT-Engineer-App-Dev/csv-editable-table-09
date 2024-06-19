import React, { useState } from 'react';
import { Box, Button, Input, Table, Thead, Tbody, Tr, Th, Td, IconButton } from '@chakra-ui/react';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import Papa from 'papaparse';
import { CSVLink } from 'react-csv';

const CSVEditor = () => {
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    Papa.parse(file, {
      complete: (result) => {
        setHeaders(result.data[0]);
        setData(result.data.slice(1));
      },
      header: false,
    });
  };

  const handleAddRow = () => {
    setData([...data, Array(headers.length).fill('')]);
  };

  const handleRemoveRow = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

  const handleCellChange = (rowIndex, columnIndex, value) => {
    const newData = data.map((row, i) => {
      if (i === rowIndex) {
        const newRow = [...row];
        newRow[columnIndex] = value;
        return newRow;
      }
      return row;
    });
    setData(newData);
  };

  return (
    <Box>
      <Input type="file" accept=".csv" onChange={handleFileUpload} mb={4} />
      <Table variant="simple">
        <Thead>
          <Tr>
            {headers.map((header, index) => (
              <Th key={index}>{header}</Th>
            ))}
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row, rowIndex) => (
            <Tr key={rowIndex}>
              {row.map((cell, columnIndex) => (
                <Td key={columnIndex}>
                  <Input
                    value={cell}
                    onChange={(e) => handleCellChange(rowIndex, columnIndex, e.target.value)}
                  />
                </Td>
              ))}
              <Td>
                <IconButton
                  icon={<DeleteIcon />}
                  onClick={() => handleRemoveRow(rowIndex)}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Button leftIcon={<AddIcon />} onClick={handleAddRow} mt={4}>
        Add Row
      </Button>
      <Button as={CSVLink} data={[headers, ...data]} filename={"edited.csv"} mt={4} ml={4}>
        Download CSV
      </Button>
    </Box>
  );
};

export default CSVEditor;