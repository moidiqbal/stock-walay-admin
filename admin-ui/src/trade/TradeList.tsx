import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TradeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Trades"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Price" source="price" />
        <TextField label="Scrip" source="scrip" />
        <TextField label="Shares" source="shares" />
        <TextField label="Types" source="types" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="UserId" source="userId" />
      </Datagrid>
    </List>
  );
};
