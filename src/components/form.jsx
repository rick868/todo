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

        <div className="todo-list">
          <div className="todo-item">
            <div className="todo-item-title">
              <h3>Title</h3>
              <h3>Description</h3>
            </div>
          </div>
        </div>

      </div>
    )
    
}

export default Form;