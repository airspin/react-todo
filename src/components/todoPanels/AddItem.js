import React, { Component } from 'react';
import { Button, FormControl, FormGroup, InputGroup } from 'react-bootstrap';

class CategoryPanel extends Component {
    render() {
        return(
            <FormGroup>
                <InputGroup>
                    <FormControl
                        type="text"
                        placeholder={this.props.placeholder}
                    />
                    <InputGroup.Button>
                        <Button>{this.props.btnName}</Button>
                    </InputGroup.Button>
                </InputGroup>
            </FormGroup>
        )
    }
}

export default CategoryPanel;