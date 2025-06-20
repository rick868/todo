import { MdDelete } from "react-icons/md";
function Form() {
    return (
        <div className="todo-container">
            <div className="todo-input">
                <div className='todo-input-item'>
                    <label>Task</label>
                    <input type="text" placeholder='New Task' />
                </div>
                <div className='todo-input-item'>
                    <label>Description</label>
                    <input type="text" placeholder='Description....' />
                </div>
                <div className='todo-input-item'>
                    <button type='button' className='submit-btn'>Add</button>
                </div>
            </div>

            < div className="todo-list">
                <div className="todo-list-item">
                    <h3>Task</h3>
                    <p>Description</p>
                </div>
                <div className="todo-action-area">
                    <button className="delete-btn">Delete<MdDelete /></button>
                </div>
            </div>
        </div>
    )
    
}

export default Form;