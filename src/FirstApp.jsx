import PropTypes  from "prop-types";

export const FirstApp = ( { title, subTitle } ) => {

  return (
    <>
      <h1>{ title }</h1>
      {/* <h1>{newMessage}</h1> */}
      <p>{ subTitle + 1 }</p>
    </>
  );
};


FirstApp.propTypes = {
  title: PropTypes.string.isRequired, 
  subTitle: PropTypes.number.isRequired, 
}