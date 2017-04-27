import React, { Component } from 'react';
import { Button, FormControl, FormGroup, InputGroup } from 'react-bootstrap';

class AddItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            formValue:''
        }
    }
    changeFormText = (e)=>{
        const val = e.target.value;
        this.setState({
            formValue:val
        })
    }
    submitForm = (name,cat) => {
        if (name) {
            this.props.btnAction(name, cat);
            this.setState({
                formValue: ''
            });
        }
    }
    render() {
        const name = this.state.formValue;
        const cat = this.props.activeCat;
        return(
            <FormGroup>
                <InputGroup>
                    <FormControl
                        type="text"
                        value={this.state.formValue}
                        placeholder={this.props.placeholder}
                        onChange={this.changeFormText}
                    />
                    <InputGroup.Button>
                        <Button onClick={()=>this.submitForm(name,cat)}>{this.props.btnName}</Button>
                    </InputGroup.Button>
                </InputGroup>
            </FormGroup>
        )
    }
}

export default AddItem;