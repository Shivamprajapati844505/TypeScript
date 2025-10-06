export default async function FilePath({ params }) {
  const { filePath } = await params;
  console.log(await params);
  return(
    <div>
        <p>file : <i>{filePath?.join("/")}</i></p>
    </div>
  );
}


