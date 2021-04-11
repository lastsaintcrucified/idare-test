import React from "react";
import { connect } from "react-redux";
import "./table.styles.scss";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const TableData = ({ project, data }) => {
  const { name, description, client, contractor } = project;
  const { max_X, min_X, max_Y, min_Y, max_Z, min_Z } = data;

  return (
    <div>
      <Table>
        <Thead>
          <Tr>
            <Th>Project Name</Th>
            <Th>Project Description</Th>
            <Th>Client</Th>
            <Th>contractor</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>{name}</Td>
            <Td>{description}</Td>
            <Td>{client}</Td>
            <Td>{contractor}</Td>
          </Tr>
        </Tbody>
      </Table>
      <Table>
        <Thead>
          <Tr>
            <th>max_X</th>
            <Th>min_X</Th>
            <Th>max_Y</Th>
            <Th>min_Y</Th>
            <Th>max_Z</Th>
            <Th>min_Z</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>{max_X}</Td>
            <Td>{min_X}</Td>
            <Td>{max_Y}</Td>
            <Td>{min_Y}</Td>
            <Td>{max_Z}</Td>
            <Td>{min_Z}</Td>
          </Tr>
        </Tbody>
      </Table>
    </div>
  );
};

const mapStateToProps = ({ project, data }) => ({
  project,
  data,
});

export default connect(mapStateToProps)(TableData);
