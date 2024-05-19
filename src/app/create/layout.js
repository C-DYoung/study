export default function Layout(props) {
    // props 가 필수적으로 기입되어져야 함.
    return(
        <from>
            <h2>CREATE</h2>
            {props.children}
        </from>
    )
}