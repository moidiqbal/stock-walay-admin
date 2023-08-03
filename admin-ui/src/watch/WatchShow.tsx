import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const WatchShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Change" source="change" />
        <TextField label="ContentType" source="contentType" />
        <TextField label="CPrice" source="cPrice" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Scrip" source="scrip" />
        <TextField label="SoldAt" source="soldAt" />
        <TextField label="SPrice" source="sPrice" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="UserId" source="userId" />
      </SimpleShowLayout>
    </Show>
  );
};
