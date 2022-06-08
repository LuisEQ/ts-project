import * as React from "react";
let Logo = "https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png";
export default class FirstComponent extends React.Component<{}> {
    render() {
        return (
            <div>
                <h3>Componente usando TypeScript</h3>
                <div>
                    <img height="250" src={Logo} />
                </div>
                <p>Este componente muestra el logo de react.</p>
            </div>
        );
    }
}