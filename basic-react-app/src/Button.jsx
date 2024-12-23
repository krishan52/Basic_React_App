function doSomething(event) {
    console.log("Hello World");
    console.log(event);
}

function handleHover() {
    console.log("hovering...");
}

export default function Button() {
    return (
        <div>
            <button onClick={doSomething}>Click me!</button>
            <p onMouseOver={handleHover}>this is hover para</p>
        </div>
    )
}