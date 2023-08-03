import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Balance" source="balance" />
        <TextField label="Bank" source="bank" />
        <TextField label="Bio" source="bio" />
        <BooleanField label="Charges" source="charges" />
        <TextField label="City" source="city" />
        <TextField label="Country" source="country" />
        <DateField source="created_at" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="IBAN" source="iban" />
        <TextField label="ID" source="id" />
        <TextField label="Image" source="image" />
        <TextField label="Full Name" source="name" />
        <TextField label="Phone" source="phone" />
        <TextField label="Roles" source="roles" />
        <DateField source="updated_at" label="Updated At" />
        <TextField label="Username" source="username" />
      </Datagrid>
    </List>
  );
};
