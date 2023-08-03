import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const TradeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Price" source="price" />
        <TextInput label="Scrip" source="scrip" />
        <NumberInput label="Shares" source="shares" />
        <TextInput label="Types" source="types" />
        <TextInput label="UserId" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
