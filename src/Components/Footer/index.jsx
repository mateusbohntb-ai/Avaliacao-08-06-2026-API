//Import das rotas 
import { Link } from "react-router-dom";

import './style.css'

function Footer(){


return(
<>

<p>Todos os direitos reservados & da equipe Mateus e Gustavos</p>


<Link to="./aleatorio" ><button>Aleatorio</button></Link>
<Link to="./dance" ><button>Dance</button></Link>
</>
)
}

export default Footer