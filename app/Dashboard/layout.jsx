const Layout = ({children}) => {
    return(
        <div>
            <div>
               <Sidebar/> 
            </div>
            <div>
                <Navbar/> 
                {children}
            </div>

        </div>
    )
}

export default Layout