import './Product.css';
import './Price.jsx';
import Price from './Price.jsx';
function Product({ title, idx}) {
    let styles = {
        backgroundColor: "beige",
    };
    let oldPrices = ["12,490","11,987","23,345","9,231"];
    let newPrices = ["11,233","9,342","21,567","7,237"];
    let description = [["8.000 DPI","5 Programmable Buttons"],["Intuative Surface","Designed for iPad Pro"],["Designed for iPad Pro","Intuative Surface"],["Wireless","Optical Orientation"]];
    return (
    <div className="Product" style={styles}>
        <h3>{title}</h3>
        <p>{description[idx][0]}</p>
        <p>{description[idx][1]}</p>
       <Price oldPrices={oldPrices[idx]} newPrices={newPrices[idx]}/>
    </div>
);
}

export default Product;
