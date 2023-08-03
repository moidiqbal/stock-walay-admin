import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  DateField,
} from "react-admin";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
