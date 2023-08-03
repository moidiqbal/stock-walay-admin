import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  BooleanInput,
} from "react-admin";

export const IserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Balance" source="balance" />
        <TextInput label="Bank" source="bank" />
        <TextInput label="Bio" source="bio" />
        <NumberInput label="Charges" source="charges" />
        <TextInput label="City" source="city" />
        <TextInput label="Country" source="country" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="iBan" source="iBan" />
        <TextInput label="Image" source="image" />
        <TextInput label="Full Name" source="name" />
        <TextInput label="Password" source="password" />
        <TextInput label="Phone" source="phone" />
        <BooleanInput label="Status" source="status" />
      </SimpleForm>
    </Create>
  );
};
