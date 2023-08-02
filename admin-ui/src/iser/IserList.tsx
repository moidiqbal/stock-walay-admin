import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const IserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Customers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Balance" source="balance" />
        <TextField label="Bank" source="bank" />
        <TextField label="Bio" source="bio" />
        <TextField label="Charges" source="charges" />
        <TextField label="City" source="city" />
        <TextField label="Country" source="country" />
        <DateField source="created_At" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="iBan" source="iBan" />
        <TextField label="ID" source="id" />
        <TextField label="Image" source="image" />
        <TextField label="Full Name" source="name" />
        <TextField label="Password" source="password" />
        <TextField label="Phone" source="phone" />
        <BooleanField label="Status" source="status" />
        <DateField source="updated_at" label="Updated At" />
      </Datagrid>
    </List>
  );
};
