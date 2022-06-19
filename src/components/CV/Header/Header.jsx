

const Header = ({name, surname}) => {

    return (
        <header className = 'header-cv'>
            <h1>{name} {surname}</h1>
        </header>
    );
};

export default Header;