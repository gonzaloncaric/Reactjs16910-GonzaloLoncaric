import './NavBar.css'
import isotipo from '../images/isotipo.svg'
import { Dropdown } from 'semantic-ui-react'

const mujer = [
    { key: 1, text: 'Ver todos', value: 1 },
]
const hombre = [
    { key: 1, text: 'Ver todos', value: 1 },
]
const kid = [
    { key: 1, text: 'Ver todos', value: 1 },
]
const NavBar = () => (
    <div className="container navBar">
        <div className="logo">
            <img src={isotipo} alt="isotipo" />
            <h1>E-shop</h1>
        </div>
        <div className="menu">
            <Dropdown
            item
            simple
            text='Mujer'
            direction='center'
            options={mujer}
            />
            <Dropdown
            item
            simple
            text='Hombre'
            direction='center'
            options={hombre}
            />
            <Dropdown
            item
            simple
            text='Niño'
            direction='center'
            options={kid}
            />
        </div>
        <div className="">

        </div>
    </div>
)

export default NavBar
// export default function NavBar() {
//     return (
//         <div className="container navBar">
//             <div className="logo">
//                 <img src={isotipo} alt="isotipo" />
//                 <h1>E-shop</h1>
//             </div>
//             <div className="menu">
//                 <a href="">Mujer</a>
//                 <a href="">Hombre</a>
//                 <a href="">Niño</a>
//                 <DropdownMenu/>
//             </div>
//             <div className="">

//             </div>
//         </div>
//     );
// }


