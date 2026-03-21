import './Navbar.css'

function Navbar(){

    return(
        <header class="navbar">
            <div class="nav-left">
                <div class="logo">Javier</div>
            </div>

            <nav class="nav-center">
                <a href="#">Docs</a>
                <a href="#">Examples</a>
                <a href="#">Tutorials</a>
                <a href="#">AI Kit</a>
            </nav>

            <div class="nav-right">
                <button class="btn">Motion+</button>
            </div>
        </header>
    )
}

export default Navbar