type EditFormProps = {
  id: string;
};

export default async function EditForm(props: EditFormProps) {
  console.log('BOOK ID: ', props.id);
  return <div>EditForm</div>;
}
