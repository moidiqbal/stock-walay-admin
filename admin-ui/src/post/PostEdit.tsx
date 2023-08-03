import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PostEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
