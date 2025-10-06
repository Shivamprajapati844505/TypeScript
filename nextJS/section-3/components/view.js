export default async function View() {
    await new Promise((resolve)=> setTimeout(resolve,3000))
  return (
    <div>200K views</div>
  )
}
