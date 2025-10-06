export const metadata = {
  title: {
    template: "%s | Dashboard",
    default: "Dashboard",
  },
};

export default function layout({children}) {
  return (
    <div>
        <header style={{backgroundColor: 'lightblue', color: 'white', padding: '10px'}}>Header</header>
        {children}
         <footer style={{backgroundColor: 'green', color: 'white', padding: '10px'}}>Header</footer>

    </div>
  )
}
