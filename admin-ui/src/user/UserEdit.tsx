import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  BooleanInput,
  PasswordInput,
  SelectArrayInput,
} from "react-admin";

import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Balance" source="balance" />
        <TextInput label="Bank" source="bank" />
        <TextInput label="Bio" source="bio" />
        <BooleanInput label="Charges" source="charges" />
        <TextInput label="City" source="city" />
        <TextInput label="Country" source="country" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="IBAN" source="iban" />
        <TextInput label="Image" source="image" />
        <TextInput label="Full Name" source="name" />
        <PasswordInput label="Password" source="password" />
        <TextInput label="Phone" source="phone" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
