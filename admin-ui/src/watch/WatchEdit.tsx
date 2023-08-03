import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const WatchEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Change" source="change" />
        <TextInput label="ContentType" source="contentType" />
        <NumberInput label="CPrice" source="cPrice" />
        <TextInput label="Scrip" source="scrip" />
        <TextInput label="SoldAt" source="soldAt" />
        <NumberInput label="SPrice" source="sPrice" />
        <TextInput label="UserId" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
