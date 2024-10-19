import reactIcon from "../assets/react-icon-small.png"

export default function Navbar() {
    return (
        <nav>
            <img className="nav-logo" src={reactIcon} alt="react icon" />
            <h1 className="nav-title"> ReactFacts </h1>
        </nav>
    )
}