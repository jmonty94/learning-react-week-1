
const HelloWorld = (props) => {
    /**
     * JSX Expressions
     * If we want to use/refer to a variable or run some JS code,
     * once we are returning HTML we need to use JSX expressions
     */
    return <h1 style={{ color: props.className}}> Hello {props.id}</h1>;
}

export default HelloWorld;