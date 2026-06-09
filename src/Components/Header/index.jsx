//Import das rotas 
import { Link } from "react-router-dom";

import './style.css'

function Header(){


return(
<>
<header>
<h1>Pagina Avaliação</h1>

<Link to="./" ><button>Home</button></Link>

<Link to="./aleatorio" ><button>Aleatorio</button></Link>
<Link to="./dance" ><button>Dance</button></Link>
</header>
</>
)
}

export default Header 