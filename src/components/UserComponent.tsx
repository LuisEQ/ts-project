import * as React from "react";
import UserInterface from '../userInterface'
export default class UserComponent extends React.Component<UserInterface, {}> {
    constructor(props: UserInterface) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Componente usuario</h1>
                Nombre: <b>{this.props.name}</b>
                <br />
                Edad: <b>{this.props.age} años.</b>
                <br />
                Domicilio:: <b>{this.props.address}.</b>
                <br />
                Fecha de nacimiento: <b>{this.props.dob.toDateString()}.</b>
            </div>
        );
    }
}