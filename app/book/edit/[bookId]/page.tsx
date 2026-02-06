import EditForm from './edit-form';

// type EditPageProps = {
//   params: Promise<{ bookId: string }>;
// };

// SERVER COMPONENT
// export default async function EditBookPage(props: EditPageProps) {
//   const { bookId } = await props.params;
//   return (
//     <div>
//       EditBookPage BOOK Id: {bookId}
//       <div>
//         <EditForm id={bookId} />
//       </div>
//     </div>
//   );
// }

export default async function EditBookPage(
  props: PageProps<'/book/edit/[bookId]'>
) {
  const { bookId } = await props.params;
  return <div>page: {bookId}</div>;
}
