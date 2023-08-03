import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const WatchCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Change" source="change" />
        <TextInput label="ContentType" source="contentType" />
        <NumberInput label="CPrice" source="cPrice" />
        <TextInput label="Scrip" source="scrip" />
        <TextInput label="SoldAt" source="soldAt" />
        <NumberInput label="SPrice" source="sPrice" />
      </SimpleForm>
    </Create>
  );
};
