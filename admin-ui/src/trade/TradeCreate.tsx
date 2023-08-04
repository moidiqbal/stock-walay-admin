import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const TradeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Price" source="price" />
        <TextInput label="Scrip" source="scrip" />
        <NumberInput label="Shares" source="shares" />
        <TextInput label="Types" source="types" />
        <TextInput label="UserId" source="userId" />
      </SimpleForm>
    </Create>
  );
};
