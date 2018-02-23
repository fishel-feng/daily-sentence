import React, {Component} from 'react';
import './style.css';

export default class Sentence extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imageUrl: '',
      sentenceContent: '',
      sentencePoetryName: '',
      sentenceAuthorName: ''
    };
  }

  componentDidMount() {
    fetch('/image?idx=0').then(res => res.json()).then(res => {
      if (res.url) {
        this.setState({imageUrl: res.url});
      }
    });
  }

  render() {
    return (
      <div className="Sentence">
        <img src={this.state.imageUrl} alt=""/>
      </div>
    );
  }
}
