export default function MsgBox({userName="Random",textColor="green"}) {
    let styles = {color: textColor};
    return (
        <h1 style={styles}>HELLO,{userName}</h1>
    );
}
