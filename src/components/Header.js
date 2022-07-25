const Header = ({name, number}) => {
 
  if (number === 1) {

    return (
      <div>
      
        <h1>{name}</h1>
      </div>
    )
  }

  else if(number === 2) {
    return (
      <div>
      
        <h2>{name}</h2>
      </div>
    )
  }

  }


Header.defaultProps = {
  name: "",
  number: 1
}
export default Header;