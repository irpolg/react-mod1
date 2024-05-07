//Типізація пропсів
import PropTypes from 'prop-types';
export const Product = ({
  name,
  imgUrl = "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
  price,
}) => (
  <div>
		<img src={imgUrl} alt={name} width="480" />
		<h2>{name}</h2>
    <p>Price: {price} credits</p>
  </div>
);

// Опис типів пропсів компонента 
Product.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  price: PropTypes.number.isRequired,
};
// export default Product;


//значення пропсів за замовченням
// export const Product = ({
//   name,
//   imgUrl = "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
//   price,
// }) => (
//   <div>
// 		<h2>{name}</h2>
//     <img src={imgUrl} alt={name} width="480" />
//     <p>Price: {price} credits</p>
//   </div>
// );

//різні імена, фото, ціна продуктів
//використовувати простий патерн 
//під час роботи з props.
//Оскільки props – це об'єкт, 
//ми можемо деструктуризувати його у підписі функції.
// export const Product = ({ name, imgUrl, price }) => {
//   return (
//     <div>
//       <h2>{name}</h2>
// 			<img src={imgUrl} alt={name} width="480" />
// 			<p>Price: {price} credits</p>
//     </div>
//   );
// };


//різні імена, фото, ціна продуктів
// export const Product = props => {
//   return (
//     <div>
//       <h2>{props.name}</h2>
// 			<img src={props.imgUrl} alt={props.name} width="480" />
// 			<p>Price: {props.price} credits</p>
//     </div>
//   );
// };

//різні імена продуктів і однакові фото продуктів
// export const Product = props => {
//   return (
//     <div>
//       <h2>{props.name}</h2>
// 			<img src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640" alt="Tacos With Lime" width="480" />
// 			<p>Price: 999 credits</p>
//     </div>
//   );
// };

//однакові імена і фото продуктів
// export const Product = () => {
//   return (
//     <div>
//       <h2>Tacos</h2>
// 			<img src="<https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640>" alt="Tacos With Lime" width="640" />
// 			<p>Price: 999 credits</p>
//     </div>
//   );
// };