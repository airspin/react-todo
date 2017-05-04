import React, { Component } from 'react';
import './css/index.css';

class TaskEditor extends Component {
    constructor(props){
        super(props);
        const activeTask = this.props.activeTask;
        this.state = {
            task: {
                name:activeTask.name,
                descr:activeTask.descr,
                isCompleted:activeTask.isCompleted,
                id:activeTask.id,
                category:activeTask.category
            },
            isEdited: false,
            nameHasErr: false
        }
    }
    changeForm = (e, field)=>{
        const val = e.target.value;
        let task = Object.assign({},this.state.task);
        if (field === 'isCompleted'){
            task[field] = !this.state.task.isCompleted
        } else {
            task[field] = val
        }
        this.setState({
            task: task,
            isEdited: true
        })
    }
    onSaveEdit = () => {
        if (this.state.task.name) {
            this.props.onSaveEdit(this.state.task);
            this.props.onCacelEdit(null);
        } else {
            this.setState({
                nameHasErr: true
            })
        }
    }
    render() {
        return (
            <div>
                <div className="col-md-12 text-right">
                    <button className="btn btn-success marg-right-md" disabled={!this.state.isEdited} onClick={this.onSaveEdit}>Save Changes</button>
                    <button className="btn btn-danger" onClick={()=> this.props.onCacelEdit(null)}>Cancel</button>
                </div>
                <div className="col-md-12">
                    <div className={"form-group " + (this.state.nameHasErr ? "has-error" : "")}>
                        <label>Task name</label>
                        <input type="text" className="form-control task-name-editor"
                               placeholder="Name"
                               value={this.state.task.name}
                               onChange={(e)=>this.changeForm(e,'name')}
                        />
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox"
                                   checked={this.state.task.isCompleted}
                                   onChange={(e)=>this.changeForm(e,'isCompleted')}
                            /> Done
                        </label>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-group">
                        <label>Description</label>
                        <textarea className="form-control descript-text"
                                  rows="12"
                                  onChange={(e)=>this.changeForm(e,'descr')}
                                  value={this.state.task.descr}
                        />
                    </div>
                </div>
            </div>
        )
    }
}


export default TaskEditor;