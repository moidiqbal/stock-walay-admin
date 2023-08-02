import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  BooleanInput,
} from "react-admin";

export const IserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
