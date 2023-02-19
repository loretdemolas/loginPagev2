import { TextFieldCustom } from '../CustomFields/TextFieldCustom';
export default function Step1() {
  return (
    <div>
      <TextFieldCustom label="First name" name="firstName" />
      <br />
      <br />
      <TextFieldCustom label="Last name" name="lastName" />
    </div>
  );
}
