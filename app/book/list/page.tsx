// READ QUERY PARAMS ex. ?page=2&limit=25
// type BookListPageProps = {
//   searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
// };

// export default async function BookListPage(props: BookListPageProps) {
//   const result = await props.searchParams;
//   console.log(result.test);
//   return <div>BookListPage</div>;
// }

// Promise<{ [key: string]: string | string[] | undefined }>;
type BookListPageProps = Promise<Record<string, string | string[] | undefined>>;

export default async function BookListPage(props: PageProps<'/book/list'>) {
  const result = await props.searchParams;
  console.log(result.test);
  return <div>BookListPage</div>;
}
