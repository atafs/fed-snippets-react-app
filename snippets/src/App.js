import React, { Component } from 'react';
import Tooltip from 'rc-tooltip';
import Modal from 'react-modal';

import './App.css';

function preventDefault(e) {
  e.preventDefault();
}

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-45%',
    transform             : 'translate(-50%, -50%)'
  },
    overlay: {
      backgroundColor     : 'rgba(255, 0, 255, 0.75)'
    }
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      visible: false
    };

    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  onVisibleChange = (visible) => {
    this.setState({
      visible,
    });
  }

  render() {
    if (this.state.destroy) {
      return null;
    }
    return (
    <div>
      <div style={{ marginTop: 60 }}>
        <Tooltip
          visible={this.state.visible}
          onVisibleChange={this.onVisibleChange}
          trigger="click"
          destroyTooltipOnHide
          overlay={
            <div className="modal">
              <Modal
                isOpen={true}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
      
                <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
                <button onClick={this.closeModal}>close</button>
                <div>I am a modal</div>
                <form>
                  <input />
                  <button>tab navigation</button>
                  <button>stays</button>
                  <button>inside</button>
                  <button>the modal</button>
                </form>
              </Modal>
            </div>
          }
        >
          <a href="#" onClick={preventDefault} style={{ color: '#fff', marginLeft: 10 }}>trigger</a>
        </Tooltip>
      </div>
    </div>);
  }
}

export default App;
